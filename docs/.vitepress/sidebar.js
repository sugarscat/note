export default  [
        {
            text: '目录',
            link: '/menu.md'
        },
        {
            text: '编程',
            collapsible: true,
            collapsed: true,
            items: [
                {text: 'MySQL', link: '/program/MySQL.md'},
                {text: 'Java 连接MySQL数据库', link: '/program/MySQL-connector-java.md'},
                {text: 'Linux 命令', link: '/program/Linux-command.md'},
                {text: 'Nginx', link: '/program/Nginx.md'},
                {text: 'Ubuntu 安装开发环境', link: '/program/Ubuntu安装开发环境.md'},
                {text: 'VS Code 基本使用', link: '/program/vs-code.md'},
                {text: 'Vue 官方文档', link: 'https://cn.vuejs.org/guide/introduction.html'},
                {text: '企业级开发', link: '/program/企业级开发.md'},
                {text: 'SpringBoot', link: '/program/SpringBoot.md'},
                {text: '机器学习', link: '/program/MachineLearning.md'},
            ]
        },
        {
            text: '服务器',
            collapsible: true,
            collapsed: true,
            items: [
                {text: 'ACME 申请证书', link: '/server/acme.md'},

            ]
        },
        {
            text: '设计',
            collapsible: true,
            collapsed: true,
            items: [
                {text: 'Blender 建模', link: '/design/Blender.md'},

            ]
        },
        {
            text: '工具',
            collapsible: true,
            collapsed: true,
            items: [
                {text: '腹灵F12 68键 RGB', link: '/tools/F12.md'},

            ]
        },
    ]
