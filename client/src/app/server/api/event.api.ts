import { ICreatePlayer, ICreateTeam, ISchedule, ITarget } from "../../interface/Event";

import { api } from "./api";

export const eventsApi = async (token: string | undefined) => {
    return await api.get('/events', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
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
    return await api.post(`/referees/competitors/${id}`, refereeData, {
        headers: {
            'Content-type': "application/json",
            'Authorization': `Bearer ${token}`
        }
    })
}

export const removeRefereeApi = async (rid: string, cid: string, token: string) => {
    return await api.delete(`/referees/${rid}/competitors/${cid}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const updateRefereeApi = async (rid: string, cid: string, refereeData: ICreateTeam, token: string) => {
    return await api.put(`/referees/${rid}/competitors/${cid}`, refereeData, {
        headers: {
            'Content-type': "application/json",
            'Authorization': `Bearer ${token}`
        }
    })
}

export const createPlayerApi = async (tid: string, cid: string, playerData: ICreatePlayer, token: string) => {
    return await api.post(`/players/teams/${tid}/competitors/${cid}`, playerData, {
        headers: {
            'Content-type': "application/json",
            'Authorization': `Bearer ${token}`
        }
    })
}

export const removePlayerApi = async (pid: string, cid: string, token: string) => {
    return await api.delete(`/players/${pid}/competitors/${cid}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const updatePlayerApi = async (pid: string, cid: string, playerData: ICreatePlayer, token: string) => {
    return await api.put(`/players/${pid}/competitors/${cid}`, playerData, {
        headers: {
            'Content-type': "application/json",
            'Authorization': `Bearer ${token}`
        }
    })
}

export const generateMatchApi = async (id: string, category: string, round: string, token: string) => {
    return await api.patch(`/matchs/events/${id}?category=${category}&round=${round}`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const joinTeamApi = async (id: string, token: string) => {
    return await api.patch(`/teams/${id}`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const refereeMatchApi = async (mid: string, eid: string, referee: string, token: string) => {
    return await api.put(`/matchs/${mid}/events/${eid}?name=${referee}`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const refereesApi = async (token: string) => {
    return await api.get(`/referees`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const updateScoreApi = async (mid: string, eid: string, targetData: ITarget, token: string) => {
    return await api.put(`/score/matchs/${mid}/events/${eid}`, targetData, {
        headers: {
            'Content-type': "application/json",
            'Authorization': `Bearer ${token}`
        }
    })
}

export const updateScheduleApi = async (mid: string, eid: string, scheduleData: ISchedule, token: string) => {
    return await api.put(`/schedule/matchs/${mid}/events/${eid}`, scheduleData, {
        headers: {
            'Content-type': "application/json",
            'Authorization': `Bearer ${token}`
        }
    })
}