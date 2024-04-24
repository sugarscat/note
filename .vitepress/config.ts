import { defineConfig } from 'vitepress'
import navbar from './navbar'
import sidebar from './sidebar'
import algolia from "./algolia";
import mdItCustomAttrs  from 'markdown-it-custom-attrs'
import markdownItKatex from 'markdown-it-katex'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'Note',

  head: [
    [
      'link',
      { rel: 'icon', href: '/favicon.ico' }
    ],
    [
      "link",
      { rel: "stylesheet", href: "/assets/css/fancybox.css" },
    ],
    [
      "link",
      { rel: "stylesheet", href: "/assets/css/katex.min.css" },
    ],
    [
      "script",
      { src: "/assets/js/fancybox.umd.js" }
    ],
  ],
  description: '心灵记忆过往，镜头捕捉瞬间。',
  lastUpdated: true,

  markdown:{
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': "gallery"
      })
      md.use(markdownItKatex)
    }
  },

  themeConfig: {
    logo: '/favicon.ico',
    nav: navbar,
    sidebar: sidebar,
    outline: {
      // 右侧导航目录显示层级
      level: 'deep',
      // 右侧导航目录显示文字
      label: '导航栏'
    },

    // algolia搜索
    search: {
      provider: 'algolia',
      options: algolia,
    },

    socialLinks: [
      {icon: 'github', link: 'https://github.com/Sugarscat/note'}
    ],

    lastUpdated: {
      text: '最后更新',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '切换主题',
  }
})
