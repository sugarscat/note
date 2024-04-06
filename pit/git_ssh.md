# SSH公钥

1. 通过命令 `ssh-keygen` 生成 SSH Key：

   ```sh
   ssh-keygen -t ed25519 -C "SSH Key"
   ```

   - `-t` key 类型
   - `-C` 注释

2. 经过三次回车，输出：

   ```sh
   Generating public/private ed25519 key pair.
   Enter file in which to save the key (/home/git/.ssh/id_ed25519):
   Enter passphrase (empty for no passphrase):
   Enter same passphrase again:
   Your identification has been saved in /home/git/.ssh/id_ed25519
   Your public key has been saved in /home/git/.ssh/id_ed25519.pub
   The key fingerprint is:
   SHA256:ohDd0OK5WG2dx4gST/j35HjvlJlGHvihyY+Msl6IC8I SSH Key
   The key's randomart image is:
   +--[ED25519 256]--+
   |    .o           |
   |   .+oo          |
   |  ...O.o +       |
   |   .= * = +.     |
   |  .o +..S*. +    |
   |. ...o o..+* *   |
   |.E. o . ..+.O    |
   | . . ... o =.    |
   |    ..oo. o.o    |
   +----[SHA256]-----+
   ```

3. 查看生成的 SSH 公钥和私钥：

   ```bash
   ls ~/.ssh/
   ```

   输出：

   ```bash
   id_ed25519  id_ed25519.pub
   ```

   - 私钥文件 `id_ed25519`
   - 公钥文件 `id_ed25519.pub`

4. 读取公钥文件 `~/.ssh/id_ed25519.pub`：

   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```

   输出，如：

   ```sh
   ssh-ed25519 AAAA***5B SSH Key
   ```

   复制终端输出的公钥。

5. 添加 SSH 公钥到账户。

6. 通过 `ssh -T` 测试（gitee），输出 SSH Key 绑定的**用户名**：

   ```bash
   ssh -T git@gitee.com
   Hi USERNAME! You've successfully authenticated, but GITEE.COM does not provide shell access.
   ```

   :::warning 坑:warning:
   
   输入 `ssh -T git@gitee.com` 后，可能会出现下面情况：
   
   ```sh
   The authenticity of host 'gitee.com (180.76.198.77)' can't be established.
   ED25519 key fingerprint is SHA256:+ULz·······V88.
   This key is not known by any other names
   Are you sure you want to continue connecting (yes/no/[fingerprint])?
   ```
   
   翻译：
   
   ```txt
   无法确定主机“gitee.com（180.76.198.77）”的真实性。
   ED25519 密钥指纹为 ULz·······V88。
   该密钥没有任何其他名称
   您确定要继续连接吗（是/否/[指纹]）？
   ```
   
   此时，需要手动输入 `yes` 才可以继续链接，回车是不行的。
   
   :::