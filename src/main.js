
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
// 1 引入懒加载插件
import { lazyPlugin } from '@/directives/index'
// 2  引入全局组件插件
import { componentPlugin } from '@/components'
// 3 引入 pinia-plugin-persistedstate插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()
// 引入   pinia-plugin-persistedstate插件
pinia.use(piniaPluginPersistedstate)


app.use(pinia)
app.use(router)
// 注册懒加载插件
app.use(lazyPlugin)
// 引入全局组件插件
app.use(componentPlugin)

app.mount('#app')
