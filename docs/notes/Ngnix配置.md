# Ngnix配置

## 一、常用命令
::: tip 提示
 以下命令需要进入nginx的安装目录中的 sbin 目录
:::

1. 启动

   `````sh
   ./nginx
   `````

2. 关闭

   ```sh
   ./nginx -s stop
   ```

3. 重新加载nginx（重载 conf 配置）

   ```sh
   ./nginx -s reload
   ```

4. 查看版本号

   ```sh
   ./nginx -v
   ```

## 二、Nginx 配置文件

> nginx.conf

### 1. 概述

> 默认在Linux上安装的Nginx，配置文件在安装的nginx目录下的conf目录下，名字叫做nginx.conf

1. nginx.conf主要由三部分组成

   - 全局块

   - events 块

   - http 块

### 2. 配置文件结构

+ 全局块在最上层
	+ 其次是 events 块
		+ 最后是 http 块
			+ server 块
				+ localtion 块
				+ localtion 块
			+ server 块
				+ localtion 块
				+ localtion 块

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

