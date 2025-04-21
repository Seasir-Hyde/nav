import { h, watch, defineComponent } from 'vue'
import { useData, EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import { createMediumZoomProvider } from './composables/useMediumZoom'

import MLayout from './components/MLayout.vue'
import MNavLinks from './components/MNavLinks.vue'

import './styles/index.scss'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' // 引入 Element Plus 的 CSS 样式
import './styles/nav.scss' //导航栏毛玻璃
import confetti from './components/confetti.vue' // 导入五彩纸屑组件
import googleAnalytics from 'vitepress-plugin-google-analytics' // 引入 Google Analytics 插件
import { inBrowser } from 'vitepress' // 引入 inBrowser 函数
import busuanzi from 'busuanzi.pure.js' // 引入 不蒜子 插件
import bsz from './components/bsz.vue'

let homePageStyle: HTMLStyleElement | undefined

export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(MLayout, null, {
      'layout-bottom': () => h(bsz), // 不蒜子
    })
  },
  enhanceApp({ app, router }: EnhanceAppContext) {
    app.use(ElementPlus) // 在 VitePress 中注册 Element Plus
    createMediumZoomProvider(app, router)

    app.provide('DEV', process.env.NODE_ENV === 'development')

    app.component('MNavLinks', MNavLinks)
    app.component('confetti', confetti) // 注册五彩纸屑组件
    app.component('bsz', bsz) // 注册不蒜子组件

    // 配置 Google Analytics
    googleAnalytics({
      id: 'G-H2HK157X4E', // 跟踪ID，在analytics.google.com注册即可
    })

    // 添加不蒜子访问统计
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }

    if (typeof window !== 'undefined') {
      watch(
        () => router.route.data.relativePath,
        () =>
          updateHomePageStyle(
            /* /vitepress-nav-template/ 是为了兼容 GitHub Pages */
            location.pathname === '/' || location.pathname === '/vitepress-nav-template/',
          ),
        { immediate: true },
      )
    }
  },
}

if (typeof window !== 'undefined') {
  // detect browser, add to class for conditional styling
  const browser = navigator.userAgent.toLowerCase()
  if (browser.includes('chrome')) {
    document.documentElement.classList.add('browser-chrome')
  } else if (browser.includes('firefox')) {
    document.documentElement.classList.add('browser-firefox')
  } else if (browser.includes('safari')) {
    document.documentElement.classList.add('browser-safari')
  }
}

// Speed up the rainbow animation on home page
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  } else {
    if (!homePageStyle) return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}
