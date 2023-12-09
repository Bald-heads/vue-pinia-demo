import {createApp} from 'vue'
import "@/assets/less/assets.less"
import App from './App.vue'
import router from './router'
import {createPinia, Pinia} from "pinia"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"

const pinia: Pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

createApp(App).use(router).use(pinia).mount('#app')
