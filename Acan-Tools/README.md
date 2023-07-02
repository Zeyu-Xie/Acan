# Acan Tools

### state

| 名称      | 含义             |
| --------- | ---------------- |
| toolName  | 当前工具名称     |
| isLoading | 是否处于加载状态 |

-----

### action

| 名称       | 调用                       | 含义                       |
| ---------- | -------------------------- | -------------------------- |
| loading    | ```loading()```            | 进入加载状态               |
| loaded     | ```loaded()```             | 退出加载状态               |
| switchTool | ```switchTool(toolName)``` | 切换至名为 toolName 的工具 |

----

### component

| 名称           | 含义             |
| -------------- | ---------------- |
| Navbar         | 导航栏           |
| Key            | 密钥生成工具     |
| Md5            | Md5 码获取工具   |
| RandomPassword | 随机密码生成工具 |
| RandomUser     | 随机用户生成工具 |
| Translate      | 翻译工具         |

#### Navbar

**传入参数：**toolName

**传出参数**：

1. isLoading（loading，loaded）
2. toolName（switchTool）

#### 工具组件

**传入参数：**无

**传出参数**：

1. isLoading（loading，loaded）
