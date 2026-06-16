import type { LoginDTO } from "../dtos/AuthDTO";
import { router } from "../routes";

export async function postLogin(data: LoginDTO) {
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

        if(result.status === 401) {
            
        }

        const resultData = await result.json();

        localStorage.setItem('name', resultData.user.name);
        localStorage.setItem('email', resultData.user.email);
        localStorage.setItem('token', resultData.accessToken);
        

        if(result.ok) {
            router.push('/chat')
        }
        return resultData
    } catch (error) {

    }
}