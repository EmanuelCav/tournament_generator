import { useState, ChangeEvent, FormEvent } from "react"
import { Box, Button, Paper, TextField, Typography } from "@mui/material"

import CloseForm from "../../../general/CloseForm"

import { ITarget } from "../../../../interface/Event"
import { AddScorePropsType } from "../../../../types/event.types"

import { updateScoreAction } from "../../../../server/actions/event.actions"

const AddScore = ({ user, dispatch, event, matchData, setIsAddScore }: AddScorePropsType) => {

    const initialState: ITarget = {
        targetLocal: matchData.targetLocal ? matchData.targetLocal : 0,
        targetVisitant: matchData.targetVisitant ? matchData.targetVisitant : 0
    }

    const [targetData, setTargetData] = useState<ITarget>(initialState)

    const { targetLocal, targetVisitant } = targetData

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        if (Number(value) < 0) return

        setTargetData({ ...targetData, [name]: value })
    }

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        dispatch(updateScoreAction({
            eid: event._id!,
            match: matchData,
            setIsAddScore,
            targetData,
            token: user.token!
        }))

    }

    return (
        <Box display='flex' zIndex={16} justifyContent='center' width='100%' height='100vh' alignItems='center' position='fixed' top={0} left={0} sx={{
            background: 'rgba(0, 0, 0, 0.5)'
        }}>
            <Paper elevation={3} sx={{ p: 2, width: '33.33%' }}>
                <CloseForm handleClose={() => setIsAddScore(false)} />
                <Typography color='#33CC33' variant="h5">Update the score</Typography>
                <Box component="form" noValidate p={2} onSubmit={handleSumbit}>
                    <Box justifyContent='space-evenly' display={'flex'} alignItems={'center'}>
                        <TextField
                            type="number"
                            margin="normal"
                            id="targetLocal"
                            label={matchData.local.name}
                            name="targetLocal"
                            color='success'
                            value={targetLocal}
                            sx={{
                                '&:hover fieldset': {
                                    borderColor: '#33CC33 !important',
                                },
                            }}
                            onChange={handleChange}
                        />
                        <TextField
                            type="number"
                            margin="normal"
                            id="targetVisitant"
                            label={matchData.visitant.name}
                            name="targetVisitant"
                            autoFocus
                            color='success'
                            value={targetVisitant}
                            sx={{
                                '&:hover fieldset': {
                                    borderColor: '#33CC33 !important',
                                },
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

export default AddScore