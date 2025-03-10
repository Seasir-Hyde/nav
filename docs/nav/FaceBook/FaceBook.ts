import type { NavLink } from '../../.vitepress/theme/types'

// facebook图标
const icon_Facebook_Url = 'https://static.xx.fbcdn.net/rsrc.php/yT/r/aGT3gskzWBf.ico'

//meta图标
const icon_Meta_Url = 'https://metastatus.com/meta/favicon.ico'

// WhatsApp 图标
const icon_WhatsApp_Url = 'https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png'

// WhatsApp 图标
const icon_WhatsApp_Api_Url =
  'https://assets-cdn.salesmartly.com/prod/project/fj3mnx/p1/chat/plugin/image/20250302/1740907976554/image_1740907976554_6fb53c51539b47559cf0d122a83.png'

// Messenger 图标
const icon_Messenger_Url =
  'https://scontent-sin2-1.xx.fbcdn.net/v/t39.2365-6/294976651_611610467207870_1164978025675666563_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=20sU2ELKB8IQ7kNvgF3JW2v&_nc_oc=Adga4QRDql72s9ozXWmY1WTlOfjObxXVdR0CdGQzXY9ns6eC5iNeM_39p5vRwLyxMd8&_nc_zt=14&_nc_ht=scontent-sin2-1.xx&_nc_gid=AaOhLyrkYeiH6H1aQeLxpP1&oh=00_AYCoxxkvKz1FyeNwwNA60ZluODtTGpsoWMqs_wjpCj3deQ&oe=67DE5719'

// Instagram 图标
const icon_Instagram_Url =
  'https://www.facebook.com/images/pages/settings/instagram/Instagram_Glyph_Gradient.png'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '错误代码',
    items: [
      {
        icon: icon_WhatsApp_Api_Url,
        title: '云端API 错误代码',
        desc: 'WhatsApp Business API 云端错误代码',
        link: 'https://developers.facebook.com/docs/whatsapp/cloud-api/support/error-codes',
      },
      {
        icon: icon_Messenger_Url,
        title: 'Error Codes Messenger',
        desc: '查FB主页错误码',
        link: 'https://developers.facebook.com/docs/messenger-platform/error-codes',
      },
      {
        icon: icon_Messenger_Url,
        title: 'Error Codes Messenger',
        desc: 'mess主页上传附件错误码',
        link: 'https://developers.facebook.com/docs/messenger-platform/reference/attachment-upload-api#-----2',
      },
      {
        icon: icon_WhatsApp_Api_Url,
        title: '自助注册api号码错误码',
        desc: 'FB官方自助注册api号码错误码',
        link: 'https://developers.facebook.com/docs/whatsapp/embedded-signup/errors?locale=zh_CN',
      },
      {
        icon: icon_Facebook_Url,
        title: '图谱 API错误代码',
        desc: '向FB的 API 发出的请求可能会产生多种不同的错误响应',
        link: 'https://developers.facebook.com/docs/graph-api/guides/error-handling/',
      },
      {
        icon: icon_Meta_Url,
        title: 'Meta业务产品的状态和中断',
        desc: 'FaceBook故障公告',
        link: 'https://metastatus.com/',
      },
      {
        icon: icon_Meta_Url,
        title: 'WhatsApp 商业 API 状态',
        desc: 'WhatsApp 商业 API 状态',
        link: 'https://metastatus.com/whatsapp-business-api',
      },
      {
        icon: 'https://github.com/fluidicon.png',
        title: 'Facebook API错误代码',
        desc: '来源互联网整理Facebook API错误代码和主页错误码',
        link: 'https://github.com/phwd/fbec',
      },
    ],
  },

  {
    title: '开发者文档',
    items: [
      {
        icon: icon_WhatsApp_Api_Url,
        title: 'WhatsApp Business 开放平台',
        desc: '通过 WhatsApp Business 开放平台，大中型企业可与客户进行大规模交流',
        link: 'https://developers.facebook.com/docs/whatsapp',
      },
      {
        icon: icon_Instagram_Url,
        title: 'Instagram 消息 入门指南',
        desc: '调用支持 Instagram 的 Messenger API（也将之称为 Instagram 消息 API）',
        link: 'https://developers.facebook.com/docs/messenger-platform/instagram/get-started',
      },
      {
        icon: icon_Messenger_Url,
        title: 'Messenger 开放平台概览',
        desc: 'Messenger 开放平台的运作方式和成功实现该开放平台所需的要素',
        link: 'https://developers.facebook.com/docs/messenger-platform/overview',
      },
      {
        icon: icon_WhatsApp_Api_Url,
        title: 'WhatsApp Business 开发者支持',
        desc: 'WhatsApp Business 开发者支持入口',
        link: 'https://developers.facebook.com/docs/whatsapp/support',
      },
      {
        icon: icon_Meta_Url,
        title: '开发者社群论坛',
        desc: '开发者社群论坛',
        link: 'https://developers.facebook.com/community',
      },
      {
        icon: icon_Meta_Url,
        title: '开发者常见问题',
        desc: 'Facebook官方faq文档',
        link: 'https://developers.facebook.com/support/faq/',
      },
    ],
  },
  {
    title: '商业政策',
    items: [
      {
        icon: icon_WhatsApp_Api_Url,
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
        icon: icon_WhatsApp_Api_Url,
        title: 'WhatsApp 商业政策',
        desc: 'WhatsApp api违反商业政策',
        link: 'https://business.whatsapp.com/policy',
      },
      {
        icon: 'https://static.xx.fbcdn.net/rsrc.php/ym/r/YQbyhl59TWY.ico',
        title: 'Facebook政策更新',
        desc: '我们已将 Facebook、Instagram、Messenger 和 Threads 适用的守则整合到一处，方便你更轻松地查阅。',
        link: 'https://www.facebook.com/privacy/consent/?flow=privacy_policy_notice_usecase&params[usecase]=bundled_terms_notice_2024&params[notification_surface]=facebook_qp_megaphone&source=messenger_web_megaphone&surface=messenger_dot_com',
      },
      {
        icon: 'https://thispersondoesnotexist.com/favicon.ico',
        title: '随机生成面部照片',
        desc: '刷新网址随机生成面部照片，用于申诉FB个号',
        link: 'https://thispersondoesnotexist.com/',
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
        icon: icon_Meta_Url,
        title: 'ws api模板官方说明文档',
        desc: 'ws api创建和管理模板',
        link: 'https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates#template-review',
      },
      {
        icon: icon_Facebook_Url,
        title: '消息模板指南',
        desc: '模板用于通过模板消息来开启与客户之间的营销、交易相关和身份验证对话',
        link: 'https://developers.facebook.com/docs/whatsapp/message-templates/guidelines',
      },
      {
        icon: icon_Facebook_Url,
        title: '模板分类',
        desc: 'WhatsApp api模版官方示例网站',
        link: 'https://developers.facebook.com/docs/whatsapp/updates-to-pricing/new-template-guidelines',
      },
      {
        icon: icon_Meta_Url,
        title: 'ws api帐号的示例消息模板',
        desc: 'WhatsApp api示例消息模板',
        link: 'https://www.facebook.com/business/help/722393685250070',
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
      {
        icon: icon_Meta_Url,
        title: '信用卡付费的国家/地区',
        desc: '支持 WhatsApp Business 信用卡付费的国家/地区',
        link: 'https://www.facebook.com/business/help/419761233006366',
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
    ],
  },

  {
    title: 'Meta',
    items: [
      {
        icon: icon_Meta_Url,
        title: '如何在 Meta 公司验证（绿标）?',
        desc: '企业版 Meta Verified 是一项付费订阅服务，可在 Meta 平台上为您提供实用功能，帮助用户发现您的内容、实施防冒充保护、提供客户支持等。',
        link: 'https://www.facebook.com/business/help/2058515294227817?id=180505742745347',
      },
      {
        icon: icon_Meta_Url,
        title: 'WhatsApp Business 开放平台与 WhatsApp Business 应用之间的区别',
        desc: 'WhatsApp Business 解决方案包括 WhatsApp Business 开放平台和 WhatsApp Business 应用。',
        link: 'https://www.facebook.com/business/help/338665938087159?ref=search_new_0',
      },
      {
        icon: icon_Meta_Url,
        title: 'WhatsApp Business 商业帐号的账单简介',
        desc: 'WhatsApp api商业号介绍和账单',
        link: 'https://www.facebook.com/business/help/2225184664363779?id=2129163877102343&ref=search_new_15',
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
      {
        icon: icon_Facebook_Url,
        title: '商业帐号类型',
        desc: '商业帐号和官方商业帐号',
        link: 'https://developers.facebook.com/docs/whatsapp/overview/business-accounts#types',
      },
      {
        icon: icon_Facebook_Url,
        title: '商业帐号限制',
        desc: 'WhatsApp Api限制官方文档说明',
        link: 'https://developers.facebook.com/docs/whatsapp/overview/business-accounts#--',
      },
      {
        icon: icon_Meta_Url,
        title: '消息模板的质量评分简介',
        desc: 'WhatsApp Api消息模板质量说明',
        link: 'https://www.facebook.com/business/help/766346674749731?ref=search_new_1',
      },
      {
        icon: icon_Meta_Url,
        title: '电话号码的质量评分简介',
        desc: 'WhatsApp Api电话号码的质量说明',
        link: 'https://www.facebook.com/business/help/896873687365001?ref=search_new_2',
      },
      {
        icon: icon_Meta_Url,
        title: 'WhatsApp Api帐号创建消息模板',
        desc: 'WhatsApp Api帐号创建消息模板说明',
        link: 'https://www.facebook.com/business/help/2055875911147364?id=2129163877102343',
      },
      {
        icon: icon_Meta_Url,
        title: '消息模板支持的语言',
        desc: 'WhatsApp Api模板支持的语言',
        link: 'https://developers.facebook.com/docs/whatsapp/api/messages/message-templates#supported-languages',
      },
      {
        icon: icon_Facebook_Url,
        title: 'whatsapp api 支持的媒体类型和大小',
        desc: 'whatsapp api 支持的媒体类型和大小',
        link: 'https://developers.facebook.com/docs/whatsapp/on-premises/reference/media#supported-files',
      },
      {
        icon: icon_Facebook_Url,
        title: '每个用户营销模板消息限制',
        desc: '用户营销模板消息限制适用于发送给印度少数 WhatsApp 用户的模板消息',
        link: 'https://developers.facebook.com/docs/whatsapp/message-templates/creation#per-user-marketing-template-message-limits',
      },
      {
        icon: icon_Meta_Url,
        title: '关于 WhatsApp Business 显示名',
        desc: '关于 WhatsApp Business 显示名',
        link: 'https://www.facebook.com/business/help/338047025165344',
      },
      {
        icon: icon_Meta_Url,
        title: '显示名守则',
        desc: 'WhatsApp Business 显示名是顾客与商家对话时以及在 WhatsApp 商家主页上看到的名称',
        link: 'https://www.facebook.com/business/help/757569725593362',
      },
      {
        icon: icon_Meta_Url,
        title: '如何更改您的 WhatsApp Business 显示名',
        desc: '显示名是您向客户发送消息时显示的商业名称',
        link: 'https://www.facebook.com/business/help/378834799515077',
      },
    ],
  },
]
