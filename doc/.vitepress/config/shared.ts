import { defineConfig } from 'vitepress'

import { search as zhSearch } from './zh'


export const shared = defineConfig({
    title: "rustob.com",

    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,

    markdown: {
        math: true,
        codeTransformers: [
            // We use `[!!code` in demo to prevent transformation, here we revert it back.
            {
                postprocess(code) {
                    return code.replace(/\[\!\!code/g, '[!code')
                }
            }
        ]
    },

    sitemap: {
        hostname: 'http://rustob.com',
        transformItems(items) {
            return items.filter((item) => !item.url.includes('migration'))
        }
    },

    /* prettier-ignore */
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/RustObIcon.svg' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
        ['meta', { name: 'theme-color', content: '#5f67ee' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:locale', content: 'en' }],
        ['meta', { property: 'og:title', content: 'RustOb | 一起' }],
        ['meta', { property: 'og:site_name', content: 'RustOb' }],
        ['meta', { property: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
        ['meta', { property: 'og:url', content: 'http://rustob.com/' }],
        ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
    ],

    themeConfig: {
        logo: { src: '/RustObIcon.svg', width: 24, height: 24 },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/jackhb1999/rustob'}
        ],

        search: {
            provider: 'local',
            options: {
                locales: {
              ...zhSearch,
                }
            }
        }

    }
})