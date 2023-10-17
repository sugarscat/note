import navbar from './navbar'
import sidebar from './sidebar'

export default {
    base: '/note',
    lang: 'zh-CN',
    title: 'Note',
    description: '心灵记忆过往，镜头捕捉瞬间。',
    themeConfig: {
        nav: navbar,
        logo: '/favicon.ico',
        sidebar: sidebar,
        socialLinks: [
            {icon: 'github', link: 'https://github.com/Sugarscat/note'}
        ],
        // footer: {
        //     message: 'MIT Licensed',
        //     copyright: '<a href="https://beian.miit.gov.cn/" target="_blank"></a>'
        // }
    },
    lastUpdated: true,
}
