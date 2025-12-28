# Python 学习笔记

## 1. Python 简介

Python 是一种高级、解释型、通用编程语言。它以简洁、易读的语法著称，非常适合编程初学者入门。Python 支持多种编程范式，包括面向对象、函数式和过程式编程。

### 特点：

- 语法简洁清晰
- 拥有丰富的标准库和第三方库
- 跨平台（Windows、macOS、Linux 等）
- 社区活跃，文档齐全

## 2. 安装 Python

1. 访问 [Python 官网](https://www.python.org/)
2. 下载适合你操作系统的最新版本（推荐 Python 3.9 或更高）
3. 安装时务必勾选 **Add Python to PATH**（Windows 用户）
4. 打开终端（命令提示符 / Terminal），输入 `python --version` 验证安装是否成功

## 3. 第一个 Python 程序

创建一个名为 `hello.py` 的文件，输入以下内容：

```python
print("Hello, World!")
```

在终端运行：

```bash
python hello.py
```

输出：

```
Hello, World!
```

## 4. 基本语法

### 注释

使用 `#` 添加单行注释：

```python
# 这是一条注释
print("这条语句会被执行")
```

多行注释可以用三个引号（虽然不是官方注释语法，但常用于文档字符串）：

```python
"""
这是一个多行字符串，
通常用作文档说明。
"""
```

### 缩进

Python 使用缩进来表示代码块（而不是大括号 `{}`）。一般使用 4 个空格作为一级缩进。

```python
if True:
    print("条件为真")
    print("仍在 if 块中")
print("不在 if 块中")
```

## 5. 变量与数据类型

### 变量命名规则

- 只能包含字母、数字和下划线（\_）
- 不能以数字开头
- 区分大小写
- 不能使用 Python 关键字（如 `if`, `for`, `while` 等）

### 常见数据类型

| 类型     | 示例                  | 说明           |
| -------- | --------------------- | -------------- |
| int      | `42`, `-7`            | 整数           |
| float    | `3.14`, `-0.001`      | 浮点数         |
| str      | `"hello"`, `'Python'` | 字符串         |
| bool     | `True`, `False`       | 布尔值         |
| NoneType | `None`                | 表示“无”或空值 |

### 变量赋值示例

```python
name = "Alice"      # 字符串
age = 25            # 整数
height = 1.75       # 浮点数
is_student = True   # 布尔值
nothing = None      # 空值
```

Python 是动态类型语言，变量类型在运行时自动确定，无需声明。

## 6. 基本输入与输出

### 输出：`print()`

```python
print("你好")
print("结果是:", 42)
print("A", "B", "C", sep="-")  # 使用 sep 指定分隔符
print("不换行", end=" ")       # 使用 end 控制结尾字符
print("继续")
```

### 输入：`input()`

```python
name = input("请输入你的名字: ")
print("你好,", name)
```

注意：`input()` 返回的是字符串类型，如需数字需转换：

```python
age = int(input("请输入年龄: "))
```

## 7. 运算符

### 算术运算符

- `+` 加
- `-` 减
- `*` 乘
- `/` 除（结果为浮点数）
- `//` 整除（向下取整）
- `%` 取余
- `**` 幂运算

```python
a = 10
b = 3
print(a / b)   # 3.333...
print(a // b)  # 3
print(a % b)   # 1
print(2 ** 3)  # 8
```

### 比较运算符

- `==` 等于
- `!=` 不等于
- `>`、`<`、`>=`、`<=`

### 逻辑运算符

- `and` 与
- `or` 或
- `not` 非

```python
x = 5
print(x > 3 and x < 10)  # True
print(not (x == 5))      # False
```

## 8. 控制结构

### 条件语句：`if`、`elif`、`else`

```python
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "D"

print("你的成绩等级是:", grade)
```

### 循环语句

#### `while` 循环

```python
count = 0
while count < 5:
    print("计数:", count)
    count += 1
```

#### `for` 循环

```python
# 遍历列表
fruits = ["苹果", "香蕉", "橙子"]
for fruit in fruits:
    print(fruit)

# 使用 range()
for i in range(5):        # 0 到 4
    print(i)

for i in range(2, 6):     # 2 到 5
    print(i)

for i in range(0, 10, 2): # 0, 2, 4, 6, 8
    print(i)
```

### 循环控制：`break` 和 `continue`

```python
for i in range(10):
    if i == 3:
        continue  # 跳过本次循环
    if i == 7:
        break     # 退出整个循环
    print(i)
```

## 9. 数据结构

### 列表（List）

有序、可变、允许重复元素。

```python
numbers = [1, 2, 3, 4]
mixed = [1, "hello", 3.14, True]

# 常用操作
numbers.append(5)        # 添加元素
numbers[0] = 10          # 修改元素
print(numbers[1:3])      # 切片 [2, 3]
print(len(numbers))      # 长度
```

### 元组（Tuple）

有序、不可变。

```python
point = (10, 20)
print(point[0])  # 10
# point[0] = 5   # 错误！元组不可修改
```

### 字典（Dict）

键值对集合，无序（Python 3.7+ 保持插入顺序）。

```python
person = {"name": "Bob", "age": 30}
print(person["name"])      # Bob

person["city"] = "北京"    # 添加/修改
del person["age"]          # 删除

for key in person:
    print(key, ":", person[key])
```

### 集合（Set）

无序、不重复元素的集合。

```python
colors = {"红", "绿", "蓝"}
colors.add("黄")
colors.discard("绿")
print("红" in colors)  # True
```

## 10. 函数

使用 `def` 定义函数：

```python
def greet(name):
    """打印问候语"""
    print("你好,", name)

greet("小明")
```

### 带返回值的函数

```python
def add(a, b):
    return a + b

result = add(3, 5)
print(result)  # 8
```

### 默认参数

```python
def say_hello(name="朋友"):
    print("你好,", name)

say_hello()          # 你好, 朋友
say_hello("李华")    # 你好, 李华
```

### 多返回值（实际返回一个元组）

```python
def get_name_age():
    return "张三", 28

name, age = get_name_age()
```

## 11. 模块与包

### 导入模块

```python
import math
print(math.sqrt(16))  # 4.0

from random import randint
print(randint(1, 10))
```

### 常用标准库

- `math`：数学运算
- `random`：随机数
- `datetime`：日期时间
- `os`：操作系统接口
- `sys`：系统相关参数

## 12. 异常处理

使用 `try...except` 捕获错误：

```python
try:
    num = int(input("请输入一个整数: "))
    result = 10 / num
    print("结果:", result)
except ValueError:
    print("输入的不是整数！")
except ZeroDivisionError:
    print("不能除以零！")
except Exception as e:
    print("发生了其他错误:", e)
else:
    print("没有发生异常")
finally:
    print("无论是否出错都会执行")
```

## 13. 文件操作

### 读取文件

```python
with open("example.txt", "r", encoding="utf-8") as f:
    content = f.read()
    print(content)
```

### 写入文件

```python
with open("output.txt", "w", encoding="utf-8") as f:
    f.write("这是写入的内容。\n")
```

使用 `with` 语句可自动关闭文件，推荐使用。

## 14. 小练习建议

1. 编写一个程序，计算用户输入的两个数的和、差、积、商。
2. 编写一个猜数字游戏（使用 `random.randint`）。
3. 创建一个通讯录（用字典存储姓名和电话）。
4. 读取一个文本文件，统计其中单词的数量。

## 15. 学习资源推荐

- 官方文档：https://docs.python.org/zh-cn/3/
- 菜鸟教程：https://www.runoob.com/python3/
- LeetCode（简单题）：https://leetcode.cn/
- 《Python Crash Course》（中文名：《Python编程：从入门到实践》）
