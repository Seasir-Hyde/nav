<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide } from 'vue'
import Giscus from '@giscus/vue'

import { usePageId } from '../composables'
// @ts-ignore
import MNavVisitor from './MNavVisitor.vue'
// @ts-ignore
import MDocFooter from './MDocFooter.vue'
// @ts-ignore
import BackToTop from './BackToTop.vue' //返回顶部
// @ts-ignore
import MouseClick from './MouseClick.vue' // 鼠标点击效果
// @ts-ignore
import MouseFollower from './MouseFollower.vue' // 鼠标跟随效果

const { Layout } = DefaultTheme
const { isDark, theme, frontmatter } = useData()
const pageId = usePageId()

const { comment } = theme.value

const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

// 定义一个名为toggle-appearance的提供者
provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  // 如果不允许过渡效果，则直接切换isDark的值
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  // 定义一个clipPath，根据鼠标的坐标和窗口大小来确定
  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )}px at ${x}px ${y}px)`,
  ]

  // @ts-ignore
  // 开始一个视图过渡，在过渡完成后，切换isDark的值，并等待下一帧
  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  // 动画过渡clipPath，根据isDark的值来决定使用哪个clipPath
  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
    },
  )
})
</script>

<template>
  <Layout v-bind="$attrs">
    <!--
      相关插槽
      https://vitepress.dev/zh/guide/extending-default-theme#layout-slots
      https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/Layout.vue
    -->
    <template #layout-top>
      <MouseFollower />
      <MouseClick />
    </template>

    <template #nav-bar-title-after>
      <MNavVisitor />
    </template>

    <template v-if="comment && frontmatter.comment !== false" #doc-footer-before>
      <div class="doc-comments">
        <Giscus
          id="comments"
          mapping="specific"
          :term="pageId"
          strict="1"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          :theme="isDark ? 'dark' : 'light'"
          lang="zh-CN"
          loading="lazy"
          v-bind="{ ...comment }"
        />
      </div>
    </template>

    <template #doc-after>
      <MDocFooter />
    </template>

  </Layout>

  <div>
    <!-- 返回顶部 -->
    <BackToTop />
  </div>
</template>

<style>
.prev-next.prev-next {
  border-top: none;
}

.doc-comments {
  margin-top: 24px;
  margin-bottom: 48px;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 24px;
}
</style>
