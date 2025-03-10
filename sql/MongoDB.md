# MongoDB 数据库

## 一、MongoDB 概述

MongoDB 是一款开源的、面向文档的 NoSQL 数据库；它采用 BSON 格式存储数据，灵活而高效。  
短句中透露着敏捷；长句则诉说着可扩展性与无模式（Schema-less）的独特魅力。  
它不仅支持高并发读写，且易于水平扩展，在大数据时代中扮演着至关重要的角色。

## 二、基本架构与数据模型

MongoDB 的数据模型以“文档”为核心。

- **文档**：以 JSON 风格（实际存储为 BSON）表示，字段可嵌套，数据结构灵活。
- **集合**：类似关系型数据库中的表，但不要求预先定义结构，允许动态调整。
- **数据库**：一个 MongoDB 实例中可以包含多个数据库，每个数据库下包含多个集合。

示例（Mongo Shell 中的文档操作）：

```javascript
// 插入文档，简短有力
db.users.insertOne({ name: "Alice", age: 28, interests: ["reading", "traveling"] });

// 插入多个文档，结构各异，变化多端
db.users.insertMany([
    { name: "Bob", age: 32, address: { city: "New York", zip: "10001" } },
    { name: "Charlie", age: 25, hobbies: ["gaming", "cooking"] },
]);
```

## 三、CRUD 操作：创建、读取、更新与删除

MongoDB 提供了直观而多样的 CRUD 命令，既能让操作像流水般顺畅，又能在复杂场景中游刃有余。

- **创建（Create）**：用 `insertOne` 或 `insertMany` 新增文档。
- **读取（Read）**：`find` 与 `findOne` 命令让你轻松查询，既可筛选也可排序。
- **更新（Update）**：利用 `updateOne`、`updateMany` 或 `replaceOne` 改变已有数据；更新语句中，你可以选择局部更新（$set、$inc 等运算符）。
- **删除（Delete）**：`deleteOne` 与 `deleteMany` 命令实现数据移除，支持精确匹配。

示例代码：

```javascript
// 读取所有年龄大于 25 的用户，并按年龄排序
db.users.find({ age: { $gt: 25 } }).sort({ age: 1 });

// 更新：将 Bob 的城市更新为 "Boston"，同时自增年龄 1
db.users.updateOne({ name: "Bob" }, { $set: { "address.city": "Boston" }, $inc: { age: 1 } });

// 删除：移除年龄小于 20 的所有文档
db.users.deleteMany({ age: { $lt: 20 } });
```

## 四、聚合框架：数据处理的魔法棒

MongoDB 的聚合框架极具威力。  
它允许你通过一系列“管道”操作，对数据进行分组、过滤、排序和统计，既可以处理简单的需求，也能应对复杂的数据分析场景。  
短短几行代码，便可构建出层次分明的处理流程。

示例：

```javascript
db.orders.aggregate([
    { $match: { status: "completed" } },
    { $group: { _id: "$customerId", totalSpent: { $sum: "$amount" } } },
    { $sort: { totalSpent: -1 } },
]);
```

这段代码首先筛选出已完成的订单，再按客户分组，累计总消费，最后排序显示最值前列。

## 五、索引机制与性能优化

在海量数据面前，高效查询靠索引保驾护航。  
MongoDB 支持单字段、多字段及全文索引，通过创建合适的索引，你可以大幅提升查询性能。  
短句迅捷；长句阐释原理——索引结构和查询优化紧密相连。

示例（创建索引）：

```javascript
// 为 "users" 集合的 "name" 字段创建单字段索引
db.users.createIndex({ name: 1 });

// 创建复合索引：同时索引 "age" 与 "address.city"
db.users.createIndex({ age: 1, "address.city": 1 });
```

在实际应用中，合理设计索引策略，是保证高性能查询的关键所在。

## 六、复制与高可用性

MongoDB 天生支持高可用性。  
通过复制集（Replica Set），你可以在多个节点间同步数据，实现主从复制与自动故障转移。  
简短说明中，蕴含着强大的系统韧性和自我恢复能力。

- **复制集**：由一主多从构成；主节点负责写操作，从节点负责读操作，当主节点宕机时，自动选举产生新主。
- **配置示例**（简化版）：
    - 修改配置文件 `mongod.conf`：
        ```yaml
        replication:
            replSetName: "rs0"
        ```
    - 启动后在 mongo shell 中初始化：
        ```javascript
        rs.initiate({
            _id: "rs0",
            members: [
                { _id: 0, host: "localhost:27017" },
                { _id: 1, host: "localhost:27018" },
                { _id: 2, host: "localhost:27019" },
            ],
        });
        ```

## 七、分片：水平扩展的艺术

当单节点无法满足高并发或海量数据存储时，MongoDB 分片（Sharding）便登场了。

- **分片**：将数据分散到多个分片节点上，既能均衡负载，又能提高可扩展性。
- 分片集群依赖于配置服务器（Config Server）和查询路由（mongos）。

示例（启动 mongos 并配置分片）：

```javascript
// 在 mongos 中添加分片
sh.addShard("rs0/localhost:27017,localhost:27018,localhost:27019");

// 开启分片功能，为 "mydb.users" 集合设定分片键
sh.enableSharding("mydb");
sh.shardCollection("mydb.users", { _id: "hashed" });
```

短句宣告着扩展的力量，长句详解着分布式系统的精密协作。

## 八、安全性与管理

安全问题同样不容忽视。  
MongoDB 提供多种安全机制，包括认证、授权、传输加密和审计日志。

- **认证与授权**：通过创建用户、角色来实现细粒度权限控制。
- **加密**：支持 TLS/SSL 加密连接，保障数据传输安全。
- **管理工具**：MongoDB Compass、Ops Manager 和 Cloud Manager 等为运维提供便捷的可视化管理手段。

示例（创建用户并分配角色）：

```javascript
// 在 admin 数据库中创建管理员用户
use admin
db.createUser({
    user: "admin",
    pwd: "securePassword",
    roles: [{ role: "root", db: "admin" }]
});
```

## 九、最佳实践与常见问题

在实际应用中，合理配置和调优是成功的关键。

- **Schema 设计**：利用嵌套文档和数组，既能简化查询，又能满足业务需求。
- **数据备份**：定期备份是防范数据丢失的重要措施，MongoDB 提供 mongodump 与 mongorestore 工具。
- **监控与日志**：实时监控系统状态，利用 MongoDB 提供的日志及第三方监控工具，及时发现并解决问题。
