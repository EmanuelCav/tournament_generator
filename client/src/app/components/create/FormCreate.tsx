import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { Box, Button, Paper, TextField, Typography, MenuItem, InputLabel } from '@mui/material'

import { ICategory, ICreateEvent, IStatus } from '../../interface/Event'
import { FormCreatePropsType } from '../../types/create.types'

import { categoriesApi } from '../../server/api/category.api'
import { statusApi } from '../../server/api/status.api'
import { createEventAction } from '../../server/actions/event.actions'

const FormCreate = ({ user, dispatch }: FormCreatePropsType) => {

    const initialState: ICreateEvent = {
        event: "",
        description: "",
        category: "",
        status: ""
    }

    const [eventData, setEventData] = useState<ICreateEvent>(initialState)
    const [image, setImage] = useState<string>("")

    const { event, description, category, status } = eventData

    const [categories, setCategories] = useState<ICategory[]>([])
    const [statusData, setStatusData] = useState<IStatus[]>([])

    const getCategories = async () => {

        try {

            const { data } = await categoriesApi(user.token!)
            setCategories(data)

        } catch (error) {
            console.log(error);
        }

    }

    const getStatus = async () => {

        try {

            const { data } = await statusApi(user.token!)
            setStatusData(data)

        } catch (error) {
            console.log(error);
        }

    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target


        setEventData({ ...eventData, [name]: value })
    }

    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target
        setImage(files![0] as any)
    }

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const formData = new FormData()

        formData.append("event", event)
        formData.append("description", description)
        formData.append("category", category)
        formData.append("status", status)

        if (image) {
            formData.append("file", image)
        }

        dispatch(createEventAction({
            formData,
            token: user.token!
        }))

    }

    useEffect(() => {
        getCategories()
        getStatus()
    }, [])

    return (
        <Paper elevation={3} sx={{ p: 4, width: '37.33%' }}>
            <Typography color='#33CC33' variant="h5">Create an event</Typography>
            <Box component="form" noValidate p={2} onSubmit={handleSumbit}>
                <TextField
                    required
                    margin="normal"
                    fullWidth
                    id="event"
                    label="Title"
                    name="event"
                    value={event}
                    autoFocus
                    color='success'
                    sx={{
                        '&:hover fieldset': {
                            borderColor: '#33CC33 !important',
                        },
                    }}
                    onChange={handleChange}
                />
                <TextField
                    required
                    multiline
                    margin="normal"
                    rows={3}
                    fullWidth
                    id="description"
                    label="Description"
                    name="description"
                    value={description}
                    color='success'
                    sx={{
                        '&:hover fieldset': {
                            borderColor: '#33CC33 !important'
                        },
                    }}
                    onChange={handleChange}
                />
                <Box className='image-event-form' display='flex' justifyContent='space-evenly' alignItems='center' flexDirection='column' my={2}>
                    <Typography variant='h6' my={1}>Tournament image</Typography>
                    <InputLabel htmlFor="fileInput" sx={{ cursor: 'pointer' }}>
                        <Box component="img" src="https://image.freepik.com/free-icon/upload-arrow_318-26670.jpg" width={40} height={40} />
                    </InputLabel>
                    <input id="fileInput" name='image' type="file" onChange={handleChangeImage} />
                </Box>
                <Box my={2} display="flex" justifyContent='space-evenly' alignItems='center'>
                    <TextField
                        required
                        id="category"
                        name="category"
                        select
                        label="Select"
                        helperText="Select a tournament event"
                        onChange={handleChange}
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.category} value={option.category}>
                                {option.category}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        required
                        id="status"
                        name="status"
                        select
                        label="Select"
                        helperText="Select a tournament status"
                        onChange={handleChange}
                    >
                        {statusData.map((option) => (
                            <MenuItem key={option.status} value={option.status}>
                                {option.status}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2, fontSize: '1.225em' }}
                    color='success'
                    size='large'
                >
                    Next
                </Button>
            </Box>
        </Paper>
    )
}

export default FormCreate