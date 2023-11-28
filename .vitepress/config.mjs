import { defineConfig } from 'vitepress'
import navbar from './navbar'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Note",
  description: "心灵记忆过往，镜头捕捉瞬间。",
  themeConfig: {
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
    outlineTitle: '这一页',
    // footer: {
    //     message: 'MIT Licensed',
    //     copyright: '<a href="https://beian.miit.gov.cn/" target="_blank"></a>'
    // }
  },
  cleanUrls: 'without-subfolders',
})
