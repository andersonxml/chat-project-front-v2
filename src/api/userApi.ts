interface UsersResponse {
    name: string,
    email: string,
    createdAt: Date,
    updatedAt: Date,
}

export async function getUsers() {
    try {
        const accessToken = localStorage.getItem('token');
        const result = await fetch(`${import.meta.env.VITE_API_URL}/api/users`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        })
        if (!result.ok) return false;

        const resultData: UsersResponse = await result.json();

        return resultData
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        }
    }
}