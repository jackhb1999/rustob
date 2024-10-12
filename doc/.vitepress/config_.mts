import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "rustob.com",
    description: "rust教程",
    themeConfig: {
        logo: {
            src: '/doc/.vitepress/pubilc/RustObIcon.svg'
        },

        // https://vitepress.dev/reference/default-theme-config
        nav: [ // 导航栏
            {text: '主页', link: '/'},
            {text: '反复入门', link: '/introduction/'},
            {text: '无畏并发', link: '/fearlessConcurrency'},
            {text: '资源分享', link: '/share'},
        ],

        sidebar: {// 侧边栏
            '/introduction/': [
                {
                    text:
                        '反复入门',
                    items:
                        [{text: '引言', link: '/introduction/'},
                            {text: '第一章', link: '/introduction/i001'}
                        ]
                }
            ]
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/jackhb1999/rustob'}
        ],

        footer:
            {
                message: '<a href="http://beian.miit.gov.cn/">豫ICP备2023037710号-2</a>.',
                copyright:
                    'Copyright © 2024-present Jack'
            },
        search: {
            provider: 'local',
            options: {
                locales: {
                    zh: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    }
                }
            }
        }

    },
    locales: {
        root: {
            label: '简体中文',
            lang:
                'zh'
        }
        ,
        en: {
            label: 'English',
            lang:
                'en', // 可选，将作为 `lang` 属性添加到 `html` 标签中
        }
        ,

    }
})


