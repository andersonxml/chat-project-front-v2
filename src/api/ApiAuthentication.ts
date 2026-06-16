type loginSchema = {
    email: string,
    password: string
}

export async function postLogin(data: loginSchema) {
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

        const resultData = await result.json();
        return resultData;
    } catch (error) {

    }
}