import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
/* 2 路由引入 */
import router from './router'
/*1 在入口文件 接口测试 */
import { getCategory } from '@/apis/testAPI'
getCategory().then(res => {
  console.log(res)
})
/* 1 在入口文件 接口测试 */
/* 3 静态资源样式 样式重置 */
import  '@/styles/common.scss'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
