import navbar from './nav/navbar'
import sidebar from './nav/sidebar'
export default {
    base: '/',
    lang: 'zh-CN',
    title: 'Note',
    description: '我的笔记。',
    sidebar: sidebar,
    themeConfig: {
        nav: navbar,
        logo: '/favicon.ico',
        sidebar: sidebar,
        editLink: {
            pattern: 'https://github.com/Sugarscat/note/edit/master/docs/:path',
            text: '在 GitHub 上编辑此页'
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/Sugarscat/note'}
        ],
        // footer: {
        //     message: 'MIT Licensed',
        //     copyright: '<a href="https://beian.miit.gov.cn/" target="_blank"></a>'
        // }
    },
    lastUpdated: true
}
