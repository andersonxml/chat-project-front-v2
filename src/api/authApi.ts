import type { LoginDTO } from "../dtos/AuthDTO";

import { useUserStore } from "../stores/userStores";

interface LoginResponse {
    accessToken: string,
    user: {
        id: number,
        email: string,
        role: string,
        name: string,
    }
}

export async function postLogin(data: LoginDTO): Promise<LoginResponse | false | undefined> {
    const userStore = useUserStore()
    try {
        const result = await fetch(`/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })

        if (!result.ok) return false;

        const resultData: LoginResponse = await result.json();

        localStorage.setItem('token', resultData.accessToken)

        userStore.setUser({
            name: resultData.user.name,
            email: resultData.user.email,
            role: resultData.user.role
        })

        return resultData
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        }
    }
}

export async function refreshToken(id: number) {
    try {
        const result = await fetch(`/api/auth/refresh/${id}`, {
            method: 'POST',
            credentials: "include"
        })
        // console.log(result);
        const data = await result.json();
        // console.log(data);
        return data
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        }
    }
}