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

export const subscriptionsApi = async () => {
    return await api.get('/subscriptions')
}

export const statusApi = async (token: string) => {
    return await api.put("/users", null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const autoLoginApi = async (nickname: string) => {
    return await api.post(`/users/autologin/${nickname}`)
}