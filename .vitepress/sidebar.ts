export default [
  // {
  //     text: "🏡 欢迎",
  //     link: "/welcome.md",
  // },
  {
    text: "🌏️ 语言",
    collapsible: true,
    collapsed: true,
    items: [
      { text: "英语", link: "/language/english.md" },
      { text: "日语", link: "/language/japanese.md" },
    ],
  },
  {
    text: "💻️ 计算机基础",
    collapsible: true,
    collapsed: true,
    items: [{ text: "数据结构", link: "/program/408/data-structure.md" },]
  },
  {
    text: "⌨️ 编程",
    collapsible: true,
    collapsed: true,
    items: [
      { text: "正则表达式", link: "/program/regular-expression.md" },
      { text: "ASCII 码对照表", link: "/program/ascii.md" },
      { text: "十大经典排序算法笔记", link: "/program/sorting-algorithms.md" },
      { text: "C 笔记", link: "/program/c.md" },
      { text: "C++ 笔记", link: "/program/c++.md" },
      { text: "C# 笔记", link: "/program/csharp.md" },
      { text: "Go 笔记", link: "/program/go.md" },
      {
        text: "机器学习",
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: "了解一下",
            link: "/program/machine-learning/introduction.md",
          },
          {
            text: "快速入门",
            collapsible: true,
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
      { text: "爬虫", link: "/program/web-crawler.md" },
    ],
  },
  {
    text: "🪐 后端",
    collapsible: true,
    collapsed: true,
    items: [
      { text: "Gin 框架", link: "/backend/go/gin.md" },
      { text: "Kratos 微服务", link: "/backend/go/kratos.md" },
      { text: "Go Micro", link: "/backend/go/go-micro.md" },
      {
        text: "Spring",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "Spring", link: "/backend/java/spring/spring.md" },
          {
            text: "SpringBoot",
            link: "/backend/java/spring/spring-boot.md",
          },
          {
            text: "SpringBoot 数据访问",
            link: "/backend/java/spring/spring-boot-datasource.md",
          },
        ],
      },
      { text: "Flask 笔记", link: "/backend/python/flask.md" }
    ],
  },
  {
    text: "📱 前端",
    collapsible: true,
    collapsed: true,
    items: [
      { text: "语言代码表", link: "/frontend/language-code.md" },
      { text: "Vite", link: "/frontend/vite.md" },
      { text: "Vue", link: "/frontend/vue.md" },
      {
        text: "React",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "基础入门", link: "/frontend/react/react.md" },
          { text: "React 路由", link: "/frontend/react/react-router.md" },
          { text: "Redux 状态管理", link: "/frontend/react/redux.md" },
        ],
      },
      { text: "ArkTS", link: "/frontend/arkts.md" },
      { text: "渐进式 Web 应用（PWA）", link: "/frontend/pwa.md" },
    ],
  },
  {
    text: "🫧 部署",
    collapsible: true,
    collapsed: true,
    items: [
      { text: "软件源更换", link: "/server/software-source.md" },
      { text: "Linux 命令", link: "/server/linux-command.md" },
      { text: "Nginx", link: "/server/nginx.md" },
      { text: "Docker", link: "/server/docker.md" },
      { text: "ACME 申请证书", link: "/server/acme.md" },
    ],
  },
  {
    text: "💾 数据库",
    collapsible: true,
    collapsed: true,
    items: [
      { text: "MySQL", link: "/sql/mysql.md" },
      { text: "Redis", link: "/sql/redis.md" },
      { text: "MongoDB", link: "/sql/mongodb.md" },
      { text: "Neo4j", link: "/sql/neo4j.md" },
    ],
  },
  {
    text: "📦️ 版本控制",
    collapsible: true,
    collapsed: true,
    items: [{ text: "Git", link: "/version_control/git.md" }],
  },
  {
    text: "🖌️ 设计",
    collapsible: true,
    collapsed: true,
    items: [
      { text: "Blender 建模", link: "/design/blender.md" },
      { text: "绘画", link: "/design/painting.md" },
      { text: "Adobe Illustrator", link: "/design/adobe-illustrator.md" },
    ],
  },
  {
    text: "🛠️ 工具",
    collapsible: true,
    collapsed: true,
    items: [
      { text: "VS Code 基本使用", link: "/tools/vs-code.md" },
      { text: "Wireshark 笔记", link: "/program/wireshark.md" },
      { text: "⌨️ 腹灵F12 68键 RGB", link: "/tools/fuling-f12.md" },
      { text: "高漫数位板", link: "/tools/gaomon.md" },
      { text: "📷️ 相机", link: "/tools/camera.md" },
    ],
  },
  {
    text: "🧺 其他",
    collapsible: true,
    collapsed: true,
    items: [{ text: "手办拼接", link: "/other/handmade.md" }],
  },
];
