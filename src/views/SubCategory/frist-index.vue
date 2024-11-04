<script setup>
// 1 面包屑
import { getCategoryFilterAPI} from '@/apis/category'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const route=useRoute()
const categoryDate=ref({})
const getCategoryDate=async()=>{
     const res=await getCategoryFilterAPI(route.params.id)
     categoryDate.value=res.result
}
onMounted(()=>{
  getCategoryDate()
})
// 2 列表基础渲染
import GoodsItem from '../Home/components/GoodsItem.vue';
import { getSubCategoryAPI } from '@/apis/category'
const goodList = ref([])
const reqData = ref({
     categoryId: route.params.id ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime'
})
const getGoodList = async () => {
  const res = await getSubCategoryAPI(reqData.value)
  console.log('2级商品列表',res)
 goodList.value=res.result.items
}
onMounted(() => {
  getGoodList()
})
/* tab切换 */
const tabChange = () => {
  console.log('tab切换了', reqData.value.sortField)
   reqData.value.page = 1
  getGoodList()
}
// 3 无限加载
const disabled=ref(false)
const load = async() => {
  console.log('到达底部打印这句话')
  // 获取下一页数据
  reqData.value.page++
  const res = await getSubCategoryAPI(reqData.value)
  // 新老数组拼接
  // ...goodList.value 老
  // res.result.items 新
  goodList.value=[...goodList.value,...res.result.items]
  // 加载完毕结束监听 elementplus
  if (res.result.items.length === 0) {
  disabled.value=true
}
}
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categoryDate.parentId}` }">{{categoryDate.parentName}}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{categoryDate.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField"  @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
         <!-- 商品列表-->
        <GoodsItem v-for="good in goodList" :good="good" :key="good.id"></GoodsItem>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>
