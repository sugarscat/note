# SpringMVC

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

