# Flask

> 来源：[易百教程](https://www.yiibai.com/flask)

## 应用程序

```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World'

if __name__ == '__main__':
    app.run()
```

Flask 类的一个对象是WSGI应用程序。

Flask 构造函数将当前模块的名称(`__name__`)作为参数。

Flask 类的`route()`函数是一个装饰器，它告诉应用程序哪个URL应该调用相关的函数。

```python
app.route(rule, options)
```

- *rule* 参数表示与该函数绑定的 URL 。

- *options* 是要转发给底层 Rule 对象的参数列表。

Flask 类的 `run()` 方法在本地开发服务器上运行应用程序。

```python
app.run(host, port, debug, options)
```

- `host`: 监听的主机名。默认为`127.0.0.1`(localhost)。 设置为`'0.0.0.0'`使服务器在外部可用；
- `port`: 监听端口号，默认为 `5000`；
- `debug`: 默认为 `false`，如果设置为 `true`，则提供调试信息；
- `options`: 被转发到底层的 `Werkzeug` 服务器。

## 路由

Flask中的 `route()` 装饰器用于将URL绑定到函数。 例如：

```python
@app.route('/hello')
def hello_world():
    return 'hello world'
```

URL `/hello` 规则绑定到 `hello_world()` 函数。用户访问此URL，就会调用 `hello_world()` 函数，这个函数中的执行的结果输出将在浏览器中呈现。

应用程序对象的`add_url_rule()`函数也可用于将URL与函数绑定，如上例所示，使用 `route()`。

```python
def hello_world():
    return 'hello world'

app.add_url_rule('/', 'hello', hello_world)
```

## 变量规则

可以通过将可变部分添加到规则参数来动态构建URL。 这个变量部分被标记为 `<variable-name>`。 它作为关键字参数传递给规则所关联的函数。

```python
from flask import Flask
app = Flask(__name__)

@app.route('/hello/<name>')
def hello_name(name):
    return 'Hello %s!' % name

if __name__ == '__main__':
    app.run(debug = True)
```

访问 `/hello/world`，那么 `world` 将作为参数提供给 `hello()` 函数。

除了默认的字符串变量部分之外，还可以使用以下转换器构造规则：

| 转换器  | 描述                            |
| ------- | ------------------------------- |
| `int`   | 接受整数                        |
| `float` | 对于浮点值                      |
| `path`  | 接受用作目录分隔符的斜杠符(`/`) |

```python
from flask import Flask
app = Flask(__name__)

@app.route('/blog/<int:num>')
def show_blog(num):
    return 'Blog Number %d' % num

@app.route('/rev/<float:num>')
def revision(num):
    return 'Revision Number %f' % num

if __name__ == '__main__':
    app.run()
```

Flask 的 URL 规则基于 Werkzeug 的路由模块。 这确保了形成的 URL 是唯一的，并且基于 Apache 制定的先例。

```python
from flask import Flask
app = Flask(__name__)

@app.route('/flask')
def hello_flask():
    return 'Hello Flask'

@app.route('/python/')
def hello_python():
    return 'Hello Python'

if __name__ == '__main__':
    app.run()
```

在第二条规则中，使用了尾部斜线(`/`)，变成了一个规范的URL。 访问 `/python` 或 `/python/` 返回相同的输出。 但是，在第一条规则的情况下， 访问 `/flask/`会导致 `404 Not Found` 页面。

## URL 构建

`url_for()` 函数接受函数的名称作为第一个参数，并接受一个或多个关键字参数，每个参数对应于URL的变量部分。

```python
from flask import Flask, redirect, url_for
app = Flask(__name__)

@app.route('/admin')
def hello_admin():
    return 'Hello Admin'

@app.route('/guest/<guest>')
def hello_guest(guest):
    return 'Hello %s as Guest' % guest

@app.route('/user/<name>')
def user(name):
    if name =='admin':
        return redirect(url_for('hello_admin'))
    else:
        return redirect(url_for('hello_guest',guest = name))

if __name__ == '__main__':
    app.run(debug = True)
```

- `redirect()` 重定向函数

`User()` 函数检查收到的参数是否与’admin’匹配。 如果匹配，则使用 `url_for()` 将应用程序重定向到 `hello_admin()`函数，否则将该接收的参数作为 `guest` 参数传递给 `hello_guest()` 函数。

## HTTP方法

| 方法     | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| `GET`    | 将数据以未加密的形式发送到服务器，这最常用的方法             |
| `HEAD`   | 与GET相同，但没有响应主体                                    |
| `POST`   | 用于将HTML表单数据发送到服务器。通过POST方法接收的数据不会被服务器缓存 |
| `PUT`    | 用上传的内容替换目标资源的所有当前表示                       |
| `DELETE` | 删除由URL给出的所有目标资源的所有表示                        |

默认情况下，Flask 路由响应 GET 请求。 但是，可以通过为 `route()` 装饰器提供方法参数来更改此首选项。

下面是 `POST`：

```python
from flask import Flask, redirect, url_for, request
app = Flask(__name__)

@app.route('/success/<name>')
def success(name):
    return 'welcome %s' % name

@app.route('/login',methods = ['POST', 'GET'])
def login():
    if request.method == 'POST':
        user = request.form['name']
        return redirect(url_for('success',name = user))
    else:
        user = request.args.get('name')
        return redirect(url_for('success',name = user))

if __name__ == '__main__':
    app.run(debug = True)
```

GET 方法获得 `name` 参数的值：

```python
user = request.args.get('name')
```

