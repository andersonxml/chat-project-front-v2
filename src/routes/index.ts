import { createWebHistory, createRouter } from 'vue-router'

import AuthenticationPage from '../pages/AuthenticationPage.vue'
import ChatPage from '../pages/ChatPage.vue'
import SettingsPage from '../pages/SettingsPage.vue'
import AdminPage from '../pages/AdminPage.vue'
import UsersLayout from '../components/UsersManagement/UsersLayout.vue'
import { AuthAdminMiddleware, AuthMiddleware } from '../shared/middlewares/auth.middleware.ts'

const routes = [
  {
    path: '/',
    component: AuthenticationPage
  },
  {
    path: '/chat',
    component: ChatPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/settings',
    component: SettingsPage,
    meta: {
      requiresAdminAuth: true
    }
  },
  {
    path: '/admin',
    component: AdminPage
  },
  {
    path: '/users',
    component: UsersLayout
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(AuthMiddleware);
router.beforeEach(AuthAdminMiddleware);