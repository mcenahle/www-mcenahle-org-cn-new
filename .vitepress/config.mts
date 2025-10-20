import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "www.mcenahle.org.cn",
  description: "用Vitepress搭建的新版主页",
  srcDir: 'pages',
  outDir: 'dist',
  ignoreDeadLinks: true,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      level: [1, 3],    // 显示 h1 到 h3 级别的标题
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '关于我', link: '/me/' }
    ],

    editLink: {
      pattern: 'https://github.com/mcenahle/www-mcenahle-org-cn-new/edit/main/pages/:path',
      text: '在 GitHub 上编辑此页'
    },

    sidebar: [
      {
        text: '关于我',
        collapsed: true,
        items: [
          { text: '关于我 - 首页', link: '/me/' },
          { text: '我的联系方式', link: '/me/contacts' },
          { text: '我的项目', link: '/me/proj' }
        ]
      },
      {
        text: 'Advanced',
        collapsed: true,
        items: [
          { text: 'Custom Theme', link: '/advanced/custom-theme' },
          { text: 'Markdown Extensions', link: '/advanced/markdown-extensions' },
          { text: 'Code Highlighting', link: '/advanced/code-highlighting' }
        ]
      },
      {
        text: 'Deployment',
        collapsed: true,
        items: [
          { text: 'Build for Production', link: '/quick-start/quick-start#build-for-production' },
          { text: 'GitHub Pages', link: '/quick-start/quick-start#deploy-to-github-pages' },
          { text: 'Netlify', link: '/quick-start/quick-start#netlify-deployment' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/examples/markdown-examples' },
          { text: 'Runtime API Examples', link: '/examples/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mcenahle' }
    ]
  }
})
