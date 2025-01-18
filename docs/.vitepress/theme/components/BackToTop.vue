<template>
  <div class="back-to-top" v-show="isVisible" @click="scrollToTop" role="button" tabindex="0"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ElMessage } from 'element-plus' // 引入消息提示功能

const isVisible = ref(false)

// 自定义的平滑滚动函数
const scrollToTop = () => {
  const currentScroll = window.pageYOffset // 当前滚动距离
  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollToTop) // 递归调用
    window.scrollTo(0, currentScroll - currentScroll / 8) // 平滑减少滚动距离
  } else {
    // 当滚动到顶部时，显示消息提示
    ElMessage({
      message: '已回到顶部',
      type: 'success',
      duration: 2000, // 消息持续时间
    })
  }
}

// 监听滚动事件，显示或隐藏返回顶部按钮
const handleScroll = () => {
  isVisible.value = window.scrollY > 100 // 当滚动超过 100px 时显示按钮
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  transition: transform 0.8s ease-in-out !important;
}

.back-to-top:hover {
  transform: scale(1.2); /* 悬停时缩放按钮 */
}

.back-to-top::before {
  content: '';
  display: block;
  width: 44px; /* 图标大小 */
  height: 44px;
  background-image: url('/icons/back-top.svg'); /* 使用 SVG 图标的路径 */
  background-size: cover; /* 适应背景大小 */
  background-position: center; /* 居中显示图标 */
}
</style>
