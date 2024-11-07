
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { computed } from 'vue'
export const useCarStore=   defineStore('car', () => {
  // 数据
  const carList = ref([])
  // 方法  添加购物车
  const addCar = (goods) => {
    const item = carList.value.find((item) => {
      goods.skuId === item.skuId
    })
    console.log('购买商品信息', goods)
    if (item) {
      item.count++
    }
    else {
      carList.value.push(goods)
    }
  }

  // 方法  删除
  const delCar = (skuId) => {
    const idx = carList.value.findIndex((item) => {
      skuId===item.skuId
    })
    carList.value.splice(idx,1)
  }
  //方法 计算属性 计算购买物品综合 总价格
  const allCount = computed(() => carList.value.reduce((a, c) => a + c.count , 0))
  const allPrice = computed(() => carList.value.reduce((a, c) => a + c.count*c.price , 0))
  return {
    carList,
    allCount,
    allPrice,
    addCar,
    delCar,

  }
},
  // 引入   pinia-plugin-persistedstate插件
  {
    persist: true,
  }
)
