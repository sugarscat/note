import { defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { defaultTheme } from 'vuepress'
export default defineUserConfig({
    base: '/',
    publicPath: '/',
    lang: 'zh-CN',
    title: 'Note',
    description: '这是我的笔记。',
    head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
    plugins: [
        backToTopPlugin(),
    ],
    markdown: {
        headers: {
            level: [2, 3, 4, 5, 6],
        },
    },
    theme: defaultTheme({
        // 导航栏
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '笔记',
                link: '/notes',
            },
            {
                text: '文档',
                link: '/documents',
            },
            {
                text: '仓库',
                children: [
                    {
                        text: 'Github',
                        link: 'https://github.com/Sugarscat/note',
                    },
                    {
                        text: 'Gitee',
                        link: 'https://gitee.com/Sugarscat/note',
                    },
                ],
            },
        ],
    }),
})
