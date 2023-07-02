# Acan Photos

### state

| 名称      | 含义           |
| --------- | -------------- |
| list      | 图片名称列表   |
| imageName | 当前图片名称   |
| isPreview | 是否在查看大图 |
| isLoading | 是否在加载状态 |

--------

### action

| 名称        | 调用                         | 含义                        |
| ----------- | ---------------------------- | --------------------------- |
| preview     | ```preview()```              | 进入大图查看状态            |
| unPreview   | ```unPreview()```            | 退出大图查看状态            |
| loading     | ```loading()```              | 加载状态                    |
| loaded      | ```loaded()```               | 退出加载状态                |
| setList     | ```setList(list)```          | 将 list 设置为参数 list     |
| switchImage | ```switchImage(imageName)``` | 切换至名为 imageName 的图片 |

----------

### component

| 名称          | 含义         |
| ------------- | ------------ |
| List          | 图片列表展示 |
| Preview       | 图片大图展示 |
| SpinnerBorder | 加载动画     |

#### List

**传入参数：**imageName，list，isPreview， isLoading

**传出参数**：

1. isPreview（preview）
2. imageName（switchImage）
3. isLoading（loading，loaded）
4. list（setList）

#### Preview

**传入参数：**imageName，list，isLoading

**传出参数：**

1. isLoading（loading，loaded）
2. isPreview（unPreview）

#### SpinnerBorder

**传入参数：**loading

**传出参数：**无