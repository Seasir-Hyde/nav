import type { NavLink } from '../../.vitepress/theme/types'

// line官方图标
const icon_Line_Url = 'https://vos.line-scdn.net/lbstw-static/assets/frontend/touch_icon.png'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: 'line后台',
    items: [
      {
        icon: icon_Line_Url,
        title: 'LINE官方号后台',
        desc: 'LINE官方号后台',
        link: 'https://manager.line.biz/',
      },
      {
        icon: icon_Line_Url,
        title: 'LINE 企业管理平台',
        desc: '可以整合LINE官方帐号、LINE展示型广告以及广告主自有行销数据的资料管理平台',
        link: 'https://tw.linebiz.com/service/account-solutions/line-business-manager/',
      },
      {
        icon: icon_Line_Url,
        title: '什么是LINE Business ID?',
        desc: 'LINE Business ID是LINE专为商业用途或开发者所设计',
        link: 'https://help2.line.me/official_account_tw/android/pc?lang=zh-Hant&contentId=20011780',
      },
    ],
  },

  {
    title: '官方价格',
    items: [
      {
        icon: icon_Line_Url,
        title: 'LINE官方帳號方案價格',
        desc: '2023年LINE官方帳號方案價格調整，重點一次掌握',
        link: 'https://tw.linebiz.com/column/LINEOA-2023-Price-Plan/',
      },
      {
        icon: icon_Line_Url,
        title: 'LINE 官方帐号',
        desc: 'LINE 官方帐号解决方案',
        link: 'https://app.salesmartly.com/chat',
      },
    ],
  },

  {
    title: '开发者和错误码文档',
    items: [
      {
        icon: 'https://developers.line.biz/assets/icon/favicon.ico',
        title: 'Line开发人员文档',
        desc: 'Line开发人员文档',
        link: 'https://developers.line.biz/en/docs/',
      },
      {
        icon: 'https://developers.line.biz/assets/icon/favicon.ico',
        title: 'Messaging-api错误码',
        desc: 'Line官方号消息传递API错误代码',
        link: 'https://developers.line.biz/en/reference/messaging-api/#error-responses',
      },
    ],
  },
]
