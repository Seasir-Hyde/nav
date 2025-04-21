<template>
  <ClientOnly>
    <div class="busuanzi-container text-sm text-gray-500 dark:text-gray-400 mt-4">
      <p class="show-time mb-2">当前时间：{{ formattedTime }}</p>
      <p>
        本文总阅读量 <span id="busuanzi_page_pv" class="font-medium"></span> 次 | 
        本文总访客量 <span id="busuanzi_page_uv" class="font-medium"></span> 人 |
        本站总访问量 <span id="busuanzi_site_pv" class="font-medium"></span> 次 |
        本站总访客数 <span id="busuanzi_site_uv" class="font-medium"></span> 人
      </p>
      
      <a href="https://busuanzi.9420.ltd/" target="_blank" style="display:flex;align-items:center;justify-content:center;text-decoration: none; color: #5da8ff;">本网站由不蒜子API提供数据统计接口服务
      </a>
      <span id="runtime"></span>
      <p>人心中的成见是一座大山~</p>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const formattedTime = ref('')
let timer: number

const formatTime = () => {
  let dt = new Date()
  let y = dt.getFullYear()
  let mt = dt.getMonth() + 1
  let day = dt.getDate()
  let h = dt.getHours().toString().padStart(2, '0')
  let m = dt.getMinutes().toString().padStart(2, '0')
  let s = dt.getSeconds().toString().padStart(2, '0')
  formattedTime.value = `${y}年${mt}月${day}日 ${h}:${m}:${s}`
}

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://busuanzi.9420.ltd/js'
  script.defer = true
  document.body.appendChild(script)

  formatTime()
  timer = setInterval(formatTime, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped>
.busuanzi-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

#busuanzi_page_pv,
#busuanzi_page_uv,
#busuanzi_site_pv,
#busuanzi_site_uv,
.show-time {
  color: #5da8ff;
  font-size: 13px;
  margin-bottom: 4px;
}

@media (max-width: 640px) {
  .show-time {
    order: -1;
    width: 100%;
    text-align: center;
    padding-bottom: 8px;
  }
}

@media (max-width: 640px) {
  .busuanzi-container p {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    padding: 0 16px;
    font-size: 13px;
  }
}

#busuanzi_page_pv,
#busuanzi_page_uv,
#busuanzi_site_pv,
#busuanzi_site_uv,
.show-time {
  color: #5da8ff;
  font-size: 13px;
  margin-bottom: 4px;
}

@media (max-width: 640px) {
  .show-time {
    order: -1;
    width: 100%;
    text-align: center;
    padding-bottom: 8px;
  }
}
</style>
