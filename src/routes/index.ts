import { createWebHistory, createRouter } from 'vue-router'

import AuthenticationPage from '../pages/AuthenticationPage.vue'
import ChatPage from '../pages/ChatPage.vue'
import SettingsPage from '../pages/SettingsPage.vue'

const routes = [
  { path: '/', component: AuthenticationPage },
  { path: '/chat', component: ChatPage },
  { path: '/settings', component: SettingsPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})