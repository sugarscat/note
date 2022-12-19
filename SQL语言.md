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