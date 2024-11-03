// 轮播图的依赖  从bannaer粘过来


import { ref } from 'vue'
import { onMounted } from 'vue'
import { getBannerAPI } from '@/apis/home'
export  function useBanner() {
  const bannerList = ref([])
  const getBanner = async () => {
    const res = await getBannerAPI()
    console.log(res)
    bannerList.value = res.result
  }
  onMounted(() => {
    getBanner()
  })
  return {
    bannerList
  }
}





