# Java 连接数据库

## 下载JDBC驱动包

[点击前往官方网站](https://dev.mysql.com/downloads/connector/j/)

选择 Platform Independent

![选择](../image/connector-java/download.avif)

## 导入JDBC数据库驱动包

1. 将驱动包放到目录libs下

   ![libs](../image/connector-java/libs.avif)

2. 按照下面步骤添加库：

   1. 右键驱动包mysql-connector-java.jar

   2. 选择添加为库

      ![jar](../image/connector-java/右键mysql-connector-java.jar.avif)

## 连接数据库

```java
public void connection throws ClassNotFoundException, SQLException {// 需要抛出异常
   Connection conn;
   Statement stmt;
   Class.forName("com.mysql.cj.jdbc.Driver");
   // 数据库配置
   String url = "jdbc:mysql://localhost:3306/database_operation";// 根据建立的数据库写url
   String userName = "root";
   String password = "";// 数据库密码
   // 创建连接
   conn = DriverManager.getConnection(url, userName, password);
   stmt = conn.createStatement();
   System.out.println("数据库连接成功");
   // 关闭连接
   conn.close();
   stmt.close();
}
```

## 操作数据库

参考[SQL语言](MySQL.md)

1. 查找：

   ```java
   String selectSql = "SELECT * FROM 表名 WHERE 字段 = ?";
   // "?"为占位符，"FROM"后面为表名，WHERE"后面为条件
   ```

   例如：在用户表中查找小明的信息

   ```java
   Connection conn = null;
   PreparedStatement ps = null;
   ResultSet rs = null;
   String selectSql = "SELECT * FROM userinfo WHERE userName = ?";
   conn = DriverManager.getConnection(url, userName, password);// 此处未写数据库配置
   ps = conn.prepareStatement(selectSql);
   // 一一对应，将字符串传给占位符
   ps.setString(1, "小明");
   rs = ps.executeQuery();// 执行SQL语句
   while (rs.next()){
      String ID = rs.getString("ID");
      String name = rs.getString("userName");
      String pd = rs.getString ("password");
      System.out.println( ID + " " + name + " " + pd);
   }
   ```

2. 插入：

   ```java
   String insertSql =  "INSERT INTO 表名(字段, 字段, ..., 字段) VALUES(?, ?, ..., ?)";
   // "VALUES"后面填插入的数据
   ```

   例如：在用户表中添加小军的信息

   ```java
   String insertSql =  "INSERT INTO userinfo(ID, userName, password) VALUES(?, ?, ?)";
   ps = conn.prepareStatement(insertSql);
   ps.setString(1, "3");
   ps.setString(2, "小军");
   ps.setString(3, "123456");
   int count = ps.executeUpdate();// 执行SQL语句
   System.out.println("添加了" + count + "条数据。");
   ```

3. 更新：

   ```java
   String updateSql = "UPDATE 表名 SET 字段 = ? WHERE 字段 = ?";
   // "?"填数据，"WHERE"后面为条件
   ```

   例如：在用户表中更新小明的密码

   ```java
   String updateSql = "UPDATE userinfo SET password = ? WHERE userName = ?";
   ps = conn.prepareStatement(updateSql);
   ps.setString(1, "123456");
   ps.setString(2, "小明");
   int count = ps.executeUpdate();// 执行SQL语句
   System.out.println("更新了" + count + "条数据。");
   ```

4. 删除：

   ```java
   String deleteSql = "DELETE FROM 表名 WHERE 字段 = ?";
   // "FROM"后面为表名，WHERE"后面为条件，第一个"?"填字段
   ```

   例如：在用户表中删除小明的信息

   ```java
   String deleteSql = "DELETE FROM userinfo WHERE userName = ?";
   ps = conn.prepareStatement(deleteSql);
   ps.setString(1, "小明");
   int count = ps.executeUpdate();// 执行SQL语句
   System.out.println("删除了" + count + "条数据。");
   ```

## 例题

使用PreparedStatement接口实现对数据库StudentScore中的Student表进行动态查询、插入、修改和删除操作：

```java
import java.sql.*;
public class Main {
private static String driver = "com.mysql.cj.jdbc.Driver";
private static String url = "jdbc:mysql://localhost:3306/PreparedStatement?"
+ "useSSL = false&serverTimezone = UTC";// 根据建立的数据库写url
private static String user = "root";
private static String password = "123456";

    public static void main(String[] args) {
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        String selectSql = "SELECT * FROM Student WHERE dept = ?";
        String insertSql =  "INSERT INTO Student(sNO, sName, sex, age, dept) VALUES(?, ?, ?, ?, ?)";
        String updateSql = "UPDATE Student SET dept = '金融' WHERE sNo = ?";
        String deleteSql = "DELETE FROM Student WHERE sNo = ?";
        try {
            Class.forName(driver);
            conn = DriverManager.getConnection(url, user, password);
            ps = conn.prepareStatement(selectSql);
            ps.setString(1, "计算机");
            rs = ps.executeQuery();
            while (rs.next()){
                String no = rs.getString("sNo");
                String name = rs.getString("sName");
                String sex = rs.getString("sex");
                int age = rs.getInt("age");
                String dept = rs.getString("dept");
                System.out.println(no + " " + name + " " + sex + " " + age + " " + dept);
            }
            ps = conn.prepareStatement(insertSql);
            ps.setString(1, "202101099");
            ps.setString(2, "小明");
            ps.setString(3, "男");
            ps.setInt(4, 18);
            ps.setString(5, "外语");
            int count = ps.executeUpdate();
            System.out.println("添加" + count + "条数据。");
            ps = conn.prepareStatement(updateSql);
            ps.setString(1, "202101009");
            count = ps.executeUpdate();
            System.out.println("修改了" + count + "条记录。");
            ps = conn.prepareStatement(deleteSql);
            ps.setString(1, "202101009");
            count = ps.executeUpdate();
            System.out.println("删除了" + count + "条记录。");
        } catch (ClassNotFoundException | SQLException e) {
            throw new RuntimeException(e);
        }
        finally {
            try {
                // 关闭连接
                if (rs != null) rs.close();
                if (ps != null) ps.close();
                if (conn != null) conn.close();
                } catch (SQLException e) {
                throw new RuntimeException(e);
            }
        }
    }
}
```
