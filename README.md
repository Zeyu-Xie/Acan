# ACANXIE.COM v1.0.0

### 功能

#### Acan Docs

html 格式文档展示，也是 ACANXIE.COM 的部分文本来源。允许的操作有：上传文档、下载文档、重命名文档（Self Introduction.html 以外）、删除文档（Self Introduction.html 以外）、浏览文档等，实现了简便的阅览日常常用文档。

#### Acan Photos

ACANXIE.COM 项目的配套图床，提供 API，支持在其它项目中使用。允许的操作有：上传图片、下载图片、拷贝图片地址、重命名图片、删除图片等，但限于服务器带宽，部分图片的加载时间可能较长。

#### Acan Tools

工具合集，使用方式均为一次性，不会在本地留下cookies等使用记录，产生的数据请及时保存。

目前支持的工具有：

- Key：生成随机的公钥-私钥对，目前支持的加密算法有：rsa、ecc、dsa、ed25519
- Translate：简易英译中翻译工具
- Md5：字符串的 md5 码计算器，输出32位和16位 md5 码
- Random Password：输入长度，生成四种类型的随机密码，分别为默认、无数字、无特殊符号、仅字母
- Random User：随机用户生成器，随机生成姓名、地址、邮箱等虚拟用户信息

### 部署方法

仅通过运行命令即可将该项目部署在个人的服务器，根据系统不同，本项目提供三种不同命令集合，任选一种即可完成部署。

#### 方法1️⃣：Makefile

要求：电脑上已安装`make`命令。

| 命令           | 功能                     |
| -------------- | ------------------------ |
| `make install` | 安装所有依赖项           |
| `make build`   | 执行前端子项目的构建命令 |
| `make clear`   | 删除所有依赖项           |

#### 方法2️⃣：Shell

要求：Mac OS系统

| 命令                    | 功能                     |
| ----------------------- | ------------------------ |
| `sh install.sh install` | 安装所有依赖项           |
| `sh install.sh build`   | 执行前端子项目的构建命令 |
| `sh install.sh clear`   | 删除所有依赖项           |

#### 方法3️⃣：Bat

要求：Windows系统

| 命令                    | 功能                     |
| ----------------------- | ------------------------ |
| `.\install.bat install` | 安装所有依赖项           |
| `.\install.bat build`   | 执行前端子项目的构建命令 |
| `.\install.bat clear`   | 删除所有依赖项           |

### 版本

版本号：v1.0.0

发布时间：Tue Jul 4 00:10:52 CST 2023

贡献者：[Zeyu-Xie](https://github.com/Zeyu-Xie)

发布地址：[Acan](https://github.com/Zeyu-Xie/Acan.git)