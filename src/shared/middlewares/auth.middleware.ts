import type { NavigationGuard } from 'vue-router'

export const AuthMiddleware: NavigationGuard = (to) => {
  const token = localStorage.getItem('token')

  if (to.meta.requiresAuth && !token) {
    return { path: '/' } 
  }
}

export const AuthAdminMiddleware: NavigationGuard = (to) => {
  const isAdmin = localStorage.getItem('role')

  if (to.meta.requiresAdminAuth && isAdmin !== 'admin'.toUpperCase()) {
    return {path: '/chat'}
  }
}