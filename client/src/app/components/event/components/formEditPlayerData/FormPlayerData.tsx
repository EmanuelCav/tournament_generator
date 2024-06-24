import { useState, ChangeEvent, FormEvent } from "react"
import { Box, Button, Paper, TextField, Typography } from "@mui/material"

import CloseForm from "../../../general/CloseForm"

import { IPlayerData } from "../../../../interface/Event"
import { FormPlayerDataPropsType } from "../../../../types/event.types"

import { updatePlayerDataAction } from "../../../../server/actions/event.actions"

const FormPlayerData = ({ dispatch, user, statistic, event, setIsEditValue, setIsEditPlayerData }: FormPlayerDataPropsType) => {

    const initialState: IPlayerData = {
        value: statistic.value
    }

    const [playerData, setPlayerData] = useState<IPlayerData>(initialState)

    const { value } = playerData

    const handleClose = () => {
        setIsEditPlayerData(false)
        setIsEditValue(false)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name } = e.target

        if (Number(e.target.value) < 0) return

        let numberValue = Number(e.target.value)

        setPlayerData({ ...playerData, [name]: numberValue })
    }

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        dispatch(updatePlayerDataAction({
            playerData,
            token: user.token!,
            sid: statistic._id,
            cid: event.competitors?.find(c => c.user._id === user.user?._id)?._id!,
            handleClose
        }))

    }

    return (
        <Box display='flex' zIndex={24} justifyContent='center' width='100%' height='100vh' alignItems='center' position='fixed' top={0} left={0} sx={{
            background: 'rgba(0, 0, 0, 0.5)'
        }}>
            <Paper elevation={3} sx={{ p: 2, width: '37.33%' }}>
                <CloseForm handleClose={handleClose} />
                <Typography color='#33CC33' variant="h5">Update {statistic.name}</Typography>
                <Box component="form" noValidate p={2} onSubmit={handleSumbit}>
                    <TextField
                        fullWidth
                        type="number"
                        margin="normal"
                        id="value"
                        label="Value"
                        name="value"
                        color='success'
                        value={value}
                        sx={{
                            '&:hover fieldset': {
                                borderColor: '#33CC33 !important',
                            },
                            mx: 1
                        }}
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2, fontSize: '1.225em' }}
                        color='success'
                        size='large'
                    >
                        ACCEPT
                    </Button>
                </Box>
            </Paper>
        </Box>
    )
}

export default FormPlayerData