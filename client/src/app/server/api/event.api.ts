import { api } from "./api";

export const eventsApi = async () => {
    return await api.get('/events')
}