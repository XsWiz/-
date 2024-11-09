import { computed, onUnmounted, ref } from 'vue'
import dayjs from 'dayjs'
export const useCountDown = () => {
  // 1 数据
  // 格式化时间
  const time = ref(0)
  let timer=null
  const formatTime=computed(()=>dayjs.unix(time.value).format('mm分ss秒'))
  // 2 开启倒计时函数
  const start = (currentTiime) => {
    //  开启倒计时 每隔一秒减一  定时器内存溢出
    time.value = currentTiime
    timer =setInterval(() => {
      time.value--
    },1000)
  }
  // 组件销毁时清除定时器
  onUnmounted(() => {
    if (timer) {
      clearInterval(timer)
    }
  })
  return {
    formatTime,
    start
  }
}
