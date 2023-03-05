import { defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    base: '/note/',
    publicPath: '/note/',
    lang: 'zh-CN',
    title: 'Note',
    description: '这是我的笔记。',
    head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
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
    plugins: [
        backToTopPlugin(),

        /*searchPlugin({
            // 配置项
            locales: {
                '/': {
                    placeholder: '搜索',
                },
            },
            maxSuggestions: 5,
            // 排除首页
            isSearchable: (page) => page.path !== '/',
            // 允许搜索 Frontmatter 中的 `tags`
            getExtraFields: (page) => page.frontmatter.tags ?? [],
        }),*/
    ],
})
