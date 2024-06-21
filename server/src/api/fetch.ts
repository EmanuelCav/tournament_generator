export const commentApi = async (comment: string, id: string, token: string) => {

    const response = await fetch(`http://localhost:8080/comments/events/${id}`, {
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