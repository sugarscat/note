import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons";
import { withMermaid } from "vitepress-plugin-mermaid";
import algolia from "./algolia";
import sidebar from "./sidebar";

const GIT_URL = "https://github.com/sugarscat/note";

// https://vitepress.dev/zh/reference/site-config
export default withMermaid({
  base: "/",
  lang: "zh-CN",
  title: "Note",
  description: "心灵记忆过往，镜头捕捉瞬间。",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],

  vite: {
    // Vite 配置选项
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          javascript: "vscode-icons:file-type-js",
          markdown: "vscode-icons:file-type-markdown",
          python: "vscode-icons:file-type-python",
          java: "vscode-icons:file-type-java",
          c: "vscode-icons:file-type-c",
          "c++": "vscode-icons:file-type-cpp",
          go: "vscode-icons:file-type-go",
        },
      }),
    ],
    build: {
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (id.includes("vue")) {
                return "vue"; // react 相关的单独打包
              }
              if (id.includes("vitepress")) {
                return "vitepress";
              }
              return "vendor"; // 其他第三方库打包到 vendor
            }
          },
        },
      },
    },
  },

  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(groupIconMdPlugin);
    },
    math: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
  },

  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    class: "mermaid", // set additional css classes for parent container
  },
  themeConfig: {
    logo: "/favicon.ico",
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "阅读",
        link: "/welcome.md",
      },
    ],
    sidebar: sidebar,
    outline: {
      // 右侧导航目录显示层级
      level: "deep",
      // 右侧导航目录显示文字
      label: "页面导航",
    },

    // algolia搜索
    search: {
      provider: "algolia",
      options: algolia,
    },

    socialLinks: [{ icon: "github", link: GIT_URL }],

    editLink: {
      pattern: GIT_URL + "/edit/main/:path",
      text: "在 GitHub 上编辑此页面",
    },

    lastUpdated: {
      text: "最后更新于",
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    darkModeSwitchLabel: "切换主题",
  },
});
