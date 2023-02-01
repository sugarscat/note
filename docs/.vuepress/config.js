import { defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Note',
    description: '这是我的笔记。',
    head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
    plugins: [
        backToTopPlugin(),
    ],
    publicPath: '/note/',
    base: '/note/',
})
