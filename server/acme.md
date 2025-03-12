# ACME申请证书

## ACME安装

```sh
curl  https://get.acme.sh | sh
```

::: tip 安装程序会自动做以下操作

- 自动把 acme.sh 安装到你的 home 的.acme.sh目录下，即~/.acme.sh/

- 自动创建一个 bash 的 alias

- 自动为你创建 cronjob, 每天 0:00 点自动检测所有的证书, 如果快过期了, 需要更新, 则会自动更新证书.

:::

## 方便使用

```sh
alias acme.sh=~/.acme.sh/acme.sh
```

## 更改默认证书

```sh
acme.sh --set-default-ca --server letsencrypt
```

::: tip 提示
acme 被 ZeroSSL 收购，其默认的证书方式为 ZeroSSL，但此证书生成时会携带邮箱，因此更换为 letsencrypt。

您可以自定义生成什么证书，修改 "--server" 后的 "letsencrypt" 即可。
:::

## 生成证书

### Http 验证方式

只需要指定域名, 并指定域名所在的网站根目录. acme.sh 会全自动的生成验证文件, 并放到网站的根目录, 然后自动完成验证. 最后会聪明的删除验证文件. 整个过程没有任何副作用.

如果你用的 apache服务器, acme.sh 还可以智能的从 apache的配置中自动完成验证, 你不需要指定网站根目录:

```sh
acme.sh --issue -d 域名 --apache
```

如果你用的 nginx服务器, 或者反代, acme.sh 还可以智能的从 nginx的配置中自动完成验证, 你不需要指定网站根目录:

```sh
acme.sh --issue -d 域名 --nginx
```

### DNS 验证方式

```sh
export Ali_Key=""
export Ali_Secret=""
acme.sh --issue --dns dns_ali -d 域名
```

::: tip 提示
此命令为 阿里云api

更多请查看[文档](https://github.com/acmesh-official/acme.sh/wiki/dnsapi)

:::

## 证书存放位置

```txt
/root/.acme.sh/域名_ecc/域名.cer
/root/.acme.sh/域名_ecc/域名.key
```

## 安装证书

### Apache

```shell
acme.sh --install-cert -d "域名" \
  --key-file /etc/apache2/ssl/域名.key \
  --fullchain-file /etc/apache2/ssl/域名.crt \
  --reloadcmd "systemctl reload apache2"
```

### Nginx

```shell
acme.sh --install-cert -d "域名" \
  --key-file /etc/nginx/ssl/域名.key \
  --fullchain-file /etc/nginx/ssl/域名.crt \
  --reloadcmd "systemctl reload nginx"
```
