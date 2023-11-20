# Spring

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

## AOP 原理

- 将复杂的需求分解出不同方面，将散布在系统中

## 入门案例

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

## 配置 AOP 的 XML 元素

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

## 常用注解 ←→

### @Component

表示一个带注释的类是一个“组件”，成为 `Spring` 管理的 `Bean` 。当使用基于注解的配置和类路径扫描时，这些类被视为自动检测的候选对象。同时 `@Component` 还是一个元注解。

### @Service

组合注解（组合了 `@Component` 注解），应用在 `service` 层（业务逻辑层）。

### @Repository

组合注解（组合了 `@Component` 注解），应用在 `dao` 层（数据访问层）。

### @Controller

组合注解（组合了@Component注解），应用在MVC层（控制层），`DispatcherServle` t会自动扫描注解了此注解的类，然后将 `web` 请求映射到注解了 `@RequestMapping` 的方法上。

### @RequestMapping

用于映射 `Web` 请求，包括访问路径和参数。（类或方法上）

### @ResponseBody

支持将返回值放在 `response` 内，而不是一个页面，通常用户返回 `json` 数据。（返回值旁或方法上）

### @RequestBody

允许 `request` 的参数在 `request` 体中，而不是在直接连接在地址后面。（放在参数前）

### @PathVariable

用于接收路径参数，比如 `@RequestMapping(“/hello/{name}”)` 申明的路径，将注解放在参数中前，即可获取该值，通常作为 `Restful` 的接口实现方法。

### @RestController

该注解为一个组合注解，相当于 `@Controller` 和 `@ResponseBody` 的组合，注解在类上，该 `Controller` 的所有方法都默认加上了 `@ResponseBody` 。

### @ExceptionHandler

用于全局处理控制器里的异常。

### @ModelAttribute

本来的作用是绑定键值对到 `Model` 里，在 `@ControllerAdvice` 中是让全局的 `@RequestMapping` 都能获得在此处设置的键值对。

### @Autowired

`Spring` 提供的工具（由 `Spring` 的依赖注入工具（`BeanPostProcessor`、`BeanFactoryPostProcessor`）自动注入）。

根据类型注入 `bean`，假如有多个同类型的  `bean` 对象，再根据名称去匹配 `bean` 对象。

:::tip 扩展

`@Qualifier` 注解会改变 `Autowired` 注入策略，去 IOC 容器中获取 `bean` 对象，使用它时的配置名称必须在  IOC 容器中有所配置。

```java
@Qualifier("serviceHello")
// 同时在 service 上必须配置
@Service("serviceHello")
```

:::

### @Configuration

声明当前类是一个配置类（相当于一个 `Spring` 配置的 `xml` 文件）（类上）。

### @Bean

注解在方法上，声明当前方法的返回值为一个 `Bean`。返回的 `Bean` 对应的类中可以定义 `init()` 方法和 `destroy()` 方法，然后在 `@Bean(initMethod=”init”,destroyMethod=”destroy”)` 定义，在构造之后执行 `init` ，在销毁之前执行`destroy`。（方法上）

### @ComponentScan

自动扫描指定包下所有使用`@Service、@Component、@Controller、@Repository`的类并注册（类上）。

### @Aspect

声明一个切面（类上） 使用 `@After、@Before、@Around` 定义建言（`advice`），可直接将拦截规则（切点）作为参数。

`@After` ：在方法执行之后执行（方法上）。

`@Before`： 在方法执行之前执行（方法上）。

`@Around`： 在方法执行之前与之后执行（方法上）。

`@PointCut`： 声明切点 在java配置类中使用@EnableAspectJAutoProxy注解开启Spring对AspectJ代理的支持（类上）。

### @Scope

定义我们采用什么模式去创建Bean（方法上，得有@Bean） 其设置类型包括：

> `Singleton` （单例,一个 `Spring` 容器中只有一个 `bean` 实例，默认模式）, `Prototype`（每次调用新建一个 `bean`）, `Request `（`web`项目中，给每个`http request`新建一个`bean`）, `Session`（`web`项目中，给每个`http session`新建一个`bean`）, `GlobalSession`（给每一个 `global http session`新建一个`bean`实例）。

### @PostConstruct

标注在方法上，该方法在构造函数执行完成之后执行。

### @PreDestory

标注在方法上，该方法在对象销毁之前执行。

### @Value

经常与 `Sping EL` 表达式语言一起使用，注入普通字符，系统属性，表达式运算结果，其他 `Bean` 的属性，文件内容，网址请求内容，配置文件属性值等。

### @EnableAsync

配置类中，通过此注解开启对异步任务的支持，叙事性 `AsyncConfigurer` 接口。（类上）

### @Async

在实际执行的 `bean`方法使用该注解来申明其是一个异步任务（方法上或类上所有的方法都将异步，需要 `@EnableAsync` 开启异步任务）

### @EnableScheduling

在配置类上使用，开启计划任务的支持。（类上）

### @Scheduled

来申明这是一个任务，包括 `cron,fixDelay,fixRate` 等类型。（方法上，需先开启计划任务的支持）

### @Enable*注解说明

> 这些注解主要用来开启对 xxx 的支持。 @EnableAspectJAutoProxy 开启对 `AspectJ` 自动代理的支持。

`@EnableAsync`： 开启异步方法的支持。

`@EnableScheduling`： 开启计划任务的支持。

`@EnableWebMvc` ：开启Web MVC的配置支持。

`@EnableConfigurationProperties` ：开启对@ConfigurationProperties注解配置Bean的支持。

`@EnableJpaRepositories`：开启对SpringData JPA Repository的支持。

`@EnableTransactionManagement`：开启注解式事务的支持。

`@EnableTransactionManagement`： 开启注解式事务的支持。

`@EnableCaching`： 开启注解式的缓存支持。

## SpringMVC ↓↓↓

## 介绍

### 简介

`Spring MVC` 是 `Spring Framework` 提供的 `Web` 组件，全称是 `Spring Web MVC`，是目前主流的实现 `MVC` 设计模式的框架，提供前端路由映射、视图解析等功能。

### MVC 是什么

`MVC` 是一种软件架构思想，把软件按照模型，视图，控制器来划分；
`Model` 模型层，指工程中的 `JavaBean`，用来处理数据；
`JavaBean` 分成两类：

- 一类称为实体类 `Bean`：专门用来存储业务数据，比如 `Student`，`User`
- 一类称为业务处理 `Bean` ：指 `Servlet` 或 `Dao` 对象，专门用来处理业务逻辑和数据访问
  `View` :视图层，指工程中的 `html`, `jsp` 等页面，作用是和用户进行交互，展示数据
  `Controler`:控制层，指工程中的 `Servlet`,作用是接收请求和响应浏览器
- 流程：
  - 用户通过视图层发送请求到服务器，在服务器中请求被 `Controller` 接收
  - `Controller` 调用相应的 `Model` 层处理请求，处理完毕后结果返回到 `Controller`
  - `Controller` 再根据请求处理的结果找到对应的View视图，渲染数据后最终响应给浏览器

## 实现原理

### 核心组件

- `DispatcherServlet`： 前置控制器，负责调度其他组件的执行，可以降低不同组件之间的耦合性，是整个 `Spring MVC` 的核心模块
- `Handler` ：处理器，完成具体的业务逻辑，相当于 `Servlet`
- `HandlerMapping`： `DispatcherServlet` 是通过 `HandlerMapping` 把请求映射到不同的 `Handler`
- `HandlerInterceptor`：处理器拦截器，是一个接口，如果我们需要进行一些拦截处理，可以通过实现该接口完成
- `HandlerExecutionChain`：处理器执行链，包括两部分内容 `Handler` 和 `HandlerInterceptor` (系统会有一个默认的 `HandlerInterceptor`，如果有额外拦截处理，可以添加拦截器进行设置)
- `HandlerAdapter`：处理器适配器，`Handler` 执行业务方法之前，需要进行一系列的操作包括表单的数据验证、数据类型转换、把表单数据封装到`POJO`等，这些一系列的操作都是由 `HandlerAdapter` 完成，`DispatcherServlet` 通过 `HandlerAdapter` 执行不同的 `Handler`
- `ModelAndView`：封装了模型数据和视图信息，作为 `Handler` 的处理结果，返回给 `DispatcherServlet`
- `ViewResolver`：视图解析器，`DispatcherServlet`通过它把逻辑视图解析为物理视图，最终把渲染的结果响应给客户端

