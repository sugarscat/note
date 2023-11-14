# Spring 基础

> [Spring 家族](https://spring.io/projects)

## Spring 概述

1. `Spring` 是轻量级的开源的 `JavaEE` 框架
2. `Spring` 可以解决企业应用开发的复杂性
3. `Spring` 有两个核心部分：`IOC` 和 `Aop`
    - `IOC`：控制反转，把创建对象过程交给 `Spring` 进行管理
    - `Aop`：面向切面，不修改源代码进行功能增强
4. `Spring` 特点
    - 方便解耦，简化开发
    - `Aop` 编程支持
    - 方便程序测试
    - 方便和其他框架进行整合
    - 方便进行事务操作
    - 降低 API 开发难度

## IOC 容器 ↓↓↓

`IOC`: `Inversion of Control` 翻译过来死反转控制。

## 入门案例

1. 创建 Meven Module

2. 引入依赖

   ```xml
   <dependencies>
       <!--基于Maven依赖传递性,导入spring-context依赖即可导入当前所需要所有jar包-->
       <dependency>
           <groupId>org.springframework</groupId>
           <artifactId>spring-context</artifactId>
           <version>5.2.21.RELEAS</version>
       </dependency>
       <!--junit测试-->
       <dependency>
           <groupId>junit</groupId>
           <artifactId>junit</artifactId>
           <version>4.12</version>
           <scope>test</scope>
       </dependency>
       <!-- lombok -->
       <dependency>
           <groupId>org.projectlombok</groupId>
           <artifactId>lombok</artifactId>
           <version>RELEASE</version>
           <scope>compile</scope>
       </dependency>
   </dependencies>
   ```

3. 创建 Spring 配置文件

   在 `resources` 目录，添加 `spring` 的配置文件 `applicationContext.xml`

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <beans xmlns="http://www.springframework.org/schema/beans"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.springframework.org/schema/beans
          http://www.springframework.org/schema/beans/spring-beans.xsd">
   </beans>
   ```

4. 添加 Bean

   Book 类

   ```java
   import lombok.Data;
   
   @Data
   public class Book {
       Integer id;
       String title;
       String author;
       String publisher;
   }
   
   ```

   配置

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <beans xmlns="http://www.springframework.org/schema/beans"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.springframework.org/schema/beans
          http://www.springframework.org/schema/beans/spring-beans.xsd">
       <!--
           bean:配置一个bean对象,将对象交给IOC容器管理
           属性:
               id:bean的唯一表示,不能重复
               class:设置bean对象所对应的类型
        -->
       <bean id="book" class="org.example.pojo.Book"/>
       <!-- scope: 设置单例或者非单例：prototype/singleton 默认为singleton -->
   </beans>
   ```

   :::tip 提示
   `singleton` 只有一个实例，也即是单例模式；
   `prototype` 访问一次创建一个实例，相当于 `new` 。
   :::

5. 获取 Bean（创建IOC容器）

   ```java
   @Slf4j
   public class ApplicationContextTest {
   
       @Test
       public void test() {
     // 创建 ApplicationContext 对象，加载 spring 配置文件（创建IOC容器）
           ApplicationContext context = new ClassPathXmlApplicationContext("ApplicationContext.xml");
     // 调用 context 中的 getBean 方法获取 ioc 容器中的 bean
           Book book = context.getBean(Book.class);
     // 调用 bean 对象中的方法
           log.info("book = {}", book.getTitle());
       }
   }
   ```

## 依赖注入

> 共 `5` 种

### Setter 注入

