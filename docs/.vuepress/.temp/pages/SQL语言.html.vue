<template><div><h1 id="sql语言" tabindex="-1"><a class="header-anchor" href="#sql语言" aria-hidden="true">#</a> SQL语言</h1>
<h3 id="基本" tabindex="-1"><a class="header-anchor" href="#基本" aria-hidden="true">#</a> 基本</h3>
<ol>
<li>
<p>一行SQL语句</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>-- 一行 SQL 语句
UPDATE user SET username='robot', password='robot' WHERE username = 'root';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>多行SQL语句</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>-- 多行 SQL 语句
UPDATE user
SET username='robot', password='robot'
WHERE username = 'root';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>三种注释</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>## 注释1
-- 注释2
/* 注释3 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>AS 后是”别名“</p>
</li>
</ol>
<hr>
<h3 id="一、-增删改查" tabindex="-1"><a class="header-anchor" href="#一、-增删改查" aria-hidden="true">#</a> 一、 增删改查</h3>
<blockquote>
<p>增删改查，又称为 CRUD，数据库基本操作中的基本操作。</p>
</blockquote>
<h4 id="_1-插入数据" tabindex="-1"><a class="header-anchor" href="#_1-插入数据" aria-hidden="true">#</a> 1. 插入数据</h4>
<blockquote>
<p>INSERT INTO 语句用于向表中插入新记录。</p>
</blockquote>
<ol>
<li>
<p>插入完整的一行</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>INSERT INTO 表名 VALUES (值, 值, ..., 值);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>插入行的一部分</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>INSERT INTO 表名(字段, 字段, ..., 字段) VALUES (值, 值, ..., 值);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>嵌套插入</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>INSERT INTO 表1(字段1) SELECT n字段2 FROM 表2; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<h4 id="_2-更新数据" tabindex="-1"><a class="header-anchor" href="#_2-更新数据" aria-hidden="true">#</a> 2. 更新数据</h4>
<blockquote>
<p>UPDATE 语句用于更新表中的记录。</p>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>UPDATE 表名 SET 字段 = 值, ... WHERE 字段 = 值, ...;
-- WHERE 后面是条件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-删除数据-清空表" tabindex="-1"><a class="header-anchor" href="#_3-删除数据-清空表" aria-hidden="true">#</a> 3. 删除数据（清空表）</h4>
<blockquote>
<p>DELETE 语句用于删除表中的记录。</p>
<p>TRUNCATE TABLE 可以清空表，也就是删除所有行。</p>
</blockquote>
<ol>
<li>
<p>删除指定数据</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>DELETE FROM 表名 WHERE 字段 = 值;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>清空表中数据</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>TRUNCATE TABLE 表名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<h4 id="_4-查找数据" tabindex="-1"><a class="header-anchor" href="#_4-查找数据" aria-hidden="true">#</a> 4. 查找数据</h4>
<blockquote>
<p>SELECT 语句用于从数据库中查询数据。</p>
<p>DISTINCT 用于返回唯一不同的值。它作用于所有列，也就是说所有列的值都相同才算相同。</p>
<p>限制返回的行数。可以有两个参数，第一个参数为起始行，从 0 开始；第二个参数为返回的总行数。</p>
<p>ASC ：升序（默认）</p>
<p>DESC ：降序</p>
</blockquote>
<ol>
<li>
<p>查找全部数据</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SELECT * FROM 表名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查找部分数据</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SELECT 字段, ... FROM 表名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查询不同的值</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SELECT DISTINCT 字段 FROM 表名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>限制查询结果</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>-- 返回前 5 行
SELECT * FROM 表名 LIMIT 5;
SELECT * FROM 表名 LIMIT 0, 5;
-- 返回第 3 ~ 5 行
SELECT * FROM 表名 LIMIT 2, 3;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<hr>
<h3 id="二、-子查询-嵌套" tabindex="-1"><a class="header-anchor" href="#二、-子查询-嵌套" aria-hidden="true">#</a> 二、 子查询（嵌套）</h3>
<blockquote>
<p>子查询是嵌套在较大查询中的 SQL 查询。子查询也称为内部查询或内部选择，而包含子查询的语句也称为外部查询或外部选择。</p>
</blockquote>
<h4 id="_1-子查询的子查询" tabindex="-1"><a class="header-anchor" href="#_1-子查询的子查询" aria-hidden="true">#</a> 1. 子查询的子查询</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SELECT 字段, ...
FROM 表1
WHERE 字段 IN (SELECT 字段
FROM 表2
WHERE 字段 IN (SELECT 字段
FROM 表3
WHERE 字段 = 值));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-where" tabindex="-1"><a class="header-anchor" href="#_2-where" aria-hidden="true">#</a> 2. WHERE</h4>
<blockquote>
<ul>
<li>
<p>WHERE 子句用于过滤记录，即缩小访问数据的范围。</p>
</li>
<li>
<p>WHERE 后跟一个返回 true 或 false 的条件。</p>
</li>
<li>
<p>WHERE 可以与 SELECT，UPDATE 和 DELETE 一起使用。</p>
</li>
<li>
<p>可以在 WHERE 子句中使用的操作符</p>
</li>
</ul>
</blockquote>
<ul>
<li>= : 等于</li>
<li>&lt;&gt;	: 不等于。注释：在 SQL 的一些版本中，该操作符可被写成 !=</li>
<li>'&gt;' : 大于</li>
<li>&lt; : 小于</li>
<li>'&gt;=' : 大于等于</li>
<li>&lt;=	: 小于等于</li>
<li>BETWEEN : 在某个范围内</li>
<li>LIKE : 搜索某种模式</li>
<li>IN	: 指定针对某个列的多个可能值</li>
</ul>
<h4 id="_3-in-和-between" tabindex="-1"><a class="header-anchor" href="#_3-in-和-between" aria-hidden="true">#</a> 3. IN 和 BETWEEN</h4>
<blockquote>
<ul>
<li>
<p>N 操作符在 WHERE 子句中使用，作用是在指定的几个特定值中任选一个值。</p>
</li>
<li>
<p>BETWEEN 操作符在 WHERE 子句中使用，作用是选取介于某个范围内的值。</p>
</li>
</ul>
</blockquote>
<ol>
<li>
<p>IN</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SELECT * FROM 表名 WHERE 字段 IN (值, ... );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>BETWEEN</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SELECT * FROM 表名 WHERE 字段 BETWEEN 值 AND 值;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<h4 id="_4-and-or-not" tabindex="-1"><a class="header-anchor" href="#_4-and-or-not" aria-hidden="true">#</a> 4. AND, OR, NOT</h4>
<blockquote>
<ul>
<li>
<p>AND、OR、NOT 是用于对过滤条件的逻辑处理指令。</p>
</li>
<li>
<p>AND 优先级高于 OR，为了明确处理顺序，可以使用 ()。</p>
</li>
<li>
<p>AND 操作符表示左右的条件都要满足。</p>
</li>
<li>
<p>OR 操作符表示左右的条件满足任意一个即可。</p>
</li>
<li>
<p>NOT 操作符用于否定一个条件。</p>
</li>
</ul>
</blockquote>
<ol>
<li>
<p>AND</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SELECT 字段, ... FROM 表名 WHERE 字段 = 值 AND 字段 &lt;= 值;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>OR</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SELECT 字段, ... FROM 表名 WHERE 字段 = 值 OR 字段 = 值;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>NOT</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SELECT 字段, ... FROM 表名 WHERE 字段 NOT BETWEEN 值 AND 值;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<h4 id="_5-like" tabindex="-1"><a class="header-anchor" href="#_5-like" aria-hidden="true">#</a> 5. Like</h4>
<blockquote>
<ul>
<li>
<p>LIKE 操作符在 WHERE 子句中使用，作用是确定字符串是否匹配模式。</p>
</li>
<li>
<p>只有字段是文本值时才使用 LIKE。</p>
</li>
<li>
<p>LIKE 支持两个通配符匹配选项：% 和 _。</p>
</li>
<li>
<p>不要滥用通配符，通配符位于开头处匹配会非常慢。</p>
</li>
<li>
<p>% 表示任何字符出现任意次数。</p>
</li>
<li>
<p>_ 表示任何字符出现一次。</p>
</li>
</ul>
</blockquote>
<ol>
<li>% 示例<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SELECT 字段, ... FROM 表名 WHERE 字段 LIKE '%值%';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>_ 示例<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SELECT 字段 FROM 表名 WHERE 字段 LIKE '_值';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<hr>
<h3 id="四、-连接和组合" tabindex="-1"><a class="header-anchor" href="#四、-连接和组合" aria-hidden="true">#</a> 四、 连接和组合</h3>
<h4 id="_1-连接-join" tabindex="-1"><a class="header-anchor" href="#_1-连接-join" aria-hidden="true">#</a> 1. 连接（JOIN）</h4>
<blockquote>
<ul>
<li>
<p>如果一个 JOIN 至少有一个公共字段并且它们之间存在关系，则该 JOIN 可以在两个或多个表上工作。</p>
</li>
<li>
<p>连接用于连接多个表，使用 JOIN 关键字，并且条件语句使用 ON 而不是 WHERE。</p>
</li>
<li>
<p>JOIN 保持基表（结构和数据）不变。</p>
</li>
<li>
<p>JOIN 有两种连接类型：内连接和外连接。</p>
</li>
<li>
<p>内连接又称等值连接，使用 INNER</p>
</li>
<li>
<p>JOIN 关键字。在没有条件语句的情况下返回笛卡尔积。</p>
</li>
<li>
<p>自连接可以看成内连接的一种，只是连接的表是自身而已。</p>
</li>
<li>
<p>自然连接是把同名列通过 = 测试连接起来的，同名列可以有多个。</p>
</li>
<li>
<p>内连接提供连接的列，而自然连接自动连接所有同名列。</p>
</li>
<li>
<p>外连接返回一个表中的所有行，并且仅返回来自次表中满足连接条件的那些行，即两个表中的列是相等的。外连接分为左外连接、右外连接、全外连接（Mysql 不支持）。</p>
</li>
<li>
<p>左外连接就是保留左表没有关联的行。</p>
</li>
<li>
<p>右外连接就是保留右表没有关联的行。</p>
</li>
<li>
<p>连接 vs 子查询：连接可以替换子查询，并且比子查询的效率一般会更快。</p>
</li>
</ul>
</blockquote>
<ol>
<li>
<p>内连接（INNER JOIN）</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SELECT 字段, ... FROM vendors INNER JOIN products ON vendors.vend_id = products.vend_id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>自连接</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SELECT 字段, ... FROM customers c1, customers c2 WHERE c1.cust_name = c2.cust_name AND c2.cust_contact = 'Jim Jones';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>自然连接（NATURAL JOIN）</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SELECT 字段, ... FROM Products NATURAL JOIN Customers;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>左连接（LEFT JOIN）</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SELECT 字段, ... FROM customers LEFT JOIN orders ON customers.cust_id = orders.cust_id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>右连接（RIGHT JOIN）</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SELECT 字段, ... FROM customers RIGHT JOIN orders ON customers.cust_id = orders.cust_id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<h4 id="_2-组合-union" tabindex="-1"><a class="header-anchor" href="#_2-组合-union" aria-hidden="true">#</a> 2. 组合（UNION）</h4>
<blockquote>
<ul>
<li>
<p>UNION 运算符将两个或更多查询的结果组合起来，并生成一个结果集，其中包含来自 UNION 中参与查询的提取行。</p>
</li>
<li>
<p>UNION 基本规则</p>
<ul>
<li>
<p>所有查询的列数和列顺序必须相同。</p>
</li>
<li>
<p>每个查询中涉及表的列的数据类型必须相同或兼容。</p>
</li>
<li>
<p>通常返回的列名取自第一个查询。</p>
</li>
</ul>
</li>
<li>
<p>默认会去除相同行，如果需要保留相同行，使用 UNION ALL。</p>
</li>
<li>
<p>只能包含一个 ORDER BY 子句，并且必须位于语句的最后。</p>
</li>
<li>
<p>应用场景</p>
<ul>
<li>在一个查询中从不同的表返回结构数据。</li>
<li>对一个表执行多个查询，按一个查询返回数据。</li>
</ul>
</li>
</ul>
</blockquote>
<ol>
<li>组合查询<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SELECT cust_name, cust_contact, cust_email
FROM customers
WHERE cust_state IN ('IL', 'IN', 'MI')
UNION
SELECT cust_name, cust_contact, cust_email
FROM customers
WHERE cust_name = 'Fun4All';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h4 id="_3-oin-vs-union" tabindex="-1"><a class="header-anchor" href="#_3-oin-vs-union" aria-hidden="true">#</a> 3. OIN vs UNION</h4>
<blockquote>
<ul>
<li>
<p>JOIN 中连接表的列可能不同，但在 UNION 中，所有查询的列数和列顺序必须相同。</p>
</li>
<li>
<p>UNION 将查询之后的行放在一起（垂直放置），但 JOIN 将查询之后的列放在一起（水平放置），即它构成一个笛卡尔积。</p>
</li>
</ul>
</blockquote>
<hr>
<h3 id="五、函数-适合mysql" tabindex="-1"><a class="header-anchor" href="#五、函数-适合mysql" aria-hidden="true">#</a> 五、函数(适合MySql)</h3>
<h4 id="_1-文本处理" tabindex="-1"><a class="header-anchor" href="#_1-文本处理" aria-hidden="true">#</a> 1. 文本处理</h4>
<table>
<thead>
<tr>
<th style="text-align:left">函数</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">LEFT()、RIGHT()</td>
<td style="text-align:left">左边或者右边的字符</td>
</tr>
<tr>
<td style="text-align:left">LOWER()、UPPER()</td>
<td style="text-align:left">转换为小写或者大写</td>
</tr>
<tr>
<td style="text-align:left">LTRIM()、RTIM()</td>
<td style="text-align:left">去除左边或者右边的空格</td>
</tr>
<tr>
<td style="text-align:left">LENGTH()</td>
<td style="text-align:left">长度</td>
</tr>
<tr>
<td style="text-align:left">SOUNDEX()</td>
<td style="text-align:left">转换为语音值</td>
</tr>
</tbody>
</table>
<blockquote>
<ul>
<li>SOUNDEX() 可以将一个字符串转换为描述其语音表示的字母数字模式。</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SELECT *
FROM mytable
WHERE SOUNDEX(col1) = SOUNDEX('apple')
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h4 id="_2-日期和时间处理" tabindex="-1"><a class="header-anchor" href="#_2-日期和时间处理" aria-hidden="true">#</a> 2. 日期和时间处理</h4>
<blockquote>
<ul>
<li>
<p>日期格式：YYYY-MM-DD</p>
</li>
<li>
<p>时间格式：HH:MM:SS</p>
</li>
</ul>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:left">函 数</th>
<th style="text-align:left">说 明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">AddDate()</td>
<td style="text-align:left">增加一个日期（天、周等）</td>
</tr>
<tr>
<td style="text-align:left">AddTime()</td>
<td style="text-align:left">增加一个时间（时、分等）</td>
</tr>
<tr>
<td style="text-align:left">CurDate()</td>
<td style="text-align:left">返回当前日期</td>
</tr>
<tr>
<td style="text-align:left">CurTime()</td>
<td style="text-align:left">返回当前时间</td>
</tr>
<tr>
<td style="text-align:left">Date()</td>
<td style="text-align:left">返回日期时间的日期部分</td>
</tr>
<tr>
<td style="text-align:left">DateDiff()</td>
<td style="text-align:left">计算两个日期之差</td>
</tr>
<tr>
<td style="text-align:left">Date_Add()</td>
<td style="text-align:left">高度灵活的日期运算函数</td>
</tr>
<tr>
<td style="text-align:left">Date_Format()</td>
<td style="text-align:left">返回一个格式化的日期或时间串</td>
</tr>
<tr>
<td style="text-align:left">Day()</td>
<td style="text-align:left">返回一个日期的天数部分</td>
</tr>
<tr>
<td style="text-align:left">DayOfWeek()</td>
<td style="text-align:left">对于一个日期，返回对应的星期几</td>
</tr>
<tr>
<td style="text-align:left">Hour()</td>
<td style="text-align:left">返回一个时间的小时部分</td>
</tr>
<tr>
<td style="text-align:left">Minute()</td>
<td style="text-align:left">返回一个时间的分钟部分</td>
</tr>
<tr>
<td style="text-align:left">Month()</td>
<td style="text-align:left">返回一个日期的月份部分</td>
</tr>
<tr>
<td style="text-align:left">Now()</td>
<td style="text-align:left">返回当前日期和时间</td>
</tr>
<tr>
<td style="text-align:left">Second()</td>
<td style="text-align:left">返回一个时间的秒部分</td>
</tr>
<tr>
<td style="text-align:left">Time()</td>
<td style="text-align:left">返回一个日期时间的时间部分</td>
</tr>
<tr>
<td style="text-align:left">Year()</td>
<td style="text-align:left">返回一个日期的年份部分</td>
</tr>
</tbody>
</table>
<blockquote>
<ul>
<li>如：</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>mysql> SELECT NOW(); -- 显示当前时间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<h4 id="_3-数值处理" tabindex="-1"><a class="header-anchor" href="#_3-数值处理" aria-hidden="true">#</a> 3. 数值处理</h4>
<table>
<thead>
<tr>
<th style="text-align:left">函 数</th>
<th style="text-align:left">说 明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">SIN()</td>
<td style="text-align:left">正弦</td>
</tr>
<tr>
<td style="text-align:left">COS()</td>
<td style="text-align:left">余弦</td>
</tr>
<tr>
<td style="text-align:left">TAN()</td>
<td style="text-align:left">正切</td>
</tr>
<tr>
<td style="text-align:left">ABS()</td>
<td style="text-align:left">绝对值</td>
</tr>
<tr>
<td style="text-align:left">SQRT()</td>
<td style="text-align:left">平方根</td>
</tr>
<tr>
<td style="text-align:left">MOD()</td>
<td style="text-align:left">余数</td>
</tr>
<tr>
<td style="text-align:left">EXP()</td>
<td style="text-align:left">指数</td>
</tr>
<tr>
<td style="text-align:left">PI()</td>
<td style="text-align:left">圆周率</td>
</tr>
<tr>
<td style="text-align:left">RAND()</td>
<td style="text-align:left">随机数</td>
</tr>
</tbody>
</table>
<h4 id="_4-汇总" tabindex="-1"><a class="header-anchor" href="#_4-汇总" aria-hidden="true">#</a> 4. 汇总</h4>
<table>
<thead>
<tr>
<th style="text-align:left">函 数</th>
<th style="text-align:left">说 明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">AVG()</td>
<td style="text-align:left">返回某列的平均值</td>
</tr>
<tr>
<td style="text-align:left">COUNT()</td>
<td style="text-align:left">返回某列的行数</td>
</tr>
<tr>
<td style="text-align:left">MAX()</td>
<td style="text-align:left">返回某列的最大值</td>
</tr>
<tr>
<td style="text-align:left">MIN()</td>
<td style="text-align:left">返回某列的最小值</td>
</tr>
<tr>
<td style="text-align:left">SUM()</td>
<td style="text-align:left">返回某列值之和</td>
</tr>
</tbody>
</table>
<blockquote>
<ul>
<li>
<p>AVG() 会忽略 NULL 行。</p>
</li>
<li>
<p>使用 DISTINCT 可以让汇总函数值汇总不同的值。</p>
</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SELECT AVG(DISTINCT 字段) AS 别名 FROM 表名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<hr>
<h3 id="六、-排序和分组" tabindex="-1"><a class="header-anchor" href="#六、-排序和分组" aria-hidden="true">#</a> 六、 排序和分组</h3>
<h4 id="_1-order-by" tabindex="-1"><a class="header-anchor" href="#_1-order-by" aria-hidden="true">#</a> 1. ORDER BY</h4>
<blockquote>
<ul>
<li>
<p>用于对结果集进行排序。</p>
</li>
<li>
<p>ASC ：升序（默认）</p>
</li>
<li>
<p>DESC ：降序</p>
</li>
<li>
<p>可以按多个列进行排序，并且为每个列指定不同的排序方式</p>
</li>
</ul>
</blockquote>
<ol>
<li>指定多个列的排序方向<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SELECT 字段, ... FROM 表名
ORDER BY 字段 DESC, 字段 ASC;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h4 id="_2-group-by" tabindex="-1"><a class="header-anchor" href="#_2-group-by" aria-hidden="true">#</a> 2. GROUP BY</h4>
<blockquote>
<ul>
<li>
<p>GROUP BY 子句将记录分组到汇总行中。</p>
</li>
<li>
<p>GROUP BY 为每个组返回一个记录。</p>
</li>
<li>
<p>GROUP BY 通常还涉及聚合：COUNT，MAX，SUM，AVG 等。</p>
</li>
<li>
<p>GROUP BY 可以按一列或多列进行分组。</p>
</li>
<li>
<p>GROUP BY 按分组字段进行排序后，ORDER BY 可以以汇总字段来进行排序。</p>
</li>
</ul>
</blockquote>
<ol>
<li>
<p>分组</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SELECT 字段, COUNT(字段) AS 别名 FROM 表名 GROUP BY 字段;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>分组后排序</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SELECT 字段, COUNT(字段) AS 别名 FROM 表名 GROUP BY 字段 ORDER BY 字段 DESC;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<h4 id="_3-having" tabindex="-1"><a class="header-anchor" href="#_3-having" aria-hidden="true">#</a> 3. HAVING</h4>
<blockquote>
<ul>
<li>
<p>HAVING 用于对汇总的 GROUP BY 结果进行过滤。</p>
</li>
<li>
<p>HAVING 要求存在一个 GROUP BY 子句。</p>
</li>
<li>
<p>WHERE 和 HAVING 可以在相同的查询中。</p>
</li>
<li>
<p>HAVING vs WHERE</p>
</li>
<li>
<p>WHERE 和 HAVING 都是用于过滤。</p>
</li>
<li>
<p>HAVING 适用于汇总的组记录；而 WHERE 适用于单个记录。</p>
</li>
</ul>
</blockquote>
<ol>
<li>使用 WHERE 和 HAVING 过滤数据<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SELECT 字段, COUNT(*) AS 别名 FROM 表名 WHERE 字段 IS NOT NULL GROUP BY 字段 HAVING COUNT(*) >= 1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<hr>
<h3 id="七、-数据定义" tabindex="-1"><a class="header-anchor" href="#七、-数据定义" aria-hidden="true">#</a> 七、 数据定义</h3>
<blockquote>
<p>DDL 的主要功能是定义数据库对象（如：数据库、数据表、视图、索引等）。</p>
</blockquote>
<h4 id="_1-数据库-database" tabindex="-1"><a class="header-anchor" href="#_1-数据库-database" aria-hidden="true">#</a> 1. 数据库（DATABASE）</h4>
<ol>
<li>
<p>创建数据库</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>CREATE DATABASE 表名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>删除数据库</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>DROP DATABASE 表名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>选择数据库</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>USE test;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<h4 id="_2-数据表-table" tabindex="-1"><a class="header-anchor" href="#_2-数据表-table" aria-hidden="true">#</a> 2. 数据表（TABLE）</h4>
<ol>
<li>
<p>创建数据表</p>
<ol>
<li>
<p>普通创建</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>CREATE TABLE user (
id int(10) unsigned NOT NULL COMMENT 'Id',
username varchar(64) NOT NULL DEFAULT 'default' COMMENT '用户名',
password varchar(64) NOT NULL DEFAULT 'default' COMMENT '密码',
email varchar(64) NOT NULL DEFAULT 'default' COMMENT '邮箱'
) COMMENT='用户表';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>根据已有的表创建新表</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>CREATE TABLE 表名 AS SELECT * FROM 表名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
</li>
<li>
<p>删除数据表</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>DROP TABLE 表名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>修改数据表</p>
<ol>
<li>
<p>添加列</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ALTER TABLE user ADD age int(3);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>删除列</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ALTER TABLE user DROP COLUMN age;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>修改列</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ALTER TABLE user MODIFY COLUMN age tinyint;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>添加主键</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ALTER TABLE user ADD PRIMARY KEY (id);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>删除主键</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ALTER TABLE user DROP PRIMARY KEY;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
</li>
</ol>
<h4 id="_3-视图-view" tabindex="-1"><a class="header-anchor" href="#_3-视图-view" aria-hidden="true">#</a> 3. 视图（VIEW）</h4>
<blockquote>
<ul>
<li>
<p>定义</p>
<ul>
<li>
<p>视图是基于 SQL 语句的结果集的可视化的表。</p>
</li>
<li>
<p>视图是虚拟的表，本身不包含数据，也就不能对其进行索引操作。对视图的操作和对普通表的操作一样。</p>
</li>
</ul>
</li>
<li>
<p>作用</p>
<ul>
<li>
<p>简化复杂的 SQL 操作，比如复杂的联结；</p>
</li>
<li>
<p>只使用实际表的一部分数据；</p>
</li>
<li>
<p>通过只给用户访问视图的权限，保证数据的安全性；</p>
</li>
<li>
<p>更改数据格式和表示。</p>
</li>
</ul>
</li>
</ul>
</blockquote>
<ol>
<li>
<p>创建视图</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>CREATE VIEW top_10_user_view AS SELECT id, username FROM user WHERE id &lt; 10;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>删除视图</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>DROP VIEW top_10_user_view;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<h4 id="_4-索引-index" tabindex="-1"><a class="header-anchor" href="#_4-索引-index" aria-hidden="true">#</a> 4. 索引（INDEX）</h4>
<blockquote>
<ul>
<li>
<p>作用</p>
<ul>
<li>
<p>通过索引可以更加快速高效地查询数据。</p>
</li>
<li>
<p>用户无法看到索引，它们只能被用来加速查询。</p>
</li>
</ul>
</li>
<li>
<p>注意：更新一个包含索引的表需要比更新一个没有索引的表花费更多的时间，这是由于索引本身也需要更新。因此，理想的做法是仅仅在常常被搜索的列（以及表）上面创建索引。</p>
</li>
<li>
<p>唯一索引：唯一索引表明此索引的每一个索引值只对应唯一的数据记录。</p>
</li>
</ul>
</blockquote>
<ol>
<li>
<p>创建索引</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>CREATE INDEX user_index ON user (id);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>创建唯一索引</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>CREATE UNIQUE INDEX user_index ON user (id);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>删除索引</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ALTER TABLE user DROP INDEX user_index;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<h4 id="_5-约束" tabindex="-1"><a class="header-anchor" href="#_5-约束" aria-hidden="true">#</a> 5. 约束</h4>
<blockquote>
<ul>
<li>
<p>如果存在违反约束的数据行为，行为会被约束终止。</p>
</li>
<li>
<p>约束可以在创建表时规定（通过 CREATE TABLE 语句），或者在表创建之后规定（通过 ALTER TABLE 语句）。</p>
</li>
<li>
<p>约束类型</p>
<ul>
<li>
<p>NOT NULL - 指示某列不能存储 NULL 值。</p>
</li>
<li>
<p>UNIQUE - 保证某列的每行必须有唯一的值。</p>
</li>
<li>
<p>PRIMARY KEY - NOT NULL 和 UNIQUE 的结合。确保某列（或两个列多个列的结合）有唯一标识，有助于更容易更快速地找到表中的一个特定的记录。</p>
</li>
<li>
<p>FOREIGN KEY - 保证一个表中的数据匹配另一个表中的值的参照完整性。</p>
</li>
<li>
<p>CHECK - 保证列中的值符合指定的条件。</p>
</li>
<li>
<p>DEFAULT - 规定没有给列赋值时的默认值。</p>
</li>
</ul>
</li>
</ul>
</blockquote>
<ol>
<li>创建表时使用约束条件：<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>CREATE TABLE Users (
Id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '自增Id',
Username VARCHAR(64) NOT NULL UNIQUE DEFAULT 'default' COMMENT '用户名',
Password VARCHAR(64) NOT NULL DEFAULT 'default' COMMENT '密码',
Email VARCHAR(64) NOT NULL DEFAULT 'default' COMMENT '邮箱地址',
Enabled TINYINT(4) DEFAULT NULL COMMENT '是否有效',
PRIMARY KEY (Id)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT='用户表';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<hr>
<h3 id="八、-事务处理" tabindex="-1"><a class="header-anchor" href="#八、-事务处理" aria-hidden="true">#</a> 八、 事务处理</h3>
<blockquote>
<ul>
<li>
<p>不能回退 SELECT 语句，回退 SELECT 语句也没意义；也不能回退 CREATE 和 DROP 语句。</p>
</li>
<li>
<p>MySQL 默认是隐式提交，每执行一条语句就把这条语句当成一个事务然后进行提交。当出现 START TRANSACTION 语句时，会关闭隐式提交；当 COMMIT 或 ROLLBACK 语句执行后，事务会自动关闭，重新恢复隐式提交。</p>
</li>
<li>
<p>通过 set autocommit=0 可以取消自动提交，直到 set autocommit=1 才会提交；autocommit 标记是针对每个连接而不是针对服务器的。</p>
</li>
<li>
<p>指令</p>
<ul>
<li>
<p>START TRANSACTION - 指令用于标记事务的起始点。</p>
</li>
<li>
<p>SAVEPOINT - 指令用于创建保留点。</p>
</li>
<li>
<p>ROLLBACK TO - 指令用于回滚到指定的保留点；如果没有设置保留点，则回退到 START TRANSACTION 语句处。</p>
</li>
<li>
<p>COMMIT - 提交事务。</p>
</li>
</ul>
</li>
</ul>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>-- 开始事务
START TRANSACTION;
 
-- 插入操作 A
INSERT INTO `user`
VALUES (1, 'root1', 'root1', 'xxxx@163.com');
 
-- 创建保留点 updateA
SAVEPOINT updateA;
 
-- 插入操作 B
INSERT INTO `user`
VALUES (2, 'root2', 'root2', 'xxxx@163.com');
 
-- 回滚到保留点 updateA
ROLLBACK TO updateA;
 
-- 提交事务，只有操作 A 生效
COMMIT;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="九、-权限控制" tabindex="-1"><a class="header-anchor" href="#九、-权限控制" aria-hidden="true">#</a> 九、 权限控制</h3>
<blockquote>
<ul>
<li>
<p>GRANT 和 REVOKE 可在几个层次上控制访问权限：</p>
</li>
<li>
<p>整个服务器，使用 GRANT ALL 和 REVOKE ALL；</p>
</li>
<li>
<p>整个数据库，使用 ON database.*；</p>
</li>
<li>
<p>特定的表，使用 ON database.table；</p>
</li>
<li>
<p>特定的列；</p>
</li>
<li>
<p>特定的存储过程。</p>
</li>
<li>
<p>新创建的账户没有任何权限。</p>
</li>
<li>
<p>账户用 username@host 的形式定义，username@% 使用的是默认主机名。</p>
</li>
<li>
<p>MySQL 的账户信息保存在 mysql 这个数据库中。</p>
</li>
</ul>
</blockquote>
<h4 id="_1-创建账户" tabindex="-1"><a class="header-anchor" href="#_1-创建账户" aria-hidden="true">#</a> 1. 创建账户</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>CREATE USER myuser IDENTIFIED BY 'mypassword';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-修改账户名" tabindex="-1"><a class="header-anchor" href="#_2-修改账户名" aria-hidden="true">#</a> 2. 修改账户名</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>UPDATE user SET user='newuser' WHERE user='myuser';
FLUSH PRIVILEGES;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-删除账户" tabindex="-1"><a class="header-anchor" href="#_3-删除账户" aria-hidden="true">#</a> 3. 删除账户</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>DROP USER myuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-查看权限" tabindex="-1"><a class="header-anchor" href="#_4-查看权限" aria-hidden="true">#</a> 4. 查看权限</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SHOW GRANTS FOR myuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_5-授予权限" tabindex="-1"><a class="header-anchor" href="#_5-授予权限" aria-hidden="true">#</a> 5. 授予权限</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>GRANT SELECT, INSERT ON *.* TO myuser;
GRANT all privileges ON *.* TO 'root' @'%' identified BY 'Mysql@123';
grant create,alter,drop,select,insert,update,delete on apollodb.* to dev001@'%';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>GRANT 与 ON 之间为操作（SELECT, INSERT ···）。</li>
<li>ON 与 TO 之间为数据库名，格式为：数据库名 + .*。</li>
<li>TO 后面为账户。</li>
<li>@ 后面为ip地址，% 表示随意ip。</li>
<li>BY 后面为密码。</li>
</ol>
<h4 id="_6-删除权限" tabindex="-1"><a class="header-anchor" href="#_6-删除权限" aria-hidden="true">#</a> 6. 删除权限</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>REVOKE SELECT, INSERT ON *.* FROM myuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_7-更改密码" tabindex="-1"><a class="header-anchor" href="#_7-更改密码" aria-hidden="true">#</a> 7. 更改密码</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SET PASSWORD FOR myuser = 'mypass';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="十、-存储过程" tabindex="-1"><a class="header-anchor" href="#十、-存储过程" aria-hidden="true">#</a> 十、 存储过程</h3>
<blockquote>
<ul>
<li>
<p>存储过程可以看成是对一系列 SQL 操作的批处理；</p>
</li>
<li>
<p>好处</p>
<ul>
<li>
<p>代码封装，保证了一定的安全性；</p>
</li>
<li>
<p>代码复用；</p>
</li>
<li>
<p>由于是预先编译，因此具有很高的性能。</p>
</li>
</ul>
</li>
<li>
<p>创建存储过程</p>
<ul>
<li>
<p>命令行中创建存储过程需要自定义分隔符，因为命令行是以 ; 为结束符，而存储过程中也包含了分号，因此会错误把这部分分号当成是结束符，造成语法错误。</p>
</li>
<li>
<p>包含 in、out 和 inout 三种参数。</p>
</li>
<li>
<p>给变量赋值都需要用 select into 语句。</p>
</li>
<li>
<p>每次只能给一个变量赋值，不支持集合的操作。</p>
</li>
</ul>
</li>
</ul>
</blockquote>
<h4 id="_1-创建存储过程" tabindex="-1"><a class="header-anchor" href="#_1-创建存储过程" aria-hidden="true">#</a> 1. 创建存储过程</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>DROP PROCEDURE IF EXISTS `proc_adder`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `proc_adder`(IN a int, IN b int, OUT sum int)
BEGIN
DECLARE c int;
if a is null then set a = 0;
end if;

    if b is null then set b = 0;
    end if;
 
    set sum  = a + b;
END
;;
DELIMITER;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-使用存储过程" tabindex="-1"><a class="header-anchor" href="#_2-使用存储过程" aria-hidden="true">#</a> 2. 使用存储过程</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>set @b=5;
call proc_adder(2,@b,@s);
select @s as sum;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="十一、-游标" tabindex="-1"><a class="header-anchor" href="#十一、-游标" aria-hidden="true">#</a> 十一、 游标</h3>
<blockquote>
<ul>
<li>
<p>游标（cursor）是一个存储在 DBMS 服务器上的数据库查询，它不是一条 SELECT 语句，而是被该语句检索出来的结果集。</p>
</li>
<li>
<p>在存储过程中使用游标可以对一个结果集进行移动遍历。</p>
</li>
<li>
<p>游标主要用于交互式应用，其中用户需要对数据集中的任意行进行浏览和修改。</p>
</li>
<li>
<p>使用游标的四个步骤：</p>
<ul>
<li>
<p>声明游标，这个过程没有实际检索出数据；</p>
</li>
<li>
<p>打开游标；</p>
</li>
<li>
<p>取出数据；</p>
</li>
<li>
<p>关闭游标；</p>
</li>
</ul>
</li>
</ul>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>DELIMITER $
CREATE  PROCEDURE getTotal()
BEGIN
DECLARE total INT;
-- 创建接收游标数据的变量
DECLARE sid INT;
DECLARE sname VARCHAR(10);
-- 创建总数变量
DECLARE sage INT;
-- 创建结束标志变量
DECLARE done INT DEFAULT false;
-- 创建游标
DECLARE cur CURSOR FOR SELECT id,name,age from cursor_table where age>30;
-- 指定游标循环结束时的返回值
DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = true;
SET total = 0;
OPEN cur;
FETCH cur INTO sid, sname, sage;
WHILE(NOT done)
DO
SET total = total + 1;
FETCH cur INTO sid, sname, sage;
END WHILE;

    CLOSE cur;
    SELECT total;
END $
DELIMITER ;

-- 调用存储过程
call getTotal();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="十二、-触发器" tabindex="-1"><a class="header-anchor" href="#十二、-触发器" aria-hidden="true">#</a> 十二、 触发器</h3>
<blockquote>
<ul>
<li>
<p>触发器是一种与表操作有关的数据库对象，当触发器所在表上出现指定事件时，将调用该对象，即表的操作事件触发表上的触发器的执行。</p>
</li>
<li>
<p>可以使用触发器来进行审计跟踪，把修改记录到另外一张表中。</p>
</li>
<li>
<p>MySQL 不允许在触发器中使用 CALL 语句 ，也就是不能调用存储过程。</p>
</li>
</ul>
</blockquote>
<h4 id="_1-begin-和-end" tabindex="-1"><a class="header-anchor" href="#_1-begin-和-end" aria-hidden="true">#</a> 1. BEGIN 和 END</h4>
<blockquote>
<ul>
<li>
<p>当触发器的触发条件满足时，将会执行 BEGIN 和 END 之间的触发器执行动作。</p>
</li>
<li>
<p>注意：在 MySQL 中，分号 ; 是语句结束的标识符，遇到分号表示该段语句已经结束，MySQL 可以开始执行了。因此，解释器遇到触发器执行动作中的分号后就开始执行，然后会报错，因为没有找到和 BEGIN 匹配的 END。 这时就会用到 DELIMITER 命令（DELIMITER 是定界符，分隔符的意思）。它是一条命令，不需要语句结束标识，语法为：DELIMITER new_delemiter。new_delemiter 可以设为 1 个或多个长度的符号，默认的是分号 ;，我们可以把它修改为其他符号，如 $ - DELIMITER $ 。在这之后的语句，以分号结束，解释器不会有什么反应，只有遇到了 $，才认为是语句结束。注意，使用完之后，我们还应该记得把它给修改回来。</p>
</li>
</ul>
</blockquote>
<h4 id="_2-new-和-old" tabindex="-1"><a class="header-anchor" href="#_2-new-和-old" aria-hidden="true">#</a> 2. NEW 和 OLD</h4>
<blockquote>
<ul>
<li>
<p>MySQL 中定义了 NEW 和 OLD 关键字，用来表示触发器的所在表中，触发了触发器的那一行数据。</p>
</li>
<li>
<p>在 INSERT 型触发器中，NEW 用来表示将要（BEFORE）或已经（AFTER）插入的新数据；</p>
</li>
<li>
<p>在 UPDATE 型触发器中，OLD 用来表示将要或已经被修改的原数据，NEW 用来表示将要或已经修改为的新数据；</p>
</li>
<li>
<p>在 DELETE 型触发器中，OLD 用来表示将要或已经被删除的原数据；</p>
</li>
<li>
<p>使用方法：NEW.columnName （columnName 为相应数据表某一列名）</p>
</li>
</ul>
</blockquote>
<h4 id="_3-创建触发器" tabindex="-1"><a class="header-anchor" href="#_3-创建触发器" aria-hidden="true">#</a> 3. 创建触发器</h4>
<blockquote>
<ul>
<li>CREATE TRIGGER 指令用于创建触发器。</li>
</ul>
</blockquote>
<ol>
<li>
<p>语法：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>CREATE TRIGGER trigger_name
trigger_time
trigger_event
ON table_name
FOR EACH ROW
BEGIN
trigger_statements
END;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>说明：</p>
<blockquote>
<ul>
<li>
<p>trigger_name：触发器名</p>
</li>
<li>
<p>trigger_time: 触发器的触发时机。取值为 BEFORE 或 AFTER。</p>
</li>
<li>
<p>trigger_event: 触发器的监听事件。取值为 INSERT、UPDATE 或 DELETE。</p>
</li>
<li>
<p>table_name: 触发器的监听目标。指定在哪张表上建立触发器。</p>
</li>
<li>
<p>FOR EACH ROW: 行级监视，Mysql 固定写法，其他 DBMS 不同。</p>
</li>
<li>
<p>trigger_statements: 触发器执行动作。是一条或多条 SQL 语句的列表，列表内的每条语句都必须用分号 ; 来结尾。</p>
</li>
</ul>
</blockquote>
</li>
<li>
<p>示例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>DELIMITER $
CREATE TRIGGER `trigger_insert_user`
AFTER INSERT ON `user`
FOR EACH ROW
BEGIN
INSERT INTO `user_history`(user_id, operate_type, operate_time)
VALUES (NEW.id, 'add a user',  now());
END $
DELIMITER;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h4 id="_4-查看触发器" tabindex="-1"><a class="header-anchor" href="#_4-查看触发器" aria-hidden="true">#</a> 4. 查看触发器</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SHOW TRIGGERS;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_5-删除触发器" tabindex="-1"><a class="header-anchor" href="#_5-删除触发器" aria-hidden="true">#</a> 5. 删除触发器</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>DROP TRIGGER IF EXISTS trigger_insert_user;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


