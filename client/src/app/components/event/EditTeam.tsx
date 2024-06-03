import { ChangeEvent, FormEvent, useState } from "react"
import { Box, Button, InputLabel, Paper, TextField, Typography } from "@mui/material"

import CloseForm from "../general/CloseForm"

import { updateTeamAction } from "../../server/actions/event.actions"

import { ICreateTeam } from "../../interface/Event"
import { EditTeamPropsType } from "../../types/event.types"

const EditTeam = ({ dispatch, team, eid, setIsEditTeam, token }: EditTeamPropsType) => {

    const initialState: ICreateTeam = {
        name: team.name
    }

    const [teamData, setTeamData] = useState<ICreateTeam>(initialState)
    const [image, setImage] = useState<string>("")

    const { name } = teamData

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setTeamData({ ...teamData, [name]: value })
    }

    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target
        setImage(files![0] as any)
    }

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const formData = new FormData()

        formData.append("name", name)

        if (image) {
            formData.append("file", image)
        }

        dispatch(updateTeamAction({
            eid,
            tid: team._id,
            token,
            teamData: formData,
            setIsEditTeam
        }))

    }

    return (
        <Box display='flex' zIndex={16} justifyContent='center' width='100%' height='100vh' alignItems='center' position='absolute' top={0} left={0} sx={{
            background: 'rgba(0, 0, 0, 0.5)'
        }}>
            <Paper elevation={3} sx={{ p: 2 }}>
                <CloseForm handleClose={() => setIsEditTeam(false)} />
                <Box component="form" noValidate sx={{ p: 4 }} onSubmit={handleSumbit}>
                    <Box className='image-event-form' display='flex' justifyContent='space-evenly' alignItems='center' flexDirection='column' my={2}>
                        <Typography variant='h6' my={1}>Team's shield</Typography>
                        <InputLabel htmlFor="fileInput" sx={{ cursor: 'pointer' }}>
                            <Box component="img" src={image ? URL.createObjectURL(image as any) : team.logo.image} width={40} height={40} />
                        </InputLabel>
                        <input id="fileInput" name='image' type="file" onChange={handleChangeImage} />
                    </Box>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="name"
                        label="Team"
                        name="name"
                        autoFocus
                        color='success'
                        value={name}
                        sx={{
                            '&:hover fieldset': {
                                borderColor: '#33CC33 !important',
                            },
                        }}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2, fontSize: '1.225em' }}
                        color='success'
                        size='large'
                    >
                        EDIT
                    </Button>
                </Box>
            </Paper>
        </Box>
    )
}

export default EditTeam