import { defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import Theme from './theme.config';

export default defineUserConfig({
    base: '/note/',
    publicPath: '/note/',
    lang: 'zh-CN',
    title: 'Note',
    description: '这是我的笔记。',
    // theme: Theme,
    head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
    plugins: [
        backToTopPlugin(),
    ],
    markdown: {
        headers: {
            level: [2, 3, 4, 5],
        },
    },
})
