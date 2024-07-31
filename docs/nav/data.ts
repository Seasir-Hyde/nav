import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

type FbData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: 'SaleSmartly',
    items: [
      {
        icon: 'https://cdnjson.com/images/2021/09/13/23432523532.png',
        title: 'Admin管理后台',
        desc: 'SaleSmartly管理后台',
        link: 'https://ss888.xmp.one/admin.html#/admin/company/index.html?spm=m-67-100-101',
      },
      {
        icon: 'https://resource.helplook.net/docker_production/4lsamm/icon/icon.png?rand=17935696',
        title: 'SaleSmartly后台',
        desc: 'SaleSmartly客服系统后台',
        link: 'https://app.salesmartly.com/chat',
      },
      {
        icon: 'https://resource.helplook.net/docker_production/4lsamm/icon/icon.png?rand=17935696',
        title: '专属链接Demo',
        desc: '可查看专属链接效果',
        link: 'http://test.seasir.top/',
      },
      {
        icon: 'https://resource.helplook.net/docker_production/4lsamm/icon/icon.png?rand=17935696',
        title: 'ISO 27001权威认证',
        desc: '客户担心数据安全可发',
        link: 'https://www.salesmartly.com/blog/docs/salesmartly-authoritative-certification',
      },
      {
        icon: 'https://cdn.apifox.com/app/project-icon/builtin/19.jpg',
        title: 'SaleSmartly api接口',
        desc: '企业版套餐api接口',
        link: 'https://apifox.com/apidoc/shared-3e66aa38-1e0a-40c7-bf58-c350da69bcb7',
      },
      {
        icon: 'https://cdn.apifox.com/app/project-icon/builtin/18.jpg',
        title: 'Webhook接口文档',
        desc: 'webhook不需要单独付费 可以理解和专属链接一样都是高级功能 只有企业版才能使用',
        link: 'https://apifox.com/apidoc/shared-c1f4db0d-60eb-42c7-98f7-66c65bc09fdf',
      },
      {
        icon: 'https://img.alicdn.com/tfs/TB1sNayNfb2gK0jSZK9XXaEgFXa-52-48.png',
        title: 'Ss项目管理',
        desc: '客户问题跟进/功能上线清单',
        link: 'https://www.teambition.com/project/64afa6103c7a12b9b8a36b71/tasks/view/64afa611e77d4a7b05c43e9f',
      },
      {
        icon: 'https://img.alicdn.com/imgextra/i3/O1CN01WVKxVr22NW6oPUd9C_!!6000000007108-2-tps-96-96.png',
        title: 'Ss客户需求登记表',
        desc: '客户需求登记和跟进',
        link: 'https://alidocs.dingtalk.com/i/nodes/ZX6GRezwJlnjbzPKuv3g7kRjWdqbropQ?iframeQuery=utm_source%3Dportal%26utm_medium%3Dportal_recent',
      },
      {
        icon: 'https://img.alicdn.com/imgextra/i3/O1CN01WVKxVr22NW6oPUd9C_!!6000000007108-2-tps-96-96.png',
        title: '每日WhatsApp客户订单表格',
        desc: '用于查客户封禁api号码ads指纹浏览器“环境编号”',
        link: 'https://alidocs.dingtalk.com/spreadsheetv2/79ZwvXDEheErGyDy/edit?scene=universalSpace&mainsiteOrigin=mainsite&docKey=32M9qP0NMNwpq015&dentryKey=79ZwvXDEheErGyDy&type=s&rnd=0.9157924747687844',
      },
      {
        icon: 'https://proxy6.net/static/img/favicon300.png',
        title: 'proxies',
        desc: 'Ads指纹浏览器购买IP的',
        link: 'https://proxy6.net/en/',
      },
      {
        icon: 'https://p6a.xmp.one/admin/assets/logo-512x512.137cf8cb.png',
        title: 'Payment',
        desc: '用来查U支付的，需要公司网络才可以访问！',
        link: 'https://p6a.xmp.one/admin/#/dashboard/workplace',
      },
      {
        icon: 'https://webb.adspower.com/public/img/salesmartly_icon.ico',
        title: 'SaleSmartly Home - Grafana',
        desc: '查看平均响应和会话满意度',
        link: 'https://webb.adspower.com',
      },
      {
        icon: 'https://p-pc-weboff.byteimg.com/tos-cn-i-9r5gewecjs/favicon.png',
        title: 'SaleSmartly 全渠道沟通平台',
        desc: 'SaleSmartly 产品视频介绍',
        link: 'https://www.douyin.com/user/MS4wLjABAAAAJMWUbTYkhJpTOjlIUYmzULqEt9V_8TGzewp7IWHmTWo?modal_id=7337953171035131187',
      },
      {
        icon: 'https://wwcdn.weixin.qq.com/node/wwnl/wwnl/style/images/independent/favicon/favicon_16h$faede2cd.png',
        title: 'SaleSmartly 软件介绍视频',
        desc: 'SaleSmartly 软件介绍视频',
        link: 'https://drive.weixin.qq.com/s?k=AI0AKQemAAwFzLwYPX',
      },
      {
        icon: 'https://anydesk.com/favicon.ico',
        title: 'AnyDesk',
        desc: '用于远程海外的客户',
        link: 'https://anydesk.com/en',
      },
    ],
  },
  {
    title: 'FaceBook/Line',
    items: [
      {
        icon: 'https://static.xx.fbcdn.net/rsrc.php/yT/r/aGT3gskzWBf.ico',
        title: '错误代码-云端API',
        desc: '查WhatsApp api错误码',
        link: 'https://developers.facebook.com/docs/whatsapp/cloud-api/support/error-codes',
      },
      {
        icon: 'https://static.xx.fbcdn.net/rsrc.php/yT/r/aGT3gskzWBf.ico',
        title: 'Error Codes Messenger',
        desc: '查FB主页错误码',
        link: 'https://developers.facebook.com/docs/messenger-platform/error-codes',
      },
      {
        icon: 'https://lookaside.fbsbx.com/elementpath/media/?media_id=369852008357062&version=1714720725',
        title: 'Meta业务产品的状态和中断',
        desc: 'FaceBook故障公告',
        link: 'https://metastatus.com/',
      },
      {
        icon: 'https://static.xx.fbcdn.net/rsrc.php/yT/r/aGT3gskzWBf.ico',
        title: '模板分类',
        desc: 'WhatsApp api模版官方示例网站',
        link: 'https://developers.facebook.com/docs/whatsapp/updates-to-pricing/new-template-guidelines',
      },
      {
        icon: 'https://static.xx.fbcdn.net/rsrc.php/yT/r/aGT3gskzWBf.ico',
        title: 'WhatsApp api定价',
        desc: 'WhatsApp api号码官方价格',
        link: 'https://developers.facebook.com/docs/whatsapp/pricing',
      },
      {
        icon: 'https://static.whatsapp.net/rsrc.php/v3/yz/r/ujTY9i_Jhs1.png',
        title: 'WhatsApp 商业政策',
        desc: 'WhatsApp api违反商业政策',
        link: 'https://business.whatsapp.com/policy',
      },
      {
        icon: 'https://www.facebook.com/images/creative_department/favicon.ico',
        title: 'WhatsApp 商业政策',
        desc: 'WhatsApp api违反商业政策，这个更详细点',
        link: 'https://www.facebook.com/policies_center/commerce/',
      },
      {
        icon: 'https://lookaside.fbsbx.com/elementpath/media/?media_id=369852008357062&version=1714720725',
        title: 'WhatsApp Business 商业帐号的账单简介',
        desc: 'WhatsApp Business 商业帐号的账单简介',
        link: 'https://www.facebook.com/business/help/2225184664363779?id=2129163877102343',
      },
      {
        icon: 'https://img.alicdn.com/imgextra/i1/O1CN01DGvg5O1TqMV3L4TNd_!!6000000002433-2-tps-96-96.png',
        title: '【错误码】问题上报相关问题',
        desc: '钉钉文档整理错误码',
        link: 'https://alidocs.dingtalk.com/i/nodes/mExel2BLV5NQZ9DKixmAa9RDJgk9rpMq?utm_scene=person_space',
      },
      {
        icon: 'https://wwcdn.weixin.qq.com/node/wwnl/wwnl/style/images/independent/favicon/favicon_16h$faede2cd.png',
        title: '企业微信错误码',
        desc: '全局错误码-文档-企业微信开发者中心',
        link: 'https://developer.work.weixin.qq.com/document/path/96213',
      },
      {
        icon: 'https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png',
        title: 'WhatsApp app 网页版',
        desc: 'WhatsApp app 官方网页版',
        link: 'https://web.whatsapp.com/',
      },
      {
        icon: 'https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png',
        title: 'ws app收不到验证码',
        desc: '中国大陆号码收不到Whatsapp验证码，怎么办? 真实经验分享（2024最新）',
        link: 'https://www.youtube.com/watch?v=AQNYIcS2o-Q',
      },
      {
        icon: 'https://shoplineapp.cn/images/favicon.png',
        title: 'FB账户区别科普',
        desc: 'Facebook概览，个人账号、公共主页、管理员、商务管理平台是什么？',
        link: 'https://shoplineapp.cn/blog/facebook-gai-lan-ge-ren-zhang-hao-gong-gong-zhu-ye-guan-li-yuan-shang-wu-guan-li-ping-tai-shi-shi-yao-shopline-jiao-nin-kuai-su-liao-jie/#',
      },
      {
        icon: 'https://d.line-scdn.net/n/_s1/_0/linecorp-web-uit/images/line_touch_icon_v3.png',
        title: 'Line官方费用计算方式',
        desc: 'LINE廣告訊息費用怎麼算？LINE自動計算幫你找出最適合方案',
        link: 'https://tw.linebiz.com/column/budget-auto-count/',
      },
    ],
  },
  {
    title: '接码/IP代理平台',
    items: [
      {
        icon: 'https://5sim.net//apple-touch-icon.png',
        title: '5SIM',
        desc: '短信激活 | 使用虚拟号码在线接收短信',
        link: 'https://5sim.net/zh',
      },
      {
        icon: 'https://smsactivate.s3.eu-central-1.amazonaws.com/assets/img/activate_favicon.png',
        title: 'SMS-Activate是在线接受短信的虚拟号码服务 ',
        desc: 'SMS-Activate是在线接受短信的虚拟号码服务',
        link: 'https://sms-activate.org/cn',
      },
      {
        icon: 'https://www.sms4u.vip/portal/static/img/sms4u_favicon.ico',
        title: '在线短信激活 | 使用虚拟号码在线接收短信',
        desc: '在线接码，在线接收短信，虚拟电话号码，短信的虚拟号码，短信验证，短信验证服务，租用电话号码，短信激活',
        link: 'https://www.sms4u.vip/?ref=kjdzd.com',
      },
      {
        icon: 'https://resource.helplook.net/docker_production/4lsamm/icon/icon.png?rand=17935696',
        title: '其他接码平台 ',
        desc: '更多接码平台',
        link: 'https://www.salesmartly.com/blog/docs/code-receiving-platform',
      },
      {
        icon: 'https://proxy-seller.com/local/templates/dvsproxyseller/img/logo-page-reg.png',
        title: 'ProxySeller',
        desc: '购买IP代理的',
        link: 'https://proxy-seller.com/zh/auth/?login=yes&backurl=%2Fzh%2F',
      },
      {
        icon: 'https://panel.proxyline.net/static/panel/img/favicon.png',
        title: 'ProxyLine',
        desc: '购买IP代理的',
        link: 'https://panel.proxyline.net/all/',
      },
      {
        icon: 'https://ip-api.com/favicon.ico',
        title: 'ip-api',
        desc: '搜索任何IP地址/域',
        link: 'https://ip-api.com/',
      },
    ],
  },
  {
    title: '常用工具',
    items: [
      {
        icon: '/',
        title: '在线短地址转换工具',
        desc: '转换短链接的',
        link: 'https://www.bejson.com/convert/shorturl/#google_vignette',
      },
      {
        icon: '/',
        title: '短网址生成器 | LinkShortener',
        desc: '转换短链接的',
        link: 'https://my5353.com/',
      },
      {
        icon: 'https://pixpinapp.com/favicon.ico',
        title: 'PixPin',
        desc: '功能强大使用简单的截图/贴图工具，帮助你提高效率',
        link: 'https://pixpinapp.com/',
      },
      {
        icon: '/icons/json-cn.ico',
        title: 'Json 中文网',
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn',
      },
      {
        icon: 'https://css.bqrdh.com/favicon.ico',
        title: '响应式效果检测',
        desc: '检查网站是否有适配移动端页面布局',
        link: 'https://css.bqrdh.com/responsive-testing',
      },
      {
        icon: 'https://2fa.run/assets/images/favicons/tools.png',
        title: '2FA验证',
        desc: '双重验证码/二步验证码获取工具（相当于谷歌身份验证器的网页版），使用时任选1种方式输入密钥获取即可。',
        link: 'https://2fa.run/',
      },
      {
        icon: 'https://www.iplocation.net/favicon.ico',
        title: 'iplocation',
        desc: '解析ip网络位置',
        link: 'https://www.iplocation.net/',
      },
      {
        icon: 'https://www.67tool.com//favicon.ico',
        title: '即时工具',
        desc: '即时工具-致力打造即用即走型在线工具箱',
        link: 'https://www.67tool.com/',
      },
      {
        icon: 'https://static.convertio.co/favicon.ico',
        title: 'Convertio — 文件转换器',
        desc: 'Convertio - 在线转换文件的简单工具。支持超过309种不同的文档、图像、电子表格、电子书、文档、演示文稿、音频和视频格式。',
        link: 'https://convertio.co/zh/',
      },
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        desc: '在线图片压缩工具',
        link: 'https://tinypng.com',
      },
      {
        icon: 'https://devtool.tech/logo.svg',
        title: '开发者武器库',
        desc: '开发者武器库，做开发者最专业最好用的专业工具箱',
        link: 'https://devtool.tech',
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        desc: '开发人员的工具箱',
        link: 'https://tool.lu',
      },
    ],
  },
  {
    title: 'AI 导航',
    items: [
      {
        icon: '/icons/chatgpt.png',
        title: 'ChatGPT（最强）',
        link: 'https://chat.openai.com/chat',
      },
      {
        icon: 'https://www.notion.so/images/logo-ios.png',
        title: 'Notion AI（笔记）',
        link: 'https://www.notion.so',
      },
      {
        icon: 'https://www.midjourney.com/apple-touch-icon.png',
        title: 'Midjourney（绘画）',
        link: 'https://www.midjourney.com',
      },
      {
        icon: 'https://global-uploads.webflow.com/59deb588800ae30001ec19c9/5d4891e0e260e3c1bc37b100_beautiful%20ai%20favicon%20%20blue%20square.png',
        title: 'Beautiful.ai（PPT）',
        link: 'https://www.beautiful.ai',
      },
      {
        icon: 'https://openai.com/favicon.ico',
        title: 'Pricing | OpenAI',
        desc: 'OpenAI官方价格',
        link: 'https://openai.com/api/pricing/',
      },
    ],
  },
  {
    title: '邮件相关',
    items: [
      {
        icon: 'https://i.52112.com/icon/jpg/256/20210201/109466/4372976.jpg',
        title: '个人邮箱 - 来发信',
        desc: '常见个人邮箱登录方式教程',
        link: 'https://www.laifa.xin/category/yx/gryx/',
      },
      {
        icon: 'https://i.postimg.cc/hv2hwd83/331a5669-90e6-4b76-b2f8-ce0397879a4a-1.jpg',
        title: '企业邮箱 - 来发信',
        desc: '常见企业邮箱登录方式教程',
        link: 'https://www.laifa.xin/category/yx/qyyx/',
      },
      {
        icon: 'https://static.zhihu.com/heifetz/assets/apple-touch-icon-152.81060cab.png',
        title: '临时邮箱',
        desc: '12款常用的临时邮箱汇总',
        link: 'https://zhuanlan.zhihu.com/p/690640067',
      },
      {
        icon: 'https://fviainboxes.com/favicon.ico',
        title: 'Free Temp Mail - FVIA',
        desc: '临时邮箱-可以用来接收fb后台邮箱辅助验证码的',
        link: 'https://fviainboxes.com/',
      }
    ],
  },

]
// 暂时注释掉，当时只是测试搜索功能
// export const FaceBook_DATA:FbData[] = [
//   {
//     title: '',
//     items: [
//       {
//         icon: 'https://static.xx.fbcdn.net/rsrc.php/yT/r/aGT3gskzWBf.ico',
//         title: '错误代码-云端API',
//         desc: '查WhatsApp api错误码',
//         link: 'https://developers.facebook.com/docs/whatsapp/cloud-api/support/error-codes',
//       },
//       {
//         icon: 'https://static.xx.fbcdn.net/rsrc.php/yT/r/aGT3gskzWBf.ico',
//         title: 'Error Codes Messenger',
//         desc: '查FB主页错误码',
//         link: 'https://developers.facebook.com/docs/messenger-platform/error-codes',
//       },
//       {
//         icon: 'https://lookaside.fbsbx.com/elementpath/media/?media_id=369852008357062&version=1714720725',
//         title: 'Meta业务产品的状态和中断',
//         desc: 'FaceBook故障公告',
//         link: 'https://metastatus.com/',
//       },
//       {
//         icon: 'https://static.xx.fbcdn.net/rsrc.php/yT/r/aGT3gskzWBf.ico',
//         title: '模板分类',
//         desc: 'WhatsApp api模版官方示例网站',
//         link: 'https://developers.facebook.com/docs/whatsapp/updates-to-pricing/new-template-guidelines',
//       },
//       {
//         icon: 'https://static.xx.fbcdn.net/rsrc.php/yT/r/aGT3gskzWBf.ico',
//         title: 'WhatsApp api定价',
//         desc: 'WhatsApp api号码官方价格',
//         link: 'https://developers.facebook.com/docs/whatsapp/pricing',
//       },
//       {
//         icon: 'https://static.xx.fbcdn.net/rsrc.php/yT/r/aGT3gskzWBf.ico',
//         title: 'WhatsApp 商业政策',
//         desc: 'WhatsApp api违反商业政策',
//         link: 'https://business.whatsapp.com/policy',
//       },
//       {
//         icon: 'https://lookaside.fbsbx.com/elementpath/media/?media_id=369852008357062&version=1714720725',
//         title: 'WhatsApp Business 商业帐号的账单简介',
//         desc: 'WhatsApp Business 商业帐号的账单简介',
//         link: 'https://www.facebook.com/business/help/2225184664363779?id=2129163877102343',
//       },
//       {
//         icon: 'https://img.alicdn.com/imgextra/i1/O1CN01DGvg5O1TqMV3L4TNd_!!6000000002433-2-tps-96-96.png',
//         title: '【错误码】问题上报相关问题',
//         desc: '钉钉文档整理错误码',
//         link: 'https://alidocs.dingtalk.com/i/nodes/mExel2BLV5NQZ9DKixmAa9RDJgk9rpMq?utm_scene=person_space',
//       },
//       {
//         icon: 'https://wwcdn.weixin.qq.com/node/wwnl/wwnl/style/images/independent/favicon/favicon_16h$faede2cd.png',
//         title: '企业微信错误码',
//         desc: '全局错误码-文档-企业微信开发者中心',
//         link: 'https://developer.work.weixin.qq.com/document/path/96213',
//       },
//       {
//         icon: 'https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png',
//         title: 'WhatsApp app 网页版',
//         desc: 'WhatsApp app 官方网页版',
//         link: 'https://web.whatsapp.com/',
//       },
//       {
//         icon: 'https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png',
//         title: 'ws app收不到验证码',
//         desc: '中国大陆号码收不到Whatsapp验证码，怎么办? 真实经验分享（2024最新）',
//         link: 'https://www.youtube.com/watch?v=AQNYIcS2o-Q',
//       },
//     ],
//   },
// ]
