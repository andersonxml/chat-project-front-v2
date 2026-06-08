import { createWebHistory, createRouter } from 'vue-router'

import AuthenticationPage from '../pages/AuthenticationPage.vue'
import ChatPage from '../pages/ChatPage.vue'

const routes = [
  { path: '/', component: AuthenticationPage },
  { path: '/chat', component: ChatPage }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})