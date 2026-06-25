import type { NavigationGuard } from 'vue-router'
import { useUserStore } from '../../stores/userStores'

export const AuthMiddleware: NavigationGuard = (to) => {
  const token = localStorage.getItem('token')

  if (to.meta.requiresAuth && !token) {
    return { path: '/' } 
  }
}

export const AuthAdminMiddleware: NavigationGuard = (to) => {
  const userStores = useUserStore()
  if (to.meta.requiresAdminAuth && userStores.role !== 'admin'.toUpperCase()) {
    return {path: '/chat'}
  }
}