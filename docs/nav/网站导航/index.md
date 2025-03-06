---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import { NAV_DATA } from './Tools'
</script>

<!-- 引入公共的样式文件 -->
<style src="../../.vitepress/theme/styles/index.scss"></style>

# 网站导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

::: tip
该导航由 [maomao](https://github.com/maomao1996) 开发，由[666seasir666](https://github.com/)修改。保留版权声明！
:::
