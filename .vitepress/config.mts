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
  sitemap: {
    hostname: 'https://www-new.mcenahle.org.cn'
  },
  lastUpdated: true,
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
      { text: '关于我', link: '/my/' },
      { text: '随笔', link: '/thoughts/' },
      { text: '站点地图', link: '/sitemap.xml' }
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
          { text: '关于我 - 主页', link: '/my/' },
          { text: '我的项目', link: '/my/proj' },
          { text: '我的联系方式', link: '/my/contacts' }
        ]
      },
      {
        text: '政策文件',
        items: [
          { text: '政策文件 - 主页', link: '/policy-files/' },
          { text: '中央八项规定', link: '/policy-files/zybxgd' },
          { text: '中国政府网', link: '/policy-files/www-gov-cn' },
          { text: '工业和信息化部', link: '/policy-files/miit' },
          { text: '公安部', link: '/policy-files/mps' }
        ]
      },
      {
        text: '随笔',
        collapsed: true,
        items: [
          { text: '随笔 - 主页', link: '/thoughts/' },
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
    ],

footer: {
      message: '备案信息：<a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备2025116360号-1</a> | <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31015102000182" target="_blank">沪公网安备31015102000182号</a>',
      copyright: '© 2025 www.mcenahle.org.cn。保留所有版权。'
    }
  }
})
