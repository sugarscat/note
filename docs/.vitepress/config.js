import navbar from './navbar'
import sidebar from './sidebar'

export default {
    base: '/book',
    lang: 'zh-CN',
    title: 'Book',
    description: '心灵记忆过往，镜头捕捉瞬间。',
    themeConfig: {
        nav: navbar,
        logo: '/favicon.ico',
        sidebar: sidebar,
        editLink: {
            pattern: 'https://github.com/Sugarscat/book/edit/master/docs/:path',
            text: '在 GitHub 上编辑此页'
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/Sugarscat/book'}
        ],
        // footer: {
        //     message: 'MIT Licensed',
        //     copyright: '<a href="https://beian.miit.gov.cn/" target="_blank"></a>'
        // }
    },
    lastUpdated: true,
}
