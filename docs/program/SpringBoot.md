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

### @Bean

Spring 的 @Bean 注解用于告诉方法，产生一个 Bean 对象，然后这个 Bean 对象交给 Spring 管理。产生这个 Bean 对象的方法 Spring 只会调用一次，随后这个 Spring 将会将这个 Bean 对象放在自己的 IOC 容器中。

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

#### 简化JavaBean开发

```properties
<dependency>
   <groupId>org.projectlombok</groupId>
   <artifactId>lombok</artifactId>
</dependency>
```

> idea中搜索安装lombok插件

```java
@NoArgsConstructor  // 无参构造器
@AllArgsConstructor  // 全参构造器
@Data  // 自动添加 Getter 和 Setter
@ToString  // toString 方法
@EqualsAndHashCode // Equals 和 HashCode 方法
public class User {

    private String name;
    private Integer age;
    private Pet pet;

    public User(String name,Integer age){
        this.name = name;
        this.age = age;
    }

}
```

#### 简化日志开发

```java
@Slf4j  // 简化日志开发
@RestController
public class HelloController {
    @RequestMapping("/hello")
    public String handle01(@RequestParam("name") String name){
        log.info("请求进来了....");  // 简化日志开发
        return "Hello, Spring Boot 2!"+"你好："+name;
    }
}
```

#### dev-tools 自动重启

项目或者页面修改以后：Ctrl+F9，自动重启。

若只是修改了 web 静态页面，则不会重启，只进行更新。

```xml
<dependency>
   <groupId>org.springframework.boot</groupId>
   <artifactId>spring-boot-devtools</artifactId>
   <optional>true</optional>
</dependency>
```

#### Spring Initailizr 项目初始化向导

`idea` 基本已内置。

## 配置文件

### ApplicationProperties 配置

[Application Properties 配置](#application-properties-配置)

[@ConfigurationProperties](#configurationproperties)

### yaml 配置

#### 简介

YAML 是 "YAML Ain't Markup Language"（YAML 不是一种标记语言）的递归缩写。在开发的这种语言时，YAML 的意思其实是："Yet Another Markup Language"（仍是一种标记语言）。 非常适合用来做以数据为中心的配置文件

#### 基本语法

- key: value；kv之间有空格；

- 大小写敏感；

- 使用缩进表示层级关系；

- 缩进不允许使用 `Tab`，只允许空格；【原则上，实际可用】

- 缩进的空格数不重要，只要相同层级的元素左对齐即可；

- `#` 表示注释；

- 字符串无需加引号，如果要加，`''`与 `""` 表示字符串内容会被转义/不转义。

#### 数据类型

1. 字面量：单个的、不可再分的值。date、boolean、string、number、null

   ```yaml
   k: v
   ```

2. 对象：键值对的集合。map、hash、set、object

   ```yaml
   # 行内写法
   k: {k1:v1, k2:v2, k3:v3}
   # 或
   k:
     k1: v1
     k2: v2
     k3: v3
   
   ```

3. 数组：一组按次序排列的值。array、list、queue

   ```yaml
   # 行内写法
   k: [v1, v2, v3]
   # 或者
   k:
     - v1
     - v2
     - v3
   ```

#### 示例

```java
@ConfigurationProperties(prefix = "person")
// 根据 application.xml 中的配置内容一一绑定 
@Data
public class Person {
    private String userName;
    private Boolean boss;
    private Date birth;
    private Integer age;
    private Pet pet;
    private String[] interests;
    private List<String> animal;
    private Map<String, Object> score;
    private Set<Double> salarys;
    private Map<String, List<Pet>> allPets;
}

@Data
public class Pet {
    private String name;
    private Double weight;
}
```

--> `application.xml`

```yaml
person:
  userName: zhangsan
  boss: false
  birth: 2019/12/12 20:12:33
  age: 18
  pet:
  name: tomcat
  weight: 23.4
  interests: [篮球,游泳]
  animal:
    - jerry
    - mario
  score:
  english:
  first: 30
  second: 40
  third: 50
  math: [131,140,148]
  chinese: {first: 128,second: 136}
  salarys: [3999,4999.98,5999.99]
  allPets:
  sick:
    - {name: tom}
    - {name: jerry,weight: 47}
  health: [{name: mario,weight: 47}]
```

双引号不会转义：`/n` 会被视为换行；

单引号会转义：`/n` 不会被视为换行，视为字符串。

> 将 `/n` 转义成字符串。

#### @Autowired

是一种注解，可以对成员变量、方法和构造函数进行标注，来完成自动装配的工作，@Autowired标注可以放在成员变量上，也可以放在成员变量的 set 方法上，也可以放在任意方法上表示，自动执行当前方法，如果方法有参数，会在IOC容器中自动寻找同类型参数为其传值。

```java
@RestController
public class PersonController {
    @Autowired
    Person person;
    // 自动绑定 application.xml 中的值
    
    @RequestMapping("/person")
    public Person person() {
        return person;
    }
}
```

#### 配置提示

自定义的类和配置文件绑定一般没有提示。

```xml
<dependency>
 <groupId>org.springframework.boot</groupId>
 <artifactId>spring-boot-configuration-processor</artifactId>
 <optional>true</optional>
</dependency>
```

打包时，不将配置提示包加入其中：

```xml
<build>
 <plugins>
  <plugin>
   <groupId>org.springframework.boot</groupId>
   <artifactId>spring-boot-maven-plugin</artifactId>
   <configuration>
      <excludes>
         <exclude>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-configuration-processor</artifactId>
         </exclude>
      </excludes>
   </configuration>
  </plugin>
 </plugins>
</build>
```

## WEB 开发 ↓↓↓

## SpringMVC 配置

[SpringMVC](./SpringMVC.md)

## 静态资源访问

### 静态资源目录

静态资源放在类路径下： `/static` 或 `/public` 或 `/resources` 或 `/META-INF/resources`

访问 ： 当前项目根路径/ + 静态资源名

原理： 静态映射/**。

> 请求进来，先去找Controller看能不能处理，不能处理的所有请求又都交给静态资源处理器，静态资源也找不到则响应404页面。

### 改变默认的静态资源路径

```properties
spring.mvc.static-path-pattern=/mypath/**
```

或

```yaml
spring:
  resources:
    static-locations: [classpath:/mypath/]
```

### 静态资源访问前缀

默认无前缀 。

有前缀：

```yaml
spring:
  mvc:
    static-path-pattern: /res/**
```

当前项目 + static-path-pattern + 静态资源名 = 静态资源文件夹下找。

> 即：/index.html --> /res/index.html

:::tip 提示
可用于拦截器不拦截静态资源。
:::

### webjar

把静态资源变成 jar 包。

> 不常用，了解就行。

### 欢迎页支持

静态资源路径下 `index.html` 可以配置静态资源路径 。

:::warning 提示
但是不可以配置静态资源的访问前缀；否则导致 `index.html` 不能被默认访问。

```yaml
spring:
  mvc:
    static-path-pattern: /res/** # 这个会导致welcome page功能失效
```

:::

### 自定义 Favicon

`favicon.ico` 放在静态资源目录下即可。

> 同样不可以配置静态资源的访问前缀。

### 静态资源配置原理

- SpringBoot启动默认加载 xxxAutoConfiguration 类（自动配置类） ；

- SpringMVC功能的自动配置类 WebMvcAutoConfiguration 生效；

  ```java
  @Configuration(proxyBeanMethods = false)
  @ConditionalOnWebApplication(type = Type.SERVLET)
  @ConditionalOnClass({ Servlet.class, DispatcherServlet.class, WebMvcConfigurer.class })
  @ConditionalOnMissingBean(WebMvcConfigurationSupport.class)
  @AutoConfigureOrder(Ordered.HIGHEST_PRECEDENCE + 10)
  @AutoConfigureAfter({ DispatcherServletAutoConfiguration.class,TaskExecutionAutoConfiguration.class,ValidationAutoConfiguration.class })
  public class WebMvcAutoConfiguration {}
  ```

- 配置文件的相关属性和xxx进行了绑定。WebMvcProperties==spring.mvc、ResourceProperties==spring.resources；

- 配置类只有一个有参构造器。

## 请求参数处理

### 请求映射

#### Rest 使用与原理

1. xxxMapping

2. Rest 风格支持（使用HTTP请求方式动词来表示对资源的操作）

   - 以前：/getUser 获取用户 /deleteUser 删除用户 /editUser 修改用户 /saveUser 保存用户；

   - 现在： /user GET-获取用户 DELETE-删除用户 PUT-修改用户 POST-保存用户；

   - 核心Filter、HiddenHttpMethodFilter 用法：

     - 表单 `method=post`，隐藏域 `_method=put SpringBoot` 中手动开启；

     - SpringBoot 中手动开启。

       ```java
       // 源码默认关闭。
       @Bean
       @ConditionalOnMissingBean(HiddenHttpMethodFilter.class)
       @ConditionalOnProperty(prefix = "spring.mvc.hiddenmethod.filter", name = "enabled", matchIfMissing = false)
       public OrderedHiddenHttpMethodFilter hiddenHttpMethodFilter() {
         return new OrderedHiddenHttpMethodFilter();
       }
       ```

       开启

       ```yaml
       spring:
         mvc:
           hiddenmethod:
             filter:
               enabled: true
       ```

   - 扩展：如何把 `_method` 这个名字换成我们自己喜欢的。

     ```java
     //自定义filter
     @Bean
     public HiddenHttpMethodFilter hiddenHttpMethodFilter(){
         HiddenHttpMethodFilter methodFilter = new HiddenHttpMethodFilter();
         methodFilter.setMethodParam("_m");
         return methodFilter;
     }
     ```

3. 代码示例

   ```java
   @RequestMapping(value = "/user",method = RequestMethod.GET)
   public String getUser() {
      return "GET-张三";
   }
   
   @RequestMapping(value = "/user",method = RequestMethod.POST)
   public String saveUser(){
      return "POST-张三";
   }
   
   @RequestMapping(value = "/user",method = RequestMethod.PUT)
   public String putUser(){
      return "PUT-张三";
   }
   
   @RequestMapping(value = "/user",method = RequestMethod.DELETE)
   public String deleteUser(){
      return "DELETE-张三";
   }
   ```

4. 简化

   ```java
   @RequestMapping(value = "/user",method = RequestMethod.GET)
   @RequestMapping(value = "/user",method = RequestMethod.POST)
   // ...
   // 等同于
   @GETMapping("/user")
   @POSTMapping("/user")
   // ...
   ```

#### 普通参数与基本注解

1. 注解

   - @PathVariable

   - @RequestHeader
   
   - @ModelAttribute
   
   - @RequestParam
   
   - @MatrixVariable
   
   - @CookieValue
   
   - @RequestBody
   
   ```java
   @RestController
   public class ParameterTestController {
   
      // car/2/owner/zhangsan
      @GetMapping("/car/{id}/owner/{username}")
      public Map<String,Object> getCar(@PathVariable("id") Integer id,
            @PathVariable("username") String name,
            @PathVariable Map<String,String> pv,
            @RequestHeader("User-Agent") String userAgent,
            @RequestHeader Map<String,String> header,
            @RequestParam("age") Integer age,
            @RequestParam("inters") List<String> inters,
            @RequestParam Map<String,String> params,
            @CookieValue("_ga") String _ga,
            @CookieValue("_ga") Cookie cookie){
         Map<String,Object> map = new HashMap<>();
         // map.put("id",id);
         // map.put("name",name);
         // map.put("pv",pv);
         // map.put("userAgent",userAgent);
         // map.put("headers",header);
         map.put("age",age);
         map.put("inters",inters);
         map.put("params",params);
         map.put("_ga",_ga);
         System.out.println(cookie.getName()+"===>"+cookie.getValue());
         return map;
      }
   
      @PostMapping("/save")
      public Map postMethod(@RequestBody String content){
         // 获取请求体中的数据
         Map<String,Object> map = new HashMap<>();
         map.put("content",content);
         return map;
      }
   
      //1、语法： 请求路径：/cars/sell;low=34;brand=byd,audi,yd
      //2、SpringBoot默认是禁用了矩阵变量的功能
      // 手动开启：原理。对于路径的处理。UrlPathHelper进行解析。
      // removeSemicolonContent（移除分号内容）支持矩阵变量的
      //3、矩阵变量必须有url路径变量才能被解析
      @GetMapping("/cars/{path}")
      public Map carsSell(@MatrixVariable("low") Integer low,
      @MatrixVariable("brand") List<String> brand,
      @PathVariable("path") String path){
         Map<String,Object> map = new HashMap<>();
      
         map.put("low",low);
         map.put("brand",brand);
         map.put("path",path);
         return map;
      }
      
      // /boss/1;age=20/2;age=10
      @GetMapping("/boss/{bossId}/{empId}")
      public Map boss(@MatrixVariable(value = "age",pathVar = "bossId") Integer bossAge,
      @MatrixVariable(value = "age",pathVar = "empId") Integer empAge){
         Map<String,Object> map = new HashMap<>();
         map.put("bossAge",bossAge);
         map.put("empAge",empAge);
         return map;
      }
   }
   ```
