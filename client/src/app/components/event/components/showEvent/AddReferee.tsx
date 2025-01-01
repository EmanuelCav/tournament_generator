import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { Box, Button, MenuItem, Paper, TextField, Typography } from "@mui/material"

import { IReferee } from "../../../../interface/Event"
import { AddRefereePropsType } from "../../../../types/event.types"

import { refereesApi } from "../../../../server/api/event.api"
import { addRefereeAction } from "../../../../server/actions/event.actions"

const AddReferee = ({ user, dispatch, event, matchData, handleAddReferee }: AddRefereePropsType) => {

    const [refereeData, setRefereeData] = useState<string>(matchData.referee ? matchData.referee : '')
    const [referees, setReferees] = useState<IReferee[]>([])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setRefereeData(value)
    }

    const getData = async () => {

        try {

            const { data } = await refereesApi(user.token!, event._id!)
            setReferees(data)

        } catch (error) {
            console.log(error);
        }

    }

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        if (refereeData.length === 0) {
            handleAddReferee(matchData)
            return
        }

        dispatch(addRefereeAction({
            match: matchData,
            eid: event._id!,
            referee: refereeData,
            token: user.token!,
            handleAddReferee
        }))

    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Box display='flex' zIndex={16} justifyContent='center' width='100%' height='100vh' alignItems='center' position='fixed' top={0} left={0} sx={{
            background: 'rgba(0, 0, 0, 0.5)'
        }}>
            <Paper elevation={3} sx={{ p: 2, width: { md: '33.33%', xs: '90%' }}}>
                <Typography color='#33CC33' variant="h5">Add a referee</Typography>
                <Box component="form" noValidate p={2} onSubmit={handleSumbit}>
                    <TextField
                        fullWidth
                        id="referee"
                        name="referee"
                        select
                        label="Referee"
                        helperText="Select a Referee"
                        onChange={handleChange}
                        defaultValue={refereeData}
                    >
                        {referees.map((referee: IReferee) => (
                            <MenuItem key={referee._id} value={referee.name}>
                                {referee.name}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2, fontSize: '1.225em' }}
                        color='success'
                        size='large'
                    >
                        ADD
                    </Button>
                </Box>
            </Paper>
        </Box>
    )
}

export default AddReferee