import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "www.mcenahle.org.cn",
  description: "用 Vitepress 搭建的新版主页",
  srcDir: 'pages',
  outDir: 'dist',
  ignoreDeadLinks: true,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      level: [1, 3],    // 显示 h1 到 h3 级别的标题
    },
    externalLinkIcon: true,
    logo: '/favicon.ico',
    head: [
      [['link', { rel: 'icon', href: '/favicon.ico' }]]
    ],
    nav: [
      { text: '主页', link: '/' },
      { text: '关于我', link: '/my/' }
    ],

    editLink: {
      pattern: 'https://github.com/mcenahle/www-mcenahle-org-cn-new/edit/main/pages/:path',
      text: '在 GitHub 上编辑此页'
    },
    
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    darkModeSwitchLabel: "外观",
    darkModeSwitchTitle: "切换到深色模式",
    lightModeSwitchTitle: "切换到浅色模式",
    sidebarMenuLabel: "目录",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "最后更新",
    outlineTitle: "页面导航",

    sidebar: [
      {
        text: '关于我',
        items: [
          { text: '关于我 - 首页', link: '/my/' },
          { text: '我的项目', link: '/my/proj' },
          { text: '我的联系方式', link: '/my/contacts' }
        ]
      },
      {
        text: '随笔',
        collapsed: false,
        items: [
          { text: '性格与行为', link: '/thoughts/personality-and-behavior/' }
        ]
      },
      {
        text: '示例',
        items: [
          { text: 'Markdown 示例', link: '/examples/markdown-examples' },
          { text: 'Runtime API 示例', link: '/examples/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mcenahle' }
    ]
  }
})
