import {
    iconFlask,
    iconFolder,
    iconPit,
    iconPython,
    iconAscii,
    iconDataStructure
} from "./icon";

import {
    menuIcon,
    pcIcon,
    rearEndIcon,
    springIcon,
    deployIcon,
    sqlIcon,
    mySQLIcon,
    frontEndIcon,
    vueIcon,
    toolIcon,
    designIcon,
    nginxIcon,
    blenderIcon,
    powershellIcon,
    linuxIcon,
    docsIcon,
    vscodeIcon,
    keyboardIcon,
    machineLearningIcon,
    hmosIcon,
    springBootIcon,
    dockerIcon,
    versionControlIcon,
    gitIcon,
    spiderIcon,
    regularExpressionIcon,
    starIcon,
    earthIcon, javaIcon
} from './icons'

export default  [
    {
        text: menuIcon + '欢迎',
        link: '/welcome.md'
    },{
        text: iconPit + '踩坑日记',
        collapsible: true,
        collapsed: true,
        items: [
            {text: gitIcon + 'SSH公钥', link: '/pit/git_ssh.md'}
        ]
    },{
        text: pcIcon + '编程',
        collapsible: true,
        collapsed: true,
        items: [
            {text: regularExpressionIcon + '正则表达式', link: '/program/RegularExpression.md'},
            {text: iconAscii + 'ASCII码对照表', link: '/program/ASCII.md'},
            {text: spiderIcon + '爬虫', link: '/program/WebCrawling.md'},
            {text: iconDataStructure + '数据结构', link: '/program/DataStructure.md'},
            {text: starIcon + '软件设计师', link: '/program/SoftwareDesigner.md'},
            {
                text: machineLearningIcon + '机器学习',
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
        text: rearEndIcon + '后端',
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
                text: javaIcon + 'Java',
                collapsible: true,
                collapsed: true,
                items: [
                    {
                        text: springIcon + 'Spring',
                        collapsible: true,
                        collapsed: true,
                        items: [
                            {text: springIcon + 'Spring', link: '/backend/java/spring/Spring.md'},
                            {text: springBootIcon + 'SpringBoot', link: '/backend/java/spring/SpringBoot.md'},
                            {
                                text: springBootIcon + 'SpringBoot 数据访问',
                                link: '/backend/java/spring/SpringBootDatasource.md'
                            },
                            {text: springBootIcon + '微服务', link: '/backend/java/spring/Microservices.md'},
                        ]
                    },
                ]
            },
            {
                text: iconPython + 'Python',
                collapsible: true,
                collapsed: true,
                items: [
                    {text: iconFlask + 'Flask教程', link: '/backend/python/Flask.md'},
                ]
            },
        ]
    },
    {
        text: frontEndIcon + '前端',
        collapsible: true,
        collapsed: true,
        items: [
            {text: earthIcon + '语言代码表', link: '/frontend/LanguageCode.md'},
            {text: vueIcon + 'Vue', link: '/frontend/Vue.md'},
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
            {text: hmosIcon + 'ArkTS', link: '/frontend/ArkTS.md'},
        ]
    },
    {
        text: deployIcon + '部署',
        collapsible: true,
        collapsed: true,
        items: [
            {text: linuxIcon + 'Linux 命令', link: '/server/Linux-command.md'},
            {text: nginxIcon + 'Nginx', link: '/server/Nginx.md'},
            {text: dockerIcon + 'Docker', link: '/server/Docker.md'},
            {text: powershellIcon + 'ACME 申请证书', link: '/server/acme.md'},
        ]
    },{
        text: sqlIcon + '数据库',
        collapsible: true,
        collapsed: true,
        items: [
            {text: mySQLIcon + 'MySQL', link: '/sql/MySQL.md'},

        ]
    },{
        text: versionControlIcon + '版本控制',
        collapsible: true,
        collapsed: true,
        items: [
            {text: gitIcon + 'Git', link: '/version_control/Git.md'},

        ]
    },{
        text: designIcon + '设计',
        collapsible: true,
        collapsed: true,
        items: [
            {text: blenderIcon + 'Blender 建模', link: '/design/Blender.md'},
            {text: '绘画', link: '/design/Painting.md'},
        ]
    },{
        text: toolIcon + '工具',
        collapsible: true,
        collapsed: true,
        items: [
            {text: vscodeIcon + 'VS Code 基本使用', link: '/tools/vs-code.md'},
            {text: keyboardIcon + '腹灵F12 68键 RGB', link: '/tools/F12.md'},
            {text: '高漫数位板', link: '/tools/Gaomon.md'},
        ]
    },
]
