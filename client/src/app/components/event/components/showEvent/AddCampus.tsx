import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { Box, Button, MenuItem, Paper, TextField, Typography } from "@mui/material"

import { ICampus } from "../../../../interface/Event"
import { AddCampusPropsType } from "../../../../types/event.types"

import { addCampusAction } from "../../../../server/actions/event.actions"
import { campusApi } from "../../../../server/api/event.api"

const AddCampus = ({ user, dispatch, event, matchData, handleUpdateCampus }: AddCampusPropsType) => {

    const [campusData, setCampusData] = useState<string>(matchData.campus ? matchData.campus : '')
    const [campus, setCampus] = useState<ICampus[]>([])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setCampusData(value)
    }

    const getData = async () => {

        try {

            const { data } = await campusApi(user.token!, event._id!)
            setCampus(data)

        } catch (error) {
            console.log(error);
        }

    }

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        if (campusData.length === 0) {
            handleUpdateCampus(matchData)
            return
        }

        dispatch(addCampusAction({
            match: matchData,
            eid: event._id!,
            campus: campusData,
            token: user.token!,
            handleUpdateCampus
        }))

    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Box display='flex' zIndex={16} justifyContent='center' width='100%' height='100vh' alignItems='center' position='fixed' top={0} left={0} sx={{
            background: 'rgba(0, 0, 0, 0.5)'
        }}>
            <Paper elevation={3} sx={{ p: 2, width: '33.33%' }}>
                <Typography color='#33CC33' variant="h5">Add a campus</Typography>
                <Box component="form" noValidate p={2} onSubmit={handleSumbit}>
                    <TextField
                        fullWidth
                        id="campus"
                        name="campus"
                        select
                        label="Campus"
                        helperText="Select a Campus"
                        onChange={handleChange}
                        defaultValue={campusData}
                    >
                        {campus.map((campus: ICampus) => (
                            <MenuItem key={campus._id} value={campus.name}>
                                {campus.name}
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

export default AddCampus