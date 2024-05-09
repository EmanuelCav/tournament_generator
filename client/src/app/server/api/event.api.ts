import { api } from "./api";

export const eventsApi = async () => {
    return await api.get('/events')
}

export const eventApi = async (id: string, token: string) => {
    return await api.get(`/events/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const createEventApi = async (formData: FormData, token: string) => {
    return await api.post(`/events`, formData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}