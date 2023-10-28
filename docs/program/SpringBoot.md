# SpringBoot

`2.7.17`

## HelloWorld

1. 创建maven工程

2. 引入依赖

   ```xml
   <parent>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-parent</artifactId>
      <version>2.7.17</version>
   </parent>
   
   <dependencies>
      <dependency>
      <groupId>org.springframework.boot</groupId>
         <artifactId>spring-boot-starter-web</artifactId>
      </dependency>
   
   </dependencies>
   ```

3. 创建主程序

   ```java
   /**
    * 主程序类
    * @SpringBootApplication：这是一个SpringBoot应用
    */
   @SpringBootApplication
   public class MainApplication {
      
      public static void main(String[] args) {
         SpringApplication.run(MainApplication.class,args);
      }
   }
   ```

4. 编写业务

   ```java
   @RestController
   public class HelloController {
   
      @RequestMapping("/hello")
      public String handle01(){
         return "Hello, Spring Boot 2!";
      }
   }
   ```

5. 测试

   直接运行main方法。

6. 简化部署

   ```xml
   <build>
      <plugins>
         <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
         </plugin>
      </plugins>
   </build>
   ```

## Application Properties 配置

> [文档](https://docs.spring.io/spring-boot/docs/2.7.17/reference/html/application-properties.html#appendix.application-properties)
>
> `application.properties` 文件

修改服务端口配置

```properties
server.port=8080  # 端口
```

## SpringBoot 特点

### 依赖管理

1. 父项目做依赖管理

   ```xml
   <!--依赖管理-->
   <parent>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-parent</artifactId>
      <!-- 由此版本号决定，自动版本仲裁。 -->
      <version>2.7.17</version>
   </parent>
   ```

   :::tip 自动版本仲裁
   1. 引入依赖默认都可以不写版本 ；

   2. 引入非版本仲裁的jar，要写版本号。
   :::

2. 以修改默认版本号

   ```xml
   <!--1. 查看spring-boot-dependencies里面规定当前依赖的版本用的 key。-->
   <!--2. 在当前项目里面重写配置-->
   <properties>
      <mysql.version>8.0.21</mysql.version>
   </properties>
   ```

### 自动配置

1. 自动配好Tomcat

   - 引入Tomcat依赖；

   - 配置Tomcat。

2. 自动配好SpringMVC

   - 引入SpringMVC全套组件；
   - 自动配好SpringMVC常用组件（功能）。

3. 自动配好 Web 常见功能

   如：字符编码问题。

4. 默认的包结构

   - 主程序所在包及其下面的所有子包里面的组件都会被默认扫描进来；

   - 无需以前的包扫描配置；

   - 想要改变扫描路径：

     @SpringBootApplication(scanBasePackages="com.atguigu")；

     @ComponentScan 指定扫描路径；

   ::: tip 提示

   ```java
   @SpringBootApplication
   // 等同于
   @SpringBootConfiguration
   @EnableAutoConfiguration
   @ComponentScan("com.atguigu.boot")
   ```

   :::

5. 各种配置拥有默认值
   - 默认配置最终都是映射到某个类上，如：MultipartProperties ；
   - 配置文件的值最终会绑定每个类上，这个类会在容器中创建对象；
   - 按需加载所有自动配置项。

## 容器功能

### 组件添加

#### @Configuration 配置文件

1. 基本使用

   ```java
   /**
    * 1、配置类里面使用@Bean标注在方法上给容器注册组件，默认也是单实例的
    * 2、配置类本身也是组件
    * 3、proxyBeanMethods：代理bean的方法
    * Full(proxyBeanMethods = true)【保证每个@Bean方法被调用多少次返回的组件都是单实例的】
    * Lite(proxyBeanMethods = false)【每个@Bean方法被调用多少次返回的组件都是新创建的】
    * 组件依赖必须使用 Full 模式默认。其他默认是否 Lite 模式
    */
   @Configuration(proxyBeanMethods = false) // 告诉 SpringBoot 这是一个配置类 == 配置文件
   public class MyConfig {
      /**
       * Full:外部无论对配置类中的这个组件注册方法调用多少次获取的都是之前注册容器中的单实例对象
      * @return
      */
      @Bean // 给容器中添加组件；以方法名作为组件的 id；返回类型就是组件类型；返回的值，就是组件在容器中的实例。
      public User user01(){
         User zhangsan = new User("zhangsan", 18);
         //user组件依赖了Pet组件
         zhangsan.setPet(tomcatPet());
         return zhangsan;
      }

      @Bean("tom")
      public Pet tomcatPet(){
         return new Pet("tomcat");
      }
   }
   ```

2. 测试

   @Configuration 测试代码如下

   ```java
   @SpringBootConfiguration
   @EnableAutoConfiguration
   @ComponentScan("com.atguigu.boot")
   public class MainApplication {
   
      public static void main(String[] args) {
         // 1、返回我们IOC容器
         ConfigurableApplicationContext run = SpringApplication.run(MainApplication.class, args);

         // 2、查看容器里面的组件
         String[] names = run.getBeanDefinitionNames();
         for (String name : names) {
         System.out.println(name);
         }
         // 3、从容器中获取组件
         Pet tom01 = run.getBean("tom", Pet.class);
         Pet tom02 = run.getBean("tom", Pet.class);
         System.out.println("组件："+(tom01 == tom02));
         // 4. com.atguigu.boot.config.MyConfig$$EnhancerBySpringCGLIB$$51f1e1ca@1654a892
         MyConfig bean = run.getBean(MyConfig.class);
         System.out.println(bean);

         // 如果@Configuration(proxyBeanMethods = true)代理对象调用方法。
         // SpringBoot 总会检查这个组件是否在容器中有。
         // 保持组件单实例
         User user = bean.user01();
         User user1 = bean.user01();
         System.out.println(user == user1);

         User user01 = run.getBean("user01", User.class);
         Pet tom = run.getBean("tom", Pet.class);
         System.out.println("用户的宠物："+(user01.getPet() == tom));
      }
   }
   ```

3. Full 模式与 Lite 模式

   - 配置类组件之间无依赖关系用Lite模式加速容器启动过程，减少判断 ；
   - 配置类组件之间有依赖关系，方法会被调用得到之前单实例组件，用Full模式。

   配置类里面使用@Bean标注在方法上给容器注册组件，默认也是单实例的；

   配置类本身也是组件；

   proxyBeanMethods: 代理 bean 的方法：

    Full(proxyBeanMethods = true)

    Lite(proxyBeanMethods = false)

4. 其他办法

   @Bean、@Component、@Controller、@Service、@Repository、@ComponentScan、@Import

   :::tip @Import 示例

   ```java
   @Import({User.class})
   @Configuration(proxyBeanMethods = false)
   public class MyConfig {}
   ```

   :::

### @Conditional 条件装配

条件装配：满足 Conditional 指定的条件，则进行组件注入。

```java
@Configuration(proxyBeanMethods = false) //告诉SpringBoot这是一个配置类 == 配置文件
// @ConditionalOnBean(name = "tom")：有 tom 就加
@ConditionalOnMissingBean(name = "tom")：无 tom 就加
public class MyConfig {}
```

### 原生配置文件引入

#### @ImportResource

引入原生配置文件 `beans.xml`

```java
@ImportResource("classpath:beans.xml")
public class MyConfig {}
```

### 配置绑定

> 例如：可以使用在设置数据库配置上。

如何使用 Java 读取到 properties 文件中的内容，并且把它封装到 JavaBean 中，以供随时使用；

```java
// java 原生方法
public class getProperties {
   public static void main(String[] args) throws FileNotFoundException, IOException {
      Properties pps = new Properties();
      pps.load(new FileInputStream("a.properties"));
      Enumeration enum1 = pps.propertyNames();//得到配置文件的名字
      while(enum1.hasMoreElements()) {
         String strKey = (String) enum1.nextElement();
         String strValue = pps.getProperty(strKey);
         System.out.println(strKey + "=" + strValue);
         //封装到JavaBean。
      }
   }
}
```

#### @ConfigurationProperties

`application.properties` 中的内容

```properties
mycar.brand = "BYD"
mycar.price = "200000"
```

```java
/**
 * 只有在容器中的组件，才会拥有 SpringBoot 提供的强大功能
 */
@Component
@ConfigurationProperties(prefix = "mycar")
// 根据 application.properties 中的配置内容一一绑定 
public class Car {
   private String brand;
 private Integer price;
}
```

#### @EnableConfigurationProperties

```java
@EnableConfigurationProperties(Car.class)
//1、开启Car配置绑定功能
//2、把这个Car这个组件自动注册到容器中
public class MyConfig {}
```

这样可以省略 `class Car` 上的 `@Component` 不写。

### 自动配置原理入门

#### 引导加载自动配置类

```java
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan(excludeFilters = { @Filter(type = FilterType.CUSTOM, classes = TypeExcludeFilter.class),
@Filter(type = FilterType.CUSTOM, classes = AutoConfigurationExcludeFilter.class) })
public @interface SpringBootApplication{}
```

##### @SpringBootConfiguration

@Configuration：代表当前是一个配置类。

##### @ComponentScan

指定扫描哪些 Spring 注解。

##### @EnableAutoConfiguration

```java
@AutoConfigurationPackage
@Import(AutoConfigurationImportSelector.class)
public @interface EnableAutoConfiguration {}
```

1. @AutoConfigurationPackage

   - 自动配置包；

   - 指定了默认的包规则。

   ```java
   @Import(AutoConfigurationPackages.Registrar.class) //给容器中导入一个组件
   public @interface AutoConfigurationPackage {}
   // 利用 Registrar 给容器中导入一系列组件;
   // 将指定的一个包下的所有组件导入进来 --> MainApplication 所在包下。
   ```

2. @Import(AutoConfigurationImportSelector.class)

   > 文件里面写死了 spring-boot 一启动就要给容器中加载的所有配置类

   - 利用 getAutoConfigurationEntry(annotationMetadata); 给容器中批量导入一些组件；

   - 调用 `List<String> configurations = getCandidateConfigurations(annotationMetadata, attributes)` 获取到所有需要导入到容器中的配置类；
   - 利用工厂加载 `Map<String, List<String>> loadSpringFactories(@Nullable ClassLoader classLoader)`得到所有的组件；

   - 从 META-INF/spring.factories 位置来加载一个文件:
     - 默认扫描我们当前系统里面所有 META-INF/spring.factories 位置的文件；
     - spring-boot-autoconfigure-2.3.4.RELEASE.jar 包里面也有 META-INF/spring.factories。

#### 按需开启自动配置项

- 虽然我们127个场景的所有自动配置启动的时候默认全部加载。
- 按照`条件装配`规则（@Conditional），最终会按需配置。

#### 修改默认配置

```java
@Bean
@ConditionalOnBean(MultipartResolver.class) //容器中有这个类型组件
@ConditionalOnMissingBean(name = DispatcherServlet.MULTIPART_RESOLVER_BEAN_NAME) //容器中没有这个名字 multipartResolv
public MultipartResolver multipartResolver(MultipartResolver resolver) {
   // 给@Bean标注的方法传入了对象参数，这个参数的值就会从容器中找。
   // SpringMVC multipartResolver。防止有些用户配置的文件上传解析器不符合规范
   // Detect if the user has created a MultipartResolver but named it incorrectly
   return resolver;
}

```

SpringBoot默认会在底层配好所有的组件，但是如果用户自己配置了以用户的优先。

```java
@Bean
@ConditionalOnMissingBean
public CharacterEncodingFilter characterEncodingFilter() {}
```

:::tip 提示
配置文件`application.properties`中加入`debug=true`开启自动配置报告。

- Negative（不生效）
- Positive（生效）
:::

## 开发小技巧

### Lombok

简化JavaBean开发。

```properties
<dependency>
   <groupId>org.projectlombok</groupId>
   <artifactId>lombok</artifactId>
</dependency>
```

