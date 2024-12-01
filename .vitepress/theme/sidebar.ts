export default  [
    {
        text: '欢迎',
        link: '/welcome.md'
    },
    {
        text: '踩坑日记',
        collapsible: true,
        collapsed: true,
        items: [
            {text: 'SSH公钥', link: '/pit/git_ssh.md'}
        ]
    },
    {
        text: '语言',
        collapsible: true,
        collapsed: true,
        items: [
            {text: '英语', link: '/language/English.md'},
            {text: '日语', link: '/language/Japanese.md'},
        ]
    },
    {
        text: '编程',
        collapsible: true,
        collapsed: true,
        items: [
            {text: '正则表达式', link: '/program/RegularExpression.md'},
            {text: 'ASCII码对照表', link: '/program/ASCII.md'},
            {text: '爬虫', link: '/program/WebCrawling.md'},
            {text: '数据结构', link: '/program/DataStructure.md'},
            {text: '软件设计师', link: '/program/SoftwareDesigner.md'},
            {
                text: '机器学习',
                collapsible: true,
                collapsed: true,
                items: [
                    {text: '了解一下', link: '/program/MachineLearning/Introduction.md'},
                    {
                        text: '快速入门',
                        collapsible: true,
                        collapsed: true,
                        items: [
                            {
                                text: '数据分析与可视化工具',
                                link: '/program/MachineLearning/GettingStarted/DataAnalysis.md'
                            },
                            {
                                text: '深度学习',
                                link: '/program/MachineLearning/GettingStarted/DeepLearning.md'
                            },
                        ]
                    }
                ]
            },
            {text:'C#教程', link: '/program/CSharp.md'},

        ]
    },
    {
        text: '后端',
        collapsible: true,
        collapsed: true,
        items: [
            {
                text: 'Go 语言',
                collapsible: true,
                collapsed: true,
                items: [
                    {text: 'Go 快速入门', link: '/backend/go/Go.md'},
                ]
            },
            {
                text: 'Java',
                collapsible: true,
                collapsed: true,
                items: [
                    {
                        text: 'Spring',
                        collapsible: true,
                        collapsed: true,
                        items: [
                            {text: 'Spring', link: '/backend/java/spring/Spring.md'},
                            {text: 'SpringBoot', link: '/backend/java/spring/SpringBoot.md'},
                            {
                                text: 'SpringBoot 数据访问',
                                link: '/backend/java/spring/SpringBootDatasource.md'
                            },
                            {text: '微服务', link: '/backend/java/spring/Microservices.md'},
                        ]
                    },
                ]
            },
            {
                text: 'Python',
                collapsible: true,
                collapsed: true,
                items: [
                    {text: 'Flask教程', link: '/backend/python/Flask.md'},
                ]
            },
        ]
    },
    {
        text: '前端',
        collapsible: true,
        collapsed: true,
        items: [
            {text: '语言代码表', link: '/frontend/LanguageCode.md'},
            {text: 'Vue', link: '/frontend/Vue.md'},
            {
                text: 'React',
                collapsible: true,
                collapsed: true,
                items: [
                    {text: "基础入门", link: '/frontend/React/React.md'},
                    {text: "React 路由", link: '/frontend/React/ReactRouter.md'},
                    {text: "Redux 状态管理", link: '/frontend/React/Redux.md'},
                ]
            },
            {text: 'ArkTS', link: '/frontend/ArkTS.md'},
        ]
    },
    {
        text: '部署',
        collapsible: true,
        collapsed: true,
        items: [
            {text: 'Linux 命令', link: '/server/Linux-command.md'},
            {text: 'Nginx', link: '/server/Nginx.md'},
            {text: 'Docker', link: '/server/Docker.md'},
            {text: 'ACME 申请证书', link: '/server/acme.md'},
        ]
    },
    {
        text: '数据库',
        collapsible: true,
        collapsed: true,
        items: [
            {text: 'MySQL', link: '/sql/MySQL.md'},

        ]
    },
    {
        text: '版本控制',
        collapsible: true,
        collapsed: true,
        items: [
            {text: 'Git', link: '/version_control/Git.md'},

        ]
    },
    {
        text: '设计',
        collapsible: true,
        collapsed: true,
        items: [
            {text: 'Blender 建模', link: '/design/Blender.md'},
            {text: '绘画', link: '/design/Painting.md'},
        ]
    },
    {
        text: '工具',
        collapsible: true,
        collapsed: true,
        items: [
            {text: 'VS Code 基本使用', link: '/tools/vs-code.md'},
            {text: '腹灵F12 68键 RGB', link: '/tools/F12.md'},
            {text: '高漫数位板', link: '/tools/Gaomon.md'},
        ]
    },
    {
        text: '其他',
        collapsible: true,
        collapsed: true,
        items: [
            {text: '手办拼接', link: '/other/handmade.md'},
        ]
    },
]
