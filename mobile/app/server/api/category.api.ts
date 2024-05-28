import { api } from "./api";

export const categoriesApi = async (token: string) => {
    return await api.get(`/categories`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}