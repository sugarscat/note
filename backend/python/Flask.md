# Flask

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

在第二条规则中，使用了尾部斜线(`/`)，变成了一个规范的URL。 访问 `/python` 或 `/python/` 返回相同的输出。 但是，在第一条规则的情况下， 访问 `/flask/`会导致`404 Not Found`页面。
