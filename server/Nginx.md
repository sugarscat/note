# Nginx

## 安装

### 更新包列表

首先，确保你的包列表是最新的：

```bash
sudo apt update
```

### 安装 Nginx

运行以下命令来安装 Nginx：

```bash
sudo apt install -y nginx
```

### 启动 Nginx 服务

安装完成后，启动 Nginx 服务：

```bash
sudo systemctl start nginx
```

### 配置 Nginx 开机自启

设置 Nginx 在系统启动时自动启动：

```bash
sudo systemctl enable nginx
```

### 检查 Nginx 状态

可以通过以下命令检查 Nginx 是否正在运行：

```bash
sudo systemctl status nginx
```

如果显示 `active (running)`，则表示 Nginx 正在正常运行。

目录结构：

- `/usr/sbin/nginx`：主程序
- `/etc/nginx`：存放配置文件
- `/usr/share/nginx` 或 `/var/www`: 存放静态文件
- `/var/log/nginx`：存放日志

### 配置防火墙允许 HTTP 和 HTTPS 流量

如果你的系统启用了 UFW（Uncomplicated Firewall），你需要允许 HTTP 和 HTTPS 流量。可以使用以下命令：

```bash
sudo ufw allow 'Nginx Full'
```

这将允许通过 80（HTTP）和 443（HTTPS）端口的流量。

### 测试 Nginx

安装并启动 Nginx 后，您可以在浏览器中访问服务器的 IP 地址，或者使用 `curl` 进行测试：

```bash
curl -I http://localhost
```

如果一切正常，您应该会看到类似以下的响应：

```txt
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Sat, 13 Mar 2025 06:40:00 GMT
Content-Type: text/html; charset=UTF-8
Content-Length: 612
Last-Modified: Thu, 13 Mar 2025 06:30:00 GMT
Connection: keep-alive
ETag: "6037f4fa-264"
Accept-Ranges: bytes
```

### 配置虚拟主机

Nginx 配置文件位于 `/etc/nginx/nginx.conf`，而虚拟主机配置文件位于 `/etc/nginx/sites-available/` 目录下。你可以创建新的虚拟主机配置文件来管理不同的网站。

- 创建新站点的配置文件：

```bash
sudo nano /etc/nginx/sites-available/example.com
```

- 在配置文件中添加内容（例如简单的 HTML 页面）：

```nginx
server {
    listen 80;
    server_name example.com;

    location / {
        root /var/www/example.com;
        index index.html;
    }
}
```

- 创建站点目录并添加 `index.html` 文件：

```bash
sudo mkdir -p /var/www/example.com
echo "<h1>Welcome to Example.com</h1>" | sudo tee /var/www/example.com/index.html
```

- 启用站点配置：

```bash
sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```

- 测试 Nginx 配置文件是否正确：

```bash
sudo nginx -t
```

- 如果测试成功，重新加载 Nginx 使配置生效：

```bash
sudo systemctl reload nginx
```

## Nginx 配置文件

> `nginx.conf`

### 概述

> 默认在 `Linux` 上安装的 `Nginx`，配置文件在安装的 `nginx` 目录下的 `conf` 目录下，名字叫做 `nginx.conf`

`nginx.conf` 主要由三部分组成

- 全局块

- `events` 块

- `http` 块

### 配置文件结构

- 全局块在最上层
    - 其次是 `events` 块
        - 最后是 `http` 块
            - `server` 块
                - `localtion` 块
                - `localtion` 块
            - `server` 块
                - `localtion` 块
                - `localtion` 块

### 配置文件概览

```nginx
#运行用户
#user somebody;

#启动进程,通常设置成和cpu的数量相等
worker_processes  1;

#全局错误日志
error_log  D:/Tools/nginx-1.10.1/logs/error.log;
error_log  D:/Tools/nginx-1.10.1/logs/notice.log  notice;
error_log  D:/Tools/nginx-1.10.1/logs/info.log  info;

#PID文件，记录当前启动的nginx的进程ID
pid        D:/Tools/nginx-1.10.1/logs/nginx.pid;

#工作模式及连接数上限
events {
    worker_connections 1024;    #单个后台worker process进程的最大并发链接数
}

#设定http服务器，利用它的反向代理功能提供负载均衡支持
http {
    #设定mime类型(邮件支持类型),类型由mime.types文件定义
    include       D:/Tools/nginx-1.10.1/conf/mime.types;
    default_type  application/octet-stream;

    #设定日志
    log_format  main  '[$remote_addr] - [$remote_user] [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log    D:/Tools/nginx-1.10.1/logs/access.log main;
    rewrite_log     on;

    #sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，对于普通应用，
    #必须设为 on,如果用来进行下载等应用磁盘IO重负载应用，可设置为 off，以平衡磁盘与网络I/O处理速度，降低系统的uptime.
    sendfile        on;
    #tcp_nopush     on;

    #连接超时时间
    keepalive_timeout  120;
    tcp_nodelay        on;

    #gzip压缩开关
    #gzip  on;

    #设定实际的服务器列表
    upstream zp_server1{
        server 127.0.0.1:8089;
    }

    #HTTP服务器
    server {
        #监听80端口，80端口是知名端口号，用于HTTP协议
        listen       80;

        #定义使用www.xx.com访问
        server_name  www.helloworld.com;

        #首页
        index index.html

        #指向webapp的目录
        root D:\01_Workspace\Project\github\zp\SpringNotes\spring-security\spring-shiro\src\main\webapp;

        #编码格式
        charset utf-8;

        #代理配置参数
        proxy_connect_timeout 180;
        proxy_send_timeout 180;
        proxy_read_timeout 180;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarder-For $remote_addr;

        #反向代理的路径（和upstream绑定），location 后面设置映射的路径
        location / {
            proxy_pass http://zp_server1;
        }

        #静态文件，nginx自己处理
        location ~ ^/(images|javascript|js|css|flash|media|static)/ {
            root D:\01_Workspace\Project\github\zp\SpringNotes\spring-security\spring-shiro\src\main\webapp\views;
            #过期30天，静态文件不怎么更新，过期可以设大一点，如果频繁更新，则可以设置得小一点。
            expires 30d;
        }

        #设定查看Nginx状态的地址
        location /NginxStatus {
            stub_status           on;
            access_log            on;
            auth_basic            "NginxStatus";
            auth_basic_user_file  conf/htpasswd;
        }

        #禁止访问 .htxxx 文件
        location ~ /\.ht {
            deny all;
        }

        #错误处理页面（可选择性配置）
        #error_page   404              /404.html;
        #error_page   500 502 503 504  /50x.html;
        #location = /50x.html {
        #    root   html;
        #}
    }
}
```

内置全局变量：

| 变量                | 描述                                                                 |
| ------------------- | -------------------------------------------------------------------- |
| `$args`             | 这个变量等于请求行中的参数，同`$query_string`。                      |
| `$content_length`   | 请求头中的 `Content-length` 字段。                                   |
| `$content_type`     | 请求头中的 `Content-Type` 字段。                                     |
| `$document_root`    | 当前请求在 `root` 指令中指定的值。                                   |
| `$host`             | 请求主机头字段，否则为服务器名称。                                   |
| `$http_user_agent`  | 客户端 `agent` 信息。                                                |
| `$http_cookie`      | 客户端 `cookie` 信息。                                               |
| `$limit_rate`       | 这个变量可以限制连接速率。                                           |
| `$request_method`   | 客户端请求的动作，通常为 `GET` 或 `POST`。                           |
| `$remote_addr`      | 客户端的 `IP` 地址。                                                 |
| `$remote_port`      | 客户端的端口。                                                       |
| `$remote_user`      | 已经经过 `Auth Basic Module` 验证的用户名。                          |
| `$request_filename` | 当前请求的文件路径，由 `root` 或 `alias` 指令与 `URI` 请求生成。     |
| `$scheme`           | `HTTP` 方法（如 `http`，`https`）。                                  |
| `$server_protocol`  | 请求使用的协议，通常是 `HTTP/1.0` 或 `HTTP/1.1`。                    |
| `$server_addr`      | 服务器地址，在完成一次系统调用后可以确定这个值。                     |
| `$server_name`      | 服务器名称。                                                         |
| `$server_port`      | 请求到达服务器的端口号。                                             |
| `$request_uri`      | 包含请求参数的原始 `URI`，不包含主机名，如：`/foo/bar.php?arg=baz`。 |
| `$uri`              | 不带请求参数的当前 `URI`，`$uri` 不包含主机名，如 `/foo/bar.html`。  |
| `$document_uri`     | 与 `$uri` 相同。                                                     |

### 块的概述

#### 全局块

就是配置文件从头开始到`events`块之间的内容，主要设置的是影响`nginx`服务器整体运行的配置指令，比如`worker_process`，值越大，可以支持的并发处理量也越多，但是还是和服务器的硬件相关。

#### events 块

`events` 块涉及的指令主要影响 `Nginx` 服务器与用户的网络连接，常用的设置包括是否开启对多 `work_process`下的网络连接进行序列化，是否允许同时接收多个网络连接，选取哪种事件驱动模型来处理连接请求，每个 `word_process` 可以同时支持的最大连接数等。

> 这部分的配置对 `Nginx` 的性能影响较大，在实际中应该灵活配置。

#### http 块

包括 `http` 全局块，以及多个 `server` 块。

##### http 全局块

`http` 全局块配置的指令包括文件引入、 MIME-TYPE 定义、日志自定义、连接超时时间、单链接请求数上限等。

##### server 块

- 这块和虚拟主机有密切关系，虚拟主机从用户角度看，和一台独立的硬件主机是完全一样的，该技术的产生是为了节省互联网服务器硬件成本。
- 每个 `http` 块可以包括多个 `server` 块，而每个 `server` 块就相当于一个虚拟主机。
- 而每个 `server` 块也分为全局 `server` 块，以及可以同时包含多个 `location` 块。

###### server 全局块

最常见的配置是本虚拟机主机的监听配置和本虚拟主机的名称或 `IP` 配置。

```nginx
# 监听 80 端口，只要有请求访问了 80 端口，此 server 块就处理请求
listen  80;
# 这个 server 块代表的虚拟主机的名字
server_name  localhost;
```

###### location 块

- 一个 `server` 块可以配置多个 `location` 块。
- 主要作用是根据请求地址路径的匹配，匹配成功进行特定的处理
- 这块的主要作用是基于 `Nginx` 服务器接收到的请求字符串（例如 `server_name/uri-string`），对虚拟主机名称（也可以是 `IP` 别名）之外的字符串（例如 前面的 `/uri-string`）进行匹配，对特定的请求进行处理。地址定向、数据缓存和应答控制等功能，还有许多第三方模块的配置也在这里进行。

```nginx
# 如果请求路径是 / 就是用这个 location 块进行处理
location / {
    root   html;
    index  index.html index.htm;
}
```

### location 配置

1. `location` 语法：

    ```nginx
    location [=|~|~*|^~] /uri/ { … }
    ```

    - `=`：严格匹配。如果请求匹配这个 `location`，那么将停止搜索并立即处理此请求
    - `~`： 区分大小写匹配(可用正则表达式)
    - `~*`：不区分大小写匹配(可用正则表达式)
    - `!~`：区分大小写不匹配
    - `!~*`：不区分大小写不匹配
    - `^~`：如果把这个前缀用于一个常规字符串,那么告诉 `nginx` 如果路径匹配那么不测试正则表达式

2. `alias `与 `root `的区别

    - `root` 实际访问文件路径会拼接`URL`中的路径

    - `alias` 实际访问文件路径不会拼接`URL`中的路径

    - 示例如下：

        ```nginx
        location ^~ /test/ {
            alias /usr/local/nginx/html/static/;
        }
        ```

        请求：/test/test1.html

        实际访问：/usr/local/nginx/html/static/test1.html 文件

        ```nginx
        location ^~ /test/ {
            root /usr/local/nginx/html/;
        }
        ```

        请求：/test/test1.html

        实际访问：/usr/local/nginx/html/test/test1.html 文件

3. `last` 和 `break` 关键字的区别

    `last` 和 `break` 当出现在location 之外时：两者的作用是一致的没有任何差异

    `last` 和 `break `当出现在 `location `内部时：

    - `last ` 使用了`last `指令，`rewrite `后会跳出`location`作用域，重新开始再走一次刚才的行为

    - `break`使用了`break`指令，`rewrite`后不会跳出`location`作用域，它的生命也在这个`location`中终结

4. `permanent `和 `redirect`关键字的区别
    - `rewrite … permanent` 永久性重定向，请求日志中的状态码为`301`
    - `rewrite … redirect` 临时重定向，请求日志中的状态码为`302`

## 代理

### 正向代理

正向代理代理的是客户端，需要在客户端配置，访问的还是真实的服务器地址。

### 反向代理

反向代理代理的是服务器端，客户端不需要任何配置，客户端只需要将请求发送给反向代理服务器即可，代理服务器将请求分发给真实的服务器，获取数据后将数据转发给客户端。隐藏了真实服务器。

如：80 端口代理到 8080 端口

```nginx
server {
    # 监听端口80 即当访问服务器的端口是 80 时，进入这个 server 块处理
    listen 80;
    # server_name 当配置了 listen 时不起作用
    server_name  localhost;
    # location后面代表访问路径，当是 / 请求时 代理到 8080 的端口
    location / {
    # 使用 proxy_pass（固定写法）后面跟要代理服务器地址
        proxy_pass http://ip:8080;
    }
}
```

> `server_name` 作用及访问流程
>
> 客户端通过域名访问服务器时会将域名与被解析的 `ip` 一同放在请求中。当请求到了 `nginx` 中时。`nginx` 会先去匹配 `ip`，如果 `listen` 中没有找到对应的 `ip` ，就会通过域名进行匹配，匹配成功以后，再匹配端口。当这三步完成，就会找到对应的 `server` 的 `location` 对应的资源。

### 前端跨域解决

```nginx
server {
    listen       8080;
    server_name  10.8.9.94;
    location ^~ /api {
        proxy_pass   http://192.1.2.3:9000;
        add_header Access-Control-Allow-Methods *;
        add_header Access-Control-Max-Age 3600;
        add_header Access-Control-Allow-Credentials true;
        add_header Access-Control-Allow-Origin $http_origin;
        add_header Access-Control-Allow-Headers $http_access_control_request_headers;
        if ($request_method = OPTIONS ) {
            return 200;
        }
    }
    location / {
        root   web/dist;
        index  index.html index.htm;
        add_header 'Access-Control-Allow-Origin' '*';
        try_files $uri $uri/ /index.html;
    }
    #error_page  404              /404.html;
    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}
```

## 负载均衡

### 概述

简单来说就是使用分布式的场景，将原先的一台服务器做成一个集群，然后将请求分发到各个服务器上。使用 `Nginx` 进行反向代理，然后访问 `Nginx`，由 `Nginx` 将请求分发到不同的服务器上，以实现负载均衡。

### 实现

如：分别在 8081 和 8082 端口开启两个相同的服务，由 Ngnix 进行负载均衡

```nginx
# 在http块中的全局块中配置
# upstream 固定写法 后面的 myserver 可以自定义
upstream myserver{
    server ip:8081;
    server ip:8082;
}
# server配置
server {
  	# 监听80端口
    listen 80;
 	# location块
    location / {
	# 反向代理到上面的两台服务器 写上自定义的名称
    proxy_pass http://myserver;
    }
}
```

### 规则

#### 轮询(默认)

每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器 `down` 掉，能自动剔除。

#### weight 权重

`weight` 代表权重默认为 `1`，权重越高被分配的客户端越多。

如：

```nginx
upstream myserver {
    server ip:8081 weight=1 ;
    server ip:8082 weight=2 ;
}
server {
    listen       80;
    location / {
    proxy_pass http://myserver;
}
```

#### ip_hash

每个请求按访问 `ip` 的 `hash` 结果分配，这样每个访客固定访问一个后端服务器，可以解决 `session` 问题。

如：

```nginx
#配置负载均衡的服务器和端口
upstream myserver {
    server ip:8081;
    server ip:8082;
    ip_hash;
}
server {
    listen 80;
    location / {
    	proxy_pass http://myserver;
   	}
}
```

#### fair

按后端服务器的响应时间来分配请求，响应时间短的优先分配。

如：

```nginx
#配置负载均衡的服务器和端口
upstream myserver {
    server ip:8081;
    server ip:8082;
    fair;
}
server {
    listen       80;
    location / {
    	proxy_pass http://myserver;
    }
}
```

## 防盗链

```nginx
location ~* \.(gif|jpg|swf)$ {
    valid_referers none blocked start.igrow.cn sta.igrow.cn;
    if ($invalid_referer) {
        rewrite ^/ http://$host/logo.png;
    }
}
```

## 根据文件类型设置过期时间

```nginx
location ~* \.(js|css|jpg|jpeg|gif|png|swf)$ {
    if (-f $request_filename) {
        expires 1h;
        break;
    }
}
```

## 禁止访问某个目录

```nginx
location ~* \.(txt|doc)${
    root /data/www/wwwroot/linuxtone/test;
    deny all;
}
```
