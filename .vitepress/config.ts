import { defineConfig } from 'vitepress'
import mdItCustomAttrs from 'markdown-it-custom-attrs'
import markdownItKatex from 'markdown-it-katex'
import navbar from './navbar'
import sidebar from './sidebar'
import algolia from "./algolia";

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
    base: '/',
    lang: "zh-CN",
    title: 'Note',
    description: '心灵记忆过往，镜头捕捉瞬间。',
    head: [
        [
            'link', { rel: 'icon', href: '/favicon.ico' }
        ],
        [
            "link", { rel: "stylesheet", href: "/assets/css/style.css" },
        ],
        [
            "link", { rel: "stylesheet", href: "/assets/libs/fancybox/fancybox.css" },
        ],
        [
            "link", { rel: "stylesheet", href: "/assets/libs/katex/katex.min.css" },
        ],
        [
            "script", { src: "/assets/js/fancybox.umd.js" }
        ],
    ],

    vite: {
        // Vite 配置选项
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler'
                }
            }
        },
    },

    lastUpdated: true,
    cleanUrls: true,
    markdown: {
        config: (md) => {
            // use more markdown-it plugins!
            md.use(mdItCustomAttrs, 'image', {
                'data-fancybox': "gallery"
            })
            md.use(markdownItKatex)
        }
    },
    themeConfig: {
        logo: '/favicon.ico',
        nav: navbar,
        sidebar: sidebar,
        outline: {
            // 右侧导航目录显示层级
            level: 'deep',
            // 右侧导航目录显示文字
            label: '页面导航'
        },

        // algolia搜索
        search: {
            provider: 'algolia',
            options: algolia,
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/sugarscat/note' }
        ],

        lastUpdated: {
            text: '最后更新于',
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        darkModeSwitchLabel: '切换主题',
    },
})
