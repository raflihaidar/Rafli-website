import './assets/main.css'
import { MotionPlugin } from '@vueuse/motion'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(MotionPlugin)
app.use(pinia)
app.mount('#app')
