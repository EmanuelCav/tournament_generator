import { api } from "./api";

export const statusApi = async (token: string) => {
    return await api.get(`/status`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}