# Linux 命令大全

## 🚀 终端基础操作

### 1. 命令结构

```shell
命令 [-选项] [参数]
# 示例：显示详细信息并排序
ls -l --sort=size
```

### 2. 高频核心命令

| 命令  | 功能描述     | 实战示例                    |
| ----- | ------------ | --------------------------- |
| `ls`  | 列出目录内容 | `ls -lh` 人性化显示文件大小 |
| `pwd` | 显示当前路径 | `pwd -P` 显示物理路径       |
| `cd`  | 目录跳转     | `cd -` 返回上次目录         |
| `cat` | 查看文件内容 | `cat -n file` 显示行号      |

### 3. 效率提升技巧

- **智能补全**：`Tab`键自动补全路径/命令
- **历史追溯**：`Ctrl+R` 逆向搜索命令历史
- **会话管理**：
  ```shell
  screen -S work  # 创建持久会话
  tmux new -s dev # 高级终端复用
  ```

## 📦 文件系统管理

### 1. 文件操作

```shell
# 创建多层目录
mkdir -p project/{src,dist,test}

# 安全删除（需确认）
rm -i *.log

# 强力清除（慎用！）
rm -rf node_modules/
```

### 2. 链接管理

```shell
# 创建软链接（绝对路径）
ln -s /opt/app/config.conf ~/config.link

# 查看链接指向
readlink config.link
```

### 3. 高级查找

```shell
# 按类型查找（f=文件，d=目录）
find /var -type f -name "*.log"

# 最近修改文件
find . -mtime -1 -exec ls -lh {} \;

# 组合条件搜索
find /home -size +100M -user root
```

## 🛠️ 系统管理

### 1. 进程监控

```shell
# 动态进程查看
top -u nginx

# 树状结构展示
pstree -p

# 杀灭进程组
kill -9 $(pgrep -f "python script")
```

### 2. 网络诊断

```shell
# 快速端口检测
nc -zv example.com 22

# 路由追踪
mtr 8.8.8.8

# 持续ping测试
ping -i 0.5 -c 100 google.com
```

## 📦 软件管理

### APT 高级用法

```shell
# 更新软件源
sudo apt update && sudo apt upgrade -y

# 搜索软件包
apt search nginx

# 清除旧内核
sudo apt autoremove --purge
```

### 源码编译

```shell
./configure --prefix=/opt/app
make -j$(nproc)
sudo make install
```

## 🔐 权限管理

### 1. 权限控制

```shell
# 递归修改权限
chmod -R 750 /opt/secure

# 修改文件属主
chown user:group file.txt
```

### 2. 用户管理

```shell
# 创建系统用户
useradd -r -s /bin/false service_user

# 锁定账户
usermod -L username

# 查看登录历史
last -n 10
```

## 🧰 开发工具链

### 1. 文本处理

```shell
# 实时日志分析
tail -f /var/log/syslog | grep "ERROR"

# JSON格式化
curl api.example.com | jq .

# CSV处理
csvcut -c 1,3 data.csv | csvlook
```

### 2. 压缩打包

```shell
# 创建带时间戳的压缩包
tar -czvf backup-$(date +%Y%m%d).tar.gz /data

# 排除指定目录
tar --exclude='*.tmp' -cf archive.tar project/

# 分卷压缩
tar -cvzf - bigfile | split -b 2G - bigfile.tar.gz.
```

## 💡 专家技巧

### 1. 命令组合

```shell
# 统计代码行数
find src/ -name "*.py" | xargs wc -l

# 批量重命名
rename 's/.JPG/.jpg/' *.JPG

# 快速创建大文件
dd if=/dev/zero of=test.img bs=1G count=5
```

### 2. 安全增强

```shell
# SSH密钥登录
ssh-keygen -t ed25519 -C "user@server"

# 防火墙配置
ufw allow proto tcp from 192.168.1.0/24 to any port 22
```

> 📌 提示：使用危险命令前建议添加 `echo` 预览效果，例如 `rm -rf` 改为 `echo rm -rf`
