import type { NavLink } from '../../.vitepress/theme/types'

// 钉钉文档图标
const icon_DingTalk_Url = 'https://img.alicdn.com/imgextra/i3/O1CN01WVKxVr22NW6oPUd9C_!!6000000007108-2-tps-96-96.png'
type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '后台管理',
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
        icon: 'https://img.alicdn.com/tfs/TB1sNayNfb2gK0jSZK9XXaEgFXa-52-48.png',
        title: 'Ss项目管理',
        desc: '客户问题跟进/功能上线清单',
        link: 'https://www.teambition.com/project/64afa6103c7a12b9b8a36b71/tasks/view/64afa611e77d4a7b05c43e9f',
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
        link: 'https://webb.adspower.com/dashboards',
      },
    ],
  },

  {
    title: '表单登记',
    items: [
      {
        icon: icon_DingTalk_Url,
        title: 'Ss客户需求登记表',
        desc: '客户需求登记和跟进',
        link: 'https://alidocs.dingtalk.com/i/nodes/ZX6GRezwJlnjbzPKuv3g7kRjWdqbropQ?iframeQuery=utm_source%3Dportal%26utm_medium%3Dportal_recent',
      },
      {
        icon: icon_DingTalk_Url,
        title: '云设备需求收集表格',
        desc: '用于收集客户ws/tg/tk个号设备信息',
        link: 'https://alidocs.dingtalk.com/i/nodes/ZX6GRezwJlnjbzPKuX9KrRADWdqbropQ?iframeQuery=',
      },
      {
        icon: icon_DingTalk_Url,
        title: '每日WhatsApp客户订单表格',
        desc: '用于查客户封禁api号码ads指纹浏览器“环境编号”',
        link: 'https://alidocs.dingtalk.com/spreadsheetv2/79ZwvXDEheErGyDy/edit?scene=universalSpace&mainsiteOrigin=mainsite&docKey=32M9qP0NMNwpq015&dentryKey=79ZwvXDEheErGyDy&type=s&rnd=0.9157924747687844',
      },
      {
        icon: icon_DingTalk_Url,
        title: '售前客户信息登记',
        desc: '接到需要做售前支持的劳烦在这个钉钉在线文档登记一下 然后@子健',
        link: 'https://alidocs.dingtalk.com/i/nodes/2Amq4vjg892Q7jNDfLZGZzOnW3kdP0wQ?iframeQuery=',
      },
      {
        icon: icon_DingTalk_Url,
        title: 'API号无法绑定主页和广告资料收集',
        desc: '购买平台号码绑定主页或者广告账户收不到验证码',
        link: 'https://alidocs.dingtalk.com/i/nodes/G1DKw2zgV2gQpK4NhK9zM4NXJB5r9YAn',
      },
    ],
  },

  {
    title: '接口管理',
    items: [
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
        icon: '/icons/json-cn.ico',
        title: 'Json 中文网',
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn',
      },
      {
        icon: '',
        title: 'MD5在线加密',
        desc: '必须是32位小写',
        link: 'http://www.jsons.cn/md5/s/',
      },
    ],
  },

  {
    title: '产品资料',
    items: [
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
        icon: 'https://resource.helplook.net/docker_production/4lsamm/icon/icon.png?rand=17935696',
        title: 'ISO 27001权威认证',
        desc: '客户担心数据安全可发',
        link: 'https://www.salesmartly.com/blog/docs/salesmartly-authoritative-certification',
      },
    ],
  },
]
