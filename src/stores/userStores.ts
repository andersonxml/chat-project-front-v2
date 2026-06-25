import { defineStore } from 'pinia'
import { getMe } from '../api/userApi';

export const useUserStore = defineStore('user', {
    state: () => ({
        name: '',
        email: '',
        role: '',
    }),
    actions: {
        setUser(user: {
            name: string,
            email: string,
            role: string
        }) {
            this.name = user.name;
            this.email = user.email;
            this.role = user.role;
        },
        async loadUser() {
            const user = await getMe()
            
            this.setUser(user!);
        }
    }
})