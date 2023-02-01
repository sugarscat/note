import { defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '回到目录',
    description: '这是我的笔记。',
    head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
    plugins: [
        backToTopPlugin(),
    ],
})
