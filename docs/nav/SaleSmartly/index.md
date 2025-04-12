---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import { NAV_DATA } from './SaleSmartly'
</script>

<!-- 引入公共的样式文件 -->
<style src="../../.vitepress/theme/styles/index.scss"></style>

# SaleSmartly

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
![image.png](https://assets-cdn.salesmartly.com/prod/project/fj3mnx/chat/messenger/image/20250120/1737361601621/image_1737361601621_26bfa8639cbf1ca71db43d364a9.png)
::: tip
该导航由 [maomao](https://github.com/maomao1996) 开发，由[666seasir666](https://github.com/)修改。保留版权声明！
:::
<!-- 五彩纸屑组件 -->
<confetti />
