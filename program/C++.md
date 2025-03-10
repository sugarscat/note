# C++ 语言

## 一、C++ 语言概述

C++ 语言起源于 C 语言，但远不止于此，它是一门支持过程化、面向对象乃至泛型编程的多范式语言。它既能继承 C 的高效与底层操作能力，又引入了类、继承、多态等特性，使得开发大型软件系统成为可能。  
短促的句子中透露着冷静严谨，而长句则展现了灵活多变的表达，这正是 C++ 所追求的多样性与深度。C++ 广泛应用于游戏开发、系统编程、图形处理以及金融系统等多个领域，成为构建高性能软件的重要利器。

## 二、基本语法与数据类型

C++ 的基础语法继承了 C 的精髓，同时又在变量、数据类型和运算符方面进行了扩展和改进。

- **基本数据类型**：包括整型（int、long、short）、浮点型（float、double）、字符型（char）、布尔型（bool）等。
- **派生类型**：指针、数组、引用、枚举以及结构体（struct）等，其中引用是 C++ 独有的特性，提供了更为直观的间接访问方式。

示例代码：

```cpp
#include <iostream>
using namespace std;

int main() {
    int a = 42;
    double pi = 3.14159;
    char ch = 'C';
    bool flag = true;  // 真值与假值之间的简单选择

    // 引用变量：别名的概念，简洁而直观
    int &ref = a;

    cout << "整数 a: " << a << endl;
    cout << "圆周率 pi: " << pi << endl;
    cout << "字符 ch: " << ch << endl;
    cout << "布尔 flag: " << flag << endl;
    cout << "引用 ref (即 a 的别名): " << ref << endl;
    return 0;
}
```

## 三、控制结构

C++ 保留了 C 的条件判断与循环结构，同时在风格和语法上有细微改进，既有直白的 if-else 语句，也有更灵活的 switch-case。

- **条件语句**：if、else if、else 构成逻辑分支；switch-case 则使多分支判断清晰直观。
- **循环语句**：for、while 和 do-while 满足不同场景的需求。短小的语句往往在紧凑逻辑中闪现，而长句则用来描述复杂条件。

示例代码（if-else 与 for 循环）：

```cpp
#include <iostream>
using namespace std;

int main() {
    int score;
    cout << "请输入分数：";
    cin >> score;

    if (score >= 90) {
        cout << "成绩优秀！" << endl;
    } else if (score >= 75) {
        cout << "成绩良好！" << endl;
    } else {
        cout << "需要努力提升。" << endl;
    }

    cout << "计数演示：";
    for (int i = 0; i < 5; i++) {
        cout << i << " ";
    }
    cout << endl;
    return 0;
}
```

## 四、函数与运算符

C++ 函数不仅支持函数重载和默认参数，还引入了内联函数（inline）以提高效率。

- **函数重载**：同名函数依据参数类型和个数实现不同功能；
- **默认参数**：使得函数调用更加灵活；
- **运算符重载**：可以自定义类的运算符行为，使得对象操作如同内置类型一般直观。

示例代码（函数重载与默认参数）：

```cpp
#include <iostream>
using namespace std;

// 函数重载：两个同名函数，根据参数类型执行不同操作
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

// 带默认参数的函数
void greet(string name = "Guest") {
    cout << "Hello, " << name << "!" << endl;
}

int main() {
    cout << "整数加法：10 + 20 = " << add(10, 20) << endl;
    cout << "浮点数加法：3.14 + 2.71 = " << add(3.14, 2.71) << endl;
    greet("Alice");
    greet();  // 使用默认参数
    return 0;
}
```

## 五、面向对象编程（OOP）

C++ 强调面向对象设计，类（class）和对象（object）构成了程序的基本单元。

- **类与对象**：类是对现实世界事物的抽象，数据和行为在此融合；
- **继承**：允许新类从已有类继承属性和方法，实现代码复用；
- **多态**：通过虚函数实现运行时的动态绑定，灵活应对变化；
- **封装**：数据私有化，保证内部实现细节对外不可见。

示例代码（简单的类及继承、多态）：

```cpp
#include <iostream>
using namespace std;

// 基类：动物
class Animal {
public:
    virtual void speak() {
        cout << "动物发出声音" << endl;
    }
};

// 派生类：猫
class Cat : public Animal {
public:
    void speak() override {  // 重写虚函数，实现多态
        cout << "喵喵叫" << endl;
    }
};

// 派生类：狗
class Dog : public Animal {
public:
    void speak() override {
        cout << "汪汪叫" << endl;
    }
};

int main() {
    Animal *a1 = new Cat();
    Animal *a2 = new Dog();

    a1->speak();  // 输出猫的叫声
    a2->speak();  // 输出狗的叫声

    delete a1;
    delete a2;
    return 0;
}
```

## 六、模板与泛型编程

C++ 模板为编写泛型程序提供了强大支持，允许我们编写与数据类型无关的代码，从而大幅提升代码复用性。

- **函数模板**：编写通用函数；
- **类模板**：构建通用数据结构；
- **模板特化**：针对特定类型做出定制实现。  
  短句之间的简洁与长句的详细说明交织在一起，彰显出 C++ 的灵活性与严谨性。

示例代码（函数模板）：

```cpp
#include <iostream>
using namespace std;

template <typename T>
T maxValue(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    cout << "max(10, 20): " << maxValue(10, 20) << endl;
    cout << "max(3.14, 2.71): " << maxValue(3.14, 2.71) << endl;
    return 0;
}
```

## 七、标准模板库（STL）

STL 是 C++ 的核心组成部分，它为常用数据结构和算法提供了标准化实现。

- **容器**：如 vector、list、map、set 等；
- **算法**：排序、查找、遍历等操作；
- **迭代器**：充当容器与算法之间的桥梁，优雅地遍历数据。  
  各种容器和算法在短句中透露出高效与灵活，而长句则为代码提供了必要的解释和背景。

示例代码（使用 vector 和 sort 算法）：

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> nums = {5, 3, 9, 1, 4};

    // 排序前的输出
    cout << "排序前：";
    for (int num : nums) {
        cout << num << " ";
    }
    cout << endl;

    // 使用 STL 算法排序
    sort(nums.begin(), nums.end());

    // 排序后的输出
    cout << "排序后：";
    for (int num : nums) {
        cout << num << " ";
    }
    cout << endl;
    return 0;
}
```

## 八、异常处理

异常处理机制使得程序在遇到错误时能够优雅地中断并进行修复，而不是直接崩溃。

- **try-catch 块**：捕获并处理异常；
- **throw**：抛出异常，让上层调用者处理。  
  短促有力的异常捕获语句，和解释性长句共同构成了严密的错误处理体系。

示例代码：

```cpp
#include <iostream>
#include <stdexcept>
using namespace std;

int divide(int a, int b) {
    if (b == 0)
        throw runtime_error("除数不能为零！");
    return a / b;
}

int main() {
    try {
        cout << "10 / 2 = " << divide(10, 2) << endl;
        cout << "10 / 0 = " << divide(10, 0) << endl;  // 将抛出异常
    } catch (const exception &e) {
        cout << "捕获异常: " << e.what() << endl;
    }
    return 0;
}
```

## 九、文件操作

C++ 中的文件操作主要依赖于 `<fstream>` 头文件，提供了 ifstream、ofstream 和 fstream 类。

- **ofstream**：用于写文件；
- **ifstream**：用于读文件；
- **fstream**：支持读写操作。  
  在简单与复杂之间转换，短句展示基础操作，长句解释细节。

示例代码：

```cpp
#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    // 写入文件
    ofstream outFile("example.txt");
    if (!outFile) {
        cerr << "无法创建文件！" << endl;
        return 1;
    }
    outFile << "Hello, C++ 文件操作！" << endl;
    outFile.close();

    // 读取文件
    ifstream inFile("example.txt");
    if (!inFile) {
        cerr << "无法打开文件！" << endl;
        return 1;
    }
    string line;
    while (getline(inFile, line)) {
        cout << line << endl;
    }
    inFile.close();
    return 0;
}
```

## 十、现代 C++ 特性

随着 C++11、C++14、C++17 及后续版本的推出，C++ 注入了大量现代特性，使得代码更加简洁、高效且安全。

- **auto 关键字**：自动类型推断，减少冗长代码；
- **nullptr**：明确的空指针常量，避免传统 NULL 的歧义；
- **lambda 表达式**：内联定义匿名函数，语法灵活；
- **智能指针**：如 `std::unique_ptr`、`std::shared_ptr`，自动管理内存，杜绝内存泄漏。

示例代码（使用 lambda 与智能指针）：

```cpp
#include <iostream>
#include <memory>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    // lambda 表达式：简洁地定义排序规则
    vector<int> vec = {4, 1, 7, 3, 9};
    sort(vec.begin(), vec.end(), [](int a, int b) {
        return a < b;
    });

    cout << "排序后：";
    for (int num : vec) {
        cout << num << " ";
    }
    cout << endl;

    // 使用智能指针管理动态内存
    unique_ptr<int> ptr(new int(100));
    cout << "智能指针中的值： " << *ptr << endl;
    return 0;
}
```

## 十一、综合实例解析

下面给出一个较为完整的实例，综合运用类、模板、STL 与文件操作，实现一个简单的“图书管理系统”。  
这个实例不仅体现了面向对象设计，还展示了如何利用模板和 STL 进行数据存储与排序，同时通过文件操作实现数据的持久化，短句与长句相互穿插，既注重逻辑严谨，又不失语言节奏的变化。

示例代码：

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <fstream>
#include <string>
using namespace std;

// 图书类定义
class Book {
public:
    string title;
    string author;
    double price;

    Book() : title(""), author(""), price(0.0) {}
    Book(string t, string a, double p) : title(t), author(a), price(p) {}

    // 显示图书信息
    void display() const {
        cout << "书名: " << title << ", 作者: " << author << ", 价格: " << price << endl;
    }
};

// 保存图书数据到文件
void saveBooks(const vector<Book> &books, const string &filename) {
    ofstream outFile(filename, ios::binary);
    if (!outFile) {
        cerr << "无法打开文件进行写入！" << endl;
        return;
    }
    size_t size = books.size();
    outFile.write(reinterpret_cast<const char *>(&size), sizeof(size));
    for (const auto &book : books) {
        size_t len = book.title.size();
        outFile.write(reinterpret_cast<const char *>(&len), sizeof(len));
        outFile.write(book.title.c_str(), len);

        len = book.author.size();
        outFile.write(reinterpret_cast<const char *>(&len), sizeof(len));
        outFile.write(book.author.c_str(), len);

        outFile.write(reinterpret_cast<const char *>(&book.price), sizeof(book.price));
    }
    outFile.close();
    cout << "图书数据已保存至 " << filename << endl;
}

// 从文件加载图书数据
vector<Book> loadBooks(const string &filename) {
    vector<Book> books;
    ifstream inFile(filename, ios::binary);
    if (!inFile) {
        cerr << "无法打开文件进行读取！" << endl;
        return books;
    }
    size_t size = 0;
    inFile.read(reinterpret_cast<char *>(&size), sizeof(size));
    for (size_t i = 0; i < size; ++i) {
        Book book;
        size_t len = 0;

        inFile.read(reinterpret_cast<char *>(&len), sizeof(len));
        book.title.resize(len);
        inFile.read(&book.title[0], len);

        inFile.read(reinterpret_cast<char *>(&len), sizeof(len));
        book.author.resize(len);
        inFile.read(&book.author[0], len);

        inFile.read(reinterpret_cast<char *>(&book.price), sizeof(book.price));
        books.push_back(book);
    }
    inFile.close();
    return books;
}

int main() {
    vector<Book> library;
    library.push_back(Book("C++ Primer", "Stanley B. Lippman", 59.99));
    library.push_back(Book("Effective C++", "Scott Meyers", 49.99));
    library.push_back(Book("The C++ Programming Language", "Bjarne Stroustrup", 69.99));

    // 按价格升序排序
    sort(library.begin(), library.end(), [](const Book &a, const Book &b) {
        return a.price < b.price;
    });

    cout << "排序后的图书列表：" << endl;
    for (const auto &book : library) {
        book.display();
    }

    // 保存图书数据
    saveBooks(library, "library.dat");

    // 加载图书数据
    vector<Book> loadedLibrary = loadBooks("library.dat");
    cout << "\n从文件加载的图书列表：" << endl;
    for (const auto &book : loadedLibrary) {
        book.display();
    }
    return 0;
}
```
