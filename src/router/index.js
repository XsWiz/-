// createRouter：创建router实例对象
// createWebHistory：创建history模式的路由
import Login from '@/views/Login/frist-index.vue'
import Layout from '@/views/Layout/frist-index.vue'
import Home from '@/views/Home/frist-index.vue'
import Category from '@/views/Category/frist-index.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component:Home
        },
        {
          path: 'category/:id',
          component:Category
        }
      ]
    },
  {
    path: '/login',
    component: Login,
  }
  ]
})

export default router
