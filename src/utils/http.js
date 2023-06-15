//配置基础实例 （统一接口配置）

// axios基础的封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
// import { ElMessage } from 'element-plus'
// import { useUserStore } from '@/stores/userStore'

// //基础实例
// const httpInstance = axios.create({
//   //接口基地址
//   baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
//   //超时时间
//   timeout: 5000
// })

// // 拦截器

// // axios请求拦截器
// httpInstance.interceptors.request.use(config => {
//   // 1. 从pinia获取token数据
//   const userStore = useUserStore()
//   // 2. 按照后端的要求拼接token数据
//   const token = userStore.userInfo.token
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// }, e => Promise.reject(e))

// // axios响应式拦截器
// httpInstance.interceptors.response.use(res => res.data, e => {
//   // 统一错误提示
//   ElMessage({
//     type: 'warning',
//     message: e.response.data.message
//   })
//   return Promise.reject(e)
// })

import { useUserStore } from '@/stores/userStore'
import router from '@/router'

// export default httpInstance

//===================test代码======================
// 创建axios实例
const http = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios请求拦截器
http.interceptors.request.use(config => {
  const userStore = useUserStore()
  // 2. 按照后端的要求拼接token数据
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
http.interceptors.response.use(res => res.data, e => {
  const userStore=useUserStore()
  //统一错误提示
  ElMessage({
    type:'warning',
    message: e.response.data.message
  })
  //401token失效处理
  //1.清除本地数据
  //2.跳转登录页面
  if(e.response.status==401)
  {
    userStore.clearUserInfo()
    router.push('/login')
  }
  return Promise.reject(e)
})


export default http