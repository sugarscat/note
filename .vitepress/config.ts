import { defineConfig } from 'vitepress'
import navbar from './navbar'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  lang: 'zh-cn',
  title: 'Note',
  
  head: [
    [
      'link',
      { rel: 'icon', href: '/favicon.ico' }
    ],
  ],
  description: '心灵记忆过往，镜头捕捉瞬间。',
  lastUpdated: true,
  themeConfig: {
      search: {
        provider: 'local'
      },
      outline: {
        // 右侧导航目录显示层级
        level: 'deep',
        // 右侧导航目录显示文字
        label: '导航栏'
    },
    nav: navbar,
    logo: '/favicon.ico',
    sidebar: sidebar,
    socialLinks: [
        {icon: 'github', link: 'https://github.com/Sugarscat/note'}
    ],
    lastUpdatedText: '最后更新',
    docFooter: {
    prev: '上一页',
    next: '下一页'
    },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '切换主题',
    // footer: {
    //     message: 'MIT Licensed',
    //     copyright: '<a href="https://beian.miit.gov.cn/" target="_blank"></a>'
    // }
  }
})
