import { router } from "../routes";
import { isExpired } from "../shared/middlewares/isExpired";
import { refreshToken } from "./authApi";

type UsersResponse = {
    name: string,
    email: string,
    role: string,
    createdAt: string,
    updatedAt: string,
}

export async function getUsers() {
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

        const result = await fetch(`/api/users`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        })
        if (!result.ok) {
            router.push('/')
            localStorage.clear()
            return
        }
        const resultData: UsersResponse[] = await result.json();

        return resultData
    } catch (error) {
        if (error instanceof Error) {
            router.push('/')
            localStorage.clear()
        }
    }
}

export async function getMe() {
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

        const result = await fetch('/api/users/me', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })

        const resultData = await result.json()

        return ({
            name: resultData.name,
            email: resultData.email,
            role: resultData.role
        })
    } catch (error) {
        if (error instanceof Error) {
            router.push('/')
            localStorage.clear()
        }
    }
}