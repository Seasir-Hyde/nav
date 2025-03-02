import type { NavLink } from '../../.vitepress/theme/types'

// line官方图标
const icon_Line_Url = 'https://vos.line-scdn.net/lbstw-static/assets/frontend/touch_icon.png'

// line官方号lycbiz图标
const icon_Line_lycbiz_Url = 'https://www.lycbiz.com/static/jp/favicon.ico'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: 'LINE 官方账号',
    items: [
      {
        icon: icon_Line_Url,
        title: '什么是LINE官方帐号',
        desc: '什么是LINE官方帐号',
        link: 'https://help.line.me/line/IOSSecondary/categoryId/20009689/3/pc?lang=zh-Hans&contentId=20000143#20000143_mokuji1',
      },
      {
        icon: icon_Line_Url,
        title: '注册LINE官方帐户',
        desc: '如何注册LINE官方帐户',
        link: 'https://www.lycbiz.com/jp/manual/OfficialAccountManager/new_account/?list=7171',
      },
      {
        icon: icon_Line_Url,
        title: 'LINE官方帐户功能',
        desc: 'LINE官方帐户功能',
        link: 'https://www.lycbiz.com/jp/manual/OfficialAccountManager/function/?list=7171',
      },
      {
        icon: icon_Line_lycbiz_Url,
        title: 'LINE 官方帐号类型',
        desc: 'LINE 提供多种类型的公司帐户。您可以通过查看图标的颜色来判断类型',
        link: 'https://www.lycbiz.com/jp/service/line-official-account/account-type/',
      },
      {
        icon: icon_Line_lycbiz_Url,
        title: 'LINE官方账号帮助文档',
        desc: 'LINE官方账号帮助文档',
        link: 'https://www.lycbiz.com/jp/manual/OfficialAccountManager/',
      },
      {
        icon: icon_Line_Url,
        title: 'LINE官方帳號方案價格',
        desc: '2023年LINE官方帳號方案價格調整，重點一次掌握',
        link: 'https://tw.linebiz.com/column/LINEOA-2023-Price-Plan/',
      },
      {
        icon: icon_Line_Url,
        title: 'LINE 官方帐号解决方案',
        desc: 'LINE 官方帐号解决方案',
        link: 'https://tw.linebiz.com/service/account-solutions/line-official-account/',
      },
      {
        icon: icon_Line_Url,
        title: 'LINE 认证官方账号申請流程',
        desc: 'LINE 认证官方账号申請流程',
        link: 'https://www.lycbiz.com/jp/service/line-official-account/account-type/',
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

    ],
  },

  {
    title: '开发者文档',
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
      {
        icon: 'https://developers.line.biz/assets/icon/favicon.ico',
        title: 'LINE API 事件报告',
        desc: '查看line官方api异常事件报告',
        link: 'https://api.line-status.info/incidents/jc0799zklv25',
      },
    ],
  },
]
