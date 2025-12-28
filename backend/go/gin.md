# Gin 框架

> [!NOTE]
>
> - [Gin 官方中文文档](https://gin-gonic.com/zh-cn/docs/)
> - [Gin GitHub 仓库](https://github.com/gin-gonic/gin)
> - [Go 语言编程](https://golang.org/doc/)

## 1. 概述

Gin 是一个用 Go 语言编写的高性能 HTTP Web 框架。它具有快速的路由、中间件支持、JSON 验证、错误处理等功能，非常适合构建 RESTful API 和 Web 应用。Gin 的设计目标是提供高性能和易用性，同时保持代码简洁。

## 2. 核心特性

- **高性能**: 基于 `httprouter`，路由性能极高。
- **中间件支持**: 支持自定义中间件，方便扩展功能。
- **JSON 支持**: 内置 JSON 解析和序列化。
- **错误处理**: 提供统一的错误处理机制。
- **路由组**: 支持路由分组，便于管理。
- **参数绑定**: 自动将请求参数绑定到结构体。
- **验证**: 支持请求参数的验证。

## 3. 安装与配置

```bash
go get -u github.com/gin-gonic/gin
```

## 4. 基本使用

```go
package main

import (
    "github.com/gin-gonic/gin"
    "net/http"
)

func main() {
    // 创建一个默认的 Gin 引擎
    r := gin.Default()

    // 定义一个 GET 路由
    r.GET("/hello", func(c *gin.Context) {
        c.JSON(http.StatusOK, gin.H{
            "message": "Hello, World!",
        })
    })

    // 启动服务，默认监听 8080 端口
    r.Run()
}
```

## 5. 路由

- **基本路由**

```go
r.GET("/someGet", getting)
r.POST("/somePost", posting)
r.PUT("/somePut", putting)
r.DELETE("/someDelete", deleting)
r.PATCH("/somePatch", patching)
r.HEAD("/someHead", head)
r.OPTIONS("/someOptions", options)
```

- **路由参数**

```go
r.GET("/user/:name", func(c *gin.Context) {
    name := c.Param("name")
    c.String(http.StatusOK, "Hello %s", name)
})
```

- **查询参数**

```go
r.GET("/welcome", func(c *gin.Context) {
    firstname := c.DefaultQuery("firstname", "Guest")
    lastname := c.Query("lastname")

    c.String(http.StatusOK, "Hello %s %s", firstname, lastname)
})
```

- **路由组**

```go
v1 := r.Group("/v1")
{
    v1.GET("/login", loginEndpoint)
    v1.GET("/submit", submitEndpoint)
    v1.GET("/read", readEndpoint)
}
```

## 6. 中间件

- **全局中间件**

```go
func Logger() gin.HandlerFunc {
    return func(c *gin.Context) {
        t := time.Now()

        // 设置示例变量
        c.Set("example", "12345")

        // 请求前

        c.Next()

        // 请求后
        latency := time.Since(t)
        log.Print(latency)

        // 访问我们发送的状态
        status := c.Writer.Status()
        log.Println(status)
    }
}

func main() {
    r := gin.New()
    r.Use(Logger())

    r.GET("/test", func(c *gin.Context) {
        example := c.MustGet("example").(string)

        // 打印："12345"
        log.Println(example)
    })

    // 监听并在 0.0.0.0:8080 上启动服务
    r.Run(":8080")
}
```

- **路由组中间件**

```go
authorized := r.Group("/", gin.BasicAuth(gin.Accounts{
    "user1": "love",
    "user2": "god",
    "user3": "sex",
}))

authorized.GET("/secret", func(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
        "secret": "The secret ingredient to the BBQ sauce is stiring it in an old whiskey barrel.",
    })
})
```

## 7. 参数绑定

- **JSON 绑定**

```go
type Login struct {
    User     string `form:"user" json:"user" binding:"required"`
    Password string `form:"password" json:"password" binding:"required"`
}

func main() {
    r := gin.Default()

    r.POST("/loginJSON", func(c *gin.Context) {
        var json Login
        if err := c.ShouldBindJSON(&json); err != nil {
            c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
            return
        }

        if json.User != "manu" || json.Password != "123" {
            c.JSON(http.StatusUnauthorized, gin.H{"status": "unauthorized"})
            return
        }

        c.JSON(http.StatusOK, gin.H{"status": "you are logged in"})
    })

    r.Run(":8080")
}
```

- **表单绑定**

```go
r.POST("/loginForm", func(c *gin.Context) {
    var form Login
    if err := c.ShouldBind(&form); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    if form.User != "manu" || form.Password != "123" {
        c.JSON(http.StatusUnauthorized, gin.H{"status": "unauthorized"})
        return
    }

    c.JSON(http.StatusOK, gin.H{"status": "you are logged in"})
})
```

## 8. 文件上传

- **单文件上传**

```go
r.POST("/upload", func(c *gin.Context) {
    file, _ := c.FormFile("file")
    log.Println(file.Filename)

    // 上传文件到指定的路径
    c.SaveUploadedFile(file, "/tmp/"+file.Filename)

    c.String(http.StatusOK, fmt.Sprintf("'%s' uploaded!", file.Filename))
})
```

- **多文件上传**

```go
r.POST("/uploadMultiple", func(c *gin.Context) {
    form, _ := c.MultipartForm()
    files := form.File["upload[]"]

    for _, file := range files {
        log.Println(file.Filename)

        // 上传文件到指定的路径
        c.SaveUploadedFile(file, "/tmp/"+file.Filename)
    }
    c.String(http.StatusOK, fmt.Sprintf("%d files uploaded!", len(files)))
})
```

## 9. 错误处理

- **自定义错误处理**

```go
r.GET("/error", func(c *gin.Context) {
    // 抛出一个错误
    c.Error(errors.New("something bad happened"))
    c.JSON(http.StatusInternalServerError, gin.H{"error": "Internal Server Error"})
})
```

- **统一错误处理**

```go
func CustomErrorHandler(c *gin.Context) {
    c.Next()

    if len(c.Errors) > 0 {
        c.JSON(http.StatusInternalServerError, gin.H{
            "errors": c.Errors,
        })
    }
}

func main() {
    r := gin.Default()
    r.Use(CustomErrorHandler)

    r.GET("/error", func(c *gin.Context) {
        c.Error(errors.New("something bad happened"))
    })

    r.Run(":8080")
}
```

## 10. 静态文件服务

```go
r.Static("/assets", "./assets")
r.StaticFS("/more_static", http.Dir("my_file_system"))
r.StaticFile("/favicon.ico", "./resources/favicon.ico")
```

## 11. 模板渲染

- **HTML 模板**

```go
func main() {
    r := gin.Default()
    r.LoadHTMLGlob("templates/*")
    r.GET("/index", func(c *gin.Context) {
        c.HTML(http.StatusOK, "index.tmpl", gin.H{
            "title": "Main website",
        })
    })
    r.Run(":8080")
}
```

- **多模板**

```go
func main() {
    r := gin.Default()
    r.LoadHTMLGlob("templates/**/*")
    r.GET("/posts/index", func(c *gin.Context) {
        c.HTML(http.StatusOK, "posts/index.tmpl", gin.H{
            "title": "Posts",
        })
    })
    r.GET("/users/index", func(c *gin.Context) {
        c.HTML(http.StatusOK, "users/index.tmpl", gin.H{
            "title": "Users",
        })
    })
    r.Run(":8080")
}
```

## 12. 最佳实践

- **路由组织**: 使用路由组和中间件来组织和管理路由。
- **错误处理**: 统一错误处理机制，提高代码可维护性。
- **性能优化**: 使用合适的中间件和缓存机制，优化性能。
- **安全性**: 使用 HTTPS、CORS 等机制，提高应用安全性。

## 13. 常见问题与解决方案

- **路由冲突**: 确保路由路径唯一，避免冲突。
- **性能瓶颈**: 使用性能分析工具，定位和优化性能瓶颈。
- **调试困难**: 使用日志和调试工具，帮助定位问题。
