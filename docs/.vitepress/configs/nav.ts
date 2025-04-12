import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  //导航栏下拉菜单
  {
    text: '🏡首页', items: [
      { text: '首页', link: '/' },
      { text: '关于我们', link: 'https://github.com/666seasir666' },
      { text: 'Demo网站', link: 'https://soybean-admin.netlify.app/' },
    ]
  },
  // {
  //   text: '💻桌面客户端',link: '/nav/SaleSmartly/桌面客户端/💻桌面客户端.md'
  // },
  {
    text: '📜错误码文档',
    items: [
      { text: '📝问题上报错误码', link: 'https://alidocs.dingtalk.com/i/nodes/mExel2BLV5NQZ9DKixmAa9RDJgk9rpMq?utm_scene=person_space' },
      { text: '📝企业微信错误码', link: 'https://developer.work.weixin.qq.com/document/path/96213' },
    ]
  },
  {
    text: '🔗友链', items: [
      { text: 'AdsPower - 指纹浏览器', link: 'https://www.adspower.com/' },
      { text: 'HelpLook - 网站帮助中心', link: 'https://www.helplook.net/' },
      { text: 'SaleSmartly - 全渠道客户沟通平台', link: 'https://salesmartly.com/' },
      { text: 'DuoPlus - 云端操控，拓展全球商机', link: 'https://www.duoplus.cn/' },
      { text: 'PartnerShare - SaaS品牌合作伙伴营销引领者', link: 'https://www.partnershare.net/' },
      { text: 'IPFoxy - 全球静态独享 IP代理', link: 'https://www.ipfoxy.com/' },
    ]
  },
]
