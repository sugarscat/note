# 软件源更换

## 更改 ubuntu 22.04 服务器的软件源

### 备份原有源文件

```bash
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

### 更换为国内源（以阿里云为例）

```bash
sudo tee /etc/apt/sources.list <<EOF
deb https://mirrors.aliyun.com/ubuntu/ jammy main restricted universe multiverse
deb https://mirrors.aliyun.com/ubuntu/ jammy-updates main restricted universe multiverse
deb https://mirrors.aliyun.com/ubuntu/ jammy-backports main restricted universe multiverse
deb https://mirrors.aliyun.com/ubuntu/ jammy-security main restricted universe multiverse

deb-src https://mirrors.aliyun.com/ubuntu/ jammy main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ jammy-updates main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ jammy-backports main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ jammy-security main restricted universe multiverse
EOF
```

> **其他可选源：**
>
> - **清华大学**：
>     ```bash
>     sudo sed -i 's|https://.*.ubuntu.com|https://mirrors.tuna.tsinghua.edu.cn|g' /etc/apt/sources.list
>     ```
> - **中科大**：
>     ```bash
>     sudo sed -i 's|https://.*.ubuntu.com|https://mirrors.ustc.edu.cn|g' /etc/apt/sources.list
>     ```
> - **华为云**：
>     ```bash
>     sudo sed -i 's|https://.*.ubuntu.com|https://repo.huaweicloud.com|g' /etc/apt/sources.list
>     ```

### 更新软件包列表

```bash
sudo apt update
```

### 升级已安装的软件（可选）

```bash
sudo apt upgrade -y
```
