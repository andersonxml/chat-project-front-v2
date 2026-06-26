import { postLogin, postRegister } from "../api/authApi";
import type { LoginDTO, RegisterDTO } from "../dtos/AuthDTO";

export function UseAuth() {
    async function register(data: RegisterDTO) {
        try {
            const result = await postRegister({ 
                name: data.name, 
                email: data.email, 
                password: data.password, 
                role: data.role 
            })
            
            return result;
        } catch (error) {

        }
    }
    async function login(data: LoginDTO) {
        try {
            const result = await postLogin({ email: data.email, password: data.password })
            
            return result;
        } catch (error) {

        }
    }

    return {
        register,
        login
    }
}