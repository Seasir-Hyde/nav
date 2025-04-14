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
  // oh-my-live2d 配置
  async setup() {
    if (typeof window !== 'undefined') {
      const { loadOml2d } = await import('oh-my-live2d')
      loadOml2d({
        models: [
          {
            path: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/HK416-1/normal/model.json',
            position: [0, 60],
            scale: 0.06, //控制模型缩放比例
            stageStyle: {
              height: 350,
            },
          },
          {
            name: 'shizuku',
            path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/shizuku/shizuku.model.json',
          },
          {
            name: 'senko',
            path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json',
          },
          {
            name: 'pio',
            path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Pio/model.json',
          },
        ],
        dockedPosition: 'left', // 停靠位置，left/right/
        initialStatus: 'active', // 用于控制组件在浏览器中以当前地址首次访问时的初始状态是否处于睡眠状态或活动状态,
        primaryColor: '#5da8ff', // 主色调
        sayHello: false, // 是否在初始化阶段打印项目信息
        transitionTime: 5000, // 组件入场和离开的过渡动画时长,单位 ms
        // 菜单项
        menus: {
          items: [
            {
              id: 'Rest',
              icon: 'icon-rest',
              title: '休息',
              onClick(oml2d): void {
                // actions ...
              },
            },
            {
              id: 'SwitchModel',
              icon: 'icon-switch',
              title: '切换模型',
              onClick(oml2d): void {
                // actions ...
              },
            },
            {
              id: 'SwitchModel',
              icon: 'icon-skin',
              title: '切换皮肤',
              onClick(oml2d): void {
                // actions ...
              },
            },
            {
              id: 'About',
              icon: 'icon-about',
              title: '关于',
              onClick(): void {
                window.open('https://github.com/hacxy')
              },
            },
            {
              id: 'github',
              icon: 'icon-github',
              title: '我的github',
              onClick() {
                window.open('https://github.com/hacxy')
              },
            },
          ],
          disable: false,
          itemStyle: {
            //配置菜单每个子项按钮的样式
            fontSize: '14px', //菜单图标大小
            color: '#5da8ff', //菜单小图标颜色
            // background: "rgba(255, 255, 255, 0.9)", //菜单背景颜色
            transition: 'all 0.3s ease', // 过渡动画
            borderRadius: '50%', //菜单背景圆角
            padding: '5px', //菜单背景内边距
            margin: '10px', //菜单背景外边距
            boxShadow: '0 0 10px #646cff', //菜单背景阴影
            border: '1px solid #5da8ff', //菜单背景边框
            transform: 'translate(80px, 0px)', // 菜单X轴和Y轴偏移
          },
        },
        tips: {
          // 复制网站文字内容时的提示
          copyTips: {
            message: ['复制成功！记得标明出处哦~'], // 提示框内容
            duration: 3000, //提示框持续时间, 单位 ms
            priority: 10, //优先级，值越大，优先级越高
          },
          // 闲置状态下的提示
          idleTips: {
            duration: 5000, //提示框持续时间, 单位 ms
            interval: 10000, //闲置状态循环播放消息的间隔时间, 单位 ms
            message: ['你好呀，我是看板娘~', '欢迎来到我的小世界~', '快来和我一起探索吧~'], // 提示框内容
            priority: 10, //优先级，值越大，优先级越高
            wordTheDay: (wordTheDayData) => {
              // 一言
              return `${wordTheDayData.hitokoto}    by.${wordTheDayData.from}`
            },
          },
          messageLine: 2, // 提示消息最大显示行数
          // 模型入场后的欢迎提示
          welcomeTips: {
            // 进入网站时的欢迎提示
            duration: 6000,
            priority: 10,
            message: {
              daybreak: '早上好！一日之计在于晨，美好的一天就要开始了。',
              morning: '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！',
              noon: '中午了，工作了一个上午，现在是午餐时间！',
              afternoon: '午后很容易犯困呢，来杯咖啡吧~',
              dusk: '傍晚了！工作一天幸苦啦~',
              night: '晚上好，今天过得怎么样呢？',
              lateNight: '已经这么晚了呀，早点休息吧，晚安~',
              weeHours: '这么晚还不睡吗？当心熬夜秃头哦！',
            },
          },
        },
        statusBar: {
          disable: false, // 禁用状态栏
          errorColor: '#ff0000', // 加载状态下的颜色
          loadFailMessage: '模型加载失败', // 加载失败的提示
          loadSuccessMessage: '模型加载成功', // 加载成功的提示
          loadingIcon: 'icon-loading', // 加载中的图标
          loadingMessage: '模型加载中', // 加载中的提示
        },
      })
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
