import type { NavigationGuard } from 'vue-router'
import { useUserStore } from '../../stores/userStores'

export const AuthMiddleware: NavigationGuard = (to) => {
  const token = localStorage.getItem('token')

  if (to.meta.requiresAuth && !token) {
    return { path: '/' } 
  }
}

export const AuthAdminMiddleware: NavigationGuard = async (to) => {
  const userStores = useUserStore()
  if(!userStores.role) {
    await userStores.loadUser()
  }

  if (to.meta.requiresAdminAuth && userStores.role !== 'ADMIN'.toUpperCase()) {
    return {path: '/chat'}
  }
}