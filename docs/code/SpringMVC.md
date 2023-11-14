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
