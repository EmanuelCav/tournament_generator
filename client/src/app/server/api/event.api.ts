import { api } from "./api";

export const eventsApi = async () => {
    return await api.get('/events')
}

export const userEventApi = async (token: string) => {
    return await api.get(`/events/users`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
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
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        }
    })
}

export const removeEventApi = async (id: string, token: string) => {
    return await api.delete(`/events/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const createTeamApi = async (id: string, formData: FormData, token: string) => {
    return await api.patch(`/teams/events/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        }
    })
}

export const removeTeamApi = async (tid: string, eid: string, token: string) => {
    return await api.patch(`/teams/${tid}/events/${eid}`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const updateTeamApi = async (tid: string, eid: string, teamData: FormData, token: string) => {
    return await api.put(`/teams/${tid}/events/${eid}`, teamData, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}