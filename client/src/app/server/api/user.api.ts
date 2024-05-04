import { api } from "./api";

import { ILogin } from "../../interface/User";

export const loginApi = async (userData: ILogin) => {
    return await api.post('/users/login', userData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}