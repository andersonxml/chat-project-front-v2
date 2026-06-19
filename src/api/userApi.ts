import { router } from "../routes";
import { isExpired } from "../shared/middlewares/isExpired";
import { refreshToken } from "./authApi";

interface UsersResponse {
    name: string,
    email: string,
    createdAt: Date,
    updatedAt: Date,
}

export async function getUsers() {
    try {
        let accessToken = localStorage.getItem('token');

        if (accessToken && isExpired(accessToken)) {
            const user_id = localStorage.getItem('id');

            accessToken = await refreshToken(Number(user_id));
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
        const resultData: UsersResponse = await result.json();

        return resultData
    } catch (error) {
        if (error instanceof Error) {
            // console.log(error.message)
            router.push('/')
            localStorage.clear()
        }
    }
}