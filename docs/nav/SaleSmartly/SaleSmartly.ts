import type { NavLink } from '../../.vitepress/theme/types'

// 钉钉文档图标
const icon_DingTalk_Url =
  'https://img.alicdn.com/imgextra/i3/O1CN01WVKxVr22NW6oPUd9C_!!6000000007108-2-tps-96-96.png'

//定义响应时间长按月变量
const Response_Time_Interval_Monthly =
  'https://webb.adspower.com/d/BVsnEtWSk/01_02_ss_xiang-ying-shi-chang-qu-jian-_an-yue-response-time-interval-monthly?orgId=3&viewPanel=6&var-month_list=2024-12&var-project_name=All&var-nickname=%E5%B0%8F%E5%87%AF&var-nickname=%E5%B0%8F%E5%9D%9A&var-nickname=%E5%B0%8F%E5%A9%B7&var-nickname=%E5%B0%8F%E5%BC%A0&var-nickname=%E5%B0%8F%E6%9E%97&var-nickname=%E5%B0%8F%E6%B3%BD&var-nickname=%E5%B0%8F%E6%B5%9A&var-nickname=%E5%B0%8F%E6%B9%96&var-nickname=%E6%BD%87%E6%BD%87&var-channel=All&var-plugin_page_name=All&var-start_hour=All&var-lang=All&var-region=All'

//定义会话数按月变量
const Number_of_sessions_per_month =
  'https://webb.adspower.com/d/i_EIWM9Sz/02_03_ss-_xiang-ying-hui-hua-shu-_an-yue-xin-ban?orgId=3&var-dm=2024-12&var-project_name=All&var-group_name=%E6%8A%80%E6%9C%AF%E6%94%AF%E6%8C%81%E7%BB%84&var-nickname=All&var-channel=All&var-plugin_page_name=All&var-tag=All&var-lang=All&var-project_id=1&var-region=All&var-project_id_copy=All&var-start_hour=All&var-end_hour=All&var-juge_end_type=All&viewPanel=48'

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
        title: 'SS_响应时长区间_按月',
        desc: '查看平响',
        link: Response_Time_Interval_Monthly,
      },
      {
        icon: 'https://webb.adspower.com/public/img/salesmartly_icon.ico',
        title: 'SS _响应会话数_按月',
        desc: '查看满意度',
        link: Number_of_sessions_per_month,
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
