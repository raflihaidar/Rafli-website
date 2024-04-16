import './assets/main.css'
import { MotionPlugin } from '@vueuse/motion'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(MotionPlugin)
app.mount('#app')
