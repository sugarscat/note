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

### 一. 增删改查
> 增删改查，又称为 CRUD，数据库基本操作中的基本操作。

#### 1. 插入数据
> INSERT INTO 语句用于向表中插入新记录。

1. 插入完整的一行

    ```
    INSERT INTO 表名 VALUES (值, 值, ..., 值);
    ```
   
2. 插入行的一部分
    ```
    INSERT INTO 表名(字段, 字段, ..., 字段) 
    VALUES (值, 值, ..., 值);
    ```
      
3. 嵌套插入
    ```
    INSERT INTO 表1(字段1)
    SELECT n字段2
    FROM 表2; 
    ```