import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout.js'


export const useCategoryStore = defineStore('category', () => {
  /* 导航的数据 */
  const categoryList = ref([])
  /* 导航的方法 */
  const getCategory = async () => {
    const res = await getCategoryAPI()
    // console.log(res)
    // console.log(res.result)
    categoryList.value = res.result
  }

  return { categoryList, getCategory }
})
