---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import { NAV_DATA } from './Line'
</script>

<!-- 引入公共的样式文件 -->
<style src="../../.vitepress/theme/styles/index.scss"></style>

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

## [如何建立 LINE 的社群？](https://line-zhcn.com/6.html)

![如何建立LINE的社群？](https://assets-cdn.salesmartly.com/prod/project/b87x3n/pc0/chat/plugin/b87x3n/img/20250111/1736586208578/f8dc174ed3aee15f8d206aedd5216eab.jpeg)

::: tip
该导航由 [maomao](https://github.com/maomao1996) 开发，由[666seasir666](https://github.com/)修改。保留版权声明！
:::
