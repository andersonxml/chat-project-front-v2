import type { NavigationGuard } from 'vue-router'

export const AuthMiddleware: NavigationGuard = (to) => {
  const token = localStorage.getItem('token')

  if (to.meta.requiresAuth && !token) {
    return { path: '/' } 
  }
}