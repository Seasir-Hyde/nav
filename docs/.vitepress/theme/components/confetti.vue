<script setup lang="ts">
// @ts-ignore
import confetti from 'canvas-confetti'
import { inBrowser } from 'vitepress'

if (inBrowser) {
  /* 纸屑代码这里配置 */
  confetti({
    particleCount: 100,
    spread: 170,
    origin: { y: 0.6 },
  })
}
</script>
