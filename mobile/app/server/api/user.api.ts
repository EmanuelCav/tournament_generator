import { api } from "./api";

import { ILogin, IRegister } from "../../interface/User";

export const loginApi = async (userData: ILogin) => {
    return await api.post('/users/login', userData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const registerApi = async (userData: IRegister) => {
    return await api.post('/users/register', userData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}