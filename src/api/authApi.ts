import type { LoginDTO, RegisterDTO } from "../dtos/AuthDTO";
import { router } from "../routes";
import { isExpired } from "../shared/middlewares/isExpired";

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

export async function postRegister(data: RegisterDTO) {
    try {
        let accessToken = localStorage.getItem('token');
        if (accessToken && isExpired(accessToken)) {
            accessToken = await refreshToken();
            if (!accessToken) {
                router.push('/')
                localStorage.clear()

                return
            }
            localStorage.setItem('token', accessToken!);
        }

        const result = await fetch(`/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                password: data.password,
                role: data.role,
            })
        })

        const resultData = await result.json();
        
        return resultData.message
    } catch (error) {

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

export async function refreshToken() {
    try {
        const result = await fetch(`/api/auth/refresh`, {
            method: 'POST',
            credentials: "include"
        })

        const data = await result.json();

        return data
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        }
    }
}

export async function postLogout() {
    try {
        const result = await fetch(`/api/auth/logout`, {
            method: 'POST',
            credentials: "include"
        })

        if (!result.ok) {
            router.push('/')
        }

        const data = result.json()

        router.push('/')
        return data
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        }
    }
}