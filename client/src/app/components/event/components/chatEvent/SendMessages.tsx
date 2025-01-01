import { ChangeEvent, FormEvent, useState, useEffect } from "react"
import { Box, Button, TextField } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

import { ICreateComment } from "../../../../interface/Event"
import { SendMessagesPropsType } from "../../../../types/event.types"

import { socket } from "../../../../server/socket"
import { getEvent } from "../../../../server/reducer/event.reducer";

const SendMessages = ({ event, user, dispatch }: SendMessagesPropsType) => {

    const initialState: ICreateComment = {
        comment: ""
    }

    const [commentData, setCommentData] = useState<ICreateComment>(initialState)

    const { comment } = commentData

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setCommentData({ ...commentData, [name]: value })
    }

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        socket.emit("comment", {
            comment: commentData.comment,
            id: event._id!,
            token: user.token
        })

        setCommentData({
            comment: ""
        })
    }

    useEffect(() => {
        socket.on("eventData", (data) => {
            dispatch(getEvent(data))
        })
    }, [socket])

    return (
        <Box display={'flex'} width={'100%'} justifyContent={'space-between'} alignItems={'center'} component="form" noValidate onSubmit={handleSumbit}>
            <TextField
                margin="normal"
                multiline
                maxRows={4}
                fullWidth
                id="comment"
                label="Write a comment"
                name="comment"
                autoFocus
                color='success'
                value={comment}
                sx={{
                    '&:hover fieldset': {
                        borderColor: '#33CC33 !important',
                    },
                }}
                onChange={handleChange}
                autoComplete='off'
                inputProps={{ maxLength: 400 }}
            />
            <Button type="submit" sx={{ ml: 2, cursor: 'pointer' }}>
                <SendIcon color="success" />
            </Button>
        </Box>
    )
}

export default SendMessages