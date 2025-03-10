# Redis 数据库

## 一、Redis 概述

Redis 是一款开源、内存型的数据结构存储系统，它既支持简单的键值对存储，也支持丰富的数据类型（如字符串、列表、集合、哈希、排序集合等）。Redis 以其极高的读写性能、灵活的数据模型和多样的持久化机制而著称，被广泛应用于缓存、消息队列、会话管理、排行榜等多种场景。  
它不仅在极短的响应时间内提供数据服务，而且在设计上兼顾了分布式部署、主从复制和高可用性等特性，适用于高并发和大规模系统。

## 二、基本概念

Redis 是一个键值数据库，但它远不止于简单的存储。

- **内存存储**：所有数据都存储在内存中，这使得读写速度非常快，但也需要合理控制内存消耗。
- **数据结构丰富**：支持字符串、列表、集合、哈希、排序集合、位图、HyperLogLog、地理空间索引等。
- **持久化**：提供 RDB 快照和 AOF（Append Only File）两种持久化方式，保证数据在断电或重启后不丢失。
- **高可用与分布式**：支持主从复制、哨兵模式和集群架构，帮助系统实现高可用和负载均衡。

## 三、常见数据结构与操作示例

Redis 数据类型多样，既适合简单的字符串存储，也能高效处理复杂数据结构。

### 1. 字符串（String）

最基本的数据类型，可用于存储文本、数字、二进制数据等。  
示例命令：

```bash
SET mykey "Hello, Redis!"
GET mykey
INCR counter       # 对数字字符串进行自增操作
```

### 2. 列表（List）

有序集合，支持从两端插入和删除，适合实现消息队列或任务调度。  
示例命令：

```bash
LPUSH tasks "task1"
RPUSH tasks "task2"
LRANGE tasks 0 -1  # 获取整个列表
```

### 3. 集合（Set）

无序集合，元素唯一，常用于去重和交并差集计算。  
示例命令：

```bash
SADD fruits "apple" "banana" "orange"
SMEMBERS fruits
SISMEMBER fruits "banana"
```

### 4. 哈希（Hash）

键值对集合，适合存储对象或记录。  
示例命令：

```bash
HSET user:1000 name "Alice" age "30"
HGETALL user:1000
HINCRBY user:1000 age 1  # 年龄加 1
```

### 5. 排序集合（Sorted Set）

集合中的每个元素关联一个分数，按分数排序，适合实现排行榜。  
示例命令：

```bash
ZADD leaderboard 100 "player1"
ZADD leaderboard 150 "player2"
ZRANGE leaderboard 0 -1 WITHSCORES  # 获取所有元素及分数
```

## 四、持久化机制

Redis 提供两种主要的持久化方式，以在内存和磁盘间构建可靠的数据保障：

### 1. RDB 快照

Redis 定期将内存中的数据快照写入磁盘，形成一个二进制文件。

- **优点**：启动速度快、数据文件紧凑。
- **缺点**：如果在快照之间发生故障，可能会丢失最近的数据更改。

示例配置（redis.conf）：

```conf
save 900 1    # 900 秒内至少有 1 个 key 发生变化则进行一次快照
save 300 10
save 60 10000
```

### 2. AOF 日志

将每次写命令追加到文件中，重启时通过重放 AOF 文件恢复数据。

- **优点**：数据安全性高，可以配置为每个命令后同步。
- **缺点**：文件体积较大，恢复速度比 RDB 慢。

示例配置（redis.conf）：

```conf
appendonly yes
appendfsync everysec  # 每秒同步一次
```

## 五、主从复制与高可用

Redis 支持主从复制（Replication），可通过配置将数据同步到一个或多个从服务器。

- **主服务器**：处理写请求并将数据更改传输到从服务器。
- **从服务器**：只读备份，既能承担部分读请求，也能在主服务器故障时接管服务。

此外，**Redis Sentinel** 提供监控、通知和自动故障转移机制，确保 Redis 部署的高可用性。  
示例 Sentinel 配置（sentinel.conf）：

```conf
sentinel monitor mymaster 127.0.0.1 6379 2
sentinel down-after-milliseconds mymaster 5000
sentinel failover-timeout mymaster 60000
```

## 六、Redis 集群（Cluster）

Redis Cluster 实现了数据的自动分片和高可用性，能够在多节点间分担负载。

- **分片**：数据按照 16384 个槽分布在各个节点上。
- **故障转移**：集群内自动检测节点故障，并进行主从切换，保证系统的持续可用性。

部署 Redis Cluster 时，每个节点都要指定集群模式，并使用特定端口通信。集群节点间使用 Gossip 协议进行信息同步和状态检测。

## 七、事务与 Lua 脚本

### 1. 事务（Transaction）

Redis 的事务机制使用 `MULTI`、`EXEC`、`DISCARD` 和 `WATCH` 命令，将一系列命令打包在一起执行。事务中的命令是按顺序执行的，但不保证原子性冲突处理（可通过 WATCH 实现乐观锁机制）。  
示例：

```bash
WATCH mykey
MULTI
SET mykey "value1"
INCR counter
EXEC
```

### 2. Lua 脚本

通过 EVAL 命令执行 Lua 脚本，可以将一系列操作打包为一个原子操作，提升执行效率和灵活性。  
示例：

```bash
EVAL "return redis.call('set', KEYS[1], ARGV[1])" 1 mykey "Hello Lua"
```

## 八、应用场景

Redis 的高速和多样性使其在各类场景中得到了广泛应用：

- **缓存**：通过减少数据库访问，显著提高系统响应速度。
- **消息队列**：利用 List 或 Stream 实现高效的消息传递机制。
- **会话存储**：为 Web 应用提供快速的会话数据存取。
- **排行榜和计数器**：使用 Sorted Set 实现动态排行榜，利用自增命令维护计数器。
- **实时数据分析**：结合 Bitmaps 和 HyperLogLog 处理海量数据统计。

## 九、最佳实践

在使用 Redis 时，掌握以下最佳实践有助于构建高效、稳定的系统：

- **内存管理**：合理设置 key 的过期时间，避免内存泄漏。
- **持久化配置**：根据业务需求权衡 RDB 与 AOF 的使用。
- **安全性**：使用密码保护和访问控制列表（ACL）限制非授权访问。
- **监控与日志**：定期查看 `INFO`、`MONITOR` 等命令的输出，及时发现异常。
- **集群规划**：合理规划集群节点，确保数据均衡分布和故障转移顺畅。
