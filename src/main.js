//import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// import {getCategoryAPI} from '@/apis/testAPI'
// getCategoryAPI().then(res=>{
//     console.log(res)
// })
import { lazyPlugin } from '@/directives'
// 引入全局组件插件
import { componentPlugin } from '@/components'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
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