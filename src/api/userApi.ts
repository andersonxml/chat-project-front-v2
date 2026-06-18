import { refreshToken } from "./authApi";

interface UsersResponse {
    name: string,
    email: string,
    createdAt: Date,
    updatedAt: Date,
}

export async function getUsers() {
    try {
        const accessToken = localStorage.getItem('token');
        const user_id = localStorage.getItem('id');
        const result = await fetch(`/api/users`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        })

        if (result.status === 401) {
            const token = await refreshToken(Number(user_id));

            localStorage.setItem('token', token);
        }

        const resultData: UsersResponse = await result.json();

        return resultData
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        }
    }
}