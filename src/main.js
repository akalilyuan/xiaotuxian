//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'



// import {getCategoryAPI} from '@/apis/testAPI'
// getCategoryAPI().then(res=>{
//     console.log(res)
// })

import { lazyPlugin } from '@/directives'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(lazyPlugin)

app.mount('#app')


//定义全局指令（不推荐） 入口文件只做初始化 应该定义一个插件 然后导入 注册 就行
// app.directive('img-lazy', {
//     mounted (el, binding) {
//       // el: 指令绑定的那个元素 img
//       // binding: binding.value  指令等于号后面绑定的表达式的值  图片url
//       console.log(el, binding.value)
//       const { stop } = useIntersectionObserver(
//         el,
//         ([{ isIntersecting }]) => {
//           console.log(isIntersecting)
//           if (isIntersecting) {
//             // 进入视口区域
//             el.src = binding.value
//             stop()
//           }
//         },
//       )
//     }
//   })