# ACME申请证书

## 1. ACME安装

```sh
curl  https://get.acme.sh | sh
```

::: tip 安装程序会自动做以下操作

- 自动把 acme.sh 安装到你的 home 的.acme.sh目录下，即~/.acme.sh/
- 自动创建一个 bash 的 alias
- 自动为你创建 cronjob, 每天 0:00 点自动检测所有的证书, 如果快过期了, 需要更新, 则会自动更新证书.
:::

## 2.方便使用

```sh
alias acme.sh=~/.acme.sh/acme.sh
```

## 3.更改默认证书

```sh
acme.sh --set-default-ca --server letsencrypt
```

::: tip 提示
acme 被 ZeroSSL 收购，其默认的证书方式为 ZeroSSL，但此证书生成时会携带邮箱，因此更换为 letsencrypt。

您可以自定义生成什么证书，修改 "--server" 后的 "letsencrypt" 即可。
:::

## 4.生成证书 (DNS 验证方式)

```sh
export Ali_Key=""
export Ali_Secret=""
acme.sh --issue --dns dns_ali -d 域名
```

::: tip 提示
此命令为 阿里云api
:::

## 5. 证书默认存放位置

```txt
/root/.acme.sh/域名_ecc/域名.cer
/root/.acme.sh/域名_ecc/域名.key
```
