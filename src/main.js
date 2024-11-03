
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
// 1 注册全局指令
// 2 导入useIntersectionObserver  vueuse
import { useIntersectionObserver } from '@vueuse/core'
const app = createApp(App)

app.directive('img-lazy', {
  /* ... */
  mounted(el, binding) {
    //1 el 指令绑定的dom对象
    //binding  binding: binding.value  指令等于号后面绑定的表达式的值  图片url
    console.log('111', el, '222', binding.value)
    // 2
     useIntersectionObserver(
      el,
      ([{ isIntersecting }]) => {
        console.log(isIntersecting)
        // 3
        if (isIntersecting)
          el.src = binding.value
      },
    )
  },
})
app.use(createPinia())
app.use(router)

app.mount('#app')
