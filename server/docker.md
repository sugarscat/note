# Docker 命令速查手册

## 系统管理

### 服务控制

#### 启动/停止/重启服务

```shell
systemctl start|stop|restart docker
```

#### 查看服务状态

```shell
systemctl status docker
```

#### 设置开机自启

```shell
systemctl enable docker
```

查看系统信息

```shell
docker info
```

### 帮助文档

```shell
# 查看全局帮助
docker --help

# 查看子命令帮助
docker [command] --help
```

## 镜像管理

### 镜像操作

#### 拉取镜像

> 默认 latest 标签

```shell
docker pull nginx
```

#### 推送镜像到仓库

```shell
docker push myrepo/nginx:v1
```

#### 查看本地镜像列表

```shell
docker images
```

| 参数      | 解释                     |
| --------- | ------------------------ |
| -a        | 显示所有镜像（含中间层） |
| -q        | 仅显示镜像 ID            |
| --digests | 显示摘要信息             |

#### 删除镜像

```shell
docker rmi nginx:latest
```

### 镜像构建

```shell
# 构建镜像（使用当前目录Dockerfile）
docker build -t myapp:1.0 .

# 显示构建过程
docker build --progress=plain .

# 不使用缓存构建
docker build --no-cache -t myapp:clean .
```

## 容器生命周期

### 容器操作

#### 运行新容器

```shell
docker run -d --name web -p 80:80 nginx
```

#### 启动/停止容器

```shell
docker start|stop web
```

#### 删除容器

```shell
docker rm web
```

#### 查看容器列表

```shell
 docker ps
```

| 参数 | 解释          |
| ---- | ------------- |
| -a   | 显示所有容器  |
| -q   | 仅显示容器 ID |
| -s   | 显示磁盘占用  |

### 交互模式

#### 进入运行中的容器

```shell
docker exec -it web bash
```

#### 启动临时容器并进入

```shell
docker run -it --rm ubuntu bash
```

#### 查看实时日志

```shell
docker logs -f web
```

## 存储与网络

### 数据管理

#### 创建数据卷

```shell
docker volume create db_data
```

#### 挂载数据卷

```shell
docker run -v db_data:/var/lib/mysql mysql
```

#### 绑定目录挂载

```shell
docker run -v /host/path:/container/path nginx
```

### 网络配置

#### 创建自定义网络

```shell
docker network create mynet
```

#### 查看网络列表

```shell
docker network ls
```

#### 容器加入网络

```shell
docker run --network=mynet redis
```

## 私有仓库

### 本地仓库部署

使用官方 `registry` 镜像来运行。默认情况下，仓库会被创建在容器的 `/var/lib/registry` 目录下。你可以通过 `-v` 参数来将镜像文件存放在本地的指定路径。例如下面的例子将上传的镜像放到本地的 `/opt/data/registry` 目录。

```shell
# 启动Registry容器
docker run -d -p 5000:5000 \
  -v /opt/data/registry:/var/lib/registry \
  --name registry registry
```

### 镜像推送示例

```shell
# 标记本地镜像
docker tag myimage:latest localhost:5000/myimage

# 推送到私有仓库
docker push localhost:5000/myimage

# 从仓库拉取
docker pull localhost:5000/myimage
```

## 实用技巧

### 批量清理

```shell
# 删除所有停止的容器
docker container prune

# 删除未使用的镜像
docker image prune -a

# 清理所有无用资源
docker system prune
```

### 配置检查

```shell
# 查看容器详细信息
docker inspect web

# 查看端口映射
docker port web

# 查看资源使用
docker stats
```

### 文件操作

```shell
# 从容器复制文件到主机
docker cp web:/etc/nginx/nginx.conf ./

# 从主机复制文件到容器
docker cp config.ini web:/app/
```
