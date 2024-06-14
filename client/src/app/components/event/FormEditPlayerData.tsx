import { useState, ChangeEvent, FormEvent } from "react"
import { Box, Button, Paper, TextField, Typography } from "@mui/material"

import { FormEditPlayerDataPropsType } from "../../types/event.types"
import { IPlayerData } from "../../interface/Event"

import { updatePlayerDataAction } from "../../server/actions/event.actions"

const FormEditPlayerData = ({ dispatch, user, playerInfo, event, setIsEditPlayerData }: FormEditPlayerDataPropsType) => {

    const initialState: IPlayerData = {
        points: playerInfo.points,
        assists: playerInfo.assists,
        cards: playerInfo.cards,
        serialCards: playerInfo.serialCards
    }

    const [playerData, setPlayerData] = useState<IPlayerData>(initialState)

    const { points, assists, cards, serialCards } = playerData

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        if (Number(value) < 0) return

        let numberValue = Number(value)
        
        setPlayerData({ ...playerData, [name]: numberValue })
    }

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        dispatch(updatePlayerDataAction({
            playerData,
            token: user.token!,
            pid: playerInfo._id,
            cid: event.competitors?.find(c => c.user._id === user.user?._id)?._id!,
            setIsEditPlayerData
        }))

    }

    return (
        <Box display='flex' zIndex={16} justifyContent='center' width='100%' height='100vh' alignItems='center' position='fixed' top={0} left={0} sx={{
            background: 'rgba(0, 0, 0, 0.5)'
        }}>
            <Paper elevation={3} sx={{ p: 2, width: '37.33%' }}>
                <Typography color='#33CC33' variant="h5">Update the player data</Typography>
                <Box component="form" noValidate p={2} onSubmit={handleSumbit}>
                    <Box justifyContent='space-evenly' display={'flex'} alignItems={'center'}>
                        <TextField
                            type="number"
                            margin="normal"
                            id="points"
                            label="Points/Goals"
                            name="points"
                            color='success'
                            value={points}
                            sx={{
                                '&:hover fieldset': {
                                    borderColor: '#33CC33 !important',
                                },
                                mx: 1
                            }}
                            onChange={handleChange}
                        />
                        <TextField
                            type="number"
                            margin="normal"
                            id="assists"
                            label="Assists"
                            name="assists"
                            color='success'
                            value={assists}
                            sx={{
                                '&:hover fieldset': {
                                    borderColor: '#33CC33 !important',
                                },
                                mx: 1
                            }}
                            onChange={handleChange}
                        />
                        <TextField
                            type="number"
                            margin="normal"
                            id="cards"
                            label="Cards"
                            name="cards"
                            color='success'
                            value={cards}
                            sx={{
                                '&:hover fieldset': {
                                    borderColor: '#33CC33 !important',
                                },
                                mx: 1
                            }}
                            onChange={handleChange}
                        />
                        <TextField
                            type="number"
                            margin="normal"
                            id="serialCards"
                            label="Expulsions"
                            name="serialCards"
                            color='success'
                            value={serialCards}
                            sx={{
                                '&:hover fieldset': {
                                    borderColor: '#33CC33 !important',
                                },
                                mx: 1
                            }}
                            onChange={handleChange}
                        />
                    </Box>
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

export default FormEditPlayerData