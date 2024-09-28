import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "rustob",
  description: "rust教程",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [ // 导航栏
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '反复入门', link: '/introduction' },
    ],

    sidebar: [ // 侧边栏
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // },
      {
        text: '反复入门',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
   
      footer: {
        message: '<a href="http://beian.miit.gov.cn/">豫ICP备2023037710号-2</a>.',
        copyright: 'Copyright © 2024-present Jack'
      }
    
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh'
    },
    en: {
      label: 'English',
      lang: 'en', // 可选，将作为 `lang` 属性添加到 `html` 标签中
    },
  
  }
})


