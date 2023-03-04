# Linux命令

### 基本

#### 命令格式

```shell
command [-options] [parameter]
```

> command ：命令名，相应功能的英文单词或单词的缩写
> 
> [-options] ：选项，可用来对命令进行控制，也可以省略
> 
> parameter ：传给命令的参数，可以是 零个、一个 或者 多个

#### 常用命令

| 命令          | 对应英文                  | 作用            |
|:------------|:----------------------|:--------------|
| ls	         | list	                 | 查看当前文件夹下的内容   |
| pwd	        | print work directory	 | 查看当前所在文件夹     |
| cd[目录名]	    | change directory      | 	切换文件夹        |
| touch[文件名]	 | touch                 | 	如果文件不存在，新建文件 |
| mkdir[目录名]	 | make directory        | 	创建目录         |
| rm[文件名]	    | remove                | 	删除指定文件       |
| clear	      | clear                 | 	清屏           |

### 一、有关用户的操作

#### 1. 切换用户

1. 切换普通用户

    ```shell
    su [用户名]
    ```

2. 切换 root 用户

    ```shell
    sudo su
    ```
#### 2. 修改用户密码

```shell
sudo passwd [用户名]  # 可以是 root
```

#### 3. 用户的启用和禁用

1. 禁用

    ```shell
    sudo passwd -l [用户名]
    ```

    > 在非 root 下切换被禁用的用户，会认证失败。

2. 启用

    ```shell
    sudo passwd -u [用户名]
    ```
