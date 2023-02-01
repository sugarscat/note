<template><div><h1 id="java操作数据库" tabindex="-1"><a class="header-anchor" href="#java操作数据库" aria-hidden="true">#</a> Java操作数据库</h1>
<h3 id="下载jdbc驱动包" tabindex="-1"><a class="header-anchor" href="#下载jdbc驱动包" aria-hidden="true">#</a> 下载JDBC驱动包</h3>
<p><a href="https://dev.mysql.com/downloads/connector/j/" target="_blank" rel="noopener noreferrer">点击前往官方网站<ExternalLinkIcon/></a></p>
<p>选择 Platform Independent</p>
<p><img src="@source/img/Java操作数据库数据库/下载驱动包.png" alt=""></p>
<h3 id="导入jdbc数据库驱动包" tabindex="-1"><a class="header-anchor" href="#导入jdbc数据库驱动包" aria-hidden="true">#</a> 导入JDBC数据库驱动包</h3>
<ol>
<li>
<p>将驱动包放到目录libs下</p>
<p><img src="@source/img/Java操作数据库数据库/libs.png" alt=""></p>
</li>
<li>
<p>按照下面步骤添加库：</p>
<ol>
<li>
<p>右键驱动包mysql-connector-java.jar</p>
</li>
<li>
<p>选择添加为库</p>
<p><img src="@source/img/Java操作数据库数据库/右键mysql-connector-java.jar.png" alt=""></p>
</li>
<li>
<p>在弹出窗口选择模块库：</p>
<p><img src="@source/img/Java操作数据库数据库/模块库.png" alt=""></p>
</li>
</ol>
</li>
</ol>
<h3 id="连接数据库" tabindex="-1"><a class="header-anchor" href="#连接数据库" aria-hidden="true">#</a> 连接数据库</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>public void connection throws ClassNotFoundException, SQLException {// 需要抛出异常
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作数据库" tabindex="-1"><a class="header-anchor" href="#操作数据库" aria-hidden="true">#</a> 操作数据库</h3>
<p>参考<RouterLink to="/SQL%E8%AF%AD%E8%A8%80.html">SQL语言</RouterLink></p>
<ol>
<li>查找：<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>String selectSql = "SELECT * FROM 表名 WHERE 字段 = ?";
// "?"为占位符，"FROM"后面为表名，WHERE"后面为条件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>例如：在用户表中查找小明的信息<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Connection conn = null;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>插入：<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>String insertSql =  "INSERT INTO 表名(字段, 字段, ..., 字段) VALUES(?, ?, ..., ?)";
// "VALUES"后面填插入的数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>例如：在用户表中添加小军的信息<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>String insertSql =  "INSERT INTO userinfo(ID, userName, password) VALUES(?, ?, ?)";
ps = conn.prepareStatement(insertSql);
ps.setString(1, "3");
ps.setString(2, "小军");
ps.setString(3, "123456");
int count = ps.executeUpdate();// 执行SQL语句
System.out.println("添加了" + count + "条数据。");
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>更新：<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>String updateSql = "UPDATE 表名 SET 字段 = ? WHERE 字段 = ?";
// "?"填数据，"WHERE"后面为条件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>例如：在用户表中更新小明的密码<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>String updateSql = "UPDATE userinfo SET password = ? WHERE userName = ?";
ps = conn.prepareStatement(updateSql);
ps.setString(1, "123456");
ps.setString(2, "小明");
int count = ps.executeUpdate();// 执行SQL语句
System.out.println("更新了" + count + "条数据。");
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>删除：<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>String deleteSql = "DELETE FROM 表名 WHERE 字段 = ?";
// "FROM"后面为表名，WHERE"后面为条件，第一个"?"填字段
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>例如：在用户表中删除小明的信息<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>String deleteSql = "DELETE FROM userinfo WHERE userName = ?";
ps = conn.prepareStatement(deleteSql);
ps.setString(1, "小明");
int count = ps.executeUpdate();// 执行SQL语句
System.out.println("删除了" + count + "条数据。");
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="例题" tabindex="-1"><a class="header-anchor" href="#例题" aria-hidden="true">#</a> 例题：</h3>
<p>使用PreparedStatement接口实现对数据库StudentScore中的Student表进行动态查询、插入、修改和删除操作：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>import java.sql.*;
public class Main {
private static String driver = "com.mysql.cj.jdbc.Driver";
private static String url = "jdbc:mysql://localhost:3306/PreparedStatement?"
+ "useSSL = false&amp;serverTimezone = UTC";// 根据建立的数据库写url
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


