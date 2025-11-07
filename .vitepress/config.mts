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
  // sitemap: {
  //   hostname: 'https://www.mcenahle.org.cn'
  // },
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    outline: {
      level: [1, 4],    // 显示 h1 到 h4 级别的标题
    },
    externalLinkIcon: true,
    logo: '/favicon.ico',
    head: [
      [['link', { rel: 'icon', href: '/favicon.ico' }]]
    ],
    nav: [
      { text: '主页', link: '/' },
      { text: '关于我', link: '/my/' },
      { text: '政策文件', link: '/policy-files/' },
      { text: '随笔', link: '/thoughts/' },
      // { text: '站点地图', link: '/sitemap.xml' },
      // { text: '护理学', link: '/nursing/' },
      {
        text: '工具',
        items: [
          { text: '随机数生成器 - 由 random.org 提供框架', link: 'https://www.mcenahle.org.cn/random-number-generator.html' }
        ]
      },
      {
        text: '外站链接',
        items: [
          { text: '博客网站', link: 'https://blog.mcenahle.org.cn' },
          { text: '护理学笔记网站', link: 'https://nursing.mcenahle.org.cn' },
          { text: '大学证书进度网站', link: 'https://cert.mcenahle.org.cn' },
          { text: '开发测试网站', link: 'https://dev.mcenahle.org.cn' },
          { text: '查询类网站', link: 'https://query.mcenahle.org.cn' },
          { text: '视频剪辑展示网站', link: 'https://video.mcenahle.org.cn' },
          { text: '文档网站', link: 'https://docs.mcenahle.org.cn' },
          { text: 'api 服务网站', link: 'https://api.mcenahle.org.cn' },
          { text: '电子邮件网站', link: 'https://mail.mcenahle.org.cn' },
          { text: '状态监控网站', link: 'https://status.mcenahle.org.cn' }
        ]
      },
      {
        text: '友情链接',
        items: [
          { text: '上海市交通大学医学院附属第九人民医院', link: 'https://www.9hospital.com.cn' },
          { text: '上海市交通大学医学院', link: 'https://www.shsmu.edu.cn/' },
          { text: '上海市复旦大学附属华山医院', link: 'https://www.huashan.org.cn' }
        ]
      }
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

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    sidebar: {
      '/my/': [
        {
          text: '关于我',
          items: [
            { text: '关于我 - 主页', link: '/my/' },
            { text: '我的项目', link: '/my/proj' },
            { text: '我的联系方式', link: '/my/contacts' }
          ]
        }
      ],
      '/policy-files/': [
        {
          text: '政策文件',
          items: [
            { text: '政策文件 - 主页', link: '/policy-files/' },
            { text: '中央八项规定', link: '/policy-files/zybxgd' },
            { text: '中国政府网', link: '/policy-files/www-gov-cn' },
            { text: '卫生健康委员会', link: '/policy-files/nhc' },
            { text: '工业和信息化部', link: '/policy-files/miit' },
            { text: '公安部', link: '/policy-files/mps' },
            { text: '2025年上海市专升本文件', link: '/policy-files/2025-zsb' }
          ]
        }
      ],
      '/life-docs/': [
        {
          text: '生活文档',
          items: [
            { text: '生活文档 - 主页', link: '/life-docs/' },
            { text: '研究生招生考试', link: '/life-docs/yz' },
            { text: '前往医院时间表', link: '/life-docs/hospital-travel' },
            { text: '学校课程日期表', link: '/life-docs/school-lessons' },
            { text: '学校课程分组成员表', link: '/life-docs/school-groups' },
            { text: '学校分数表', link: '/life-docs/school-scores' },
            { text: '2025年9月（第76次）全国计算机等级考试（NCRE）成绩、证书查询通知', link: '/life-docs/2025-9-ncre-score-query' }
          ]
        }
      ],
      '/thoughts/': [
        {
          text: '随笔',
          // collapsed: true,
          items: [
            { text: '随笔 - 主页', link: '/thoughts/' },
            { text: '性格与行为', link: '/thoughts/personality-and-behavior' },
            { text: '一次咽喉镜检查的经历', link: '/thoughts/a-throat-exam-experience' },
            { text: '从四叶草到再思 SHSMU', link: '/thoughts/from-neae-to-shsmu' },
            { text: '旅途的中点', link: '/thoughts/the-middle-of-the-journey' },
            { text: '无题', link: '/thoughts/no-title' },
            { text: '从寻找天堂到影子工厂：世界迭代', link: '/thoughts/from-finding-paradise-to-impostor-factory' },
            { text: '一名牙科实习医生', link: '/thoughts/a-dental-intern' }
          ]
        }
      ],
      '/nursing/': [
        {
          text: '护理学',
          items: [
            { text: '护理学 - 主页', link: '/nursing/' },
            {
              text: '基础护理学',
              items: [
                { text: '基础护理学 - 介绍', link: '/nursing/basic' },
                { text: '第二章 - 环境', link: '/nursing/basic-2' },
                { text: '第三章 - 院感预防', link: '/nursing/basic-3' },
                // ...可以继续嵌套
              ]
            }
          ]
        }
      ],

      '/examples/': [
        {
          text: '示例',
          items: [
            { text: 'Markdown 示例', link: '/examples/markdown-examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mcenahle' }
    ],

    footer: {
      message: '备案信息：<a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备2025116360号-1</a> | <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31015102000182" target="_blank">沪公网安备31015102000182号</a><br>SSL 证书状态：<a href="https://zssl.com/zh/ssl-cert-verify?domain=www.mcenahle.org.cn" target="_blank"><img src="https://zssl.com/api/badge/ssl-cert/www.mcenahle.org.cn?style=minimal&leftDisplay=ca&lang=zh" alt="SSL 证书状态" style="display:inline;vertical-align:middle;" /></a>',
      copyright: '© 2025 www.mcenahle.org.cn。保留所有权利。'
    }
  }
})
