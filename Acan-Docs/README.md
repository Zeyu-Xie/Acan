# Acan Doc

### state

| 名称       | 含义                             |
| ---------- | -------------------------------- |
| docName    | 当前展示的文档名                 |
| is_loading | 是否正在加载（是否显示加载动画） |

----------

### action

| 名称      | 调用                     | 含义                      |
| --------- | ------------------------ | ------------------------- |
| loading   | ```loading()```          | 进入加载状态              |
| loaded    | ```loaded()```           | 退出加载状态              |
| switchDoc | ```switchDoc(docName)``` | 切换至名为 docName 的文档 |

------

### component

| 名称           | 含义       |
| -------------- | ---------- |
| Navbar         | 导航栏     |
| Preview        | 文档展示栏 |
| SpinningBorder | 加载动画   |

#### Navbar

**传入参数：**docName

**传出参数：**

1. docName（switchDoc）
2. is_loading（loading，loaded）

#### Preview

**传入参数：**docName

**传出参数：**无

#### SpinningBorder

**传入参数：**isLoading

**传出参数：**无