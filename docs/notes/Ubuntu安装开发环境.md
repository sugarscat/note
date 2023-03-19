# Ubuntu 安装开发环境

## 一、安装 Java

### 1. 下载

```sh
wget https://download.oracle.com/java/18/latest/jdk-18_linux-x64_bin.tar.gz
```

### 2. 解压

```sh
mkdir /usr/local/java
tar zxvf jdk-18_linux-x64_bin.tar.gz -C /usr/local/java/
```

### 3. 添加环境变量

1. vim 编辑

   ```sh
   vim /etc/profile
   ```

2. 添加

   ```config
   export JAVA_HOME=/usr/local/java/jdk-18.0.1.1
   export JRE_HOME=${JAVA_HOME}/jre  
   export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib  
   export PATH=${JAVA_HOME}/bin:$PATH
   source /etc/profile
   ```

### 4. 查看版本

```sh
java -version
```

### 5. 启动 jar 包

```sh
java -jar 包名.jar
# 后台启动
java -jar 包名.jar & # 关闭窗口终止运行
nohup java -jar 包名.jar & 
# 指定参数
nohup java -jar 包名.jar  --server.port=8080 > 包名.log &
```

- & 代表在后台运行。

- nohup 意思是不挂断运行命令。

- --server.prot 指定项目启动的端口号。

- '>' 表示日志输出到指定文件夹

- 包名.log 表示生成 包名.log 文件在当前目录

## 二、安装 Python

### 1. 下载

```sh
# 以3.8.1版本为例
wget https://www.python.org/ftp/python/3.8.10/Python-3.8.10.tgz
```

### 2. 解压

```sh
tar -zxvf Python-3.8.10.tgz
```

### 3. 编译

```sh
# 下载编译环境
yum -y install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gcc make

cd Python-3.8.10
./configure  --prefix=/usr/local/pyhton3.8
make
make install
```

### 4. 建立软链接

```sh
sudo ln -s /usr/local/pyhton3.8/bin/pyhton3.8 /usr/bin/python
# 若提示/usr/bin/python已存在， 删除即可
sudo rm /usr/bin/python
```

