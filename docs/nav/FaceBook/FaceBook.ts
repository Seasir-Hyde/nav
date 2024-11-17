import type { NavLink } from '../../.vitepress/theme/types'

// facebook图标
const icon_Facebook_Url = 'https://static.xx.fbcdn.net/rsrc.php/yT/r/aGT3gskzWBf.ico'

//meta图标
const icon_Meta_Url = 'https://metastatus.com/meta/favicon.ico'

// WhatsApp 图标
const icon_WhatsApp_Url = 'https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '错误代码',
    items: [
      {
        icon: icon_Facebook_Url,
        title: '错误代码-云端API',
        desc: '查WhatsApp api错误码',
        link: 'https://developers.facebook.com/docs/whatsapp/cloud-api/support/error-codes',
      },
      {
        icon: icon_Facebook_Url,
        title: 'Error Codes Messenger',
        desc: '查FB主页错误码',
        link: 'https://developers.facebook.com/docs/messenger-platform/error-codes',
      },
      {
        icon: icon_Facebook_Url,
        title: 'WhatsApp Business 开放平台嵌入式注册错误码',
        desc: 'FB官方自助注册api号码错误码',
        link: 'https://developers.facebook.com/docs/whatsapp/embedded-signup/errors?locale=zh_CN',
      },
      {
        icon: icon_Meta_Url,
        title: 'Meta业务产品的状态和中断',
        desc: 'FaceBook故障公告',
        link: 'https://metastatus.com/',
      },
      {
        icon: 'https://github.com/fluidicon.png',
        title: 'Facebook API错误代码',
        desc: '来源互联网整理Facebook API错误代码和主页错误码',
        link: 'https://github.com/phwd/fbec',
      },
      {
        icon: 'https://img.alicdn.com/imgextra/i1/O1CN01DGvg5O1TqMV3L4TNd_!!6000000002433-2-tps-96-96.png',
        title: '【错误码】问题上报相关问题',
        desc: '钉钉文档整理错误码',
        link: 'https://alidocs.dingtalk.com/i/nodes/mExel2BLV5NQZ9DKixmAa9RDJgk9rpMq?utm_scene=person_space',
      },
    ],
  },

  {
    title: '开发者文档',
    items: [
      {
        icon: icon_Meta_Url,
        title: 'WhatsApp Business 开放平台',
        desc: '通过 WhatsApp Business 开放平台，大中型企业可与客户进行大规模交流',
        link: 'https://developers.facebook.com/docs/whatsapp'
      },
      {
        icon: icon_Meta_Url,
        title: 'Instagram 消息 入门指南',
        desc: '调用支持 Instagram 的 Messenger API（也将之称为 Instagram 消息 API）',
        link: 'https://developers.facebook.com/docs/messenger-platform/instagram/get-started',
      },
      {
        icon: icon_Meta_Url,
        title: 'Messenger 开放平台概览',
        desc: 'Messenger 开放平台的运作方式和成功实现该开放平台所需的要素',
        link: 'https://developers.facebook.com/docs/messenger-platform/overview'
      },
    ]
  },
  {
    title: '商业政策',
    items: [
      {
        icon: icon_Meta_Url,
        title: 'WhatsApp 商业政策',
        desc: 'WhatsApp api违反商业政策，这个更详细点',
        link: 'https://www.facebook.com/policies_center/commerce/',
      },
      {
        icon: icon_Meta_Url,
        title: 'Facebook 政策及信息公示平台',
        desc: '可以查看Facebook各大政策',
        link: 'https://transparency.meta.com/zh-cn/policies/',
      },
      {
        icon: icon_WhatsApp_Url,
        title: 'WhatsApp 商业政策',
        desc: 'WhatsApp api违反商业政策',
        link: 'https://business.whatsapp.com/policy',
      },{
        icon: 'https://static.xx.fbcdn.net/rsrc.php/ym/r/YQbyhl59TWY.ico',
        title: 'Facebook政策更新',
        desc: '我们已将 Facebook、Instagram、Messenger 和 Threads 适用的守则整合到一处，方便你更轻松地查阅。',
        link: 'https://www.facebook.com/privacy/consent/?flow=privacy_policy_notice_usecase&params[usecase]=bundled_terms_notice_2024&params[notification_surface]=facebook_qp_megaphone&source=messenger_web_megaphone&surface=messenger_dot_com',
      },
    ],
  },

  {
    title: '商务管理平台',
    items: [
      {
        icon: icon_Meta_Url,
        title: 'Meta 商务管理平台',
        desc: 'Meta 商务管理平台（Meta Business Manager），简称 BM，是 Meta 提供的跨 Meta 技术一站式管理所有营销和广告活动的一个免费工具',
        link: 'https://business.facebook.com/',
      },
      {
        icon: icon_Meta_Url,
        title: '创建 Meta 商务管理平台',
        desc: '一站式监管所有公共主页、帐户和业务资产。轻松为所有帐户创建和管理广告。借助表现分析追踪效果最佳的方案。',
        link: 'https://business.facebook.com/overview?ref=kjdzd.com',
      },
      {
        icon: icon_Meta_Url,
        title: '账户概览/账户',
        desc: '查看Facebook个号账户概览情况',
        link: 'https://www.facebook.com/business-support-home/?landing_page=overview&source=actor_contact_form_misc',
      },
      {
        icon: 'https://2fa.run/assets/images/favicons/tools.png',
        title: '2FA验证',
        desc: '双重验证码/二步验证码获取工具（相当于谷歌身份验证器的网页版），使用时任选1种方式输入密钥获取即可。',
        link: 'https://2fa.run/',
      },
    ],
  },

  {
    title: '模板定价',
    items: [
      {
        icon: icon_Facebook_Url,
        title: '模板分类',
        desc: 'WhatsApp api模版官方示例网站',
        link: 'https://developers.facebook.com/docs/whatsapp/updates-to-pricing/new-template-guidelines',
      },
      {
        icon: icon_Facebook_Url,
        title: 'WhatsApp api定价',
        desc: 'WhatsApp api号码官方价格',
        link: 'https://developers.facebook.com/docs/whatsapp/pricing',
      },
      {
        icon: icon_Meta_Url,
        title: 'WhatsApp Business 商业帐号的账单简介',
        desc: 'WhatsApp Business 开放平台采用基于对话的定价模式。通过 WhatsApp Business 开放平台给客户发消息时，您需要为 每次对话付费。单次对话包含 24 小时期限内送达的该类别的所有消息。',
        link: 'https://www.facebook.com/business/help/2225184664363779?id=2129163877102343',
      },
      {
        icon: icon_Meta_Url,
        title: '查看 WhatsApp Business 商业帐号的对话成效分析',
        desc: '针对 WhatsApp Business 商业帐号的消息和花费分析进行实时监控',
        link: 'https://www.facebook.com/business/help/338500813332755?id=2129163877102343',
      },
      {
        icon: icon_Meta_Url,
        title: 'WhatsApp Business 商业帐号的额度',
        desc: 'WhatsApp Business 商业帐号的额度是一种支付设置，可供符合条件的企业使用',
        link: 'https://www.facebook.com/business/help/403716511507786',
      },
      {
        icon: icon_Meta_Url,
        title: '将信用卡添加至 WhatsApp Business 开放平台帐号',
        desc: 'WhatsApp Business 开放平台采用基于对话的定价模式',
        link: 'https://www.facebook.com/business/help/488291839463771',
      },
    ],
  },

  {
    title: 'WhatsApp',
    items: [
      {
        icon: icon_WhatsApp_Url,
        title: 'WhatsApp app 网页版',
        desc: 'WhatsApp app 官方网页版',
        link: 'https://web.whatsapp.com/',
      },
      {
        icon: icon_WhatsApp_Url,
        title: '关于 WhatsApp Business',
        desc: 'WhatsApp Business 是一款可免费下载的应用。该应用在设计时充分考虑了小型企业主的需求',
        link: 'https://faq.whatsapp.com/641572844337957/?helpref=uf_share',
      },
      {
        icon: icon_WhatsApp_Url,
        title: '如何创建 WhatsApp 短链接',
        desc: '您可以使用 WhatsApp Business 应用分享链接，以便顾客直接开始与您对话。',
        link: 'https://faq.whatsapp.com/502291734918768/?helpref=uf_share',
      },
      {
        icon: 'https://cdn.prod.website-files.com/6030eb20edb26744961d31ee/61a83a26036345308f399969_favicon-32x32.png',
        title: 'WhatsApp链接生成器',
        desc: '创建WhatsApp链接',
        link: 'https://respond.io/zh/whatsapp-link-generator',
      },
      {
        icon: icon_WhatsApp_Url,
        title: 'ws app收不到验证码',
        desc: '中国大陆号码收不到Whatsapp验证码，怎么办? 真实经验分享（2024最新）',
        link: 'https://www.youtube.com/watch?v=AQNYIcS2o-Q',
      },
    ],
  },

  {
    title: '知识科普',
    items: [
      {
        icon: 'https://shoplineapp.cn/images/favicon.png',
        title: 'FB账户区别科普',
        desc: 'Facebook概览，个人账号、公共主页、管理员、商务管理平台是什么？',
        link: 'https://shoplineapp.cn/blog/facebook-gai-lan-ge-ren-zhang-hao-gong-gong-zhu-ye-guan-li-yuan-shang-wu-guan-li-ping-tai-shi-shi-yao-shopline-jiao-nin-kuai-su-liao-jie/#',
      },
      {
        icon: icon_Facebook_Url,
        title: 'Meta 产品有哪些？',
        desc: 'Meta 产品有哪些？',
        link: 'https://www.facebook.com/help/1561485474074139/?helpref=uf_share',
      },
      {
        icon: icon_Facebook_Url,
        title: 'Meta 旗下公司',
        desc: 'Meta 旗下公司有哪些？',
        link: 'https://www.facebook.com/help/111814505650678/?helpref=uf_share',
      },
      {
        icon: icon_Meta_Url,
        title: 'Meta Pixel 像素代码简介',
        desc: 'Meta Pixel 像素代码是您安装在网站上的一段代码，可通过分析用户在您网站上采取的操作帮助您衡量广告成效。',
        link: 'https://www.facebook.com/business/help/742478679120153?id=1205376682832142',
      },
      {
        icon: icon_Meta_Url,
        title: 'BSP 是什么？',
        desc: '企业解决方案提供方 (BSP) ',
        link: 'https://developers.facebook.com/docs/whatsapp/embedded-signup/faq?locale=zh_CN',
      },
      {
        icon: icon_Meta_Url,
        title: 'BSP 合作伙伴目录',
        desc: '合作伙伴目录仅供参考。列出的公司均已获得 Meta 业务合作伙伴徽章。此目录并不表示获得 Meta 支持',
        link: 'https://www.facebook.com/business/partner-directory/search?solution_type=messaging',
      },
    ],
  },
]
