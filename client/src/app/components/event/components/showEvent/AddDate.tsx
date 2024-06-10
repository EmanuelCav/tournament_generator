import { useState, ChangeEvent, FormEvent, useEffect } from "react"
import { Box, Button, Paper, TextField, Typography } from "@mui/material"

import { UpdateSchedulePropsType } from "../../../../types/event.types"
import { ISchedule } from "../../../../interface/Event"

import { updateScheduleAction } from "../../../../server/actions/event.actions"

const AddDate = ({ user, dispatch, event, matchData, handleUpdateSchedule }: UpdateSchedulePropsType) => {

    const initialState: ISchedule = {
        schedule: matchData.schedule ? matchData.schedule?.split("T")[1].split(".")[0].slice(0, 5) : "",
        day: matchData.schedule ? matchData.schedule?.split("T")[0] : ""
    }

    const [scheduleData, setScheduleData] = useState<ISchedule>(initialState)

    const { schedule, day } = scheduleData

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setScheduleData({ ...scheduleData, [name]: value })
    }

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        dispatch(updateScheduleAction({
            eid: event._id!,
            match: matchData,
            scheduleData,
            token: user.token!,
            handleUpdateSchedule
        }))

    }

    return (
        <Box display='flex' zIndex={16} justifyContent='center' width='100%' height='100vh' alignItems='center' position='fixed' top={0} left={0} sx={{
            background: 'rgba(0, 0, 0, 0.5)'
        }}>
            <Paper elevation={3} sx={{ p: 2, width: '33.33%' }}>
                <Typography color='#33CC33' variant="h5">Update the day and schedule</Typography>
                <Box component="form" noValidate p={2} onSubmit={handleSumbit}>
                    <Box justifyContent='space-evenly' display={'flex'} alignItems={'center'}>
                        <TextField
                            type="date"
                            margin="normal"
                            id="day"
                            name="day"
                            color='success'
                            value={day}
                            sx={{
                                '&:hover fieldset': {
                                    borderColor: '#33CC33 !important',
                                },
                            }}
                            onChange={handleChange}
                        />
                        <TextField
                            type="time"
                            margin="normal"
                            id="schedule"
                            name="schedule"
                            autoFocus
                            color='success'
                            value={schedule}
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

export default AddDate