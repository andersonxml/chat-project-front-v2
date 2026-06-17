import { getUsers } from "../api/userApi";

export function UseUsers() {
    async function findUsers() {
        const result = await getUsers();

        return result
    }

    return {
        findUsers
    }
}