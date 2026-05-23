# Code Persona Test

一个 Bear Blog / ASCII 风格的代码人格诊断小网站。无需登录，无后端，直接打开 `index.html` 即可使用。

## 初版范围

- 18 个基础 HTTP 状态码人格
- 1 个隐藏款：`418 I'm a teapot`
- 15 个性格维度
- 每个维度 2 道题，总计 30 题
- 每题 3 个选项，分别计 1 / 2 / 3 分
- 移动端底部虚拟键盘：第一行 `a b ←`，第二行 `c d enter`
- 桌面端同样窄栏居中，也支持实体键盘输入

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

当最高匹配低于 60%，或最高匹配出现明显平局且距离仍较高时，触发隐藏款 `418 I'm a teapot`。

## 当前结果池

```txt
200 OK
201 Created
204 No Content
301 Moved Permanently
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
