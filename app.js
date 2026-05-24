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
    p("200", "OK", "稳定交付型", "你是那种约好几点就几点、说带伞就真的带伞的人。别人和你合作，会觉得事情终于有地方落地了。", "稳定、清楚、守约，擅长把混乱收成一个可交付的结果。", "小心把可靠变成自动接单，偶尔也要让别人自己兜住自己的杯子。", "H,H,H,M,M,M,H,M,M,M,L,H,L,M,M", "[ OK ]\n(｀・ω・´)ゝ"),
    p("201", "Created", "创造建构型", "你的快乐常出现在“不然我们做一个吧”之后。空白不会吓退你，反而像一张等你开头的便签。", "启动项目、搭骨架、把想法变成看得见的东西。", "兴奋时容易低估后续维护，别让灵感变成未来自己的待办。", "M,M,M,M,M,M,M,H,M,H,M,H,M,M,H", "+ new +\n(＾▽＾)つ□"),
    p("204", "No Content", "极简沉默型", "你把世界调成低噪音模式。能一句话说明白，就不会铺三层情绪垫。", "克制、利落、少废话，擅长把复杂场面降噪。", "有时别人需要的不只是结果，也需要一点“我在”的回声。", "H,H,H,H,H,L,M,M,L,L,L,H,L,L,L", "...\n( -_-)"),
    p("301", "Moved Permanently", "长期迁移型", "你很会和旧版本的自己和平告别。只要新路径更合理，你愿意慢慢搬家、整理、重定向。", "重构旧习惯、规划长期路线、把混乱搬到更合适的位置。", "别把每个小问题都升级成大型搬迁，有些东西擦一擦也能继续用。", "M,H,M,H,M,M,H,H,H,M,H,M,M,H,M", "old -> new\n(｀へ´)>"),
    p("304", "Not Modified", "保守缓存型", "你珍惜好用的旧方法。不是不进步，是你知道稳定经验也是一种资产。", "复用、节省成本、保护稳定，讨厌为了新鲜而新鲜。", "缓存太久会错过更新，偶尔也要刷新一下页面。", "H,H,H,H,M,L,M,M,L,L,L,M,L,L,L", "[cached]\n(￣ー￣)"),
    p("400", "Bad Request", "高敏纠错型", "你对含糊、甩锅和“随便”有天然雷达。别人觉得差不多，你已经看到后面会怎么翻车。", "发现歧义、澄清输入、帮大家少走弯路。", "别让每一次不清楚都变成你的内耗，有些问题可以先标红，不必立刻背走。", "M,M,M,H,M,H,H,M,L,L,M,M,M,M,M", "???\n(눈_눈)"),
    p("401", "Unauthorized", "权限边界型", "你的私人边界自带门禁。熟归熟，规则归规则，亲密也不等于无限访问。", "守边界、重授权，能保护自己和重要关系不被透支。", "有时可以解释一下“为什么不行”，世界会少误会你一点。", "H,H,M,H,H,M,M,M,L,L,L,M,L,M,L", "[locked]\n(｀_´)ゞ"),
    p("402", "Payment Required", "成本核算型", "你脑内常驻一个小算盘，算的不是小气，而是时间、精力、钱和情绪值。", "会判断投入产出，知道哪些事值得花，哪些只是看起来很香。", "别让计算成本盖过真正值得投入的关系和体验。", "M,H,H,H,H,M,H,M,M,M,M,M,M,M,M", "$ _ $\n(¬‿¬)"),
    p("403", "Forbidden", "原则拒绝型", "你的底线不是装饰品。你不是不能做，是这件事不应该这样做。", "原则感强，关键时刻敢说不，能替场面踩住刹车。", "如果总是先亮红灯，别人可能看不见你其实也愿意一起找路。", "M,H,H,H,H,H,M,M,L,L,M,M,L,M,H", "NO.\n(￣^￣)"),
    p("404", "Not Found", "探索迷路型", "你常常走着走着就打开了支线任务。迷路对你来说不是失败，是地图开始生成。", "探索、联想、在未知里找线索，能发现别人没注意的小门。", "记得隔一段时间确认自己到底在找什么，不然容易带着全队逛风景。", "L,M,M,L,L,L,M,H,H,M,M,L,H,L,H", "where?\n(・_・?)"),
    p("408", "Request Timeout", "慢热延迟型", "你不是没反应，只是在加载。给你一点处理时间，你会返回一个比抢答更稳的答案。", "深思、谨慎、能处理复杂情绪和复杂局面。", "要学会发出“我还在”的信号，不然别人会以为连接断了。", "M,M,L,M,M,L,M,H,H,L,M,L,H,L,M", "wait...\n( _ _ )"),
    p("409", "Conflict", "冲突协调型", "你能听见表面吵架下面真正卡住的地方。你不怕分歧，怕的是大家各说各话。", "拆冲突、找共同目标、把混在一起的问题分开。", "别把所有矛盾都背到自己身上，有些冲突不是你负责修复的。", "M,H,M,H,M,H,H,H,M,M,M,M,H,H,M", "><\n(ง'̀-'́)ง"),
    p("422", "Unprocessable Content", "深度解析型", "你不是挑刺，你是真的消化不了不合理。看懂之后还不对，这才最让你难受。", "理解深、追问准，能看出漂亮话下面的结构问题。", "有时先给一个能走的小版本，比把所有逻辑一次理顺更有用。", "M,M,M,H,M,M,H,H,L,L,H,M,M,M,M", "[parse]\n(¬_¬ )"),
    p("429", "Too Many Requests", "过载限流型", "你能扛很多，但不能无限接单。请求一多，你的系统就会开始保护自己。", "高吞吐、会排队、能识别过载，适合处理复杂但可分批的事。", "不要等到快崩了才宣布限流，提前说清楚会更轻松。", "H,M,L,M,M,M,H,M,L,M,M,H,H,M,M", "!!!\n(×_×)"),
    p("500", "Internal Server Error", "内核高压型", "你脑内算力很猛，压力大时也可能突然乱码。外面看是平静，里面已经开了十几个进程。", "能量强、理解深、推进猛，适合解决高复杂问题。", "请给自己日志、降级和休息机制，不要靠硬撑当散热。", "L,M,L,L,L,H,M,H,L,H,M,H,M,L,H", "ERR\n(╯°□°)╯"),
    p("502", "Bad Gateway", "系统中介型", "你经常夹在几方之间当翻译器。别人看到卡顿，你看到的是上下游都没对上频道。", "转译、协调、连接复杂关系，能把不同频道的人拉到同一页。", "不要把所有上游和下游的问题都算成自己的失败。", "M,M,L,M,M,M,H,H,M,L,L,M,H,H,M", "A -> ? -> B\n(・_・)ノ"),
    p("503", "Service Unavailable", "能量维护型", "你需要维护窗口，而且这很合理。暂停不是摆烂，是为了之后还能稳定营业。", "知道自己需要恢复，会保护核心资源，不轻易把自己烧干。", "要提前公告维护时间，不要等到彻底离线才消失。", "M,H,L,H,H,L,M,M,H,L,L,L,L,M,M", "offline\n(￣o￣) zzZ"),
    p("504", "Gateway Timeout", "等待断联型", "你常常被别人的未读、未确认、未回复拖住。不是你没做，是关键回应一直没回来。", "耐心、依赖管理、能感知链路阻塞。", "该超时就超时，该换路就换路，别把人生挂在一个加载圈上。", "M,M,L,M,M,L,M,M,H,L,L,L,H,M,L", "still...\n(・-・)")
  ];

  var hiddenPersona = {
    code: "418",
    status: "I'm a teapot",
    name: "荒诞反骨型",
    summary: "你不能被这套常规模型稳定解释。题目问你咖啡还是茶，你选择把自己活成茶壶。",
    strength: "跳出框架、拒绝被粗暴归类、拥有奇怪但有效的自洽。",
    caution: "偶尔也要给世界一点可解析的响应头，不然大家只能围着你猜。",
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
    finishedAt: 0,
    currentCode: "",
    sharedCode: ""
  };

  var screen = document.getElementById("screen");
  var keypad = document.querySelector(".keypad");

  function q(dimension, text, options) {
    var normalizedOptions = options.map(function (option) {
      return {
        key: option[0],
        text: option[1],
        value: option[2]
      };
    });

    if (!normalizedOptions.some(function (option) {
      return option.key === "d";
    })) {
      normalizedOptions.push({
        key: "d",
        text: "不好判断 / 没遇到过这种场景。",
        value: 2,
        uncertain: true
      });
    }

    return {
      dimension: dimension,
      text: text,
      options: normalizedOptions
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
      updateKeypadState();
      return;
    }

    if (state.mode === "quiz") {
      renderQuiz();
      updateKeypadState();
      return;
    }

    if (state.mode === "printing") {
      renderPrinting();
      updateKeypadState();
      return;
    }

    if (state.mode === "shared") {
      renderSharedResult();
      updateKeypadState();
      return;
    }

    renderResult();
    updateKeypadState();
  }

  function renderIntro() {
    var lastReceipt = readLastReceipt();
    var draft = readDraft();
    var lastReceiptHtml = lastReceipt
      ? [
          '<div class="last-receipt">',
          '<p class="line muted">last receipt</p>',
          '<p class="line">' +
            escapeHtml(lastReceipt.code + " " + lastReceipt.status + " - " + lastReceipt.name) +
            "</p>",
          '<p class="line muted">fit ' +
            escapeHtml(lastReceipt.match + "% / " + formatDateTime(lastReceipt.generatedAt)) +
            "</p>",
          '<div class="mini-actions">',
          '<button class="line-button" type="button" data-action="open-last" data-code="' +
            escapeHtml(lastReceipt.code) +
            '">open last</button>',
          "</div>",
          "</div>"
        ].join("")
      : "";
    var draftHtml = draft
      ? [
          '<div class="last-receipt">',
          '<p class="line muted">draft found</p>',
          '<p class="line">question ' +
            escapeHtml(String(draft.index + 1).padStart(2, "0") + "/" + questions.length) +
            "</p>",
          '<p class="line muted">saved ' + escapeHtml(formatDateTime(draft.updatedAt)) + "</p>",
          '<div class="mini-actions">',
          '<button class="line-button" type="button" data-action="resume-draft">resume</button>',
          '<button class="line-button" type="button" data-action="clear-draft">discard</button>',
          "</div>",
          "</div>"
        ].join("")
      : "";

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
      "</div>",
      draftHtml,
      lastReceiptHtml
    ].join("");
  }

  function renderQuiz() {
    var item = questions[state.index];
    var picked = state.buffer;
    var optionHtml = item.options
      .map(function (option) {
        var className =
          "option" +
          (option.uncertain ? " is-uncertain" : "") +
          (picked === option.key ? " is-picked" : "");
        return [
          '<button class="' + className + '" type="button" data-answer="' + option.key + '">',
          '<span class="letter">[' + option.key + "]</span>",
          '<span>' + escapeHtml(option.text) + "</span>",
          "</button>"
        ].join("");
      })
      .join("");

    screen.innerHTML = [
      '<p class="progress">question ' +
        String(state.index + 1).padStart(2, "0") +
        "/" +
        questions.length +
        "</p>",
      '<pre class="progress-bar">' + escapeHtml(formatProgressBar(state.index, questions.length)) + "</pre>",
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

  function renderPrinting() {
    screen.innerHTML = [
      '<div class="block printer-block">',
      '<p class="line">$ print receipt</p>',
      '<p class="line ok">status: generating</p>',
      '<pre class="printer-art">┌────────────────────────┐\n│ //// thermal head //// │\n└──────────┬─────────────┘\n           │\n           v\n        [ receipt ]</pre>',
      '<p class="input-line">&gt; <span class="printer-dots">printing</span><span class="cursor"></span></p>',
      '</div>'
    ].join("");
  }

  function renderResult() {
    var result = scoreAnswers();
    var persona = result.persona;
    var extras = getPersonaExtras(persona.code);
    var printout = formatReceiptBars(result.raw, result.match, result.answerStats);
    var generatedAt = state.finishedAt || Date.now();
    var durationMs = Math.max(0, generatedAt - (state.startedAt || generatedAt));
    var signature = buildAnswerSignature(result);
    var hiddenSection = persona.hidden
      ? section("EASTER EGG 彩蛋信号", result.hiddenReason)
      : "";

    state.currentCode = persona.code;
    saveLastReceipt(persona, result.match, generatedAt);
    updateResultHash(persona.code);

    screen.innerHTML = [
      '<article class="receipt-paper">',
      '<p class="receipt-kicker">CODE PERSONA RECEIPT / 代码人格小票</p>',
      '<pre class="receipt-code">' + escapeHtml(formatCodeBox(persona)) + "</pre>",
      '<pre class="receipt-face">' + escapeHtml(persona.face) + "</pre>",
      '<h1 class="result-title">' + escapeHtml(persona.name) + "</h1>",
      '<p class="receipt-stamp">' + escapeHtml(persona.hidden ? "EASTER EGG / 彩蛋出没" : "PERSONA GENERATED / 人格码已生成") + "</p>",
      '<dl class="receipt-facts">',
      fact("NO. 编号", formatTicketNumber(persona.code, generatedAt)),
      fact("GENERATED 生成时间", formatDateTime(generatedAt)),
      fact("DURATION 答题用时", formatDuration(durationMs)),
      fact("FIT 匹配感", result.match + "%"),
      fact("UNCLEAR 不确定", result.answerStats.dCount + "/" + questions.length),
      fact("SIGNATURE 小票签名", signature),
      fact("PACE 响应节奏", getPaceLabel(durationMs)),
      "</dl>",
      '<div class="result-grid">',
      section("DIAGNOSIS 诊断", persona.summary),
      section("BEST AT 擅长", persona.strength),
      section("WATCH OUT 注意", persona.caution),
      section("MODE 建议模式", extras.mode),
      section("MOTTO 小纸条", extras.motto),
      tagsSection(extras.tags),
      hiddenSection,
      '<div class="result-section"><h2>RESPONSE TRACE 响应痕迹</h2><pre class="visualizer">' +
        escapeHtml(formatTraceCard(result, durationMs, signature)) +
        "</pre></div>",
      '<div class="result-section"><h2>SIGNALS 信号</h2><pre class="visualizer">' +
        escapeHtml(printout) +
        "</pre></div>",
      '<div class="result-section"><h2>ANSWER MIX 答案分布</h2><pre class="visualizer">' +
        escapeHtml(formatAnswerMix(result.answerStats)) +
        "</pre></div>",
      "</div>",
      '<p class="receipt-footer">-- end of receipt / 小票结束 --</p>',
      "</article>",
      '<div class="actions">',
      '<button class="text-button" type="button" data-action="restart">restart</button>',
      '<button class="text-button" type="button" data-action="copy">copy</button>',
      '<button class="text-button" type="button" data-action="link">link</button>',
      '<button class="text-button" type="button" data-action="share">share</button>',
      '<button class="text-button" type="button" data-action="save">save txt</button>',
      '<button class="text-button" type="button" data-action="print">print</button>',
      "</div>",
      state.notice ? '<p class="hint ok">' + escapeHtml(state.notice) + "</p>" : ""
    ].join("");
  }

  function renderSharedResult() {
    var persona = findPersonaByCode(state.sharedCode) || hiddenPersona;
    var extras = getPersonaExtras(persona.code);

    state.currentCode = persona.code;

    screen.innerHTML = [
      '<article class="receipt-paper">',
      '<p class="receipt-kicker">SHARED CODE RECEIPT / 共享人格码小票</p>',
      '<pre class="receipt-code">' + escapeHtml(formatCodeBox(persona)) + "</pre>",
      '<pre class="receipt-face">' + escapeHtml(persona.face) + "</pre>",
      '<h1 class="result-title">' + escapeHtml(persona.name) + "</h1>",
      '<p class="receipt-stamp">OPENED FROM LINK / 从链接打开</p>',
      '<dl class="receipt-facts">',
      fact("CODE 人格码", persona.code),
      fact("STATUS 状态", persona.status),
      fact("MODE 建议模式", extras.mode),
      fact("TAGS 标签", extras.tags.join(" / ")),
      "</dl>",
      '<div class="result-grid">',
      section("DIAGNOSIS 诊断", persona.summary),
      section("BEST AT 擅长", persona.strength),
      section("WATCH OUT 注意", persona.caution),
      section("MOTTO 小纸条", extras.motto),
      tagsSection(extras.tags),
      '<div class="result-section"><h2>ASCII SNAPSHOT 字符快照</h2><pre class="visualizer">' +
        escapeHtml(buildSharedVisualizer(persona, extras)) +
        "</pre></div>",
      "</div>",
      '<p class="receipt-footer">-- shared receipt / 共享小票 --</p>',
      "</article>",
      '<div class="actions">',
      '<button class="text-button" type="button" data-action="restart">start test</button>',
      '<button class="text-button" type="button" data-action="copy-shared">copy</button>',
      '<button class="text-button" type="button" data-action="print">print</button>',
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

  function tagsSection(tags) {
    return (
      '<div class="result-section"><h2>TAGS 标签</h2><div class="receipt-tags">' +
      tags
        .map(function (tag) {
          return "<span>" + escapeHtml(tag) + "</span>";
        })
        .join("") +
      "</div></div>"
    );
  }

  function formatProgressBar(index, total) {
    var slots = 18;
    var filled = Math.round(((index + 1) / total) * slots);
    return "[" + "=".repeat(filled) + ".".repeat(slots - filled) + "]";
  }

  function scoreAnswers() {
    var raw = Array(dimensions.length).fill(0);
    var answerStats = getAnswerStats();

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
    var closeMatches = nearest.filter(function (item) {
      return item.distance <= best.distance + 1;
    }).length;
    var hiddenReason = "";
    var useHidden = false;

    if (answerStats.dCount >= 14) {
      useHidden = true;
      hiddenReason = "你选择了太多“无法判断”。系统只收到一团雾，于是递出一张茶壶小票。";
    } else if (best.match < 60) {
      useHidden = true;
      hiddenReason = "你的答案和常规人格码距离都比较远，像一个拒绝被普通状态码收编的响应。";
    } else if (closeMatches >= 4 && best.match < 78) {
      useHidden = true;
      hiddenReason = "多个人格码同时靠近你，信号像被折叠了一样，普通匹配无法稳定落点。";
    } else if (answerStats.dCount >= 9 && best.match < 72) {
      useHidden = true;
      hiddenReason = "你有不少“不好判断”，同时匹配又不够确定，系统决定启用茶壶协议。";
    }

    var finalPersona = useHidden ? hiddenPersona : best.persona;
    var finalDistance = useHidden ? manhattan(vector, hiddenPersona.target) : best.distance;
    var finalMatch = useHidden ? Math.max(42, Math.round((1 - finalDistance / 30) * 100)) : best.match;

    return {
      raw: raw,
      levels: levels,
      vector: vector,
      nearest: nearest,
      answerStats: answerStats,
      persona: finalPersona,
      distance: finalDistance,
      match: finalMatch,
      hiddenReason: hiddenReason
    };
  }

  function getAnswerStats() {
    return state.answers.reduce(
      function (stats, answer) {
        stats.total += 1;
        stats.counts[answer.key] += 1;
        if (answer.key === "d") stats.dCount += 1;
        return stats;
      },
      { total: 0, dCount: 0, counts: { a: 0, b: 0, c: 0, d: 0 } }
    );
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

  function formatReceiptBars(raw, match, answerStats) {
    var rows = [
      ["FIT 匹配", match / 100],
      ["UNCLEAR 模糊", answerStats.dCount / questions.length],
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

  function formatAnswerMix(answerStats) {
    return ["a", "b", "c", "d"]
      .map(function (key) {
        var count = answerStats.counts[key] || 0;
        var percent = answerStats.total ? count / answerStats.total : 0;
        return key + " " + asciiBar(percent) + " " + count + "/" + answerStats.total;
      })
      .join("\n");
  }

  function formatTraceCard(result, durationMs, signature) {
    var answerStats = result.answerStats;
    return [
      "signature : " + signature,
      "pace      : " + getPaceLabel(durationMs),
      "clarity   : " + getClarityLabel(answerStats),
      "packet    : " + answerStats.total + " answers / " + answerStats.dCount + " unclear",
      "receipt   : " + result.persona.code + " -> " + result.persona.status
    ].join("\n");
  }

  function buildAnswerSignature(result) {
    var source = state.answers
      .map(function (answer) {
        return answer.key + answer.value;
      })
      .join("|");
    var hash = result.persona.code.length;

    for (var index = 0; index < source.length; index += 1) {
      hash = (hash * 31 + source.charCodeAt(index)) % 1679616;
    }

    return result.persona.code + "-" + hash.toString(36).toUpperCase().padStart(4, "0");
  }

  function getPaceLabel(durationMs) {
    var seconds = Math.max(1, Math.round(durationMs / 1000));
    if (seconds < 90) return "quick return / 快速返回";
    if (seconds < 240) return "steady typing / 稳定输入";
    return "slow brew / 慢慢冲泡";
  }

  function getClarityLabel(answerStats) {
    if (answerStats.dCount <= 2) return "clear signal / 信号清楚";
    if (answerStats.dCount <= 8) return "soft edges / 有点模糊";
    return "foggy route / 雾中路由";
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

  function getPersonaExtras(code) {
    var extras = {
      "200": ["稳态营业", "今日小纸条：你可以可靠，但不必全天候在线。"],
      "201": ["先做一个小版本", "今日小纸条：灵感很好，记得给未来的自己留说明书。"],
      "204": ["低噪音模式", "今日小纸条：沉默很酷，偶尔回个“收到”也很酷。"],
      "301": ["慢慢迁移", "今日小纸条：换路不是背叛旧路，是给自己更合适的出口。"],
      "304": ["缓存复用", "今日小纸条：旧方法能用，但别忘了偶尔刷新。"],
      "400": ["先澄清输入", "今日小纸条：你不是难搞，你是在保护大家不要集体翻车。"],
      "401": ["门禁开启", "今日小纸条：边界感不是冷漠，是认真对待彼此。"],
      "402": ["预算优先", "今日小纸条：你的精力也很贵，记得把自己算进成本。"],
      "403": ["原则红线", "今日小纸条：拒绝可以很坚定，也可以很温柔。"],
      "404": ["地图生成中", "今日小纸条：迷路时别急着自责，你可能正在发现新入口。"],
      "408": ["延迟响应", "今日小纸条：慢一点没关系，记得告诉别人你还在。"],
      "409": ["冲突拆解", "今日小纸条：不是所有矛盾都需要你亲手修好。"],
      "422": ["深度解析", "今日小纸条：看出不合理很珍贵，先落一小步也很珍贵。"],
      "429": ["主动限流", "今日小纸条：你不是不行，你只是不能无限并发。"],
      "500": ["降级恢复", "今日小纸条：高能大脑也需要散热片。"],
      "502": ["频道转译", "今日小纸条：你可以当桥，但不必替两岸负责。"],
      "503": ["维护窗口", "今日小纸条：暂停营业不是坏掉，是保养。"],
      "504": ["超时换路", "今日小纸条：等不到的回复，不一定值得一直等。"],
      "418": ["茶壶协议", "今日小纸条：如果世界无法解析你，先优雅地冒个热气。"]
    };
    var pair = extras[code] || extras["418"];

    return {
      mode: pair[0],
      motto: pair[1],
      tags: getPersonaTags(code)
    };
  }

  function getPersonaTags(code) {
    var tags = {
      "200": ["可靠", "准点", "闭环"],
      "201": ["开局", "创造", "原型"],
      "204": ["低噪", "极简", "省话"],
      "301": ["迁移", "重整", "长期"],
      "304": ["复用", "稳定", "缓存"],
      "400": ["纠错", "澄清", "雷达"],
      "401": ["边界", "授权", "门禁"],
      "402": ["成本", "预算", "精力值"],
      "403": ["原则", "拒绝", "红线"],
      "404": ["探索", "支线", "找路"],
      "408": ["慢热", "加载", "深思"],
      "409": ["冲突", "拆解", "对齐"],
      "422": ["解析", "追问", "合理性"],
      "429": ["限流", "排队", "过载"],
      "500": ["高压", "内核", "散热"],
      "502": ["转译", "连接", "桥"],
      "503": ["维护", "恢复", "下线"],
      "504": ["等待", "超时", "换路"],
      "418": ["彩蛋", "茶壶", "不可解析"]
    };

    return tags[code] || tags["418"];
  }

  function buildSharedVisualizer(persona, extras) {
    return [
      "code     : " + persona.code,
      "status   : " + persona.status,
      "mode     : " + extras.mode,
      "tags     : " + extras.tags.join(" / "),
      "",
      formatCodeBox(persona)
    ].join("\n");
  }

  function findPersonaByCode(code) {
    var normalized = String(code || "").replace(/\D/g, "");
    var pool = personas.concat([hiddenPersona]);
    return (
      pool.find(function (persona) {
        return persona.code === normalized;
      }) || null
    );
  }

  function readSharedCode() {
    var hash = window.location.hash.replace(/^#/, "");
    var directCode = /^\d{3}$/.test(hash) ? hash : "";
    var queryCode = "";

    try {
      queryCode = new URLSearchParams(hash).get("code") || "";
    } catch (error) {
      queryCode = "";
    }

    var code = directCode || queryCode;
    return findPersonaByCode(code) ? String(code).replace(/\D/g, "") : "";
  }

  function buildResultUrl(code) {
    var base = window.location.href.split("#")[0];
    return base + "#code=" + encodeURIComponent(code);
  }

  function updateResultHash(code) {
    if (!code) return;
    var target = "#code=" + encodeURIComponent(code);
    if (window.location.hash === target) return;

    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", target);
    } else {
      window.location.hash = target;
    }
  }

  function clearResultHash() {
    if (!window.location.hash) return;

    var target = window.location.href.split("#")[0];
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", target);
    }
  }

  function saveLastReceipt(persona, match, generatedAt) {
    try {
      localStorage.setItem(
        "code-persona-last-receipt",
        JSON.stringify({
          code: persona.code,
          status: persona.status,
          name: persona.name,
          match: match,
          generatedAt: generatedAt
        })
      );
    } catch (error) {
      return;
    }
  }

  function readLastReceipt() {
    try {
      var text = localStorage.getItem("code-persona-last-receipt");
      if (!text) return null;
      var receipt = JSON.parse(text);
      if (!receipt || !receipt.code || !receipt.generatedAt) return null;
      return receipt;
    } catch (error) {
      return null;
    }
  }

  function saveDraft() {
    try {
      localStorage.setItem(
        "code-persona-draft",
        JSON.stringify({
          index: state.index,
          answers: state.answers,
          startedAt: state.startedAt,
          updatedAt: Date.now()
        })
      );
    } catch (error) {
      return;
    }
  }

  function readDraft() {
    try {
      var text = localStorage.getItem("code-persona-draft");
      var draft = text ? JSON.parse(text) : null;
      if (!draft || !Array.isArray(draft.answers)) return null;
      if (draft.answers.length >= questions.length) return null;

      draft.index = Math.max(0, Math.min(Number(draft.index) || 0, questions.length - 1));
      draft.startedAt = Number(draft.startedAt) || Date.now();
      draft.updatedAt = Number(draft.updatedAt) || draft.startedAt;
      draft.answers = draft.answers
        .filter(function (answer) {
          return answer && ["a", "b", "c", "d"].indexOf(answer.key) >= 0;
        })
        .slice(0, questions.length - 1);

      return draft;
    } catch (error) {
      return null;
    }
  }

  function clearDraft() {
    try {
      localStorage.removeItem("code-persona-draft");
    } catch (error) {
      return;
    }
  }

  function resumeDraft() {
    var draft = readDraft();
    if (!draft) {
      state.notice = "draft expired";
      return;
    }

    state.mode = "quiz";
    state.index = Math.max(draft.index, draft.answers.length);
    state.index = Math.min(state.index, questions.length - 1);
    state.buffer = "";
    state.answers = draft.answers;
    state.notice = "";
    state.startedAt = draft.startedAt;
    state.finishedAt = 0;
    state.currentCode = "";
    state.sharedCode = "";
    clearResultHash();
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
        state.currentCode = "";
        state.sharedCode = "";
        clearDraft();
        clearResultHash();
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
        state.notice = "enter = restart, c = copy";
      }
      render();
      return;
    }

    if (state.mode === "shared") {
      if (key === "enter") {
        restart();
      } else if (key === "c") {
        copySharedResult();
      } else {
        state.notice = "enter = start test, c = copy";
      }
      render();
      return;
    }

    if (state.mode === "printing") {
      state.notice = "receipt is printing";
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
      saveDraft();
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
      state.mode = "printing";
      state.notice = "";
      state.finishedAt = Date.now();
      clearDraft();
      window.setTimeout(function () {
        if (state.mode !== "printing") return;
        state.mode = "result";
        render();
      }, 650);
      return;
    }

    state.index += 1;
    saveDraft();
  }

  function normalizeKey(key) {
    var value = String(key).toLowerCase();
    if (value === "return") return "enter";
    if (value === "delete") return "backspace";
    if (value === "del") return "backspace";
    if (value === "arrowleft") return "backspace";
    if (value === "escape") return "backspace";
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
    state.currentCode = "";
    state.sharedCode = "";
    clearDraft();
    clearResultHash();
  }

  function copyResult() {
    var text = buildShareText();

    writeClipboard(text, "result copied");
  }

  function copySharedResult() {
    var persona = findPersonaByCode(state.sharedCode || state.currentCode) || hiddenPersona;
    writeClipboard(buildSharedText(persona), "shared receipt copied");
  }

  function copyResultLink() {
    var code = state.currentCode || scoreAnswers().persona.code;
    updateResultHash(code);
    writeClipboard(buildResultUrl(code), "link copied");
  }

  function shareResult() {
    var text = buildShareText();
    var code = state.currentCode || scoreAnswers().persona.code;
    var url = buildResultUrl(code);
    updateResultHash(code);

    if (navigator.share) {
      navigator
        .share({
          title: "Code Persona Test",
          text: text,
          url: url
        })
        .then(function () {
          state.notice = "share sheet opened";
          render();
        })
        .catch(function (error) {
          if (error && error.name === "AbortError") {
            state.notice = "share cancelled";
            render();
            return;
          }
          writeClipboard(text, "share text copied");
        });
      return;
    }

    writeClipboard(text, "share text copied");
  }

  function saveResultText() {
    var code = state.currentCode || scoreAnswers().persona.code;
    saveTextFile("code-persona-" + code + ".txt", buildShareText());
  }

  function saveTextFile(filename, text) {
    var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 0);
    state.notice = "txt saved";
    render();
  }

  function printReceipt() {
    if (!window.print) {
      state.notice = "print unavailable";
      render();
      return;
    }

    window.print();
  }

  function buildShareText() {
    var result = scoreAnswers();
    var extras = getPersonaExtras(result.persona.code);
    var generatedAt = state.finishedAt || Date.now();
    var durationMs = Math.max(0, generatedAt - (state.startedAt || generatedAt));
    var url = buildResultUrl(result.persona.code);
    var signature = buildAnswerSignature(result);

    return [
      "Code Persona Test",
      result.persona.code + " " + result.persona.status + " - " + result.persona.name,
      result.persona.face,
      "fit: " + result.match + "%",
      "generated: " + formatDateTime(generatedAt),
      "duration: " + formatDuration(durationMs),
      "signature: " + signature,
      "pace: " + getPaceLabel(durationMs),
      "clarity: " + getClarityLabel(result.answerStats),
      result.persona.summary,
      extras.motto,
      "tags: " + extras.tags.join(" / "),
      "link: " + url,
      "",
      formatReceiptBars(result.raw, result.match, result.answerStats)
    ].join("\n");
  }

  function buildSharedText(persona) {
    var extras = getPersonaExtras(persona.code);
    return [
      "Code Persona Test",
      persona.code + " " + persona.status + " - " + persona.name,
      persona.face,
      persona.summary,
      extras.motto,
      "tags: " + extras.tags.join(" / "),
      "link: " + buildResultUrl(persona.code)
    ].join("\n");
  }

  function writeClipboard(text, successMessage) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () {
          state.notice = successMessage;
          render();
        },
        function () {
          fallbackCopy(text, successMessage);
        }
      );
    } else {
      fallbackCopy(text, successMessage);
    }
  }

  function fallbackCopy(text, successMessage) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "readonly");
    textarea.style.position = "fixed";
    textarea.style.left = "-999px";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      state.notice = successMessage;
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
    var answerButton = event.target.closest("[data-answer]");
    if (answerButton) {
      var answerKey = answerButton.getAttribute("data-answer");
      if (state.buffer === answerKey) {
        submitCurrent();
        render();
      } else {
        handleKey(answerKey);
      }
      return;
    }

    var actionButton = event.target.closest("[data-action]");
    var action = actionButton ? actionButton.getAttribute("data-action") : "";
    if (action === "restart") {
      restart();
      render();
    }
    if (action === "resume-draft") {
      resumeDraft();
      render();
    }
    if (action === "clear-draft") {
      clearDraft();
      state.notice = "draft discarded";
      render();
    }
    if (action === "open-last") {
      var code = actionButton.getAttribute("data-code");
      if (findPersonaByCode(code)) {
        state.mode = "shared";
        state.sharedCode = code;
        state.currentCode = code;
        state.notice = "";
        updateResultHash(code);
        render();
      }
    }
    if (action === "copy") {
      copyResult();
    }
    if (action === "copy-shared") {
      copySharedResult();
    }
    if (action === "link") {
      copyResultLink();
    }
    if (action === "share") {
      shareResult();
    }
    if (action === "save") {
      saveResultText();
    }
    if (action === "print") {
      printReceipt();
    }
  });

  function updateKeypadState() {
    Array.prototype.forEach.call(keypad.querySelectorAll("button[data-key]"), function (button) {
      var key = button.getAttribute("data-key");
      button.classList.toggle("is-active", state.mode === "quiz" && key === state.buffer);
      button.classList.toggle("is-muted", state.mode === "printing");
    });
  }

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

  window.addEventListener("hashchange", function () {
    var code = readSharedCode();
    if (!code) {
      if (state.mode === "shared") {
        restart();
      }
      return;
    }

    state.mode = "shared";
    state.sharedCode = code;
    state.currentCode = code;
    state.notice = "";
    render();
  });

  var sharedCode = readSharedCode();
  if (sharedCode) {
    state.mode = "shared";
    state.sharedCode = sharedCode;
    state.currentCode = sharedCode;
  }

  render();
})();
