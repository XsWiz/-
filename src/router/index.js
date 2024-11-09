// createRouter：创建router实例对象
// createWebHistory：创建history模式的路由
import Login from '@/views/Login/frist-index.vue'
import Layout from '@/views/Layout/frist-index.vue'
import Home from '@/views/Home/frist-index.vue'
import Category from '@/views/Category/frist-index.vue'
import SubCategory from '@/views/SubCategory/frist-index.vue'
import Detail from '@/views/Detail/frist-index.vue'
import CarList from '@/views/CarList/frist-index.vue'
import CheckOut from '@/views/CheckOut/frist-index.vue'
import Pay from '@/views/Pay/frist-index.vue'
import PayBack from '@/views/Pay/PayBack.vue'
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
        },
        {
          path: 'category/sub/:id',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          component: Detail
        },
        {
          path: 'cartlist',
          component: CarList
        },
        {
          path: 'checkout',
          component: CheckOut
        },
        {
          path: 'pay',
          component: Pay
        },
        {
          path: 'paycallback',
          component: PayBack
        },
      ]
    },
  {
    path: '/login',
    component: Login,
  }
  ],
  // 路由滚动行为定制
  scrollBehavior() {
    return {
      top:0
    }
  }
})

export default router
