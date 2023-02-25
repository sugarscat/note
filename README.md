# Note

### 介绍
一个笔记本

### 目录

[笔记目录](docs/notes/index.md)

[文档目录](docs/documents/index.md)

### Pages 页面
> 用VuePress构建

1. 步骤 1: 初始化项目
    ```shell
    npm init
    ```

2. 步骤 2: 将 VuePress 安装为本地依赖
    ```shell
    npm add -D vuepress@next @vuepress/client@next vue
    ```

3. 步骤 3: 在 package.json 中添加一些 scripts（可以不添加）
    ```
    {
       "scripts": {
       "docs:dev": "vuepress dev docs",
       "docs:build": "vuepress build docs"
       }
    }
    ```

4. 步骤 4: 将默认的临时目录和缓存目录添加到 .gitignore 文件中
    ```shell
    echo 'node_modules' >> .gitignore
    echo '.temp' >> .gitignore
    echo '.cache' >> .gitignore
    ```

5. 步骤 5: 在本地启动服务器来开发你的文档网站
    ```shell
    npm install
    npm run docs:dev
    ```

6. 步骤 6: 构建静态文件
    ```shell
    npm run docs:build
    ```
