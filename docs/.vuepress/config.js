import { defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { defaultTheme } from 'vuepress'
export default defineUserConfig({
    base: '/note/',
    publicPath: '/note/',
    lang: 'zh-CN',
    title: 'Note',
    description: '这是我的笔记。',
    head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
    port: 3001,
    plugins: [
        backToTopPlugin(),
    ],
    markdown: {
        headers: {
            level: [2, 3, 4, 5],
        },
    },
    theme: defaultTheme({
        // 导航栏
        navbar: [
            {
                text: '目录',
                link: '/',
            },
            {
                text: '仓库',
                children: [
                    {
                        text: 'Gitee',
                        link: 'https://gitee.com/Sugarscat/note',
                    },
                    {
                        text: 'Github',
                        link: 'https://github.com/Sugarscat/note',
                    },
                ],
            },
        ],
    }),
})
