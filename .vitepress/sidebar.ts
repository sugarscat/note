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
    earthIcon
} from './icons'

export default  [
        {
            text: menuIcon + '目录',
            link: '/menu.md'
        },{
            text: pcIcon + '编程',
            collapsible: true,
            collapsed: true,
            items: [
                {text: regularExpressionIcon + '正则表达式', link: '/code/RegularExpression.md'},
                {text: starIcon + '软件设计师', link: '/code/SoftwareDesigner.md'},
                {text: machineLearningIcon + '机器学习', link: '/code/MachineLearning.md'},
                {text: spiderIcon + '爬虫', link: '/code/WebCrawling.md'},
                {text: earthIcon + '语言代码表', link: '/code/LanguageCode.md'},
            ]
        },
        {
            text: rearEndIcon + '后端',
            collapsible: true,
            collapsed: true,
            items: [
                {text: docsIcon + '企业级开发', link: '/backend/企业级开发.md'},
                {
                    text: springIcon + 'Spring',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {text: springIcon + 'Spring', link: '/backend/spring/Spring.md'},
                        {text: springBootIcon + 'SpringBoot', link: '/backend/spring/SpringBoot.md'},
                        {
                            text: springBootIcon + 'SpringBoot 数据访问', 
                            link: '/backend/spring/SpringBootDatasource.md'
                        },
                        {text: springBootIcon + '微服务', link: '/backend/spring/Microservices.md'},
                    ]
                }, {

                }
            ]
        },
        {
            text: frontEndIcon + '前端',
            collapsible: true,
            collapsed: true,
            items: [
                {text: vueIcon + 'Vue', link: '/frontend/Vue.md'},
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

            ]
        },{
            text: toolIcon + '工具',
            collapsible: true,
            collapsed: true,
            items: [
                {text: vscodeIcon + 'VS Code 基本使用', link: '/tools/vs-code.md'},
                {text: keyboardIcon + '腹灵F12 68键 RGB', link: '/tools/F12.md'},

            ]
        },
    ]
