import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  //导航栏下拉菜单
  {
    text: '家', items: [
      { text: '首页', link: '/' },
      { text: '关于我们', link: 'https://github.com/666seasir666' },
      { text: 'DEMO网站', link: 'https://soybean-admin.netlify.app/' },
    ]
  },
  {
    text: '友链', items: [
      { text: 'AdsPower - 指纹浏览器', link: 'https://www.adspower.com/' },
      { text: 'HelpLook - 网站帮助中心', link: 'https://www.helplook.net/' },
      { text: 'SaleSmartly - 全渠道客户沟通平台', link: 'https://salesmartly.com/' },
      { text: 'DuoPlus - 云端操控，拓展全球商机', link: 'https://www.duoplus.cn/' },
      { text: 'PartnerShare - SaaS品牌合作伙伴营销引领者', link: 'https://www.partnershare.net/' },
      { text: 'IPFoxy - 全球静态独享 IP代理', link: 'https://www.ipfoxy.com/' },
    ]
  },
  {
    text: '桌面客户端',
    items: [
      { text: '64位 win10以上（右键复制链接）', link: 'https://client.salesmartly.com/app/desktop/SaleSmartly-windows.zip' },
      { text: '32位 win10以下（右键复制链接）', link: 'https://client.salesmartly.com/app/update/SaleSmartly-1.5.5-ia32.exe' },
    ]
  },
  {
    text: '错误码文档',link: 'https://alidocs.dingtalk.com/i/nodes/mExel2BLV5NQZ9DKixmAa9RDJgk9rpMq?utm_scene=person_space'
  }
]
