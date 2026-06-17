import type { LoginDTO } from "../dtos/AuthDTO";

interface LoginResponse {
    accessToken: string,
    user: {
        id: number,
        email: string,
        name: string,
    }
}
const STORAGE_KEYS = {
    NAME: 'name',
    EMAIL: 'email',
    TOKEN: 'token'
} as const

export async function postLogin(data: LoginDTO): Promise<LoginResponse | false | undefined> {
    try {
        const result = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
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

        localStorage.setItem(STORAGE_KEYS.NAME, resultData.user.name)
        localStorage.setItem(STORAGE_KEYS.EMAIL, resultData.user.email)
        localStorage.setItem(STORAGE_KEYS.TOKEN, resultData.accessToken)

        return resultData
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        }
    }
}