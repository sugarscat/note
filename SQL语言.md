# SQL语言

### 基本

1. 一行SQL语句
    ```
    -- 一行 SQL 语句
    UPDATE user SET username='robot', password='robot' WHERE username = 'root';
    ```

2. 多行SQL语句
    ```
    -- 多行 SQL 语句
    UPDATE user
    SET username='robot', password='robot'
    WHERE username = 'root';
   ```
   
3. 三种注释
    ```
    ## 注释1
    -- 注释2
    /* 注释3 */
   ```

---

### 一、 增删改查
> 增删改查，又称为 CRUD，数据库基本操作中的基本操作。

#### 1. 插入数据
> INSERT INTO 语句用于向表中插入新记录。

1. 插入完整的一行

    ```
    INSERT INTO 表名 VALUES (值, 值, ..., 值);
    ```
   
2. 插入行的一部分
    ```
    INSERT INTO 表名(字段, 字段, ..., 字段) VALUES (值, 值, ..., 值);
    ```
      
3. 嵌套插入
    ```
    INSERT INTO 表1(字段1) SELECT n字段2 FROM 表2; 
    ```
   
#### 2. 更新数据
> UPDATE 语句用于更新表中的记录。

   ```
   UPDATE 表名 SET 字段 = 值, ... WHERE 字段 = 值, ...;
   -- WHERE 后面是条件
   ```

#### 3. 删除数据（清空表）
> DELETE 语句用于删除表中的记录。
> 
> TRUNCATE TABLE 可以清空表，也就是删除所有行。

1. 删除指定数据
   ```
   DELETE FROM 表名 WHERE 字段 = 值;
   ```
   
2. 清空表中数据
   ```
   TRUNCATE TABLE 表名;
   ```
   
#### 4. 查找数据
> SELECT 语句用于从数据库中查询数据。
>
> DISTINCT 用于返回唯一不同的值。它作用于所有列，也就是说所有列的值都相同才算相同。
> 
> 限制返回的行数。可以有两个参数，第一个参数为起始行，从 0 开始；第二个参数为返回的总行数。
> 
> ASC ：升序（默认）
> 
> DESC ：降序

1. 查找全部数据
   ```
   SELECT * FROM 表名;
   ```
   
2. 查找部分数据
   ```
   SELECT 字段, ... FROM 表名;
   ```
   
3. 查询不同的值
   ```
   SELECT DISTINCT 字段 FROM 表名;
   ```
   
4. 限制查询结果
   ```
   -- 返回前 5 行
   SELECT * FROM 表名 LIMIT 5;
   SELECT * FROM 表名 LIMIT 0, 5;
   -- 返回第 3 ~ 5 行
   SELECT * FROM 表名 LIMIT 2, 3;
   ```

---

### 二、 子查询（嵌套）
> 子查询是嵌套在较大查询中的 SQL 查询。子查询也称为内部查询或内部选择，而包含子查询的语句也称为外部查询或外部选择。

#### 1. 子查询的子查询
   ```
   SELECT 字段, ...
   FROM 表1
   WHERE 字段 IN (SELECT 字段
   FROM 表2
   WHERE 字段 IN (SELECT 字段
   FROM 表3
   WHERE 字段 = 值));
   ```
   
#### 2. WHERE
   >    + WHERE 子句用于过滤记录，即缩小访问数据的范围。
   >
   >    + WHERE 后跟一个返回 true 或 false 的条件。
   >
   >    + WHERE 可以与 SELECT，UPDATE 和 DELETE 一起使用。
   > 
   >    + 可以在 WHERE 子句中使用的操作符

   + = : 等于
   + <>	: 不等于。注释：在 SQL 的一些版本中，该操作符可被写成 !=
   + '>' : 大于
   + < : 小于
   + '>=' : 大于等于
   + <=	: 小于等于
   + BETWEEN : 在某个范围内
   + LIKE : 搜索某种模式
   + IN	: 指定针对某个列的多个可能值
   
#### 3. IN 和 BETWEEN
   > + N 操作符在 WHERE 子句中使用，作用是在指定的几个特定值中任选一个值。
   >
   > + BETWEEN 操作符在 WHERE 子句中使用，作用是选取介于某个范围内的值。
   
1. IN
   ```
   SELECT * FROM 表名 WHERE 字段 IN (值, ... );
   ```

2. BETWEEN
   ```
   SELECT * FROM 表名 WHERE 字段 BETWEEN 值 AND 值;
   ```
#### 4. AND, OR, NOT
> + AND、OR、NOT 是用于对过滤条件的逻辑处理指令。
>
> + AND 优先级高于 OR，为了明确处理顺序，可以使用 ()。
> 
> + AND 操作符表示左右的条件都要满足。
> 
> + OR 操作符表示左右的条件满足任意一个即可。
>
> + NOT 操作符用于否定一个条件。

1. AND
   ```
   SELECT 字段, ... FROM 表名 WHERE 字段 = 值 AND 字段 <= 值;
   ```
   
2. OR
   ```
   SELECT 字段, ... FROM 表名 WHERE 字段 = 值 OR 字段 = 值;
   ```
   
3. NOT
   ```
   SELECT 字段, ... FROM 表名 WHERE 字段 NOT BETWEEN 值 AND 值;
   ```
   
#### 5. Like
> + LIKE 操作符在 WHERE 子句中使用，作用是确定字符串是否匹配模式。
>
> + 只有字段是文本值时才使用 LIKE。
>
> + LIKE 支持两个通配符匹配选项：% 和 _。
>
> + 不要滥用通配符，通配符位于开头处匹配会非常慢。
> 
> + % 表示任何字符出现任意次数。
>
> + _ 表示任何字符出现一次。

1. % 示例
   ```
   SELECT 字段, ... FROM 表名 WHERE 字段 LIKE '%值%';
   ```
2. _ 示例
   ```
   SELECT 字段 FROM 表名 WHERE 字段 LIKE '_值';
   ```   

---

### 四、 连接和组合

#### 1. 连接（JOIN）
> + 如果一个 JOIN 至少有一个公共字段并且它们之间存在关系，则该 JOIN 可以在两个或多个表上工作。
>
> + 连接用于连接多个表，使用 JOIN 关键字，并且条件语句使用 ON 而不是 WHERE。
> 
> + JOIN 保持基表（结构和数据）不变。
> 
> + JOIN 有两种连接类型：内连接和外连接。
>
> + 内连接又称等值连接，使用 INNER
> 
> + JOIN 关键字。在没有条件语句的情况下返回笛卡尔积。
> 
> + 自连接可以看成内连接的一种，只是连接的表是自身而已。
>
> + 自然连接是把同名列通过 = 测试连接起来的，同名列可以有多个。
> 
> + 内连接提供连接的列，而自然连接自动连接所有同名列。
>
> + 外连接返回一个表中的所有行，并且仅返回来自次表中满足连接条件的那些行，即两个表中的列是相等的。外连接分为左外连接、右外连接、全外连接（Mysql 不支持）。
>
> + 左外连接就是保留左表没有关联的行。
> 
> + 右外连接就是保留右表没有关联的行。
>
> + 连接 vs 子查询：连接可以替换子查询，并且比子查询的效率一般会更快。

1. 内连接（INNER JOIN）
   ``` 
   SELECT 字段, ... FROM vendors INNER JOIN products ON vendors.vend_id = products.vend_id;
   ```

2. 自连接
   ```
   SELECT 字段, ... FROM customers c1, customers c2 WHERE c1.cust_name = c2.cust_name AND c2.cust_contact = 'Jim Jones';
   ```

3. 自然连接（NATURAL JOIN）
   ```
   SELECT 字段, ... FROM Products NATURAL JOIN Customers;
   ```

4. 左连接（LEFT JOIN）
   ```
   SELECT 字段, ... FROM customers LEFT JOIN orders ON customers.cust_id = orders.cust_id;
   ```

5. 右连接（RIGHT JOIN）
   ```
   SELECT 字段, ... FROM customers RIGHT JOIN orders ON customers.cust_id = orders.cust_id;
   ```

#### 2. 组合（UNION）
> + UNION 运算符将两个或更多查询的结果组合起来，并生成一个结果集，其中包含来自 UNION 中参与查询的提取行。
>
> + UNION 基本规则
>
>   + 所有查询的列数和列顺序必须相同。
>
>   + 每个查询中涉及表的列的数据类型必须相同或兼容。
>
>   + 通常返回的列名取自第一个查询。
> 
> + 默认会去除相同行，如果需要保留相同行，使用 UNION ALL。
> 
> + 只能包含一个 ORDER BY 子句，并且必须位于语句的最后。
>
> + 应用场景
> 
>   + 在一个查询中从不同的表返回结构数据。
>   + 对一个表执行多个查询，按一个查询返回数据。

1. 组合查询
   ```
   SELECT cust_name, cust_contact, cust_email
   FROM customers
   WHERE cust_state IN ('IL', 'IN', 'MI')
   UNION
   SELECT cust_name, cust_contact, cust_email
   FROM customers
   WHERE cust_name = 'Fun4All';
   ```

#### 3. OIN vs UNION
> + JOIN 中连接表的列可能不同，但在 UNION 中，所有查询的列数和列顺序必须相同。
>
> + UNION 将查询之后的行放在一起（垂直放置），但 JOIN 将查询之后的列放在一起（水平放置），即它构成一个笛卡尔积。

---

### 五、函数(适合MySql)

#### 1. 文本处理

| 函数              | 说明           |
|:----------------|:-------------|
| LEFT()、RIGHT()  | 	左边或者右边的字符   |
| LOWER()、UPPER() | 	转换为小写或者大写   |
| LTRIM()、RTIM()  | 	去除左边或者右边的空格 |
| LENGTH()        | 长度           |
| SOUNDEX()	      | 转换为语音值       |

> + SOUNDEX() 可以将一个字符串转换为描述其语音表示的字母数字模式。
>
>  ```
>  SELECT *
>  FROM mytable
>  WHERE SOUNDEX(col1) = SOUNDEX('apple')
>  ```

#### 2. 日期和时间处理
> + 日期格式：YYYY-MM-DD
>
> + 时间格式：HH:MM:SS

| 函 数           | 说 明              |
|:--------------|:-----------------|
| AddDate()	    | 增加一个日期（天、周等）     |
| AddTime()     | 	增加一个时间（时、分等）    |
| CurDate()	    | 返回当前日期           |
| CurTime()	    | 返回当前时间           |
| Date()	       | 返回日期时间的日期部分      |
| DateDiff()	   | 计算两个日期之差         |
| Date_Add()	   | 高度灵活的日期运算函数      |
| Date_Format() | 	返回一个格式化的日期或时间串  |
| Day()	        | 返回一个日期的天数部分      |
| DayOfWeek()   | 	对于一个日期，返回对应的星期几 |
| Hour()        | 	返回一个时间的小时部分     |
| Minute()      | 	返回一个时间的分钟部分     |
| Month()       | 	返回一个日期的月份部分     |
| Now()	        | 返回当前日期和时间        |
| Second()      | 	返回一个时间的秒部分      |
| Time()	       | 返回一个日期时间的时间部分    |
| Year()        | 	返回一个日期的年份部分     |

> + 如：
>  ```
>  mysql> SELECT NOW(); -- 显示当前时间
>  ```

#### 3. 数值处理
| 函 数     | 说 明  |
|:--------|:-----|
| SIN()   | 	正弦  |
| COS()   | 	余弦  |
| TAN()	  | 正切   |
| ABS()	  | 绝对值  |
| SQRT()	 | 平方根  |
| MOD()	  | 余数   |
| EXP()	  | 指数   |
| PI()	   | 圆周率  |
| RAND()  | 	随机数 |

#### 4. 汇总
| 函 数     | 说 明       |
|:--------|:----------|
| AVG()	  | 返回某列的平均值  |
| COUNT() | 	返回某列的行数  |
| MAX()   | 	返回某列的最大值 |
| MIN()   | 	返回某列的最小值 |
| SUM()   | 	返回某列值之和  |

> + AVG() 会忽略 NULL 行。
>
> + 使用 DISTINCT 可以让汇总函数值汇总不同的值。
>
>  ```
>  SELECT AVG(DISTINCT col1) AS avg_col FROM mytable
>  ```

---

### 六、排序和分组
