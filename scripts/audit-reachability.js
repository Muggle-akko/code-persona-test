#!/usr/bin/env node
"use strict";

var fs = require("fs");
var path = require("path");

var root = path.resolve(__dirname, "..");
var appPath = path.join(root, "app.js");
var source = fs.readFileSync(appPath, "utf8");
var dataStart = source.indexOf("  var dimensions =");
var dataEnd = source.indexOf("  var state =");

if (dataStart < 0 || dataEnd < 0 || dataEnd <= dataStart) {
  fail("Could not locate data definitions in app.js.");
}

var dataBlock = source.slice(dataStart, dataEnd);
var data = new Function(
  [
    'function levelsToVector(text) {',
    '  return text.split(",").map(function (level) {',
    '    if (level === "L") return 0;',
    '    if (level === "M") return 1;',
    '    return 2;',
    '  });',
    '}',
    'function q(dimension, text, options) {',
    '  var normalizedOptions = options.map(function (option) {',
    '    return { key: option[0], text: option[1], value: option[2] };',
    '  });',
    '  if (!normalizedOptions.some(function (option) { return option.key === "d"; })) {',
    '    normalizedOptions.push({ key: "d", text: "不好判断 / 没遇到过这种场景。", value: 2, uncertain: true });',
    '  }',
    '  return { dimension: dimension, text: text, options: normalizedOptions };',
    '}',
    'function p(code, status, name, summary, strength, caution, target, face) {',
    '  return { code: code, status: status, name: name, summary: summary, strength: strength, caution: caution, target: levelsToVector(target), face: face };',
    '}',
    dataBlock,
    'return { dimensions: dimensions, questions: questions, personas: personas, hiddenPersona: hiddenPersona };'
  ].join("\n")
)();

var dimensions = data.dimensions;
var questions = data.questions;
var personas = data.personas;
var hiddenPersona = data.hiddenPersona;
var issues = [];

auditShape();

var byDimension = Array.from({ length: dimensions.length }, function () {
  return [];
});

questions.forEach(function (question, index) {
  if (!byDimension[question.dimension]) {
    issues.push("Question " + (index + 1) + " points to invalid dimension " + question.dimension + ".");
    return;
  }
  byDimension[question.dimension].push({ index: index, question: question });
});

var dimensionReach = byDimension.map(auditDimensionReach);
var personaChecks = personas.map(auditPersona);
var hiddenCheck = auditHidden();

printReport();

if (issues.length) {
  console.error("\nIssues:");
  issues.forEach(function (issue) {
    console.error("- " + issue);
  });
  process.exit(1);
}

function auditShape() {
  if (dimensions.length !== 15) {
    issues.push("Expected 15 dimensions, found " + dimensions.length + ".");
  }

  if (questions.length !== dimensions.length * 2) {
    issues.push(
      "Expected " + dimensions.length * 2 + " questions, found " + questions.length + "."
    );
  }

  questions.forEach(function (question, index) {
    var scored = question.options.filter(function (option) {
      return option.key !== "d";
    });
    var values = scored
      .map(function (option) {
        return option.value;
      })
      .sort()
      .join(",");
    var uncertain = question.options.find(function (option) {
      return option.key === "d";
    });

    if (values !== "1,2,3") {
      issues.push(
        "Question " + (index + 1) + " should have one each of values 1, 2, 3; found " + values + "."
      );
    }

    if (!uncertain || uncertain.value !== 2) {
      issues.push("Question " + (index + 1) + " should have neutral d option with value 2.");
    }
  });
}

function auditDimensionReach(items, dimension) {
  var combos = new Map();
  var label = dimensions[dimension] ? dimensions[dimension][0] : "unknown";

  if (items.length !== 2) {
    issues.push("Dimension " + (dimension + 1) + " " + label + " should have 2 questions; found " + items.length + ".");
    return { dimension: dimension, name: label, levels: "", combos: combos };
  }

  items[0].question.options.forEach(function (left) {
    items[1].question.options.forEach(function (right) {
      var sum = left.value + right.value;
      var level = scoreToLevel(sum);
      if (!combos.has(level)) {
        combos.set(level, {
          keys: [left.key, right.key],
          values: [left.value, right.value]
        });
      }
    });
  });

  ["L", "M", "H"].forEach(function (level) {
    if (!combos.has(level)) {
      issues.push("Dimension " + (dimension + 1) + " " + label + " cannot reach " + level + ".");
    }
  });

  return {
    dimension: dimension,
    name: label,
    levels: ["L", "M", "H"].filter(function (level) {
      return combos.has(level);
    }),
    combos: combos
  };
}

function auditPersona(persona) {
  var answers = constructAnswersForTarget(persona.target);
  var result = scoreAnswers(answers);
  var ok = result.persona.code === persona.code;

  if (!ok) {
    issues.push(
      persona.code +
        " " +
        persona.name +
        " is not exactly reachable; got " +
        result.persona.code +
        " instead."
    );
  }

  return {
    code: persona.code,
    name: persona.name,
    ok: ok,
    match: result.match,
    sequence: answers
      .map(function (answer) {
        return answer.key;
      })
      .join("")
  };
}

function auditHidden() {
  var answers = questions.map(function (question) {
    var option = question.options.find(function (item) {
      return item.key === "d";
    });
    return {
      dimension: question.dimension,
      value: option.value,
      key: option.key
    };
  });
  var result = scoreAnswers(answers);
  var ok = result.persona.code === hiddenPersona.code;

  if (!ok) {
    issues.push("Hidden " + hiddenPersona.code + " should be reachable with all d answers; got " + result.persona.code + ".");
  }

  return {
    code: hiddenPersona.code,
    name: hiddenPersona.name,
    ok: ok,
    sequence: answers
      .map(function (answer) {
        return answer.key;
      })
      .join("")
  };
}

function constructAnswersForTarget(target) {
  var answers = [];

  target.forEach(function (value, dimension) {
    var level = value === 0 ? "L" : value === 1 ? "M" : "H";
    var combo = dimensionReach[dimension].combos.get(level);
    var items = byDimension[dimension];

    if (!combo || !items || items.length !== 2) return;

    answers[items[0].index] = {
      dimension: dimension,
      value: combo.values[0],
      key: combo.keys[0]
    };
    answers[items[1].index] = {
      dimension: dimension,
      value: combo.values[1],
      key: combo.keys[1]
    };
  });

  return answers;
}

function scoreAnswers(answers) {
  var raw = Array(dimensions.length).fill(0);
  var answerStats = answers.reduce(
    function (stats, answer) {
      stats.total += 1;
      stats.counts[answer.key] += 1;
      if (answer.key === "d") stats.dCount += 1;
      return stats;
    },
    { total: 0, dCount: 0, counts: { a: 0, b: 0, c: 0, d: 0 } }
  );

  answers.forEach(function (answer) {
    raw[answer.dimension] += answer.value;
  });

  var levels = raw.map(scoreToLevel);
  var vector = levels.map(function (level) {
    if (level === "L") return 0;
    if (level === "M") return 1;
    return 2;
  });
  var nearest = personas
    .map(function (persona) {
      var distance = manhattan(vector, persona.target);
      return {
        persona: persona,
        distance: distance,
        match: Math.round((1 - distance / 30) * 100)
      };
    })
    .sort(function (a, b) {
      return a.distance - b.distance;
    });
  var best = nearest[0];
  var closeMatches = nearest.filter(function (item) {
    return item.distance <= best.distance + 1;
  }).length;
  var useHidden = false;

  if (answerStats.dCount >= 14) {
    useHidden = true;
  } else if (best.match < 60) {
    useHidden = true;
  } else if (closeMatches >= 4 && best.match < 78) {
    useHidden = true;
  } else if (answerStats.dCount >= 9 && best.match < 72) {
    useHidden = true;
  }

  if (useHidden) {
    return {
      persona: hiddenPersona,
      match: Math.max(42, Math.round((1 - manhattan(vector, hiddenPersona.target) / 30) * 100))
    };
  }

  return {
    persona: best.persona,
    match: best.match
  };
}

function scoreToLevel(score) {
  if (score <= 3) return "L";
  if (score === 4) return "M";
  return "H";
}

function manhattan(a, b) {
  return a.reduce(function (sum, value, index) {
    return sum + Math.abs(value - b[index]);
  }, 0);
}

function printReport() {
  console.log("Reachability audit");
  console.log("==================");
  console.log("Dimensions: " + dimensions.length);
  console.log("Questions:  " + questions.length);
  console.log("Personas:   " + personas.length + " + hidden " + hiddenPersona.code);
  console.log("");
  console.log("Dimension level coverage:");
  dimensionReach.forEach(function (item) {
    console.log(
      "- " +
        String(item.dimension + 1).padStart(2, "0") +
        " " +
        item.name +
        ": " +
        item.levels.join("/")
    );
  });
  console.log("");
  console.log("Persona exact-target checks:");
  personaChecks.forEach(function (item) {
    console.log(
      "- " +
        statusMark(item.ok) +
        " " +
        item.code +
        " " +
        item.name +
        " / match " +
        item.match +
        "% / answers " +
        item.sequence
    );
  });
  console.log(
    "- " +
      statusMark(hiddenCheck.ok) +
      " " +
      hiddenCheck.code +
      " " +
      hiddenCheck.name +
      " / answers " +
      hiddenCheck.sequence
  );
  console.log("");
  console.log(issues.length ? "Result: FAIL" : "Result: PASS");
}

function statusMark(ok) {
  return ok ? "OK" : "NO";
}

function fail(message) {
  console.error(message);
  process.exit(1);
}
