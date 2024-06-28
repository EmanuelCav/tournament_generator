import { host_client, host_dev } from "../config/config"

export const commentApi = async (comment: string, id: string, token: string) => {

    const url = process.env.NODE_ENV === 'production' ? `${host_client}` :  `${host_dev}`

    const response = await fetch(`${url}/comments/events/${id}`, {
        body: JSON.stringify({ comment }),
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })

    const data = await response.json()

    return data

}