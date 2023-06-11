import { getCategoryAPI } from '@/apis/layout';
import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useCategoryStore = defineStore('category',()=> {
//导航列表的数据管理
//state 导航列表数据
const categoryList =ref([])

//action 获取导航数据方法
const getCategory = async ()=>{
  const res = await getCategoryAPI()
  //console.log(res)
  categoryList.value=res.result
}

return {
    categoryList,
    getCategory
}
})