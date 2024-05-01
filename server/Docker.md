# Docker 常用命令

## 帮助启动类命令

### 启动 docker

```shell
systemctl start docker
```

### 停止 docker

```shell
systemctl stop docker
```

### 重启 docker

```shell
systemctl restart docker
```

### 查看 docker 状态

```shell
systemctl status docker
```

### 开机启动 docker

```shell
systemctl enable docker
```

::: details 其他

- 查看 docker 概要信息

```shell
docker info
```

- 查看 docker 帮助文档

```shell
docker --help
# 或 查看某个具体命令的帮助文档
docker [命令] --help
```

:::

## 镜像命令

### `images` 罗列本地镜像

```shell
docker images [选项] [镜像名称[:版本标签]]
```

#### 列出本地所有的镜像

```shell
docker images
```

该命令等同于：

```shell
docker image ls
```

- `-a`：列出本地所有的镜像（含历史镜像），包括中间层镜像

  ```shell
  docker images -a
  ```

  等同于：

  ```shell
  docker images --all
  ```

- `-q`：仅列出本地镜像的 id

  ```shell
  docker images -q
  ```

  等同于：

  ```shell
  docker images --quiet
  ```

- `--digests` 列出镜像的摘要信息

  ```shell
  docker images --digests
  ```

- `--no-trunc` 列出所有镜像的完整信息

  ```shell
  docker images --no-trunc
  ```

### `run` 运行镜像创建容器

```shell
docker run [镜像名称]
```

如果本地没有找到相应镜像，则自动从镜像源下载。

- `-it`：运行一个容器并启动一个交互式会话

  ```shell
  docker run -it [镜像名称] [命令]
  ```
  
  例如：

  ```shell
  docker run -it ubuntu bash
  ```

- `-p`：运行一个容器并将宿主机的端口映射到容器内的端口

  ```shell
  docker run -p [宿主机端口]:[容器端口] [镜像名称]
  ```

  例如：

  ```shell
  docker run -p 80:8080 nginx
  ```
  
- `-d`：后台运行一个容器

  ```shell
  docker run -d [镜像名称]
  ```

  例如：

  ```shell
  docker run -d redis
  ```
  
- `-v`：挂载一个本地目录到容器内

  ```shell
  docker run -v [宿主机目录/文件]:[容器目录/文件] [镜像名称]
  ```

  例如：

  ```shell
  docker run -v /path/to/dist/dir:/path/to/container/dir nginx
  ```
  
- `--name`：指定容器名称

  ```shell
  docker run --name [自定义容器名称] [镜像名称]
  ```

  例如：

  ```shell
  docker run --name my_nginx_container nginx
  ```
  
- `-e`：设置环境变量

  ```shell
  docker run -e [变量名]=[变量值] [镜像名称]
  ```

  例如：

  ```shell
  docker run -e MYSQL_ROOT_PASSWORD=pass123 mysql
  ```

### `ps` 罗列容器

```shell
# 列出当前运行中的容器
docker ps
```

- `-a`：列出包括已停止的容器在内的所有容器
- `-l`：以详细格式列出容器信息，包括端口映射、容器创建时间等
- `-q`：只显示容器 ID
- `--format`：自定义输出格式

  ```shell
  docker ps --format "table {{.ID}}\t{{.Image}}\t{{.Status}}"
  ```

- `-n`：显示最近 n 个容器

  ```shell
  # 显示最近5个容器
  docker ps -n 5
  ```

- `--sort`：按照指定列排序容器
- `--size`：显示容器的的大小

### `start` 启动容器

```shell
docker start [容器id]
```

等同于：

```shell
docker container start [容器id]
```

可以同时启动多个容器

```shell
docker start [容器1 id] [容器2 id]
```

### `stop` 停止容器

```shell
docker stop [容器id]
```

### `pull` 拉取远程仓库的镜像

```shell
docker pull [镜像名称[:版本号]]
```

不附加版本号默认拉取最新版本。如果想要拉取具体某个版本，可以在镜像名后加上 `[:版本号]` 来限制，例如：

```shell
# 表示拉取 redis 6.0.8 版本
docker pull redis:6.0.8
```

### `push` 上传镜像

```shell
docker push
```

### `search` 在远程仓库中搜索镜像

```shell
docker search
```

查询默认列出25个数据。如果不想列出太多数据，可以使用 `--limit` 限制查询条数

```shell
docker search --limit 5 [镜像模糊名称]
```

### `export` 导出镜像

```shell
docker export
```

### `import` 导入镜像

```shell
docker import
```

### `commit` 提交镜像

```shell
docker commit [选项参数] [容器] [仓库[:版本号]]
```

- `-a`（`--author`的简写）：指定新镜像的作者信息。
- `-c`（`--change`的简写）：在提交过程中执行额外的 Dockerfile 指令。
- `-m`（`--message`的简写）：提交的描述信息。
- `-p`（`--pause`的简写）：在提交之前暂停容器的运行。

### `exec` 进入某个容器终端

```sh
docker exec [OPTIONS] CONTAINER COMMAND [ARG...]
```

`OPTIONS` 说明：

- `-d` : 分离模式: 在后台运行
- `-i `: 即使没有附加也保持STDIN 打开
- `-t `: 分配一个伪终端

#### 示例

```sh
docker exec -it [容器id/容器名] /bin/bash 
```

### `build` 构建镜像

```sh
docker build [OPTIONS] PATH | URL | -
```

`OPTIONS` 说明：

- `--build-arg=[]` : 设置镜像创建时的变量；
- `--cpu-shares` : 设置 `CPU` 使用权重；
- `--cpu-period` : 限制 `CPU CFS` 周期；
- `--cpu-quota` : 限制 `CPU CFS` 配额；
- `--cpuset-cpus` : 指定使用的 `CPU id` ；
- `--cpuset-mems` : 指定使用的内存 id；
- `--disable-content-trust` : 忽略校验，默认开启；
- `-f` : 指定要使用的 `Dockerfile` 路径；
- `--force-rm` : 设置镜像过程中删除中间容器；
- `--isolation` : 使用容器隔离技术；
- `--label=[]` : 设置镜像使用的元数据；
- `-m` : 设置内存最大值；
- `--memory-swap` : 设置 `Swap` 的最大值为内存 `+swap`，`"-1"` 表示不限 `swap`；
- `--no-cache` : 创建镜像的过程不使用缓存；
- `--pull` : 尝试去更新镜像的新版本；
- `--quiet`, ` -q` : 安静模式，成功后只输出镜像 `ID`；
- `--rm` : 设置镜像成功后删除中间容器；
- `--shm-size` : 设置 `/dev/shm` 的大小，默认值是 `64M`；
- `--ulimit` : `Ulimit` 配置。
- `--squash` : 将 `Dockerfile` 中所有的操作压缩为一层。
- `--tag`, `-t` : 镜像的名字及标签，通常 `name:tag` 或者 `name` 格式；可以在一次构建中为一个镜像设置多个标签。
- `--network` : 默认 `default`。在构建期间设置RUN指令的网络模式

#### 示例

使用当前目录的 `Dockerfile` 创建镜像，标签为 `ubuntu:latest`。

```sh
docker build -t ubuntu:latest . 
```

## 私有仓库

### 容器运行

使用官方 `registry` 镜像来运行。

```shell
docker run -d -p 5000:5000 --restart=always --name registry registry
```

这将使用官方的 `registry` 镜像来启动私有仓库。默认情况下，仓库会被创建在容器的 `/var/lib/registry` 目录下。你可以通过 `-v` 参数来将镜像文件存放在本地的指定路径。例如下面的例子将上传的镜像放到本地的 `/opt/data/registry` 目录。

```sh
docker run -d \
    -p 5000:5000 \
    -v /opt/data/registry:/var/lib/registry \
    registry
```

