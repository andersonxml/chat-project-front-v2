import { postLogin } from "../api/authApi";
import type { LoginDTO } from "../dtos/AuthDTO";

export function UseAuth() {
    async function login(data: LoginDTO) {
        try {
            const result = await postLogin({ email: data.email, password: data.password })

            if(result)
            return result;
        } catch (error) {

        }
    }

    return {
        login
    }
}