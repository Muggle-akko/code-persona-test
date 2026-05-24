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

  // Editing notes:
  // - Each question belongs to one dimension. Keep the q(dimension, ...) number unless you intentionally move it.
  // - Each a/b/c set should keep one low(1), one medium(2), and one high(3) answer.
  // - The d option is auto-added by q() as neutral(2), so do not add it manually unless you change q().
  var questions = [
    q(0, "朋友约出门，但地点时间都没定，你会：", [
      ["a", "既然如此，那只能由我来定了", 3],
      ["b", "说个大概方向，询问大家意见。", 2],
      ["c", "先答应，具体到时候再说。", 1]
    ]),
    q(0, "你答应请朋友喝某家奶茶/咖啡，打开小程序发现前面还有200杯在做：", [
      ["a", "直接问朋友能不能换一家，还是愿意等。", 2],
      ["b", "那得赶紧下单了呀。", 3],
      ["c", "有点犹豫要不要换一家。", 1]
    ]),
    q(1, "不小心把消息发错群了，你第一反应是：", [
      ["a", "撤回，道歉，补一句“不好意思发错了”。", 3],
      ["b", "我撤回很快，应该没人看见吧。", 2],
      ["c", "虽然撤回了，但是感觉已经社死了", 1]
    ]),
    // Q04 | 维度02 错误恢复力：测“事情翻车后，是糊过去、补救，还是复盘迭代”。
    // 给分：a=1 接受翻车并合理化；b=2 现场补救、留下经验；c=3 复盘原因并预防再犯。
    q(1, "做饭翻车了，你更可能：", [
      ["a", "能吃就行，假装这是新菜。", 1],
      ["b", "补救一下，下次少放那勺神秘调料。", 2],
      ["c", "复盘原因，顺手记住下次怎么避坑。", 3]
    ]),
    q(2, "一打开手机，未读消息像过年一样爆开：", [
      ["a", "按急不急排队回复，不急的晚点再回。", 3],
      ["b", "能回几个先回几个。", 2],
      ["c", "看一眼红点，选择先刷朋友圈。", 1]
    ]),
    // Q06 | 维度03 过载阈值：测“连续打断下的承载方式和自我限流能力”。
    // 给分：a=1 被打散到想离线；b=2 会烦但能恢复；c=3 分批处理，主动限流。
    q(2, "一天里被很多小事打断，你通常：", [
      ["a", "越打断越散，最后只想开飞行模式。", 1],
      ["b", "会烦，但休息一下还能接上。", 2],
      ["c", "把事情分批处理，不让它们全挤进来。", 3]
    ]),
    // Q07 | 维度04 规则敏感度：测“面对破坏队列/协议的人，是否感知并维护规则”。
    // 给分：a=1 倾向通融；b=2 允许例外但要求说明；c=3 明确维护队列规则。
    q(3, "大家排队买东西，有人想插一下队：", [
      ["a", "没办法只默默让他插队。", 1],
      ["b", "如果真的急，先让他说明原因。", 2],
      ["c", "给我老实回队尾去排队。", 3]
    ]),
    // Q08 | 维度04 规则敏感度：测“共同约定被反复忽略时，是忍让、提醒，还是重申协议”。
    // 给分：a=1 为避免僵局先忍；b=2 轻提醒并观察；c=3 把规则重新说清楚。
    q(3, "合租室友总是不按约定倒垃圾，你会：", [
      ["a", "先忍几次，别把气氛搞僵。", 1],
      ["b", "提醒一下，看看对方反应。", 2],
      ["c", "把规则重新说清楚，别靠猜。", 3]
    ]),
    q(4, "朋友问你借视频会员账号，你会：", [
      ["a", "直接给，反正朋友嘛无所谓。", 1],
      ["b", "看关系和用途，临时给一下可以。", 2],
      ["c", "不太想共享私人账号，会让他找别人吧。", 3]
    ]),
    q(4, "同事临时把一堆活丢给你，说“顺手帮我做了呗”：", [
      ["a", "不好意思拒绝，最后得自己加班做。", 1],
      ["b", "先问清楚优先级和截止时间，以及为什么让我来做。", 2],
      ["c", "只能帮一部分，剩下自己想办法吧。", 3]
    ]),
    // Q11 | 维度06 冲突显性度：测“表面和气但实际有分歧时，是否把隐性问题显性化”。
    // 给分：a=2 温和收窄约束；b=3 直接拍板破除僵局；c=1 回避分歧、交给随机。
    q(5, "朋友点菜时大家都说“随便”，你会：", [
      ["a", "先问忌口和有什么想吃的，把范围缩小。", 2],
      ["b", "让大家必须每人自己选一道菜", 3],
      ["c", "相信自己的品味，直接全部点完。", 1]
    ]),
    // Q12 | 维度06 冲突显性度：测“群体快要默认通过错误方向时，是否提出异议”。
    // 给分：a=3 抓关键点问清楚；b=2 温和表达担心；c=1 放过问题、避免介入。
    q(5, "会议里你觉得方向不对，但大家都快点头了：", [
      ["a", "挑个关键点问清楚，别让问题糊过去。", 3],
      ["b", "会补一句担心，语气尽量温和。", 2],
      ["c", "算了，下班比较重要。", 1]
    ]),
    // Q13 | 维度07 需求解析力：测“含糊输入出现时，能否主动拆出条件、约束和底线”。
    // 给分：a=3 自动解析多种约束；b=2 按默认理解先做；c=1 被含糊输入卡住。
    q(6, "有人发来一句“你看着弄吧”，你脑内会：", [
      ["a", "自动列出几种可能：预算、风格、时间、底线。", 3],
      ["b", "先按常规理解做个版本。", 2],
      ["c", "这四个字让我很想原地重启。", 1]
    ]),
    q(6, "看一篇很长的群公告，你通常：", [
      ["a", "轻松提取时间、地点、具体意思。", 3],
      ["b", "看个大概，重要的部分再回头细品。", 2],
      ["c", "先收藏，以后我应该会再看的，也许吧。", 1]
    ]),
    q(7, "玩一个新桌游，规则书有四五页，你会：", [
      ["a", "认真研读规则，学会后解释给朋友们。", 3],
      ["b", "边玩边学，不会了再看规则书。", 2],
      ["c", "谁会谁教我，我负责气氛。", 1]
    ]),
    q(7, "刷到一个新互联网热梗，你更像：", [
      ["a", "马上想知道它从哪来、为什么火。", 3],
      ["b", "会用就行，别解释，解释就不灵了。", 2],
      ["c", "等它过气了我可能刚看懂。", 1]
    ]),
    q(8, "旅行到了陌生城市，计划突然变了：", [
      ["a", "没事，打开地图找新的站点不就好了。", 3],
      ["b", "有点慌，但能改路线。", 2],
      ["c", "计划没了，我也快没了。", 1]
    ]),
    q(8, "别人说“之后再看情况”，你通常：", [
      ["a", "知道别人只是客套话而已，无所谓。", 3],
      ["b", "会记在心里，后面有机会会再问他。", 2],
      ["c", "很难受，我想要明确答案。", 1]
    ]),
    q(9, "周末突然空出来半天，你会：", [
      ["a", "马上想搞点东西：做饭、整理角落、vibe coding。", 3],
      ["b", "看心情，有灵感就动。", 2],
      ["c", "躺平也是项目好不啦。", 1]
    ]),
    // Q20 | 维度10 创建驱动力：测“别人提出模糊活动时，是否主动搭主题、流程和结构”。
    // 给分：a=3 主动建构活动；b=2 先观察集体意愿；c=1 愿参与但不想从零张罗。
    q(9, "朋友说“我们搞个小活动吧”，你会：", [
      ["a", "开始想主题、流程和谁来负责。", 3],
      ["b", "先听听大家想不想玩。", 2],
      ["c", "可以，但别让我从零开始张罗。", 1]
    ]),
    q(10, "看到家里乱成一团，你会：", [
      ["a", "先忍，等哪天爆发式整理。", 2],
      ["b", "现在就让你看看什么叫收纳大师。", 3],
      ["c", "看不见就是不乱。", 1]
    ]),
    q(10, "手机相册里有几千张重复截图，你会：", [
      ["a", "偶尔删几张最前面的意思下。", 2],
      ["b", "清理模式启动，分类、删重、回顾。", 3],
      ["c", "它们住得挺好，不打扰。", 1]
    ]),
    // Q23 | 维度12 执行节奏：测“推进琐事时的节奏稳定性和启动强度”。
    // 给分：a=1 容易漂移中断；b=2 分块稳步推进；c=3 一口气进入执行脉冲。
    q(11, "你做家务的节奏通常是：", [
      ["a", "想到哪做到哪，中间可能被沙发截胡。", 1],
      ["b", "分块处理，慢慢推进。", 2],
      ["c", "开音乐，一口气清场。", 3]
    ]),
    // Q24 | 维度12 执行节奏：测“面对小待办时，是快速清理、稳定排序，还是拖到变大”。
    // 给分：a=3 先快速清掉一批；b=2 按顺序稳定处理；c=1 拖延到问题变大。
    q(11, "面对待办清单上的小事，你更像：", [
      ["a", "先清掉几个，心里立刻轻一点。", 3],
      ["b", "按顺序来，不慌不忙。", 2],
      ["c", "等它们长成大事再说。", 1]
    ]),
    // Q25 | 维度13 外部依赖度：测“多人协作中，是否容易被别人未回复卡住”。
    // 给分：a=1 先推进可确定部分、低依赖；b=2 等待并提醒；c=3 强依赖对方响应。
    q(12, "约饭时有人迟迟不回消息，你会：", [
      ["a", "先定能定的，不等所有人同步。", 1],
      ["b", "等一会儿，再提醒一次。", 2],
      ["c", "整件事都被那个未读卡住了。", 3]
    ]),
    // Q26 | 维度13 外部依赖度：测“流程需要外部确认时，是否能降低等待链路阻塞”。
    // 给分：a=1 提前准备、减少往返；b=2 正常等待流程；c=3 容易停在等待回复上。
    q(12, "办事需要别人盖章或确认，你通常：", [
      ["a", "提前准备材料，尽量减少来回。", 1],
      ["b", "正常等流程，有问题再补。", 2],
      ["c", "很容易被卡在“等对方回复”。", 3]
    ]),
    q(13, "两个朋友在群里吵起来，但其实说的不是一件事：", [
      ["a", "会试着把双方真正想说的翻译出来。", 3],
      ["b", "提醒他们先别上头，这里面有误会。", 2],
      ["c", "默默潜水吃瓜，别 cue 我。", 1]
    ]),
    // Q28 | 维度14 沟通转译力：测“多方角色各说各话时，能否整理成共享语言/清单”。
    // 给分：a=3 翻成统一清单；b=2 对齐关键句；c=1 只处理自己相关片段。
    q(13, "老板、同事、客户各说各的，你更可能：", [
      ["a", "把话翻成同一张清单：谁要什么，什么时候要。", 3],
      ["b", "帮忙对齐最关键的几句。", 2],
      ["c", "只处理跟我有关的那一段。", 1]
    ]),
    q(14, "群里大家都在夸一个你觉得一般的东西，你会：", [
      ["a", "不破坏气氛，夸夸又不会损失什么。", 1],
      ["b", "看关系，熟人才说真话。", 2],
      ["c", "表达它其实没有这么好，并解释为什么。", 3]
    ]),
    q(14, "你状态不好但还在社交场合里，你会：", [
      ["a", "努力营业，回家再躺。", 1],
      ["b", "自我调整，少说一点就好了。", 2],
      ["c", "直接说明今天有点不舒服，先失陪了。", 3]
    ])
  ];

  var personas = [
    p("200", "OK", "守约可靠型", "你是那种约会从不迟到、遇到危机能抗事的人。别人喜欢把重任委托给你，而你总能完美交出答卷。", "可靠、负责、守约，擅长把混乱的局面收拾得条条有理。", "小心把可靠变成自动接单，偶尔也要让别人学会自己解决麻烦。", "H,H,H,M,M,M,H,M,M,M,L,H,L,M,M", "[ OK ]\n(｀・ω・´)ゝ"),
    p("201", "Created", "天马行空型", "你的快乐常出现在“不如我们做一个这样的”之后。空白不会吓退你，反而像一张等你开头的便签。", "想象力丰富、鬼点子多、思维跳跃。", "想法是最不值钱的东西，别让灵感变成未来自己的待办。", "M,M,M,M,M,M,M,H,M,H,M,H,M,M,H", "+ new +\n(＾▽＾)つ□"),
    p("204", "No Content", "沉默寡言型", "你不喜欢发表自己的观点，信奉少即是多，没必要浪费自己的能量在无意义的事情上", "克制、冷静、理性，别人永远觉得你最捉摸不透。", "等到念旧的年龄回头看，会不会担心找不到自己在时光中留下过的痕迹。", "H,H,H,H,H,L,M,M,L,L,L,H,L,L,L", "...\n( -_-)"),
    p("301", "Moved Permanently", "长期迁移型", "你很擅长和旧版本的自己和平告别。只要新路径更合理，你愿意慢慢整理、搬家、步履不停。", "断舍离、重构、长期规划、把灵魂迁移到更合适的位置。", "别把每个小问题都升级成大型搬迁，有些东西擦一擦灰尘也能继续用。", "M,H,M,H,M,M,H,H,H,M,H,M,M,H,M", "old -> new\n(｀へ´)>"),
    p("302", "Found", "临时重定向型", "你很擅长在混乱现场中找到那座隐藏的安全岛。计划有变也不慌，你的救场能力通常能将局面导向正轨。", "灵活、随机应变、临场能力强，请导播在这一刻给你放三到五分钟的广告。", "小心临时方案用太多变成默认路线，记得回头确认真正的目的地。", "M,M,H,M,M,M,H,M,H,M,M,H,H,H,M", "go -> ?\n( ＾_＾)つ"),
    p("304", "Not Modified", "保守型", "你珍惜好用的旧方法。不是不进步，是你知道稳定经验也是一种资产。", "保守、节约、求稳，讨厌为了新鲜而新鲜。", "缓存太久会错过更新，偶尔也要刷新一下页面，不要和世界脱轨。", "H,H,H,H,M,L,M,M,L,L,L,M,L,L,L", "[cached]\n(￣ー￣)"),
    p("400", "Bad Request", "高敏纠错型", "你对含糊、敷衍和暗语有天然雷达。别人觉得没问题、差不多，你已经看到后面会怎么翻车。", "敏锐、洞察力强、总能发现事情的盲点，帮大家少走弯路。", "别让每一次洞察都变成你的内耗，有些问题可以自己避雷，没必要非去说服迟钝的人", "M,M,M,H,M,H,H,M,L,L,M,M,M,M,M", "???\n(눈_눈)"),
    p("401", "Unauthorized", "权限边界型", "你的私人边界自带门禁。熟归熟，规则归规则，亲密也不等于无底线。", "边界感、守规则，能保护自己和重要关系不被透支。", "有时可以解释一下“为什么不行”，世界会少误会你一点。", "H,H,M,H,H,M,M,M,L,L,L,M,L,M,L", "[locked]\n(｀_´)ゞ"),
    p("402", "Payment Required", "成本核算型", "你脑内常驻一个小算盘，算的不是吝啬，而是时间、精力、金钱和情绪值。", "会判断投入产出，知道哪些事值得花精力，哪些只是短期看起来划算实际以后是个雷。", "别让计算成本盖过真正值得投入的关系和体验。", "M,H,H,H,H,M,H,M,M,M,M,M,M,M,M", "$ _ $\n(¬‿¬)"),
    p("403", "Forbidden", "拒绝型", "你的底线不容侵犯，不喜欢就算不喜欢，不愿意就是不愿意。", "强势，勇敢、关键时刻敢说不，能替场面踩住刹车。", "不要把“拒绝”当成价值感来源，避免把“我不在乎别人”当成”我很酷“的想法", "M,H,H,H,H,H,M,M,L,L,M,M,L,M,H", "NO.\n(￣^￣)"),
    p("404", "Not Found", "路痴型", "你常常走着走着就打开了支线任务。迷路对你来说不是失败，只是刚好开拓未知领域。", "探索、联想、在未知里找线索，能发现别人没注意的桃花源。", "记得隔一段时间确认自己到底在找什么，不然容易掉进死胡同无法回城。", "L,M,M,L,L,L,M,H,H,M,M,L,H,L,H", "where?\n(・_・?)"),
    p("408", "Request Timeout", "慢热延迟型", "你不是没反应，只是在思考。给你一点处理时间，你会返回一个比抢答更稳的答案。", "深思、谨慎、遇到复杂的事往往不会马上下结论。", "要学会发出“reconnecting”的信号，不然别人会以为连接断了。", "M,M,L,M,M,L,M,H,H,L,M,L,H,L,M", "wait...\n( _ _ )"),
    p("409", "Conflict", "冲突协调型", "你能听见表面吵架下面真正卡住的地方。你不怕分歧，怕的是大家各说各话。", "拆冲突、找共同目标、把混在一起的问题分开。", "别把所有矛盾都背到自己身上，有些冲突不是你负责修复的。", "M,H,M,H,M,H,H,H,M,M,M,M,H,H,M", "><\n(ง'̀-'́)ง"),
    p("422", "Unprocessable Content", "深度解析型", "你不是挑刺，你是真的消化不了不合理。看懂之后还不对，这才最让你难受。", "理解深、追问准，能看出漂亮话下面的结构问题。", "有时先给一个能走的小版本，比把所有逻辑一次理顺更有用。", "M,M,M,H,M,M,H,H,L,L,H,M,M,M,M", "[parse]\n(¬_¬ )"),
    p("429", "Too Many Requests", "过载限流型", "“都别急，做完你的做你的”，你能力很强能处理很多，但是需求太多了根本做不完。", "高吞吐、会排队、能识别过载，适合处理复杂但可分批的事。", "不要等到快崩了才宣布限流，提前说清楚会更轻松。", "H,M,L,M,M,M,H,M,L,M,M,H,H,M,M", "!!!\n(×_×)"),
    p("500", "Internal Server Error", "内耗高压型", "你脑内算力很猛，压力大时也可能突然乱码。外面看是平静，里面已经开了十几个进程。", "能量强、理解深、推进猛，适合解决高复杂问题。", "请给自己日志、降级和休息机制，不要靠硬撑当散热。", "L,M,L,L,L,H,M,H,L,H,M,H,M,L,H", "ERR\n(╯°□°)╯"),
    p("502", "Bad Gateway", "系统中介型", "你经常夹在几方之间当翻译器。别人看到卡顿，你看到的是上下游都没对上频道。", "转译、协调、连接复杂关系，能把不同频道的人拉到同一页。", "不要把所有上游和下游的问题都算成自己的失败。", "M,M,L,M,M,M,H,H,M,L,L,M,H,H,M", "A -> ? -> B\n(・_・)ノ"),
    p("503", "Service Unavailable", "能量维护型", "你需要维护窗口，而且这很合理。暂停不是摆烂，是为了之后还能稳定营业。", "知道自己需要恢复，会保护核心资源，不轻易把自己烧干。", "要提前公告维护时间，不要等到彻底离线才消失。", "M,H,L,H,H,L,M,M,H,L,L,L,L,M,M", "offline\n(￣o￣) zzZ"),
    p("504", "Gateway Timeout", "等待断联型", "你常常被别人的未读、未确认、未回复拖住。不是你没做，是关键回应一直没回来。", "耐心、依赖管理、能感知链路阻塞。", "该超时就超时，该换路就换路，别把人生挂在一个加载圈上。", "M,M,L,M,M,L,M,M,H,L,L,L,H,M,L", "still...\n(・-・)")
  ];

  var hiddenPersona = {
    code: "418",
    status: "I'm a teapot",
    name: "反骨型",
    summary: "你不喜欢按常理走，也不喜欢被定义。题目问你咖啡还是茶，你选择把自己活成茶壶。",
    strength: "跳出框架、拒绝被粗暴归类、拥有奇怪但有效的自洽。",
    caution: "偶尔也要给世界一点可解析的回答，不然大家只能围着你猜。",
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
    sharedCode: "",
    lastStreamedIndex: -1,
    userName: "user"
  };

  var screen = document.getElementById("screen");
  var keypad = document.querySelector(".keypad");
  var streamTimers = [];

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

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function render() {
    if (state.mode !== "quiz") {
      cancelTextStream();
    }

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
          '<p class="line"><span class="meta-label meta-name">&gt; Last login</span>: ' +
            escapeHtml(
              lastReceipt.code +
                " " +
                lastReceipt.status +
                " - " +
                lastReceipt.name +
                " / " +
                formatDateTime(lastReceipt.generatedAt)
            ) +
            "</p>",
          '<div class="mini-actions">',
          '<button class="line-button" type="button" data-action="open-last" data-code="' +
            escapeHtml(lastReceipt.code) +
            '">review 查看上次结果</button>',
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
      '<p class="line">命令行风格的代码人格测试网站。</p>',
      '<p class="line">回答一些日常情境小问题，生成你的 HTTP 状态人格码。</p>',
      '</div>',
      '<div class="block">',
      '<p class="prompt">name 输入名字</p>',
      '<label class="name-line"><span class="input-marker">&gt;</span><input id="name-input" class="name-input" type="text" maxlength="24" placeholder="user" value="' +
        escapeHtml(state.userName === "user" ? "" : state.userName) +
        '" autocomplete="nickname" /></label>',
      '<div class="mini-actions">',
      '<button class="line-button" type="button" data-action="start-test">start 开始测试</button>',
      "</div>",
      state.notice ? '<p class="hint warn">' + escapeHtml(state.notice) + "</p>" : "",
      "</div>",
      draftHtml,
      lastReceiptHtml
    ].join("");
  }

  function renderQuiz() {
    var item = questions[state.index];
    var picked = state.buffer;
    var shouldStream = state.lastStreamedIndex !== state.index && !prefersReducedMotion();
    var optionHtml = item.options
      .map(function (option) {
        var className =
          "option" +
          (option.uncertain ? " is-uncertain" : "") +
          (picked === option.key ? " is-picked" : "");
        return [
          '<button class="' + className + '" type="button" data-answer="' + option.key + '">',
          '<span class="letter">[' + option.key + "]</span>",
          '<span class="option-text"' +
            (shouldStream ? ' data-stream-text="' + escapeHtml(option.text) + '"' : "") +
            ">" +
            (shouldStream ? "" : escapeHtml(option.text)) +
            "</span>",
          "</button>"
        ].join("");
      })
      .join("");

    cancelTextStream();
    if (shouldStream) {
      state.lastStreamedIndex = state.index;
    }

    screen.innerHTML = [
      '<div class="quiz-meta">',
      '<p><span class="meta-label meta-name">&gt; Name</span>: ' +
        escapeHtml(getReceiptSignature()) +
        "</p>",
      '<p><span class="meta-label meta-status">&gt; Status</span>：<span class="spinner" aria-hidden="true"></span> answering...</p>',
      '<p><span class="meta-label meta-question">&gt; Question</span>：<span class="progress-bar">' +
        escapeHtml(formatProgressBar(state.index, questions.length)) +
        "</span></p>",
      "</div>",
      '<div class="question">',
      '<p class="prompt">' +
        (shouldStream
          ? '<span data-stream-text="' + escapeHtml(item.text) + '"></span>'
          : escapeHtml(item.text)) +
        "</p>",
      '<div class="options">' + optionHtml + "</div>",
      "</div>",
      '<p class="input-line"><span class="input-marker">&gt;</span> ' +
        escapeHtml(state.buffer) +
        '<span class="cursor"></span></p>',
      state.notice ? '<p class="hint warn">' + escapeHtml(state.notice) + "</p>" : ""
    ].join("");

    if (shouldStream) {
      startTextStream();
    }
  }

  function renderPrinting() {
    screen.innerHTML = [
      '<div class="block printer-block">',
      '<p class="line">$ print receipt</p>',
      '<p class="line ok">status: generating</p>',
      '<pre class="printer-art">┌────────────────────────┐\n│ //// thermal head //// │\n└──────────┬─────────────┘\n           │\n           v\n        [ receipt ]</pre>',
      '<p class="input-line"><span class="input-marker">&gt;</span> <span class="printer-dots">printing</span><span class="cursor"></span></p>',
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
    var signature = getReceiptSignature();

    state.currentCode = persona.code;
    saveLastReceipt(persona, result.match, generatedAt);
    updateResultHash(persona.code);

    screen.innerHTML = [
      '<article class="receipt-paper">',
      '<p class="receipt-kicker">CODE PERSONA RECEIPT / 代码人格小票</p>',
      '<pre class="receipt-code">' + escapeHtml(formatCodeBox(persona)) + "</pre>",
      '<pre class="receipt-face">' + escapeHtml(persona.face) + "</pre>",
      '<h1 class="result-title">' + escapeHtml(persona.name) + "</h1>",
      '<p class="receipt-stamp">' + escapeHtml(getReceiptStamp(persona)) + "</p>",
      '<dl class="receipt-facts">',
      fact("GENERATED 生成时间", formatDateTime(generatedAt)),
      fact("DURATION 答题用时", formatDuration(durationMs)),
      fact("FIT 匹配感", result.match + "%"),
      fact("UNCLEAR 不确定", result.answerStats.dCount + "/" + questions.length),
      fact("SIGNATURE 小票签名", signature),
      fact("PACE 响应节奏", getPaceLabel(durationMs)),
      fact("TAGS 标签", extras.tags.join(" / ")),
      "</dl>",
      '<div class="result-grid">',
      section("DIAGNOSIS 诊断", mergeMotto(persona.summary, extras.motto)),
      section("BEST AT 擅长", persona.strength),
      section("WATCH OUT 注意", persona.caution),
      '<div class="result-section"><h2>SIGNALS 信号</h2><pre class="visualizer">' +
        escapeHtml(printout) +
        "</pre></div>",
      "</div>",
      '<p class="receipt-footer">-- receipt sealed / 小票已封存 --</p>',
      "</article>",
      '<div class="actions">',
      '<button class="text-button" type="button" data-action="restart">restart 重新测</button>',
      '<button class="text-button" type="button" data-action="copy">copy 复制</button>',
      '<button class="text-button" type="button" data-action="share">share 分享小票</button>',
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
      '<p class="receipt-kicker">CODE PERSONA RECEIPT / 代码人格小票</p>',
      '<pre class="receipt-code">' + escapeHtml(formatCodeBox(persona)) + "</pre>",
      '<pre class="receipt-face">' + escapeHtml(persona.face) + "</pre>",
      '<h1 class="result-title">' + escapeHtml(persona.name) + "</h1>",
      '<p class="receipt-stamp">' + escapeHtml(getReceiptStamp(persona)) + "</p>",
      '<dl class="receipt-facts">',
      fact("CODE 人格码", persona.code),
      fact("STATUS 状态", persona.status),
      fact("PACE 响应节奏", "opened from link / 链接打开"),
      fact("TAGS 标签", extras.tags.join(" / ")),
      "</dl>",
      '<div class="result-grid">',
      section("DIAGNOSIS 诊断", mergeMotto(persona.summary, extras.motto)),
      section("BEST AT 擅长", persona.strength),
      section("WATCH OUT 注意", persona.caution),
      '<div class="result-section"><h2>SIGNALS 信号</h2><pre class="visualizer">' +
        escapeHtml(formatPersonaSignalBars(persona)) +
        "</pre></div>",
      "</div>",
      '<p class="receipt-footer">-- Thanks for testing / 欢迎下次再来 --</p>',
      "</article>",
      '<div class="actions">',
      '<button class="text-button" type="button" data-action="restart">restart 再测一次</button>',
      '<button class="text-button" type="button" data-action="copy-shared">copy 复制</button>',
      '<button class="text-button" type="button" data-action="share">share 分享小票</button>',
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

  function getReceiptStamp(persona) {
    if (persona.hidden) return "TEAPOT / 隐藏人格";
    return "ISSUED / 人格码已出票";
  }

  function formatProgressBar(index, total) {
    var slots = 16;
    var filled = Math.round(((index + 1) / total) * slots);
    var current = String(index + 1).padStart(2, "0");
    return "[" + "█".repeat(filled) + "░".repeat(slots - filled) + "] " + current + "/" + total;
  }

  function cancelTextStream() {
    streamTimers.forEach(function (timer) {
      window.clearTimeout(timer);
    });
    streamTimers = [];
    Array.prototype.forEach.call(screen.querySelectorAll(".is-streaming"), function (node) {
      node.classList.remove("is-streaming");
    });
  }

  function startTextStream() {
    var nodes = Array.prototype.slice.call(screen.querySelectorAll("[data-stream-text]"));
    var nodeIndex = 0;

    function schedule(callback, delay) {
      var timer = window.setTimeout(callback, delay);
      streamTimers.push(timer);
    }

    function playNextNode() {
      var node = nodes[nodeIndex];

      if (!node) {
        streamTimers = [];
        return;
      }

      if (!document.body.contains(node)) {
        nodeIndex += 1;
        playNextNode();
        return;
      }

      streamTextInto(node, node.getAttribute("data-stream-text") || "", function () {
        nodeIndex += 1;
        schedule(playNextNode, 22);
      }, schedule);
    }

    playNextNode();
  }

  function streamTextInto(node, text, done, schedule) {
    var index = 0;
    var step = Math.max(2, Math.ceil(text.length / 18));

    node.classList.add("is-streaming");

    function tick() {
      if (!document.body.contains(node)) return;

      index = Math.min(text.length, index + step);
      node.textContent = text.slice(0, index);

      if (index >= text.length) {
        node.classList.remove("is-streaming");
        done();
        return;
      }

      schedule(tick, 18);
    }

    tick();
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

  function formatPersonaSignalBars(persona) {
    var rows = [
      ["STABLE 稳定", normalizeTargetGroup(persona.target, 0, 3)],
      ["BOUND 边界", normalizeTargetGroup(persona.target, 3, 6)],
      ["PARSE 解析", normalizeTargetGroup(persona.target, 6, 9)],
      ["DRIVE 行动", normalizeTargetGroup(persona.target, 9, 12)],
      ["LINK 连接", normalizeTargetGroup(persona.target, 12, 15)]
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

  function getReceiptSignature() {
    return normalizeUserName(state.userName);
  }

  function normalizeUserName(value) {
    var name = String(value || "").trim().replace(/\s+/g, " ");
    return name ? name.slice(0, 24) : "user";
  }

  function readNameInput() {
    var input = document.getElementById("name-input");
    return normalizeUserName(input ? input.value : state.userName);
  }

  function mergeMotto(text, motto) {
    var note = String(motto || "").replace(/^今日小纸条：/, "");
    return note ? text + " " + note : text;
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

  function normalizeTargetGroup(target, start, end) {
    var sum = target.slice(start, end).reduce(function (total, value) {
      return total + value;
    }, 0);
    return sum / ((end - start) * 2);
  }

  function asciiBar(value) {
    var total = 17;
    var filled = Math.max(0, Math.min(total, Math.round(value * total)));
    var percent = Math.round(value * 100);
    return "█".repeat(filled) + "░".repeat(total - filled) + " " + String(percent).padStart(3, " ") + "%";
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
      "200": ["steady serving / 稳态营业", "今日小纸条：你可以可靠，但不必全天候在线。"],
      "201": ["create first / 先做小版", "今日小纸条：灵感很好，记得给未来的自己留说明书。"],
      "204": ["low-noise mode / 低噪音模式", "今日小纸条：沉默很酷，偶尔回个“收到”也很酷。"],
      "301": ["steady migration / 慢慢迁移", "今日小纸条：换路不是背叛旧路，是给自己更合适的出口。"],
      "302": ["temporary redirect / 临时改道", "今日小纸条：能绕开堵点是能力，记得别把临时路牌钉成永久门牌。"],
      "304": ["cached reuse / 缓存复用", "今日小纸条：旧方法能用，但别忘了偶尔刷新。"],
      "400": ["clarify input / 先澄清输入", "今日小纸条：你不是难搞，你是在保护大家不要集体翻车。"],
      "401": ["access gate / 门禁开启", "今日小纸条：边界感不是冷漠，是认真对待彼此。"],
      "402": ["budget first / 预算优先", "今日小纸条：你的精力也很贵，记得把自己算进成本。"],
      "403": ["hard boundary / 原则红线", "今日小纸条：拒绝可以很坚定，也可以很温柔。"],
      "404": ["map loading / 地图生成中", "今日小纸条：迷路时别急着自责，你可能正在发现新入口。"],
      "408": ["delayed response / 延迟响应", "今日小纸条：慢一点没关系，记得告诉别人你还在。"],
      "409": ["conflict diff / 冲突拆解", "今日小纸条：不是所有矛盾都需要你亲手修好。"],
      "422": ["deep parsing / 深度解析", "今日小纸条：看出不合理很珍贵，先落一小步也很珍贵。"],
      "429": ["rate limit / 主动限流", "今日小纸条：你不是不行，你只是不能无限并发。"],
      "500": ["graceful fallback / 降级恢复", "今日小纸条：高能大脑也需要散热片。"],
      "502": ["gateway translate / 频道转译", "今日小纸条：你可以当桥，但不必替两岸负责。"],
      "503": ["maintenance window / 维护窗口", "今日小纸条：暂停营业不是坏掉，是保养。"],
      "504": ["timeout reroute / 超时换路", "今日小纸条：等不到的回复，不一定值得一直等。"],
      "418": ["teapot protocol / 茶壶协议", "今日小纸条：如果世界无法解析你，先优雅地冒个热气。"]
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
      "302": ["灵活", "转向", "临场"],
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
          userName: state.userName,
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
      draft.userName = normalizeUserName(draft.userName);
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
    state.lastStreamedIndex = -1;
    state.userName = draft.userName;
    clearResultHash();
  }

  function startTest() {
    state.mode = "quiz";
    state.index = 0;
    state.buffer = "";
    state.answers = [];
    state.notice = "";
    state.startedAt = Date.now();
    state.finishedAt = 0;
    state.currentCode = "";
    state.sharedCode = "";
    state.lastStreamedIndex = -1;
    state.userName = readNameInput();
    clearDraft();
    clearResultHash();
  }

  function handleKey(key) {
    state.notice = "";
    key = normalizeKey(key);

    if (!key) return;

    if (state.mode === "intro") {
      if (key === "enter") {
        startTest();
      } else {
        state.notice = "press enter to start";
      }
      render();
      return;
    }

    if (state.mode === "result") {
      return;
    }

    if (state.mode === "shared") {
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
      }, 1800);
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
    state.lastStreamedIndex = -1;
    state.userName = "user";
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

  async function shareResult() {
    var receipt = document.querySelector(".receipt-paper");
    var code = state.currentCode || readSharedCode() || "receipt";
    var dataUrl;

    if (!receipt) {
      state.notice = "receipt not ready";
      render();
      return;
    }

    try {
      dataUrl = await buildReceiptImage(receipt);
    } catch (error) {
      dataUrl = buildReceiptTextImage(receipt);
    }

    if (isMobileDevice()) {
      showImageSavePrompt(dataUrl);
      state.notice = "image ready";
      render();
      return;
    }

    downloadDataUrl("code-persona-" + code + ".png", dataUrl);
    state.notice = "image downloaded";
    render();
  }

  function downloadDataUrl(filename, dataUrl) {
    var link = document.createElement("a");
    link.href = dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  async function buildReceiptImage(receipt) {
    var rect = receipt.getBoundingClientRect();
    var exportPadding = 0;
    var scale = 2;
    var receiptWidth = Math.ceil(rect.width);
    var receiptHeight = Math.ceil(receipt.scrollHeight || rect.height);
    var width = receiptWidth + exportPadding * 2;
    var height = receiptHeight + exportPadding * 2;
    var clone = receipt.cloneNode(true);
    var css = buildReceiptExportCss(width, receiptWidth);

    clone.style.width = receiptWidth + "px";
    clone.style.maxWidth = "none";
    clone.style.margin = "0";

    var html = [
      '<div xmlns="http://www.w3.org/1999/xhtml" class="receipt-export-root">',
      "<style>",
      css,
      "</style>",
      clone.outerHTML,
      "</div>"
    ].join("");
    var svg = [
      '<svg xmlns="http://www.w3.org/2000/svg" width="' +
        width +
        '" height="' +
        height +
        '" viewBox="0 0 ' +
        width +
        " " +
        height +
        '">',
      '<foreignObject width="100%" height="100%">',
      html,
      "</foreignObject>",
      "</svg>"
    ].join("");

    return svgToPng(svg, width, height, scale);
  }

  function buildReceiptExportCss(width, receiptWidth) {
    var rootStyle = window.getComputedStyle(document.documentElement);
    var variableNames = ["--bg", "--ink", "--muted", "--line", "--accent", "--accent-2", "--soft", "--warn", "--shadow", "--mono", "--receipt"];
    var variables = variableNames
      .map(function (name) {
        return name + ":" + rootStyle.getPropertyValue(name) + ";";
      })
      .join("");

    return [
      ":root,.receipt-export-root{",
      variables,
      "color-scheme:" + (document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light") + ";",
      "}",
      collectPageCss(),
      ".receipt-export-root{",
      "box-sizing:border-box;width:" + width + "px;min-height:100%;padding:0;background:var(--bg);color:var(--ink);",
      "font-family:var(--mono);font-size:16px;line-height:1.62;letter-spacing:0;",
      "}",
      ".receipt-export-root .receipt-paper{",
      "width:" + receiptWidth + "px;max-width:none;margin:0;box-shadow:none;",
      "}",
      ".receipt-export-root .actions,.receipt-export-root .hint{display:none;}",
      ".receipt-export-root,.receipt-export-root *{scrollbar-width:none;}",
      ".receipt-export-root *::-webkit-scrollbar{display:none;width:0;height:0;}",
      ".receipt-export-root .receipt-paper,.receipt-export-root .receipt-code,.receipt-export-root .receipt-face,.receipt-export-root .visualizer{overflow:visible!important;}"
    ].join("");
  }

  function collectPageCss() {
    return Array.prototype.map
      .call(document.styleSheets, function (sheet) {
        try {
          return Array.prototype.map
            .call(sheet.cssRules || [], function (rule) {
              return rule.cssText;
            })
            .join("\n");
        } catch (error) {
          return "";
        }
      })
      .join("\n");
  }

  function svgToPng(svg, width, height, scale) {
    return new Promise(function (resolve, reject) {
      var image = new Image();
      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d");
      var url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);

      canvas.width = width * scale;
      canvas.height = height * scale;
      image.onload = function () {
        context.scale(scale, scale);
        context.drawImage(image, 0, 0, width, height);
        resolve(canvas.toDataURL("image/png"));
      };
      image.onerror = reject;
      image.src = url;
    });
  }

  function buildReceiptTextImage(receipt) {
    var style = window.getComputedStyle(document.documentElement);
    var bg = style.getPropertyValue("--bg").trim() || "#fdfcf7";
    var ink = style.getPropertyValue("--ink").trim() || "#151515";
    var muted = style.getPropertyValue("--muted").trim() || "#69665f";
    var accent = style.getPropertyValue("--accent-2").trim() || "#225c7a";
    var lines = normalizeReceiptLines(receipt.innerText);
    var scale = 2;
    var width = 760;
    var paddingX = 44;
    var paddingY = 44;
    var lineHeight = 25;
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    var wrappedLines;
    var height;

    context.font = "18px Courier New, ui-monospace, monospace";
    wrappedLines = wrapReceiptLines(lines, context, width - paddingX * 2);
    height = Math.max(760, paddingY * 2 + wrappedLines.length * lineHeight + 34);

    canvas.width = width * scale;
    canvas.height = height * scale;
    context.scale(scale, scale);
    context.fillStyle = bg;
    context.fillRect(0, 0, width, height);
    drawTearLine(context, paddingX, width - paddingX, 24, muted);
    drawTearLine(context, paddingX, width - paddingX, height - 24, muted);

    context.fillStyle = ink;
    context.font = "18px Courier New, ui-monospace, monospace";
    context.textBaseline = "top";

    wrappedLines.forEach(function (line, index) {
      var text = line.text;
      var y = paddingY + index * lineHeight;
      context.fillStyle = line.kind === "muted" ? muted : line.kind === "accent" ? accent : ink;
      context.fillText(text, paddingX, y);
    });

    return canvas.toDataURL("image/png");
  }

  function normalizeReceiptLines(text) {
    return String(text)
      .split("\n")
      .map(function (line) {
        return line.trimEnd();
      })
      .filter(function (line, index, lines) {
        return line || lines[index - 1];
      });
  }

  function wrapReceiptLines(lines, context, maxWidth) {
    var output = [];

    lines.forEach(function (line) {
      var kind = getReceiptLineKind(line);
      var chunks = line ? wrapLine(line, context, maxWidth) : [""];
      chunks.forEach(function (chunk) {
        output.push({ text: chunk, kind: kind });
      });
    });

    return output;
  }

  function wrapLine(line, context, maxWidth) {
    var words = String(line).split("");
    var rows = [];
    var current = "";

    words.forEach(function (char) {
      var next = current + char;
      if (context.measureText(next).width > maxWidth && current) {
        rows.push(current);
        current = char;
      } else {
        current = next;
      }
    });

    if (current || !rows.length) rows.push(current);
    return rows;
  }

  function getReceiptLineKind(line) {
    if (/^(CODE PERSONA|SHARED CODE|GENERATED|DURATION|FIT|UNCLEAR|SIGNATURE|PACE|CODE |STATUS|TAGS)/.test(line)) {
      return "muted";
    }
    if (/^(\+|\||\[|FIT|UNCLEAR|STABLE|BOUND|PARSE|DRIVE|LINK|signature|pace|clarity|packet|receipt)/.test(line)) {
      return "accent";
    }
    return "ink";
  }

  function drawTearLine(context, startX, endX, y, color) {
    var text = "^".repeat(96);
    context.save();
    context.beginPath();
    context.rect(startX, y - 4, endX - startX, 16);
    context.clip();
    context.fillStyle = color;
    context.font = "14px Courier New, ui-monospace, monospace";
    context.fillText(text, startX, y);
    context.restore();
  }

  function showImageSavePrompt(dataUrl) {
    closeImageSavePrompt();
    document.documentElement.classList.add("has-image-save-modal");
    document.body.classList.add("has-image-save-modal");
    var modal = document.createElement("div");
    var isIos = /iphone|ipad|ipod/i.test(navigator.userAgent || "");
    modal.className = "image-save-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.innerHTML = [
      '<div class="image-save-panel">',
      '<p class="receipt-kicker">RECEIPT IMAGE / 小票图片</p>',
      '<img alt="代码人格小票图片" src="' + dataUrl + '" />',
      '<p class="hint ok">' +
        (isIos ? "iOS：长按图片，选择“存储到照片”。" : "长按图片保存到相册。") +
        "</p>",
      '<button class="text-button" type="button" data-action="close-image">close 关闭</button>',
      "</div>"
    ].join("");
    document.body.appendChild(modal);
  }

  function closeImageSavePrompt() {
    var modal = document.querySelector(".image-save-modal");
    if (modal) modal.remove();
    document.documentElement.classList.remove("has-image-save-modal");
    document.body.classList.remove("has-image-save-modal");
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  function isMobileDevice() {
    return /android|iphone|ipad|ipod|mobile/i.test(navigator.userAgent || "") || window.innerWidth < 720;
  }

  function buildShareText() {
    var result = scoreAnswers();
    var extras = getPersonaExtras(result.persona.code);
    var generatedAt = state.finishedAt || Date.now();
    var durationMs = Math.max(0, generatedAt - (state.startedAt || generatedAt));
    var signature = getReceiptSignature();

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
      mergeMotto(result.persona.summary, extras.motto),
      "tags: " + extras.tags.join(" / "),
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
      mergeMotto(persona.summary, extras.motto),
      "tags: " + extras.tags.join(" / ")
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
    if (/^(input|textarea|select)$/i.test(event.target.tagName || "")) {
      if (event.key === "Enter" && state.mode === "intro") {
        event.preventDefault();
        startTest();
        render();
      }
      return;
    }
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
    if (action === "start-test") {
      startTest();
      render();
    }
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
    if (action === "share") {
      shareResult();
    }
  });

  function updateKeypadState() {
    keypad.classList.toggle("is-hidden", state.mode !== "quiz");
    Array.prototype.forEach.call(keypad.querySelectorAll("button[data-key]"), function (button) {
      var key = button.getAttribute("data-key");
      button.classList.toggle("is-active", state.mode === "quiz" && key === state.buffer);
      button.classList.toggle("is-muted", state.mode === "printing");
    });
  }

  document.addEventListener("click", function (event) {
    var closeButton = event.target.closest('[data-action="close-image"]');
    if (closeButton) {
      closeImageSavePrompt();
      return;
    }

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
    applyTheme(localStorage.getItem("code-persona-theme") || "dark");
  } catch (error) {
    applyTheme("dark");
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
