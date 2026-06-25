import { defineStore } from 'pinia'

export const useCreateUserStores = defineStore('createUser', {
    state: () => ({
        showMenuCreateUser: false
    }),
    actions: {
        setShowMenuCreateUser(value: boolean) {
            this.showMenuCreateUser = value
        }
    }
})