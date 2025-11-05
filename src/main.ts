import { createApp } from 'vue'
import './style.css'
import router from './router/index.ts' // 导入路由配置
import App from './App.vue'

createApp(App)
  .use(router) // 注册路由
  .mount('#app')
