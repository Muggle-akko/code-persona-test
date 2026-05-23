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
    q(0, "朋友约周末出门，但地点时间都没定，你会：", [
      ["a", "先拉个小群，把时间地点定下来。", 3],
      ["b", "说个大概方向，等大家慢慢补充。", 2],
      ["c", "先答应，具体到时候再说。", 1]
    ]),
    q(0, "你答应帮人带杯奶茶，走到店门口发现排长队：", [
      ["a", "先问对方能不能换一家，别让人空等。", 2],
      ["b", "排，买，送到，任务闭环。", 3],
      ["c", "发一句“人好多”，然后开始犹豫。", 1]
    ]),
    q(1, "不小心把消息发错群了，你第一反应是：", [
      ["a", "撤回，道歉，补一句“打扰了”。", 3],
      ["b", "先观察有没有人看到。", 2],
      ["c", "手机扣桌，灵魂离线十秒。", 1]
    ]),
    q(1, "做饭翻车了，你更可能：", [
      ["a", "能吃就行，假装这是新菜。", 1],
      ["b", "补救一下，下次少放那勺神秘调料。", 2],
      ["c", "复盘原因，顺手记住下次怎么避坑。", 3]
    ]),
    q(2, "一打开手机，未读消息像过年一样爆开：", [
      ["a", "按急不急排队回，不急的晚点说。", 3],
      ["b", "能回几个先回几个。", 2],
      ["c", "看一眼红点，选择闭眼。", 1]
    ]),
    q(2, "一天里被很多小事打断，你通常：", [
      ["a", "越打断越散，最后只想开飞行模式。", 1],
      ["b", "会烦，但休息一下还能接上。", 2],
      ["c", "把事情分批处理，不让它们全挤进来。", 3]
    ]),
    q(3, "大家排队买东西，有人想插一下队：", [
      ["a", "看情况，可能让一下。", 1],
      ["b", "如果真的急，先说明原因。", 2],
      ["c", "队伍就是队伍，别悄悄滑进来。", 3]
    ]),
    q(3, "合租室友总是不按约定倒垃圾，你会：", [
      ["a", "先忍几次，别把气氛搞僵。", 1],
      ["b", "提醒一下，看看对方反应。", 2],
      ["c", "把规则重新说清楚，别靠猜。", 3]
    ]),
    q(4, "朋友问你借视频会员账号，你会：", [
      ["a", "直接给，反正朋友嘛。", 1],
      ["b", "看关系和用途，临时给一下可以。", 2],
      ["c", "不太想共享私人账号，会推荐拼车或别的办法。", 3]
    ]),
    q(4, "同事临时把一堆活丢给你，说“就顺手一下”：", [
      ["a", "顺手就顺手，最后自己加班。", 1],
      ["b", "先问清楚优先级和截止时间。", 2],
      ["c", "明确哪些能帮，哪些不该默认变成我的。", 3]
    ]),
    q(5, "朋友点菜时大家都说“随便”，但你知道不是真的随便：", [
      ["a", "先问忌口和预算，把范围缩小。", 2],
      ["b", "直接拍板，不然今晚别吃了。", 3],
      ["c", "那就真的随便吧，命运会安排。", 1]
    ]),
    q(5, "会议里你觉得方向不对，但大家都快点头了：", [
      ["a", "挑个关键点问清楚，别让问题糊过去。", 3],
      ["b", "会补一句担心，语气尽量温和。", 2],
      ["c", "算了，下班比较重要。", 1]
    ]),
    q(6, "有人发来一句“你看着弄吧”，你脑内会：", [
      ["a", "自动列出几种可能：预算、风格、时间、底线。", 3],
      ["b", "先按常规理解做个版本。", 2],
      ["c", "这四个字让我很想原地重启。", 1]
    ]),
    q(6, "看一篇很长的群公告，你通常：", [
      ["a", "扫出时间、地点、要做什么。", 3],
      ["b", "看个大概，重要的再回头找。", 2],
      ["c", "先收藏，收藏等于看过。", 1]
    ]),
    q(7, "玩一个新桌游，规则书有三页，你会：", [
      ["a", "先理解机制，不然玩着没安全感。", 3],
      ["b", "边玩边学，错了再说。", 2],
      ["c", "谁会谁教我，我负责气氛。", 1]
    ]),
    q(7, "刷到一个新互联网热梗，你更像：", [
      ["a", "马上想知道它从哪来、为什么火。", 3],
      ["b", "会用就行，别解释，解释就不灵了。", 2],
      ["c", "等它过气了我可能刚看懂。", 1]
    ]),
    q(8, "旅行到了陌生城市，计划突然变了：", [
      ["a", "没事，打开地图找下一站。", 3],
      ["b", "有点慌，但能改路线。", 2],
      ["c", "计划没了，我也快没了。", 1]
    ]),
    q(8, "别人说“之后再看情况”，你通常：", [
      ["a", "可以接受，先把眼前一步走完。", 3],
      ["b", "会记在心里，等一个更准的说法。", 2],
      ["c", "很难受，我想要明确答案。", 1]
    ]),
    q(9, "周末突然空出来半天，你会：", [
      ["a", "马上想搞点东西：做饭、拍照、整理角落。", 3],
      ["b", "看心情，有灵感就动。", 2],
      ["c", "珍惜空白，躺平也是项目。", 1]
    ]),
    q(9, "朋友说“我们搞个小活动吧”，你会：", [
      ["a", "开始想主题、流程和谁来负责。", 3],
      ["b", "先听听大家想不想玩。", 2],
      ["c", "可以，但别让我从零开始张罗。", 1]
    ]),
    q(10, "看到家里抽屉乱成一团，你会：", [
      ["a", "先忍，等哪天爆发式整理。", 2],
      ["b", "很想立刻分区贴标签。", 3],
      ["c", "抽屉关上，世界和平。", 1]
    ]),
    q(10, "手机相册里有几千张重复截图，你会：", [
      ["a", "偶尔删几张，意思到了。", 2],
      ["b", "开清理模式，分类、删重、留纪念。", 3],
      ["c", "它们住得挺好，不打扰。", 1]
    ]),
    q(11, "你做家务的节奏通常是：", [
      ["a", "想到哪做到哪，中间可能被沙发截胡。", 1],
      ["b", "分块处理，慢慢推进。", 2],
      ["c", "开音乐，一口气清场。", 3]
    ]),
    q(11, "面对待办清单上的小事，你更像：", [
      ["a", "先清掉几个，心里立刻轻一点。", 3],
      ["b", "按顺序来，不慌不忙。", 2],
      ["c", "等它们长成大事再说。", 1]
    ]),
    q(12, "约饭时有人迟迟不回消息，你会：", [
      ["a", "先定能定的，不等所有人同步。", 1],
      ["b", "等一会儿，再提醒一次。", 2],
      ["c", "整件事都被那个未读卡住了。", 3]
    ]),
    q(12, "办事需要别人盖章或确认，你通常：", [
      ["a", "提前准备材料，尽量减少来回。", 1],
      ["b", "正常等流程，有问题再补。", 2],
      ["c", "很容易被卡在“等对方回复”。", 3]
    ]),
    q(13, "两个朋友在群里吵起来，但其实说的不是一件事：", [
      ["a", "会试着把双方真正想说的翻译出来。", 3],
      ["b", "提醒他们先别上头。", 2],
      ["c", "默默潜水，别 cue 我。", 1]
    ]),
    q(13, "老板、同事、客户各说各的，你更可能：", [
      ["a", "把话翻成同一张清单：谁要什么，什么时候要。", 3],
      ["b", "帮忙对齐最关键的几句。", 2],
      ["c", "只处理跟我有关的那一段。", 1]
    ]),
    q(14, "群里大家都在夸一个你觉得一般的东西，你会：", [
      ["a", "不破坏气氛，先不说。", 1],
      ["b", "看场合，熟人才说真话。", 2],
      ["c", "温和但诚实地说：我没那么喜欢。", 3]
    ]),
    q(14, "你状态不好但还在社交场合里：", [
      ["a", "努力营业，回家再塌。", 1],
      ["b", "会说今天电量低，少说一点。", 2],
      ["c", "直接承认我现在有点不在线。", 3]
    ])
  ];

  var personas = [
    p("200", "OK", "稳定交付型", "你像一个可靠的成功响应。信息到你这里会被处理、落地、返回清楚结果。", "稳定、清楚、守约。", "小心把可靠变成过度负责。", "H,H,H,M,M,M,H,M,M,M,L,H,L,M,M", "[ OK ]\n(｀・ω・´)ゝ"),
    p("201", "Created", "创造建构型", "你喜欢让空白长出结构，最舒服的瞬间是第一个版本真的跑起来。", "启动项目、搭骨架、把想法变成可用原型。", "容易在兴奋里低估维护成本。", "M,M,M,M,M,M,M,H,M,H,M,H,M,M,H", "+ new +\n(＾▽＾)つ□"),
    p("204", "No Content", "极简沉默型", "你偏爱无废话的完成。能用一行说明白，就不会写三屏解释。", "克制、利落、低噪音。", "有时别人需要的不只是结果，还有上下文。", "H,H,H,H,H,L,M,M,L,L,L,H,L,L,L", "...\n( -_-)"),
    p("301", "Moved Permanently", "长期迁移型", "你不迷恋旧路径。只要新结构更干净，就愿意规划迁移并承担过渡期。", "重构、迁移、长期主义。", "小心把每个问题都看成架构问题。", "M,H,M,H,M,M,H,H,H,M,H,M,M,H,M", "old -> new\n(｀へ´)>"),
    p("304", "Not Modified", "保守缓存型", "你相信稳定资产的价值。能复用就复用，能不改就先别动。", "节省成本、保护稳定、减少无意义变化。", "偶尔会把必要更新也缓存太久。", "H,H,H,H,M,L,M,M,L,L,L,M,L,L,L", "[cached]\n(￣ー￣)"),
    p("400", "Bad Request", "高敏纠错型", "混乱输入一出现，你就能闻到歧义。你不是挑剔，你是在替系统挡脏数据。", "发现问题、澄清需求、守住输入质量。", "容易被不清楚的人和事消耗。", "M,M,M,H,M,H,H,M,L,L,M,M,M,M,M", "???\n(눈_눈)"),
    p("401", "Unauthorized", "权限边界型", "你对授权、身份和边界非常敏感。安全感来自清楚的许可关系。", "守边界、重授权、能保护系统和自己。", "有时会显得不够松弛。", "H,H,M,H,H,M,M,M,L,L,L,M,L,M,L", "[locked]\n(｀_´)ゞ"),
    p("402", "Payment Required", "成本核算型", "你会自然地问：这件事要花掉什么？时间、精力、预算、机会成本都算数。", "成本意识、资源判断、投入产出比。", "别让计算成本盖过真正值得投入的东西。", "M,H,H,H,H,M,H,M,M,M,M,M,M,M,M", "$ _ $\n(¬‿¬)"),
    p("403", "Forbidden", "原则拒绝型", "你不是不能做，是这件事不应该这样做。你的拒绝里有清楚的底线。", "原则感、风险意识、关键时刻敢说不。", "如果总是先拒绝，别人可能看不见你的善意。", "M,H,H,H,H,H,M,M,L,L,M,M,L,M,H", "NO.\n(￣^￣)"),
    p("404", "Not Found", "探索迷路型", "你经常在未知目录里找路。迷路不是失败，是你开始建立地图的方式。", "探索、联想、在复杂处找线索。", "需要定期停下来确认自己到底在找什么。", "L,M,M,L,L,L,M,H,H,M,M,L,H,L,H", "where?\n(・_・?)"),
    p("408", "Request Timeout", "慢热延迟型", "你不是没有响应，只是需要更长的处理窗口。催促会让你更容易断线。", "深思、谨慎、对复杂问题有耐心。", "要学会向外部发出还活着的心跳包。", "M,M,L,M,M,L,M,H,H,L,M,L,H,L,M", "wait...\n( _ _ )"),
    p("409", "Conflict", "冲突协调型", "你能看见接口之间的矛盾，也愿意把冲突摊开处理。", "协调分歧、看见张力、推动对齐。", "别把所有矛盾都背到自己身上。", "M,H,M,H,M,H,H,H,M,M,M,M,H,H,M", "><\n(ง'̀-'́)ง"),
    p("422", "Unprocessable Content", "深度解析型", "你不是没看懂，而是看懂后发现它逻辑上不能成立。", "深度理解、发现结构性问题、追问合理性。", "有时需要先给一个可运行的中间版本。", "M,M,M,H,M,M,H,H,L,L,H,M,M,M,M", "[parse]\n(¬_¬ )"),
    p("429", "Too Many Requests", "过载限流型", "你能处理很多事，但不是无限并发。你的系统需要明确限流策略。", "高吞吐、会排队、能识别过载。", "不要等到快崩了才告诉别人限流规则。", "H,M,L,M,M,M,H,M,L,M,M,H,H,M,M", "!!!\n(×_×)"),
    p("500", "Internal Server Error", "内核高压型", "你内部算力很强，也很容易在高压下抛出不可见异常。", "能量强、理解深、推进猛。", "请给自己日志、降级和休息机制。", "L,M,L,L,L,H,M,H,L,H,M,H,M,L,H", "ERR\n(╯°□°)╯"),
    p("502", "Bad Gateway", "系统中介型", "你像夹在多个系统之间的网关。别人看到错误，你看到的是链路和上下游。", "转译、协调、连接复杂接口。", "不要把所有上游和下游的问题都算成自己的失败。", "M,M,L,M,M,M,H,H,M,L,L,M,H,H,M", "A -> ? -> B\n(・_・)ノ"),
    p("503", "Service Unavailable", "能量维护型", "你不是永久不可用，只是需要维护窗口。恢复之后，你依然能稳定服务。", "知道自己需要停机、会保护核心资源。", "要提前公告维护时间，不要突然消失。", "M,H,L,H,H,L,M,M,H,L,L,L,L,M,M", "offline\n(￣o￣) zzZ"),
    p("504", "Gateway Timeout", "等待断联型", "你的很多卡顿来自外部等待。你常常不是没做，而是在等一个迟迟不来的响应。", "耐心、依赖管理、能感知链路阻塞。", "该超时就超时，该换路就换路。", "M,M,L,M,M,L,M,M,H,L,L,L,H,M,L", "still...\n(・-・)")
  ];

  var hiddenPersona = {
    code: "418",
    status: "I'm a teapot",
    name: "荒诞反骨型",
    summary: "你不能被这套常规模型稳定解释。系统问你要咖啡，你选择以茶壶的方式存在。",
    strength: "跳出框架、拒绝被粗暴归类、拥有奇怪但有效的自洽。",
    caution: "偶尔也要给世界一点可解析的响应头。",
    target: levelsToVector("H,M,H,L,L,H,L,H,H,H,L,M,M,L,H"),
    face: "  ___\n /___\\\n( tea )",
    hidden: true
  };

  var state = {
    mode: "intro",
    index: 0,
    buffer: "",
    answers: [],
    notice: "",
    startedAt: 0,
    finishedAt: 0
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

  function p(code, status, name, summary, strength, caution, target, face) {
    return {
      code: code,
      status: status,
      name: name,
      summary: summary,
      strength: strength,
      caution: caution,
      target: levelsToVector(target),
      face: face
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
      '<p class="line ok">status: idle</p>',
      '<p class="line">回答一些生活和工作里的小情境。</p>',
      '<p class="line">系统会吐出一个 HTTP 风格的人格码，像一张来自终端的小票。</p>',
      '</div>',
      '<div class="block">',
      '<p class="prompt">press enter</p>',
      '<p class="input-line">&gt; <span class="cursor"></span></p>',
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
        "</p>",
      '<div class="question">',
      '<p class="prompt">' + escapeHtml(item.text) + "</p>",
      '<div class="options">' + optionHtml + "</div>",
      "</div>",
      '<p class="input-line">&gt; ' +
        escapeHtml(state.buffer) +
        '<span class="cursor"></span></p>',
      state.notice ? '<p class="hint warn">' + escapeHtml(state.notice) + "</p>" : ""
    ].join("");
  }

  function renderResult() {
    var result = scoreAnswers();
    var persona = result.persona;
    var printout = formatReceiptBars(result.raw, result.match);
    var generatedAt = state.finishedAt || Date.now();
    var durationMs = Math.max(0, generatedAt - (state.startedAt || generatedAt));

    screen.innerHTML = [
      '<article class="receipt-paper">',
      '<p class="receipt-kicker">CODE PERSONA RECEIPT / 代码人格小票</p>',
      '<pre class="receipt-code">' + escapeHtml(formatCodeBox(persona)) + "</pre>",
      '<pre class="receipt-face">' + escapeHtml(persona.face) + "</pre>",
      '<h1 class="result-title">' + escapeHtml(persona.name) + "</h1>",
      '<dl class="receipt-facts">',
      fact("NO. 编号", formatTicketNumber(persona.code, generatedAt)),
      fact("GENERATED 生成时间", formatDateTime(generatedAt)),
      fact("DURATION 答题用时", formatDuration(durationMs)),
      fact("FIT 匹配感", result.match + "%"),
      "</dl>",
      '<div class="result-grid">',
      section("DIAGNOSIS 诊断", persona.summary),
      section("BEST AT 擅长", persona.strength),
      section("WATCH OUT 注意", persona.caution),
      '<div class="result-section"><h2>SIGNALS 信号</h2><pre class="visualizer">' +
        escapeHtml(printout) +
        "</pre></div>",
      "</div>",
      "</article>",
      '<div class="actions">',
      '<button class="text-button" type="button" data-action="restart">restart</button>',
      '<button class="text-button" type="button" data-action="copy">copy result</button>',
      "</div>",
      state.notice ? '<p class="hint ok">' + escapeHtml(state.notice) + "</p>" : ""
    ].join("");
  }

  function fact(label, value) {
    return (
      "<div><dt>" +
      escapeHtml(label) +
      "</dt><dd>" +
      escapeHtml(value) +
      "</dd></div>"
    );
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

  function formatCodeBox(persona) {
    var status = persona.status.toUpperCase();
    var width = Math.max(22, status.length + 4);
    var border = "+" + "-".repeat(width) + "+";
    return [
      border,
      "|" + centerText(persona.code, width) + "|",
      "|" + centerText(status, width) + "|",
      border
    ].join("\n");
  }

  function centerText(text, width) {
    var value = String(text);
    var left = Math.floor((width - value.length) / 2);
    var right = width - value.length - left;
    return " ".repeat(Math.max(0, left)) + value + " ".repeat(Math.max(0, right));
  }

  function formatReceiptBars(raw, match) {
    var rows = [
      ["FIT 匹配", match / 100],
      ["STABLE 稳定", normalizeGroup(raw, 0, 3)],
      ["BOUND 边界", normalizeGroup(raw, 3, 6)],
      ["PARSE 解析", normalizeGroup(raw, 6, 9)],
      ["DRIVE 行动", normalizeGroup(raw, 9, 12)],
      ["LINK 连接", normalizeGroup(raw, 12, 15)]
    ];

    return rows
      .map(function (row) {
        var label = row[0].padEnd(13, " ");
        return label + asciiBar(row[1]);
      })
      .join("\n");
  }

  function normalizeGroup(raw, start, end) {
    var sum = raw.slice(start, end).reduce(function (total, value) {
      return total + value;
    }, 0);
    return (sum - 6) / 12;
  }

  function asciiBar(value) {
    var total = 12;
    var filled = Math.max(0, Math.min(total, Math.round(value * total)));
    var percent = Math.round(value * 100);
    return "[" + "#".repeat(filled) + "-".repeat(total - filled) + "] " + String(percent).padStart(3, " ") + "%";
  }

  function formatTicketNumber(code, ms) {
    var date = new Date(ms);
    return [
      code,
      pad2(date.getMonth() + 1) + pad2(date.getDate()),
      pad2(date.getHours()) + pad2(date.getMinutes()) + pad2(date.getSeconds())
    ].join("-");
  }

  function formatDateTime(ms) {
    var date = new Date(ms);
    return [
      date.getFullYear(),
      "-",
      pad2(date.getMonth() + 1),
      "-",
      pad2(date.getDate()),
      " ",
      pad2(date.getHours()),
      ":",
      pad2(date.getMinutes()),
      ":",
      pad2(date.getSeconds())
    ].join("");
  }

  function formatDuration(ms) {
    var totalSeconds = Math.max(1, Math.round(ms / 1000));
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    if (minutes === 0) {
      return totalSeconds + "s";
    }

    return minutes + "m " + seconds + "s";
  }

  function pad2(value) {
    return String(value).padStart(2, "0");
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
        state.startedAt = Date.now();
        state.finishedAt = 0;
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
        state.notice = "d 没有返回有效响应。";
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
        ? "无法解析 `" + state.buffer + "`。"
        : "等待输入。";
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
      state.finishedAt = Date.now();
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
    state.startedAt = 0;
    state.finishedAt = 0;
  }

  function copyResult() {
    var result = scoreAnswers();
    var text = [
      "Code Persona Test",
      result.persona.code + " " + result.persona.status + " - " + result.persona.name,
      result.persona.face,
      "fit: " + result.match + "%",
      "generated: " + formatDateTime(state.finishedAt || Date.now()),
      "duration: " + formatDuration(Math.max(0, (state.finishedAt || Date.now()) - (state.startedAt || Date.now()))),
      result.persona.summary,
      "",
      formatReceiptBars(result.raw, result.match)
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

  document.addEventListener("click", function (event) {
    var button = event.target.closest('[data-action="theme"]');
    if (!button) return;
    toggleTheme();
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var button = document.querySelector('[data-action="theme"]');
    if (button) {
      button.textContent = theme === "dark" ? "light" : "dark";
    }
    try {
      localStorage.setItem("code-persona-theme", theme);
    } catch (error) {
      return;
    }
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute("data-theme") || "light";
    applyTheme(current === "dark" ? "light" : "dark");
  }

  try {
    applyTheme(localStorage.getItem("code-persona-theme") || "light");
  } catch (error) {
    applyTheme("light");
  }

  render();
})();
