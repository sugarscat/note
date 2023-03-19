# Ngnix 

## 一、安装

::: tip 提示
 以下教程以 Ubuntu 为例，使用编译安装，也可使用以下命令安装。

```sh
# 切换至root用户
sudo su root
apt-get install nginx
```

目录结构：

- /usr/sbin/nginx：主程序
- /etc/nginx：存放配置文件
- /usr/share/nginx：存放静态文件
- /var/log/nginx：存放日志

相关命令：

```sh
# systemctl命令
# 查看状态
sudo systemctl status nginx
# 启动
sudo systemctl start nginx
# 停止
sudo systemctl stop nginx
# 重启
sudo systemctl restart nginx
```


:::

### 1. 安装依赖包

```sh
sudo apt update
 
sudo apt-get install libpcre3-dev
sudo apt-get install ruby
sudo apt-get install zlib1g-dev

sudo apt-get install openssl 
sudo apt-get install libssl-dev
```

### 2. 下载 Nginx

```sh
# 这里我在 /usr/local 目录下，新建了 nginx 目录
cd /usr/local
mkdir nginx
cd nginx
# 下载
wget http://nginx.org/download/nginx-1.13.7.tar.gz
# 解压
tar -xvf nginx-1.13.7.tar.gz 
```

### 3. 编译安装

```sh
# 进入nginx目录
cd /usr/local/nginx/nginx-1.13.7

# 执行命令（二选一）
./configure --prefix=/usr/local/nginx
# 使用 ssl
./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module

# 执行make命令
make

# 执行make install命令
make install
```



## 二、常用命令

::: tip 提示
 以下命令需要进入nginx的安装目录中的 sbin 目录。
 ```sh
 cd /usr/local/nginx/sbin # 依据自己安装目录
 ```
:::

### 1. 启动 Ngnix

`````sh
./nginx
`````

如果你依照上面的方法编译安装，并且没有修改目录可以直接使用以下命令：

```sh
/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
```

### 2. 关闭 Ngnix

```sh
./nginx -s stop
# 或者直接杀掉进程
ps -ef | grep nginx # 查找进程
kill kill -9 xxxx(pid)
```

### 3. 重新加载 nginx 

> 重载 conf 配置

```sh
./nginx -s reload
```

### 4. 查看版本号

```sh
./nginx -v
```

### 5. 卸载 nginx

::: tip 提示
应先关闭所以有关 Nginx 的进程
:::

1. 查看相关依赖

   ```sh
   dpkg --get-selections|grep nginx
   ```

2. 删除 nginx 相关软件

   ```sh
   sudo apt-get --purge remove nginx nginx-common nginx-core
   ```

3. 删除 nginx，-purge 包括配置文件

   ```sh
   apt-get --purge remove nginx
   ```

4. 移除全部不使用的软件包

   ```sh
   apt-get autoremove
   ```

5. 列出与 nginx 相关的软件并删除

   ```sh
   dpkg --get-selections | grep nginx
   apt-get --purge remove nginx
   apt-get --purge remove nginx-common
   apt-get --purge remove nginx-core
   ```

   

## 三、Nginx 配置文件

> nginx.conf

### 1. 概述

> 默认在Linux上安装的Nginx，配置文件在安装的nginx目录下的conf目录下，名字叫做nginx.conf

1. nginx.conf主要由三部分组成

   - 全局块

   - events 块

   - http 块

### 2. 配置文件结构

- 全局块在最上层
	- 其次是 events 块
		- 最后是 http 块
			+ server 块
				- localtion 块
				- localtion 块
			+ server 块
				- localtion 块
				- localtion 块

### 3.  配置文件概览

```conf

# 全局快 ---------------------------------------------------------------------
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;
------------------------------------------------------------------------------

# events 块 ------------------------------------------------------------------
events {
    worker_connections  1024;
}
------------------------------------------------------------------------------

# http 块 --------------------------------------------------------------------
http {

    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;        
------------------------------------------------------------------------------    

# server 块 ------------------------------------------------------------------
server {
	    # server 全局块 ---------------------------
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

	    # location 块 -----------------------------
        location / {
            root   html;
            index  index.html index.htm;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
}

# 可以配置多个server块	

}
```

### 4. 块的概述

#### 1.  全局块

   就是配置文件从头开始到events块之间的内容，主要设置的是影响nginx服务器整体运行的配置指令，比如worker_process, 值越大，可以支持的并发处理量也越多，但是还是和服务器的硬件相关

#### 3. events 块

   events 块涉及的指令主要影响 Nginx 服务器与用户的网络连接，常用的设置包括是否开启对多 work process下的网络连接进行序列化，是否允许同时接收多个网络连接，选取哪种事件驱动模型来处理连接请求，每个 word process 可以同时支持的最大连接数等。

   > 这部分的配置对 Nginx 的性能影响较大，在实际中应该灵活配置。

#### 3. http 块

   包括 http 全局块，以及多个 server 块。

##### 3.1 http 全局块

   http 全局块配置的指令包括文件引入、 MIME-TYPE 定义、日志自定义、连接超时时间、单链接请求数上限等。

##### 3.2 server 块

- 这块和虚拟主机有密切关系，虚拟主机从用户角度看，和一台独立的硬件主机是完全一样的，该技术的产生是为了节省互联网服务器硬件成本。
- 每个 http 块可以包括多个 server 块，而每个 server 块就相当于一个虚拟主机
- 而每个 server 块也分为全局 server 块，以及可以同时包含多个 location 块。

###### 3.2.1 server 全局块

最常见的配置是本虚拟机主机的监听配置和本虚拟主机的名称或 IP 配置。

```conf
# 监听 80 端口，只要有请求访问了 80 端口，此 server 块就处理请求
listen  80;
# 这个 server 块代表的虚拟主机的名字
server_name  localhost;
```

###### 3.2.2 location 块

- 一个 server 块可以配置多个 location 块。
- 主要作用是根据请求地址路径的匹配，匹配成功进行特定的处理
- 这块的主要作用是基于 Nginx 服务器接收到的请求字符串（例如 server_name/uri-string），对虚拟主机名称（也可以是 IP 别名）之外的字符串（例如 前面的 /uri-string）进行匹配，对特定的请求进行处理。地址定向、数据缓存和应答控制等功能，还有许多第三方模块的配置也在这里进行。

```conf
# 如果请求路径是 / 就是用这个 location 块进行处理
location / {
            root   html;
            index  index.html index.htm;
        }
```

## 四、代理

### 1. 正向代理

正向代理代理的是客户端，需要在客户端配置，访问的还是真实的服务器地址。

### 2. 反向代理

反向代理代理的是服务器端，客户端不需要任何配置，客户端只需要将请求发送给反向代理服务器即可，代理服务器将请求分发给真实的服务器，获取数据后将数据转发给客户端。隐藏了真实服务器。

如：80 端口代理到 8080 端口

```conf
server {
# 监听端口80 即当访问服务器的端口是 80 时，进入这个 server 块处理
        listen       80;
# server_name 当配置了 listen 时不起作用        
        server_name  localhost;

# location后面代表访问路径，当是 / 请求时 代理到 8080 的端口
        location / {
# 使用 proxy_pass（固定写法）后面跟要代理服务器地址            
            proxy_pass http://ip:8080;
        }
}
```

> server_name作用及访问流程
>
> 客户端通过域名访问服务器时会将域名与被解析的 ip 一同放在请求中。当请求到了nginx 中时。nginx 会先去匹配 ip，如果 listen中没有找到对应的 ip，就会通过域名进行匹配，匹配成功以后，再匹配端口。当这三步完成，就会找到对应的 server 的 location对应的资源。

## 五、负载均衡

### 1. 概述

简单来说就是使用分布式的场景，将原先的一台服务器做成一个集群，然后将请求分发到各个服务器上。使用 Nginx 进行反向代理，然后访问 Nginx，由 Nginx 将请求分发到不同的服务器上，以实现负载均衡。

### 2.实现

如：分别在 8081 和 8082 端口开启两个相同的服务，由 Ngnix 进行负载均衡

```conf
# 在http块中的全局块中配置
# upstream 固定写法 后面的 myserver 可以自定义
upstream myserver{
    server 192.168.80.102:8081;
    server 192.168.80.102:8082;
}

# server配置
    server {
      # 监听80端口
        listen 80;   
    	#location块
        location / {
# 反向代理到上面的两台服务器 写上自定义的名称
        proxy_pass http://myserver;
        }
    }
```

## 我的 sugarscat.cn 配置

```conf

#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
    #开启gzip
	gzip  on;  
	#低于1kb的资源不压缩 
	gzip_min_length 1k;
	#压缩级别1-9，越大压缩率越高，同时消耗cpu资源也越多，建议设置在5左右。 
	gzip_comp_level 5; 
	#需要压缩哪些响应类型的资源，多个空格隔开。不建议压缩图片.
	gzip_types text/plain application/javascript application/x-javascript text/javascript text/xml text/css;  
	#配置禁用gzip条件，支持正则。此处表示ie6及以下不启用gzip（因为ie低版本不支持）
	gzip_disable "MSIE [1-6]\.";  
	#是否添加“Vary: Accept-Encoding”响应头
	gzip_vary on;

    server {
        listen       80;
        server_name  sugarscat.cn;
        rewrite ^(.*)$ https://$host$1 permanent;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            index  index.html index.htm;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    server {
        listen       443 ssl;
        server_name  sugarscat.cn;

        ssl_certificate      /usr/local/nginx/cert/sugarscat.cn.cer;
        ssl_certificate_key  /usr/local/nginx/cert/sugarscat.cn.key;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers  HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers  on;

        location / {
            root   html;
            index  index.html index.htm;
        }
    }

}
```

