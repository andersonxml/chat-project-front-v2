import { createWebHistory, createRouter } from 'vue-router'

import AuthenticationPage from '../pages/AuthenticationPage.vue'
import ChatPage from '../pages/ChatPage.vue'
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
    path: '/admin',
    component: AdminPage,
    meta: {
      requiresAdminAuth: true
    }
  },
  {
    path: '/users',
    component: UsersLayout,
    meta: {
      requiresAdminAuth: true
    }
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(AuthMiddleware);
router.beforeEach(AuthAdminMiddleware);