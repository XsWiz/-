
// 图片懒加载插件
import { useIntersectionObserver } from '@vueuse/core'
// 1
export const lazyPlugin = {
  install(app) {
    // 这里面写逻辑
    app.directive('img-lazy', {
      /* ... */
      mounted(el, binding) {
        //1 el 指令绑定的dom对象
        //binding  binding: binding.value  指令等于号后面绑定的表达式的值  图片url
        console.log('111', el, '222', binding.value)/* 打印好多次 重复监听 */
        // 2
        const { stop }=useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            console.log(isIntersecting)
            // 3
            if (isIntersecting) {
              el.src = binding.value
              stop()
            }

          },
        )
      },
    })
  }
}
