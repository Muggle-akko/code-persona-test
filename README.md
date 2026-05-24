# Code Persona Test

一个 Bear Blog / ASCII 风格的代码人格诊断小网站。无需登录，无后端，直接打开 `index.html` 即可使用。

## 初版范围

- 19 个基础 HTTP 状态码人格
- 1 个隐藏款：`418 I'm a teapot`
- 默认深色模式，右上角提供 `about`、`github` 和明暗切换
- `about.html` 为关于页模板，可继续手动填充
- 15 个性格维度
- 每个维度 2 道题，总计 30 题
- 每题 4 个选项：`a/b/c` 对应倾向分，`d` 为“无法判断/没遇到过”的中立项
- 开始测试前可输入名字；不输入时默认署名为 `user`
- 移动端底部虚拟键盘：第一行 `a b ←`，第二行 `c d enter`
- 虚拟键盘只在答题阶段显示
- 桌面端同样窄栏居中，也支持实体键盘输入
- 进入新题目时，题干和选项会快速流式输出
- 选项可直接点击，点同一选项两次可提交
- 结果生成前有模拟打印机过渡
- 结果页包含建议模式、签名、复制和图片分享
- 图片分享在桌面端下载 PNG，在移动端提示长按保存到相册
- 分享链接只携带人格码，可直接打开共享版小票
- 结果小票包含签名、响应节奏和信号比例
- 结果页包含人格标签
- 本地保存上一张小票摘要，回到首页时会显示 `Last login`
- 未完成答题会本地保存草稿，回到首页可继续或丢弃

## 15 维模型

```txt
系统稳定性模型
01 稳定交付感
02 错误恢复力
03 过载阈值

边界协议模型
04 规则敏感度
05 权限边界感
06 冲突显性度

信息处理模型
07 需求解析力
08 抽象理解力
09 不确定耐受度

行动驱动模型
10 创建驱动力
11 重构倾向
12 执行节奏

连接协作模型
13 外部依赖度
14 沟通转译力
15 表达真实度
```

## 匹配算法

每个维度 2 道题，单维原始分范围为 2-6。

```txt
2-3 = L
4   = M
5-6 = H
```

然后映射为：

```txt
L = 0
M = 1
H = 2
```

用户向量和人格预设向量使用曼哈顿距离匹配：

```txt
distance = sum(abs(user[i] - persona[i]))
match = 1 - distance / 30
```

当最高匹配低于 60%、多个结果距离过近，或用户大量选择 `d` 导致信号过于模糊时，触发隐藏款 `418 I'm a teapot`。

## 当前结果池

```txt
200 OK
201 Created
204 No Content
301 Moved Permanently
302 Found
304 Not Modified
400 Bad Request
401 Unauthorized
402 Payment Required
403 Forbidden
404 Not Found
408 Request Timeout
409 Conflict
422 Unprocessable Content
429 Too Many Requests
500 Internal Server Error
502 Bad Gateway
503 Service Unavailable
504 Gateway Timeout

hidden:
418 I'm a teapot
```

`206 Partial Content` 已按需求替换为 `402 Payment Required`。

## 本地预览

```sh
python3 -m http.server 4175 --bind 127.0.0.1
```

然后打开：

```txt
http://127.0.0.1:4175/
```

## GitHub + Vercel 部署

这是纯静态站，不需要安装依赖，也不需要构建命令。仓库里已经准备了：

- `.gitignore`：忽略 `.DS_Store`、`.vercel`、`node_modules`、`dist`
- `vercel.json`：启用干净 URL，例如 `/about` 可访问 `about.html`

提交到 GitHub：

```sh
git status
git add .
git commit -m "Prepare static site for Vercel"
git branch -M main
git remote add origin <你的 GitHub 仓库地址>
git push -u origin main
```

部署到 Vercel：

1. 打开 Vercel，新建项目，导入这个 GitHub 仓库。
2. Framework Preset 选择 `Other` 或保持自动识别。
3. Build Command 留空，Output Directory 留空或保持默认。
4. Deploy。
5. 在项目的 Domains 里添加自己的域名。
6. 按 Vercel 给出的 DNS 记录去域名服务商那里配置。
7. DNS 生效后，每次推送到 `main` 分支都会自动部署到生产域名。
