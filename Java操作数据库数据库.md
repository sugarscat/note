# Java操作数据库数据库

### 下载JDBC驱动包
[点击前往官方网站](https://dev.mysql.com/downloads/connector/j/)

选择 Platform Independent

<img src="img/Java操作数据库数据库/下载驱动包.png" alt="下载驱动包">

### 导入库

添加JDBC数据库驱动包(添加库)：

1. 将驱动包放到目录libs下

   <img src="img/Java操作数据库数据库/libs.png" alt="libs">

2. 按照下面步骤添加库：

   1. 右键驱动包mysql-connector-java.jar

   2. 选择添加为库

        <img src="img/Java操作数据库数据库/右键mysql-connector-java.jar.png" alt="右键">

   3. 在弹出窗口选择模块库：

        <img src="img/Java操作数据库数据库/模块库.png" alt="模块库">
   
### 连接数据库

```
Class.forName("com.mysql.cj.jdbc.Driver");
// 数据库配置
String url = "jdbc:mysql://127.0.0.1:3306/database_operation";// 根据建立的数据库写url
String userName = "root";
String password = "";// 数据库密码
// 创建连接
conn = DriverManager.getConnection(url, userName, password);
stmt = conn.createStatement();
System.out.println("数据库连接成功");
// 关闭连接
conn.close();
stmt.close();
```