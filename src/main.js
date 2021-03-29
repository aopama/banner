import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//公用样式
import '@/assets/css/reset.css'
import '@/assets/css/main.css'
import '@/assets/iconfont/iconfont.css'

createApp(App).use(store).use(router).mount('#app')
