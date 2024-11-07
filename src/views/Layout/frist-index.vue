<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
// 触发action
import { useCategoryStore } from '@/stores/categoryStores'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()

onMounted(() => {
  categoryStore.getCategory()
})
/*  触发action */
</script>
<template>
   <LayoutFixed></LayoutFixed>
   <LayoutNav />
   <LayoutHeader />
   <!-- 二级路由出口 -->
    <!-- 给 routerv-view 添加key属性，破坏缓存    为了banner之请求一次-->
   <!-- <router-view :key="$route.fullPath"></router-view> -->
   <router-view></router-view>
   <LayoutFooter />
</template>



