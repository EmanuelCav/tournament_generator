import { ICreatePlayer, ICreateTeam } from "../../interface/Event";
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
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        }
    })
}

export const joinEventApi = async (id: string, token: string) => {
    return await api.patch(`/events/competitors/${id}`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const createRefereeApi = async (id: string, refereeData: ICreateTeam, token: string) => {
    return await api.post(`/referee/competitor/${id}`, refereeData, {
        headers: {
            'Content-type': "application/json",
            'Authorization': `Bearer ${token}`
        }
    })
}

export const removeRefereeApi = async (rid: string, cid: string, token: string) => {
    return await api.delete(`/referee/${rid}/competitor/${cid}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const updateRefereeApi = async (rid: string, cid: string, refereeData: ICreateTeam, token: string) => {
    return await api.put(`/referee/${rid}/competitor/${cid}`, refereeData, {
        headers: {
            'Content-type': "application/json",
            'Authorization': `Bearer ${token}`
        }
    })
}

export const createPlayerApi = async (tid: string, cid: string, playerData: ICreatePlayer, token: string) => {
    return await api.post(`/player/team/${tid}/competitor/${cid}`, playerData, {
        headers: {
            'Content-type': "application/json",
            'Authorization': `Bearer ${token}`
        }
    })
}