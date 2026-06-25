import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './routes/index.ts'
import { createPinia, type Pinia } from 'pinia'
import { useUserStore } from './stores/userStores.ts'

const app: any = createApp(App)
const pinia: Pinia = createPinia()

app.use(router)
app.use(pinia)

const userStores = useUserStore()
const token = localStorage.getItem('token')

if( token) {
     try {
          await userStores.loadUser()
     } catch {
          localStorage.removeItem('token')
     }
}

app.mount('#app')