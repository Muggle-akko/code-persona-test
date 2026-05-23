(function () {
  "use strict";

  var dimensions = [
    ["稳定交付感", "代码落地时是否让人放心"],
    ["错误恢复力", "出错后能否快速复位和补洞"],
    ["过载阈值", "面对请求洪峰时的承载方式"],
    ["规则敏感度", "对协议、约束和边界条件的敏锐度"],
    ["权限边界感", "是否会清楚区分谁能访问什么"],
    ["冲突显性度", "遇到分歧时是绕开、协调还是正面处理"],
    ["需求解析力", "能否把含糊输入解析成可执行结构"],
    ["抽象理解力", "是否倾向看到系统背后的模型"],
    ["不确定耐受度", "能否在信息不完整时继续前进"],
    ["创建驱动力", "是否喜欢从无到有搭东西"],
    ["重构倾向", "是否会主动迁移、整理和改路径"],
    ["执行节奏", "推进任务时的速度和稳定脉冲"],
    ["外部依赖度", "是否经常需要其他系统或人响应"],
    ["沟通转译力", "能否在不同角色和接口之间翻译"],
    ["表达真实度", "是否倾向直接呈现自己的真实状态"]
  ];

  var questions = [
    q(0, "一个需求快到截止时间才变清楚，你会怎么处理？", [
      ["a", "先承认范围不稳，交付能确认的最小部分。", 2],
      ["b", "把边界、验收和风险补齐，再稳稳推进。", 3],
      ["c", "等别人再说明白一点，不然容易白做。", 1]
    ]),
    q(0, "下班前发现还有一个小问题没收口，你更可能：", [
      ["a", "留一条清楚记录，明天继续。", 2],
      ["b", "补完验证再走，避免把不确定留给别人。", 3],
      ["c", "先关电脑，明天看到再说。", 1]
    ]),
    q(1, "线上突然报错，你的第一反应是：", [
      ["a", "看日志、回滚点和影响范围。", 3],
      ["b", "先问有没有人也遇到。", 2],
      ["c", "脑内空白几秒，想离开事故现场。", 1]
    ]),
    q(1, "你修掉一个 bug 后，通常会：", [
      ["a", "只要现象消失就先合。", 1],
      ["b", "补一个最关键的验证用例。", 2],
      ["c", "顺手找同类风险，给未来留护栏。", 3]
    ]),
    q(2, "同时来了很多请求时，你会：", [
      ["a", "先按优先级排队，明确哪些暂时不接。", 3],
      ["b", "能回就回，尽量别让人等太久。", 2],
      ["c", "很快被打断到失去主线。", 1]
    ]),
    q(2, "一天里上下文切换太多，你通常：", [
      ["a", "越切越乱，最后想把消息全关掉。", 1],
      ["b", "需要间隔恢复，但还能维持进度。", 2],
      ["c", "会主动限流，把请求分批处理。", 3]
    ]),
    q(3, "有人说先绕过流程上线，之后再补，你会：", [
      ["a", "看情况，先解决眼前问题。", 1],
      ["b", "要求写清楚例外条件和回补时间。", 2],
      ["c", "不接受无记录的绕行。", 3]
    ]),
    q(3, "面对不规范但能跑的代码，你最难忍的是：", [
      ["a", "它没有说明自己为什么存在。", 2],
      ["b", "它破坏了约定，还让后来的人背锅。", 3],
      ["c", "只要能跑，我可以先不看。", 1]
    ]),
    q(4, "别人临时借你的账号或 token，你会：", [
      ["a", "拒绝，然后给他正确的申请路径。", 3],
      ["b", "确认用途和时间，必要时短期授权。", 2],
      ["c", "如果很急就先给，别耽误事。", 1]
    ]),
    q(4, "合作中别人不断越过你的职责边界，你会：", [
      ["a", "直接说清楚哪些归我，哪些不归我。", 3],
      ["b", "先帮一次，再找机会对齐。", 2],
      ["c", "不太好意思拒绝，最后自己扛。", 1]
    ]),
    q(5, "评审时你和别人意见相反，你通常：", [
      ["a", "先确认共同目标，再把分歧拆小。", 2],
      ["b", "明确指出问题，不让模糊方案通过。", 3],
      ["c", "如果不是大问题，就先算了。", 1]
    ]),
    q(5, "遇到跨团队冲突，你更像：", [
      ["a", "把各方话翻译到同一张图上。", 2],
      ["b", "站出来定边界和优先级。", 3],
      ["c", "希望冲突自己慢慢冷却。", 1]
    ]),
    q(6, "产品给了一个很抽象的需求，你会先：", [
      ["a", "拆成输入、输出、异常和验收标准。", 3],
      ["b", "问几个问题，大概知道方向就开始。", 2],
      ["c", "等对方给更具体的原型。", 1]
    ]),
    q(6, "你读到一句含糊的描述时，脑内会：", [
      ["a", "自动列出几种解释和对应风险。", 3],
      ["b", "先按最常见理解处理。", 2],
      ["c", "觉得这种话很难接住。", 1]
    ]),
    q(7, "看到复杂系统时，你更感兴趣的是：", [
      ["a", "它背后的模型、分层和信息流。", 3],
      ["b", "它当前有没有解决实际问题。", 2],
      ["c", "它别太复杂就好。", 1]
    ]),
    q(7, "别人讲一个新概念，你通常：", [
      ["a", "很快把它挂到已有知识结构上。", 3],
      ["b", "需要一个例子才真正明白。", 2],
      ["c", "先记住用法，不急着理解底层。", 1]
    ]),
    q(8, "信息不全但需要先推进，你会：", [
      ["a", "标出未知项，边走边验证。", 3],
      ["b", "先做最稳的一步。", 2],
      ["c", "不完整就很难开始。", 1]
    ]),
    q(8, "没人知道正确答案时，你的状态更像：", [
      ["a", "可以探索，未知本身也有线索。", 3],
      ["b", "有点不安，但能继续。", 2],
      ["c", "会强烈想要一个明确指令。", 1]
    ]),
    q(9, "空白项目摆在你面前，你会：", [
      ["a", "先搭一个最小骨架，让东西跑起来。", 3],
      ["b", "等方向稳定后再动手。", 1],
      ["c", "写一些结构草图，再开始实现。", 2]
    ]),
    q(9, "你对从 0 到 1 的感觉是：", [
      ["a", "有压力，但也会有点兴奋。", 2],
      ["b", "很兴奋，空白就是邀请。", 3],
      ["c", "更喜欢在已有系统里优化。", 1]
    ]),
    q(10, "看到一段能跑但很别扭的代码，你会：", [
      ["a", "先记下问题，等有机会再动。", 2],
      ["b", "很想整理掉，不然脑内有噪音。", 3],
      ["c", "不影响需求就不碰。", 1]
    ]),
    q(10, "一次架构迁移里，你比较愿意负责：", [
      ["a", "制定迁移路径和兼容策略。", 3],
      ["b", "按计划完成自己那块。", 2],
      ["c", "尽量避开大迁移。", 1]
    ]),
    q(11, "你的执行节奏通常是：", [
      ["a", "先慢慢想，真正动手会比较晚。", 1],
      ["b", "分段推进，保持可见进展。", 2],
      ["c", "快速迭代，边做边修。", 3]
    ]),
    q(11, "面对一批小任务，你会：", [
      ["a", "一口气清掉，减少心智占用。", 3],
      ["b", "按顺序处理，速度适中。", 2],
      ["c", "容易拖到它们开始发光。", 1]
    ]),
    q(12, "你的工作是否经常卡在别人响应上？", [
      ["a", "很少，我会尽量让自己闭环。", 1],
      ["b", "有一些，需要正常协作。", 2],
      ["c", "经常，我像接在很多系统中间。", 3]
    ]),
    q(12, "当外部接口不稳定时，你会：", [
      ["a", "很受影响，只能等它恢复。", 3],
      ["b", "做降级或 mock，尽量先推进。", 2],
      ["c", "通常我不太依赖外部接口。", 1]
    ]),
    q(13, "技术、产品、运营各说各话时，你会：", [
      ["a", "把它们翻译成同一种问题描述。", 3],
      ["b", "只处理和自己相关的部分。", 1],
      ["c", "帮忙对齐几个关键概念。", 2]
    ]),
    q(13, "别人误解你的方案时，你通常：", [
      ["a", "补图、补例子，直到频道对上。", 3],
      ["b", "解释一次，能不能懂看缘分。", 2],
      ["c", "会觉得算了，懒得再讲。", 1]
    ]),
    q(14, "你在团队里表达真实想法的频率是：", [
      ["a", "比较克制，除非很必要。", 1],
      ["b", "看场合，重要的会说。", 2],
      ["c", "我会直接表达，不喜欢演。", 3]
    ]),
    q(14, "当你状态不好时，你更可能：", [
      ["a", "隐藏起来，表现得像没事。", 1],
      ["b", "告诉相关的人我需要一点缓冲。", 2],
      ["c", "坦白说现在不能假装正常。", 3]
    ])
  ];

  var personas = [
    p("200", "OK", "稳定交付型", "你像一个可靠的成功响应。信息到你这里会被处理、落地、返回清楚结果。", "稳定、清楚、守约。", "小心把可靠变成过度负责。", "H,H,H,M,M,M,H,M,M,M,L,H,L,M,M"),
    p("201", "Created", "创造建构型", "你喜欢让空白长出结构，最舒服的瞬间是第一个版本真的跑起来。", "启动项目、搭骨架、把想法变成可用原型。", "容易在兴奋里低估维护成本。", "M,M,M,M,M,M,M,H,M,H,M,H,M,M,H"),
    p("204", "No Content", "极简沉默型", "你偏爱无废话的完成。能用一行说明白，就不会写三屏解释。", "克制、利落、低噪音。", "有时别人需要的不只是结果，还有上下文。", "H,H,H,H,H,L,M,M,L,L,L,H,L,L,L"),
    p("301", "Moved Permanently", "长期迁移型", "你不迷恋旧路径。只要新结构更干净，就愿意规划迁移并承担过渡期。", "重构、迁移、长期主义。", "小心把每个问题都看成架构问题。", "M,H,M,H,M,M,H,H,H,M,H,M,M,H,M"),
    p("304", "Not Modified", "保守缓存型", "你相信稳定资产的价值。能复用就复用，能不改就先别动。", "节省成本、保护稳定、减少无意义变化。", "偶尔会把必要更新也缓存太久。", "H,H,H,H,M,L,M,M,L,L,L,M,L,L,L"),
    p("400", "Bad Request", "高敏纠错型", "混乱输入一出现，你就能闻到歧义。你不是挑剔，你是在替系统挡脏数据。", "发现问题、澄清需求、守住输入质量。", "容易被不清楚的人和事消耗。", "M,M,M,H,M,H,H,M,L,L,M,M,M,M,M"),
    p("401", "Unauthorized", "权限边界型", "你对授权、身份和边界非常敏感。安全感来自清楚的许可关系。", "守边界、重授权、能保护系统和自己。", "有时会显得不够松弛。", "H,H,M,H,H,M,M,M,L,L,L,M,L,M,L"),
    p("402", "Payment Required", "成本核算型", "你会自然地问：这件事要花掉什么？时间、精力、预算、机会成本都算数。", "成本意识、资源判断、投入产出比。", "别让计算成本盖过真正值得投入的东西。", "M,H,H,H,H,M,H,M,M,M,M,M,M,M,M"),
    p("403", "Forbidden", "原则拒绝型", "你不是不能做，是这件事不应该这样做。你的拒绝里有清楚的底线。", "原则感、风险意识、关键时刻敢说不。", "如果总是先拒绝，别人可能看不见你的善意。", "M,H,H,H,H,H,M,M,L,L,M,M,L,M,H"),
    p("404", "Not Found", "探索迷路型", "你经常在未知目录里找路。迷路不是失败，是你开始建立地图的方式。", "探索、联想、在复杂处找线索。", "需要定期停下来确认自己到底在找什么。", "L,M,M,L,L,L,M,H,H,M,M,L,H,L,H"),
    p("408", "Request Timeout", "慢热延迟型", "你不是没有响应，只是需要更长的处理窗口。催促会让你更容易断线。", "深思、谨慎、对复杂问题有耐心。", "要学会向外部发出还活着的心跳包。", "M,M,L,M,M,L,M,H,H,L,M,L,H,L,M"),
    p("409", "Conflict", "冲突协调型", "你能看见接口之间的矛盾，也愿意把冲突摊开处理。", "协调分歧、看见张力、推动对齐。", "别把所有矛盾都背到自己身上。", "M,H,M,H,M,H,H,H,M,M,M,M,H,H,M"),
    p("422", "Unprocessable Content", "深度解析型", "你不是没看懂，而是看懂后发现它逻辑上不能成立。", "深度理解、发现结构性问题、追问合理性。", "有时需要先给一个可运行的中间版本。", "M,M,M,H,M,M,H,H,L,L,H,M,M,M,M"),
    p("429", "Too Many Requests", "过载限流型", "你能处理很多事，但不是无限并发。你的系统需要明确限流策略。", "高吞吐、会排队、能识别过载。", "不要等到快崩了才告诉别人限流规则。", "H,M,L,M,M,M,H,M,L,M,M,H,H,M,M"),
    p("500", "Internal Server Error", "内核高压型", "你内部算力很强，也很容易在高压下抛出不可见异常。", "能量强、理解深、推进猛。", "请给自己日志、降级和休息机制。", "L,M,L,L,L,H,M,H,L,H,M,H,M,L,H"),
    p("502", "Bad Gateway", "系统中介型", "你像夹在多个系统之间的网关。别人看到错误，你看到的是链路和上下游。", "转译、协调、连接复杂接口。", "不要把所有上游和下游的问题都算成自己的失败。", "M,M,L,M,M,M,H,H,M,L,L,M,H,H,M"),
    p("503", "Service Unavailable", "能量维护型", "你不是永久不可用，只是需要维护窗口。恢复之后，你依然能稳定服务。", "知道自己需要停机、会保护核心资源。", "要提前公告维护时间，不要突然消失。", "M,H,L,H,H,L,M,M,H,L,L,L,L,M,M"),
    p("504", "Gateway Timeout", "等待断联型", "你的很多卡顿来自外部等待。你常常不是没做，而是在等一个迟迟不来的响应。", "耐心、依赖管理、能感知链路阻塞。", "该超时就超时，该换路就换路。", "M,M,L,M,M,L,M,M,H,L,L,L,H,M,L")
  ];

  var hiddenPersona = {
    code: "418",
    status: "I'm a teapot",
    name: "荒诞反骨型",
    summary: "你不能被这套常规模型稳定解释。系统问你要咖啡，你选择以茶壶的方式存在。",
    strength: "跳出框架、拒绝被粗暴归类、拥有奇怪但有效的自洽。",
    caution: "偶尔也要给世界一点可解析的响应头。",
    target: levelsToVector("H,M,H,L,L,H,L,H,H,H,L,M,M,L,H"),
    hidden: true
  };

  var state = {
    mode: "intro",
    index: 0,
    buffer: "",
    answers: [],
    notice: ""
  };

  var screen = document.getElementById("screen");
  var keypad = document.querySelector(".keypad");

  function q(dimension, text, options) {
    return {
      dimension: dimension,
      text: text,
      options: options.map(function (option) {
        return {
          key: option[0],
          text: option[1],
          value: option[2]
        };
      })
    };
  }

  function p(code, status, name, summary, strength, caution, target) {
    return {
      code: code,
      status: status,
      name: name,
      summary: summary,
      strength: strength,
      caution: caution,
      target: levelsToVector(target)
    };
  }

  function levelsToVector(text) {
    return text.split(",").map(function (level) {
      if (level === "L") return 0;
      if (level === "M") return 1;
      return 2;
    });
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function render() {
    if (state.mode === "intro") {
      renderIntro();
      return;
    }

    if (state.mode === "quiz") {
      renderQuiz();
      return;
    }

    renderResult();
  }

  function renderIntro() {
    screen.innerHTML = [
      '<div class="block">',
      '<p class="line">$ ./code-persona-test</p>',
      '<p class="line ok">status: ready</p>',
      '<p class="line">这是一份 HTTP 状态码人格诊断。</p>',
      '<p class="line">30 道题会生成 15 维向量，再与 18 个代码人格做曼哈顿距离匹配。</p>',
      '<p class="line muted">隐藏款：418 I\'m a teapot</p>',
      '</div>',
      '<div class="block">',
      '<p class="prompt">press enter to start</p>',
      '<p class="input-line">&gt; <span class="cursor"></span></p>',
      '<p class="hint">手机端用下方键盘，电脑端可直接敲 a/b/c/d、enter、delete。</p>',
      state.notice ? '<p class="hint warn">' + escapeHtml(state.notice) + "</p>" : "",
      '</div>'
    ].join("");
  }

  function renderQuiz() {
    var item = questions[state.index];
    var picked = state.buffer;
    var optionHtml = item.options
      .map(function (option) {
        var className = "option" + (picked === option.key ? " is-picked" : "");
        return [
          '<div class="' + className + '">',
          '<span class="letter">[' + option.key + "]</span>",
          '<span>' + escapeHtml(option.text) + "</span>",
          "</div>"
        ].join("");
      })
      .join("");

    screen.innerHTML = [
      '<p class="progress">question ' +
        String(state.index + 1).padStart(2, "0") +
        "/" +
        questions.length +
        " | dimension: " +
        escapeHtml(dimensions[item.dimension][0]) +
        "</p>",
      '<div class="question">',
      '<p class="prompt">' + escapeHtml(item.text) + "</p>",
      '<div class="options">' + optionHtml + "</div>",
      "</div>",
      '<p class="input-line">&gt; ' +
        escapeHtml(state.buffer) +
        '<span class="cursor"></span></p>',
      '<p class="hint">输入 a / b / c 后按 enter。d 保留为无效键，用来保持终端键盘形态。</p>',
      state.notice ? '<p class="hint warn">' + escapeHtml(state.notice) + "</p>" : "",
      '<p class="hint">delete: 清空当前输入；空输入时回到上一题。</p>'
    ].join("");
  }

  function renderResult() {
    var result = scoreAnswers();
    var persona = result.persona;
    var levelRows = formatVectorRows(result.levels);
    var nearest = result.nearest
      .slice(0, 3)
      .map(function (item, index) {
        return (
          String(index + 1) +
          ". " +
          item.persona.code +
          " " +
          item.persona.status +
          " / distance " +
          item.distance +
          " / match " +
          item.match +
          "%"
        );
      })
      .join("\n");

    screen.innerHTML = [
      '<h1 class="result-title">' +
        persona.code +
        " " +
        escapeHtml(persona.status) +
        " - " +
        escapeHtml(persona.name) +
        "</h1>",
      '<p class="result-subtitle">match: ' +
        result.match +
        "% | manhattan distance: " +
        result.distance +
        (persona.hidden ? " | hidden fallback" : "") +
        "</p>",
      '<div class="result-grid">',
      section("diagnosis", persona.summary),
      section("strength", persona.strength),
      section("caution", persona.caution),
      '<div class="result-section"><h2>vector</h2><pre class="vector">' +
        escapeHtml(levelRows) +
        "</pre></div>",
      '<div class="result-section"><h2>nearest</h2><pre class="vector">' +
        escapeHtml(nearest) +
        "</pre></div>",
      "</div>",
      '<div class="actions">',
      '<button class="text-button" type="button" data-action="restart">restart</button>',
      '<button class="text-button" type="button" data-action="copy">copy result</button>',
      "</div>",
      state.notice ? '<p class="hint ok">' + escapeHtml(state.notice) + "</p>" : "",
      '<p class="hint">按 enter 重新测试。按 c 复制结果。</p>'
    ].join("");
  }

  function section(title, text) {
    return (
      '<div class="result-section"><h2>' +
      escapeHtml(title) +
      "</h2><p>" +
      escapeHtml(text) +
      "</p></div>"
    );
  }

  function scoreAnswers() {
    var raw = Array(dimensions.length).fill(0);

    state.answers.forEach(function (answer) {
      raw[answer.dimension] += answer.value;
    });

    var levels = raw.map(function (score) {
      if (score <= 3) return "L";
      if (score === 4) return "M";
      return "H";
    });

    var vector = levelsToVector(levels.join(","));
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
    var tieSpread = nearest[1] ? nearest[1].distance - nearest[0].distance : 99;
    var useHidden = best.match < 60 || (tieSpread === 0 && best.distance >= 10);
    var finalPersona = useHidden ? hiddenPersona : best.persona;
    var finalDistance = useHidden ? manhattan(vector, hiddenPersona.target) : best.distance;
    var finalMatch = useHidden ? Math.round((1 - finalDistance / 30) * 100) : best.match;

    return {
      raw: raw,
      levels: levels,
      vector: vector,
      nearest: nearest,
      persona: finalPersona,
      distance: finalDistance,
      match: finalMatch
    };
  }

  function manhattan(a, b) {
    return a.reduce(function (sum, value, index) {
      return sum + Math.abs(value - b[index]);
    }, 0);
  }

  function formatVectorRows(levels) {
    var rows = [
      ["system stability", 0, 3],
      ["boundary protocol", 3, 6],
      ["information parse", 6, 9],
      ["action drive", 9, 12],
      ["connection layer", 12, 15]
    ];

    return rows
      .map(function (row) {
        var label = row[0].padEnd(18, " ");
        return label + levels.slice(row[1], row[2]).join(" ");
      })
      .join("\n");
  }

  function handleKey(key) {
    state.notice = "";
    key = normalizeKey(key);

    if (!key) return;

    if (state.mode === "intro") {
      if (key === "enter") {
        state.mode = "quiz";
        state.index = 0;
        state.buffer = "";
        state.answers = [];
      } else {
        state.notice = "press enter to start";
      }
      render();
      return;
    }

    if (state.mode === "result") {
      if (key === "enter") {
        restart();
      } else if (key === "c") {
        copyResult();
      } else {
        state.notice = "enter = restart, c = copy result";
      }
      render();
      return;
    }

    if (key === "backspace") {
      if (state.buffer) {
        state.buffer = "";
      } else if (state.index > 0) {
        state.index -= 1;
        state.answers.pop();
      }
      render();
      return;
    }

    if (key === "enter") {
      submitCurrent();
      render();
      return;
    }

    if (["a", "b", "c", "d"].indexOf(key) >= 0) {
      state.buffer = key;
      if (key === "d") {
        state.notice = "本题只有 a-c。d 只是键盘占位键。";
      }
      render();
    }
  }

  function submitCurrent() {
    var item = questions[state.index];
    var selected = item.options.find(function (option) {
      return option.key === state.buffer;
    });

    if (!selected) {
      state.notice = state.buffer
        ? "无法解析 `" + state.buffer + "`。请输入 a、b 或 c。"
        : "先输入 a、b 或 c，再按 enter。";
      return;
    }

    state.answers.push({
      dimension: item.dimension,
      value: selected.value,
      key: selected.key
    });
    state.buffer = "";

    if (state.index >= questions.length - 1) {
      state.mode = "result";
      state.notice = "";
      return;
    }

    state.index += 1;
  }

  function normalizeKey(key) {
    var value = String(key).toLowerCase();
    if (value === "return") return "enter";
    if (value === "delete") return "backspace";
    if (value === "del") return "backspace";
    if (value === " ") return "enter";
    if (["a", "b", "c", "d", "enter", "backspace"].indexOf(value) >= 0) {
      return value;
    }
    return "";
  }

  function restart() {
    state.mode = "intro";
    state.index = 0;
    state.buffer = "";
    state.answers = [];
    state.notice = "";
  }

  function copyResult() {
    var result = scoreAnswers();
    var text = [
      "Code Persona Test",
      result.persona.code + " " + result.persona.status + " - " + result.persona.name,
      "match: " + result.match + "%",
      result.persona.summary,
      "",
      formatVectorRows(result.levels)
    ].join("\n");

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () {
          state.notice = "result copied";
          render();
        },
        function () {
          fallbackCopy(text);
        }
      );
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "readonly");
    textarea.style.position = "fixed";
    textarea.style.left = "-999px";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      state.notice = "result copied";
    } catch (error) {
      state.notice = "copy failed, browser blocked clipboard";
    }
    document.body.removeChild(textarea);
    render();
  }

  document.addEventListener("keydown", function (event) {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    var key = normalizeKey(event.key);
    if (!key) return;
    event.preventDefault();
    handleKey(key);
  });

  keypad.addEventListener("click", function (event) {
    var button = event.target.closest("button[data-key]");
    if (!button) return;
    handleKey(button.getAttribute("data-key"));
  });

  screen.addEventListener("click", function (event) {
    var action = event.target.getAttribute("data-action");
    if (action === "restart") {
      restart();
      render();
    }
    if (action === "copy") {
      copyResult();
    }
  });

  render();
})();
