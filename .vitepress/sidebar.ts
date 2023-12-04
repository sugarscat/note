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
    gitIcon
} from './icons.ts'

export default  [
        {
            text: menuIcon + '目录',
            link: '/menu.md'
        },{
            text: pcIcon + '编程',
            collapsible: true,
            collapsed: true,
            items: [
                // {text: docsIcon + '软件设计师', link: '/code/软件设计师.md'},
                {text: machineLearningIcon + '机器学习', link: '/code/MachineLearning.md'},
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
                        {text: springIcon + 'Spring', link: '/backend/Spring.md'},
                        {text: springBootIcon + 'SpringBoot', link: '/backend/SpringBoot.md'},
                        {text: springBootIcon + 'SpringBoot 数据访问', link: '/backend/SpringBoot数据访问.md'},
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
                {text: hmosIcon + 'HarmonyOS', link: '/frontend/HarmonyOS.md'},
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
