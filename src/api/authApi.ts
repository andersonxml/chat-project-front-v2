import type { LoginDTO } from "../dtos/AuthDTO";

interface LoginResponse {
    accessToken: string,
    user: {
        id: number,
        email: string,
        role: string,
        name: string,
    }
}
const STORAGE_KEYS = {
    ID: 'id',
    NAME: 'name',
    EMAIL: 'email',
    ROLE: 'role',
    TOKEN: 'token'
} as const

export async function postLogin(data: LoginDTO): Promise<LoginResponse | false | undefined> {
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

        localStorage.setItem(STORAGE_KEYS.ID, String(resultData.user.id))
        localStorage.setItem(STORAGE_KEYS.NAME, resultData.user.name)
        localStorage.setItem(STORAGE_KEYS.EMAIL, resultData.user.email)
        localStorage.setItem(STORAGE_KEYS.ROLE, resultData.user.role)
        localStorage.setItem(STORAGE_KEYS.TOKEN, resultData.accessToken)

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