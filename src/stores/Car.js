
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
  //方法 singlechacke
  const singleCheck = (skuId,selected) => {
    const item = carList.value.find((item) => item.skuId === skuId)
    item.selected=selected
  }
  // 方法 是否全选
    const isAll=computed(()=>carList.value.every((item)=>item.selected))
  //方法 让所有框都选中或者不选
  const allCheck = (selected) => {
    carList.value.forEach(item=>item.selected=selected)
  }
  return {
    carList,
    allCount,
    allPrice,
    addCar,
    delCar,
    singleCheck,
    isAll,
    allCheck
  }
},
  // 引入   pinia-plugin-persistedstate插件
  {
    persist: true,
  }
)
