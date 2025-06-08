export default [
  {
    text: "🌐 语言学习",
    collapsed: true,
    items: [
      { text: "英语", link: "/language/english.md" },
      { text: "日语", link: "/language/japanese.md" },
    ],
  },
  {
    text: "🧠 计算机基础",
    collapsed: true,
    items: [
      { text: "C 笔记", link: "/program/c.md" },
      { text: "数据结构", link: "/program/408/data-structure.md" },
      { text: "ASCII 码对照表", link: "/program/ascii.md" },
      { text: "摩斯码", link: "/program/morse-code.md" },
    ],
  },
  {
    text: "💻 编程语言与技术",
    collapsed: true,
    items: [
      { text: "C++ 笔记", link: "/program/c++.md" },
      { text: "C# 笔记", link: "/program/csharp.md" },
      { text: "Go 笔记", link: "/program/go.md" },
      { text: "正则表达式", link: "/program/regular-expression.md" },
    ],
  },
  {
    text: "📈 算法与机器学习",
    collapsed: true,
    items: [
      { text: "十大经典排序算法笔记", link: "/program/sorting-algorithms.md" },
      { text: "爬虫", link: "/program/web-crawler.md" },
      {
        text: "机器学习",
        collapsed: true,
        items: [
          { text: "了解一下", link: "/program/machine-learning/introduction.md" },
          {
            text: "快速入门",
            collapsed: true,
            items: [
              {
                text: "数据分析与可视化工具",
                link: "/program/machine-learning/getting-started/data-analysis.md",
              },
              {
                text: "深度学习",
                link: "/program/machine-learning/getting-started/deep-learning.md",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    text: "🧩 后端开发",
    collapsed: true,
    items: [
      {
        text: "Go 后端",
        collapsed: true,
        items: [
          { text: "Gin 框架", link: "/backend/go/gin.md" },
          { text: "Kratos 微服务", link: "/backend/go/kratos.md" },
          { text: "Go Micro", link: "/backend/go/go-micro.md" },
        ],
      },
      {
        text: "Java 后端",
        collapsed: true,
        items: [
          { text: "Spring", link: "/backend/java/spring/spring.md" },
          { text: "SpringBoot", link: "/backend/java/spring/spring-boot.md" },
          { text: "SpringBoot 数据访问", link: "/backend/java/spring/spring-boot-datasource.md" },
        ],
      },
      { text: "Flask 框架", link: "/backend/python/flask.md" },
    ],
  },
  {
    text: "🎨 前端开发",
    collapsed: true,
    items: [
      { text: "语言代码表", link: "/frontend/language-code.md" },
      { text: "Vite", link: "/frontend/vite.md" },
      { text: "Vue", link: "/frontend/vue.md" },
      {
        text: "React",
        collapsed: true,
        items: [
          { text: "基础入门", link: "/frontend/react/react.md" },
          { text: "React 路由", link: "/frontend/react/react-router.md" },
          { text: "Redux 状态管理", link: "/frontend/react/redux.md" },
        ],
      },
      { text: "ArkTS", link: "/frontend/arkts.md" },
      { text: "渐进式 Web 应用（PWA）", link: "/frontend/pwa.md" },
      { text: "Vitepress", link: "/frontend/vitepress.md" },
    ],
  },
  {
    text: "📦 数据库",
    collapsed: true,
    items: [
      { text: "MySQL", link: "/sql/mysql.md" },
      { text: "Redis", link: "/sql/redis.md" },
      { text: "MongoDB", link: "/sql/mongodb.md" },
      { text: "Neo4j", link: "/sql/neo4j.md" },
    ],
  },
  {
    text: "🚀 部署与运维",
    collapsed: true,
    items: [
      { text: "Linux", link: "/server/linux.md" },
      { text: "Nginx", link: "/server/nginx.md" },
      { text: "Docker", link: "/server/docker.md" },
      { text: "ACME 申请证书", link: "/server/acme.md" },
    ],
  },
  {
    text: "🧰 软件与开发工具",
    collapsed: true,
    items: [
      { text: "Office 文档", link: "/software/office.md" },
      { text: "VS Code 编译器", link: "/software/vscode.md" },
      { text: "IntelliJ IDEA", link: "/software/intellij-idea.md" },
      { text: "微软 KMS 激活", link: "/software/office-kms.md" },
      { text: "Wireshark", link: "/software/wireshark.md" },
      { text: "chsrc 镜像替换工具", link: "/software/chsrc.md" },
    ],
  },
  {
    text: "🖥️ 硬件与外设",
    collapsed: true,
    items: [
      { text: "腹灵F12 68键 RGB", link: "/peripheral/fuling-f12.md" },
      { text: "高漫数位板", link: "/peripheral/gaomon.md" },
      { text: "相机", link: "/peripheral/camera.md" },
    ],
  },
  {
    text: "🧵 设计与创作",
    collapsed: true,
    items: [
      { text: "Blender 建模", link: "/design/blender.md" },
      { text: "绘画", link: "/design/painting.md" },
      { text: "Adobe Illustrator", link: "/design/adobe-illustrator.md" },
    ],
  },
  {
    text: "🎁 兴趣与收藏",
    collapsed: true,
    items: [{ text: "手办", link: "/pastimes/handmade.md" }],
  },
  {
    text: "🔃 版本控制",
    collapsed: true,
    items: [{ text: "Git", link: "/version_control/git.md" }],
  },
];
