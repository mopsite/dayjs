import { defineConfig } from 'vitepress'

// https://skewb.gitee.io/vitepress/reference/site-config
export default defineConfig({
  base: '/dayjs/',
  title: 'Day.js',
  description: 'Moment.js 的轻量化方案，拥有同样强大的 API',
  head: [['link', { rel: 'icon', href: '/dayjs/logo.svg' }]],
  ignoreDeadLinks: true,
  lastUpdated: true,
  themeConfig: {
    // https://skewb.gitee.io/vitepress/reference/default-theme-config
    logo: '/logo.svg',
    lastUpdated: {
      text: '上次更新'
    },
    outlineTitle: '本页目录',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                displayDetails: '显示详细列表',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    nav: nav(),
    sidebar: {
      '/start/': siderbarStart(),
      '/api/': siderbarAPI(),
      '/i18n/': siderbarI18n(),
      '/plugin/': siderbarPlugin()
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/iamkun/dayjs' }],
    footer: {
      copyright:
        'Copyright © 2023 <a href="https://github.com/iamkun/dayjs" target="_blank" rel="noreferrer">Day.js</a>'
    }
  }
})

function nav() {
  return [
    { text: '开始', link: '/start/', activeMatch: '/start/' },
    { text: 'API', link: '/api/parse', activeMatch: '/api/' },
    { text: '国际化', link: '/i18n/', activeMatch: '/i18n/' },
    { text: '插件', link: '/plugin/', activeMatch: '/plugin/' }
  ]
}

function siderbarStart() {
  return [
    {
      text: '开始',
      items: [
        { text: '安装', link: '/start/' },
        { text: '下载', link: '/start/download' }
      ]
    }
  ]
}

function siderbarAPI() {
  return [
    {
      text: 'API',
      items: [
        { text: '解析', link: '/api/parse' },
        { text: '取值/赋值', link: '/api/get-set' },
        { text: '操作', link: '/api/manipulate' },
        { text: '显示', link: '/api/display' },
        { text: '查询', link: '/api/query' }
      ]
    }
  ]
}

function siderbarI18n() {
  return [
    {
      text: '国际化',
      items: [
        { text: '加载语言配置', link: '/i18n/' },
        { text: '改变语言配置', link: '/i18n/changing' }
      ]
    }
  ]
}

function siderbarPlugin() {
  return [
    {
      text: '其他',
      items: [
        { text: '插件', link: '/plugin/' },
        { text: '自定义', link: '/plugin/customization' },
        { text: '时长', link: '/plugin/durations' },
        { text: '时区', link: '/plugin/timezone' }
      ]
    }
  ]
}
