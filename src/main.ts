import {createApp} from 'vue'
import "@/assets/less/assets.less"
import App from './App.vue'
import router from './router'
import {createPinia, Pinia} from "pinia"

const pinia: Pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
