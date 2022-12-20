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