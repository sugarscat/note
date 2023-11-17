# Spring 基础

> [Spring 家族](https://spring.io/projects)

## Spring 概述

1. `Spring` 是轻量级的开源的 `JavaEE` 框架
2. `Spring` 可以解决企业应用开发的复杂性
3. `Spring` 有两个核心部分：`IOC` 和 `AOP`
    - `IOC`：控制反转，把创建对象过程交给 `Spring` 进行管理
    - `AOP`：面向切面，不修改源代码进行功能增强
4. `Spring` 特点
    - 方便解耦，简化开发
    - `AOP` 编程支持
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

`applicationContext.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:p="http://www.springframework.org/schema/p"
       xmlns:c="http://www.springframework.org/schema/c"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd">
    
    <bean id="book" class="org.example.pojo.Book">
    <!-- setter注入(类必须有setter方法) -->
        <property name="title1" value="Spring实战"/>
        <property name="author" value="Craig Walls"/>
        <property name="publisher" value="Aiit"/>
    </bean>
</beans>
```

`Java`

```java
@Test
public void myBookTest() {
    // 创建ApplicationContext对象，加载spring配置文件（创建IOC容器）
    AbstractApplicationContext context = new ClassPathXmlApplicationContext(
            "ApplicationContext.xml");

    Book book = context.getBean(Book.class);
    // 或者
 // Book book = (Book)context.getBean("book");
    log.info("book = {}", book);
    context.close();
}
```

:::warning 提示

使用 `setter` 注入时，类必须有 `setter` 方法。

:::

### 构造方法注入

`applicationContext.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:p="http://www.springframework.org/schema/p"
       xmlns:c="http://www.springframework.org/schema/c"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd">
    
    <!-- 构造方式注入（类必须有全参构造方法） -->
    <bean id="myBook" class="org.example.pojo.MyBook">
        <constructor-arg name="name1" value="Spring实战"/>
        <constructor-arg name="author" value="Craig Walls"/>
        <constructor-arg name="publisher" value="Aiit"/>
    </bean>
</beans>
```

`Java`

```java
package org.example.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
/**
 * MyBook 类
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MyBook {

    private String name1;
    private String author;
    private String publisher;

}

```

```java
@Test
public void myBookTest() {
    // 创建ApplicationContext对象，加载spring配置文件（创建IOC容器）
    AbstractApplicationContext context = new ClassPathXmlApplicationContext(
            "ApplicationContext.xml");

    MyBook myBook = context.getBean(MyBook.class);

    log.info("myBook = {}", myBook);
    context.close();
}
```

### 静态工厂方法注入

`applicationContext.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:p="http://www.springframework.org/schema/p"
       xmlns:c="http://www.springframework.org/schema/c"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd">
    
    <!-- class 等于工厂类  factory-method等于工厂的静态方法-->
    <!-- ioc 容器调用 StaticCarFactory.produceCarMethod() 方法，返回一个 Car 对象，并注入到容器中 -->
    <bean id="car" class="org.example.config.StaticCarFactory"
        factory-method="produceCarMethod"/>
</beans>
```

`Java`

```java
package org.example.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
/**
 * 汽车类
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Car {
    String brand;
    String color;
}
```

```java
package org.example.config;

import org.example.pojo.Car;

/**
 * 静态工厂类
 */
public class StaticCarFactory {

   public static Car produceCarMethod(){
      return new Car();
   }
}
```

```java
// 测试程序
@Test
public void carTest() {
    // 创建ApplicationContext对象，加载spring配置文件（创建IOC容器）
    AbstractApplicationContext context = new ClassPathXmlApplicationContext(
            "ApplicationContext.xml");

    Car car = context.getBean(Car.class);
    log.info("car = {}", car);
    context.close();
}
```

### 实例化工厂方法注入

`applicationContext.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:p="http://www.springframework.org/schema/p"
       xmlns:c="http://www.springframework.org/schema/c"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd">
    
    <!-- 实例化工厂方法注入 -->
    <!-- 第一步：配置一个工厂对象的bean -->
    <!-- 第二步：ioc 容器调用工厂的无参构造方法，instanceCarFactory = new InstanceCarFactory()，并注入到容器中 -->
    <!-- 第三步：ioc 容器调用工厂的 instanceCarFactory.produceCarMethod2() 方法，返回一个 Car 对象，并注入到容器中 -->
    <bean id="instanceCarFactory" class="org.example.config.InstanceCarFactory"/>
    <bean id="myCar" class="org.example.pojo.Car" factory-bean="instanceCarFactory"
    factory-method="produceCarMethod2"/>
</beans>
```

`Java`

```java
package org.example.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
/**
 * 汽车类
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Car {
    String brand;
    String color;
}

```

```java
package org.example.config;

import org.example.pojo.Car;

/**
 * 实例化工厂类
 */
public class InstanceCarFactory {
    
    public Car produceCarMethod2() {
        return new Car("大众", "黑色");
    }
}
```

```java
@Test
public void myCarTest() {
    // 创建ApplicationContext对象，加载spring配置文件（创建IOC容器）
    AbstractApplicationContext context = new ClassPathXmlApplicationContext(
            "ApplicationContext.xml");

    Car car = (Car)context.getBean("myCar");
    log.info("car = {}", car);
    context.close();
}
```

### Autowired 自动装配

- 由 `Spring` 提供；
- 根据属性的数据类型自动装配，如果存在多个相同类型的 `bean` 对象，会抛出 `bean` 对象不是唯一定义异常。

```xml
<bean id="student6" class="org.example.pojo.Student" autowire="constructor"/>
<bean id="teacher" class="org.example.pojo.Teacher" autowire="byType"/>
<!-- 等等 -->
```

1. 什么是自动装配

   - 根据指定装配规则（属性名称或者属性类型），`Spring` 自动将匹配的属性值进行注入

2. 演示自动装配过程

   根据属性名称自动注入

   ```xml
   <!--实现自动装配
    bean 标签属性 autowire，配置自动装配
    autowire 属性常用两个值：
    byName 根据属性名称注入 ，注入值 bean 的 id 值和类属性名称一样
    byType 根据属性类型注入
   -->
   <bean id="emp" class="com.atguigu.spring5.autowire.Emp" autowire="byName">
    <!--<property name="dept" ref="dept"></property>-->
   </bean>
   <bean id="dept" class="com.atguigu.spring5.autowire.Dept"></bean>
   ```

   根据属性类型自动注入

   ```xml
   <!--实现自动装配
    bean 标签属性 autowire，配置自动装配
    autowire 属性常用两个值：
    byName 根据属性名称注入 ，注入值 bean 的 id 值和类属性名称一样
    byType 根据属性类型注入
   -->
   <bean id="emp" class="com.atguigu.spring5.autowire.Emp" autowire="byType">
    <!--<property name="dept" ref="dept"></property>-->
   </bean>
   <bean id="dept" class="com.atguigu.spring5.autowire.Dept"></bean>
   ```

## AOP 容器 ↓↓↓

`AOP` 全称为 `Aspect Oriented Programming`，即面向切面的编程。这种编程方式可以为某些方法提供行为增强，亦或者是行为监控能力。通过对切片统一编程可以在相比于不使用 `AOP` 的情况下减少了重复代码的开发量，同时使得代码功能更加明确。

### 入门案例

1. 导入依赖

   ```xml
   <!--spring aop依赖-->
   <dependency>
       <groupId>org.springframework</groupId>
       <artifactId>spring-aop</artifactId>
       <version>5.1.9.RELEASE</version>
   </dependency>
   
   <dependency>
       <groupId>org.springframework</groupId>
       <artifactId>spring-aspects</artifactId>
       <version>5.1.9.RELEASE</version>
   </dependency>
   
   <!--        aop实现依赖-->
   <dependency>
       <groupId>aopalliance</groupId>
       <artifactId>aopalliance</artifactId>
       <version>1.0</version>
   </dependency>
   <!--        切面实现依赖-->
   <dependency>
       <groupId>org.aspectj</groupId>
       <artifactId>aspectjweaver</artifactId>
       <version>1.9.1</version>
   </dependency>
   ```

2. 创建配置文件

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <beans xmlns="http://www.springframework.org/schema/beans"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xmlns:p="http://www.springframework.org/schema/p"
          xmlns:c="http://www.springframework.org/schema/c"
          xmlns:context="http://www.springframework.org/schema/context"
          xmlns:aop="http://www.springframework.org/schema/aop"
          xsi:schemaLocation="http://www.springframework.org/schema/beans
           http://www.springframework.org/schema/beans/spring-beans.xsd
           http://www.springframework.org/schema/context
           http://www.springframework.org/schema/context/spring-context.xsd
           http://www.springframework.org/schema/aop
           http://www.springframework.org/schema/aop/spring-aop.xsd">
   
   
       <!--注册Bean-->
       <bean name="userDao" class="org.example.dao.Impl.UserDaoImpl"></bean>
       <bean name="xmlAdvice" class="org.example.dao.XmlAdvice"></bean>
   
       <!--配置Spring AOP-->
       <aop:config>
           <!--指定切入点-->
           <aop:pointcut id="pointcut" expression="execution(*
           org.example.dao.Impl.UserDaoImpl.*(..))"/>
           <!--指定切面-->
           <aop:aspect ref = "xmlAdvice">
               <!--指定前置通知-->
               <aop:before method="before" pointcut-ref="pointcut"/>
               <!--指定返回通知-->
               <aop:after-returning method="afterReturning" pointcut-ref="pointcut"/>
               <!--指定环绕通知-->
               <aop:around method="around" pointcut-ref="pointcut"/>
               <!--指定异常通知-->
               <aop:after-throwing method="afterException" pointcut-ref="pointcut"/>
               <!--指定后置通知-->
               <aop:after method="after" pointcut-ref="pointcut"/>
           </aop:aspect>
       </aop:config>
   
   </beans>
   ```

3. 一些类

   `UserDaoImpl.java`

   ```java
   package org.example.dao.Impl;
   
   import org.example.dao.UserDao;
   
   public class UserDaoImpl implements UserDao {
   
       public void insert(){
           System.out.println("添加用户信息");
       }
   
       public void delete(){
           System.out.println("删除用户信息");
       }
   
       public void update(){
           System.out.println("更新用户信息");
       }
       
       public void select(){
           System.out.println("查询用户信息");
       }
   }
   ```

   `UserDao.java`

   ```java
   package org.example.dao;
   
   public interface UserDao {
       public void insert();
       public void delete();
       public void update();
       public void select();
   }
   ```

   `XmlAdvice.java`

   ```java
   package org.example.dao;
   
   import org.aspectj.lang.JoinPoint;
   import org.aspectj.lang.ProceedingJoinPoint;
   
   public class XmlAdvice {
       //前置通知
       public void before(JoinPoint joinPoint){        //使用JoinPoint接口实例作为参数获得目标对象的类名和方法名
           System.out.print("这是前置通知！");
           System.out.print("目标类：" + joinPoint.getTarget());
           System.out.println("，被织入增强处理的目标方法为："+joinPoint.getSignature().getName());
       }
       //返回通知
       public void afterReturning(JoinPoint joinPoint){//使用JoinPoint接口实例作为参数获得目标对象的类名和方法名
           System.out.print("这是返回通知（方法不出现异常时调用）！");
           System.out.println("被织入增强处理的目标方法为："+joinPoint.getSignature().getName());
       }
       /**
        * 环绕通知
        * ProceedingJoinPoint是JoinPoint子接口，表示可以执行目标方法
        * 1.必须是Object类型的返回值
        * 2.必须接收一个参数，类型为ProceedingJoinPoint
        * 3.必须throws Throwable
        */
       public Object around(ProceedingJoinPoint point)throws Throwable{//使用ProceedingJoinPoint接口实例作为参数获得目标对象的类名和方法名
           System.out.println("这是环绕通知之前的部分！");
           //调用目标方法
           Object object = point.proceed();
           System.out.println("这是环绕通知之前的部分！");
           return object;
       }
       //异常通知
       public void afterException(){
           System.out.println("异常通知！");
       }
       //后置通知
       public void after(){
           System.out.println("这是后置通知！");
       }
   }
   ```

4. 测测程序

   ```java
   import lombok.extern.slf4j.Slf4j;
   
   import org.example.dao.UserDao;
   import org.junit.Test;
   import org.springframework.context.ApplicationContext;
   import org.springframework.context.support.ClassPathXmlApplicationContext;
   
   @Slf4j
   public class AppTest {
   
       @Test
       public void test() {
           log.info("test");
       }
   
       @Test
       public void AOPTest() {
           ApplicationContext context = new
                   ClassPathXmlApplicationContext("ApplicationContext.xml");
           UserDao userDao = context.getBean("userDao",UserDao.class);
           userDao.delete();
           System.out.println();
           userDao.insert();
           System.out.println();
           userDao.select();
           System.out.println();
           userDao.update();
       }
   }
   ```

### 配置 AOP 的 XML 元素

| 元素                  | 描述                                                         |
| --------------------- | ------------------------------------------------------------ |
| `<aop:config>`        | Spring AOP 配置的根元素                                      |
| `<aop:aspect>`        | 配置切面                                                     |
| `<aop:advisor>`       | 配置通知器                                                   |
| `<aop:pointcut>`      | 配置切入点                                                   |
| `<aop:before>`        | 配置前置通知，在目标方法执行前实施增强，可以应用于权限管理等功能 |
| `<aop:after>`         | 配置后置通知，在目标方法执行前实施增强，可以应用于关闭流、上传文件、删除临时文件等功能 |
| `<aop:around>`        | 配置环绕通知，在目标方法执行前实施增强，可以应用于日志、事务管理等功能 |
| `<aop:after-running>` | 配置返回通知，在目标方法执行之后调用通知                     |
| `<aop:after-throw>`   | 配置异常通知，在方法抛出异常后实施增强，可以应用于处理异常记录日志等功能 |

