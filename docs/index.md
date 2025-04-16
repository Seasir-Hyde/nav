---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: SaleSmartly
  text: 内部一站式导航
  tagline: 基于 VitePress 的前端导航页面模板
  image:
    # 主页右侧logo背景图
    src: /background.svg
    # alt: 茂茂物语
  actions:
    # - text: 茂茂物语
    #   link: https://notes.fe-mm.com
    # - text: 在线音乐
    #   link: http://tool.liumingye.cn/music/#/
    #   theme: alt
    - text: 快速导航
      link: /nav/SaleSmartly/
    # - text: 测试页
    #   link: /test
    #   theme: alt
features:
  - icon: 🌐
    title: Ss内部导航
    details: 一站式个人Ss内部导航页面
    link: /nav/SaleSmartly/
    linkText: 查看更多
  - icon: 📝
    title: 内部知识库
    details: 钉钉内部知识库
    link: https://alidocs.dingtalk.com/i/spaces/apjG5kK26OQwKXkE/overview
    linkText: 查看更多
  - icon: 📚
    title: SaleSmartly - 帮助中心
    details: 帮助中心
    link: https://help.salesmartly.com/
    linkText: 查看更多
  # - icon: 📘
  #   title: WhatsApp Business 开放平台
  #   details: 消息模板指南
  #   link: /nav/FaceBook/模板消息/指南
  #   linkText: 查看更多
  # - icon: 💡
  #   title: WhatsApp Business Api常见问题
  #   details: 常见问题
  #   link: /nav/FaceBook/模板消息/指南#常见问题
  #   linkText: 查看更多
  # - icon: ✨
  #   title: WhatsApp Business 开放平台
  #   details: 消息模板指南
  #   link: /nav/FaceBook/WhatsApp/帮助中心
  #   linkText: 查看更多
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
<!-- 五彩纸屑组件 -->
<confetti />
<!-- 不蒜子统计 -->
<bsz/>
