import { defineStore } from 'pinia'

export const useChatStores = defineStore('chat', {
    state: () => ({
        userSelected: '',
        userSelectedRole: '',
    }),
    actions: {
        setUserSelected(user: { name: string, role: string}) {
            this.userSelected = user.name
            this.userSelectedRole = user.role
        }
    }
})