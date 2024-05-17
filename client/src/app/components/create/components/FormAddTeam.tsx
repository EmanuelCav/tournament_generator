import { ChangeEvent, FormEvent, useState } from "react"
import { Box, Paper, TextField, Button, Typography, InputLabel } from "@mui/material"

import CloseForm from "../../general/CloseForm"

import { ICreateTeam } from "../../../interface/Event"
import { FormAddTeamPropsType } from "../../../types/create.types"

import { createTeamAction } from "../../../server/actions/event.actions"

const FormAddTeam = ({ handleAddTeam, dispatch, user, event }: FormAddTeamPropsType) => {

    const initialState: ICreateTeam = {
        name: ""
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

        dispatch(createTeamAction({
            formData,
            handleAddTeam,
            token: user.token!,
            id: event._id!
        }))

    }

    return (
        <Box display='flex' zIndex={16} justifyContent='center' width='100%' height='100vh' alignItems='center' position='absolute' top={0} left={0} sx={{
            background: 'rgba(0, 0, 0, 0.5)'
        }}>
            <Paper elevation={3} sx={{ p: 2 }}>
                <CloseForm handleClose={handleAddTeam} />
                <Box component="form" noValidate sx={{ p: 4 }} onSubmit={handleSumbit}>
                    <Box className='image-event-form' display='flex' justifyContent='space-evenly' alignItems='center' flexDirection='column' my={2}>
                        <Typography variant='h6' my={1}>Team's shield</Typography>
                        <InputLabel htmlFor="fileInput" sx={{ cursor: 'pointer' }}>
                            <Box component="img" src={image ? URL.createObjectURL(image as any) : "https://res.cloudinary.com/ddfm1znoo/image/upload/v1715201487/tdgb12o8p5lony5sqg99.png"} width={40} height={40} />
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
                    />
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

export default FormAddTeam