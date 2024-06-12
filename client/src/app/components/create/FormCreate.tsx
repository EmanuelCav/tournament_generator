import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { Box, Button, Paper, TextField, Typography, MenuItem, InputLabel } from '@mui/material'

import { ICategory, ICreateEvent, IStatus } from '../../interface/Event'
import { FormCreatePropsType } from '../../types/create.types'

import { categoriesApi } from '../../server/api/category.api'
import { statusApi } from '../../server/api/status.api'
import { createEventAction } from '../../server/actions/event.actions'

const FormCreate = ({ user, dispatch, navigate }: FormCreatePropsType) => {

    const initialState: ICreateEvent = {
        event: "",
        description: "",
        category: "",
        status: "",
        qualifiers: 0,
        amount: 0
    }

    const [eventData, setEventData] = useState<ICreateEvent>(initialState)
    const [image, setImage] = useState<string>("")

    const { event, description, category, status, qualifiers, amount } = eventData

    const [categories, setCategories] = useState<ICategory[]>([])
    const [statusData, setStatusData] = useState<IStatus[]>([])

    const [isGroupStage, setIsGroupStage] = useState<boolean>(false)

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

        if (category === 'GROUP STAGE') {
            formData.append("qualifiers", String(qualifiers))
            formData.append("amount", String(amount))
        }

        if (image) {
            formData.append("file", image)
        }

        dispatch(createEventAction({
            formData,
            token: user.token!,
            navigate
        }))

    }

    useEffect(() => {
        if(category === "GROUP STAGE") {
            setIsGroupStage(true)
        } else {
            setIsGroupStage(false)
        }
    }, [category])

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
                    inputProps={{ maxLength: 40 }}
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
                    inputProps={{ maxLength: 200 }}
                />
                <Box className='image-event-form' display='flex' justifyContent='space-evenly' alignItems='center' flexDirection='column' my={2}>
                    <Typography variant='h6' my={1}>Tournament image</Typography>
                    <InputLabel htmlFor="fileInput" sx={{ cursor: 'pointer' }}>
                        <Box component="img" src={image ? URL.createObjectURL(image as any) : "https://res.cloudinary.com/ddfm1znoo/image/upload/v1717421190/_715ec024-a870-44b1-9553-5499482553f9_ahgxhu.jpg"} width={40} height={40} />
                    </InputLabel>
                    <input id="fileInput" name='image' type="file" onChange={handleChangeImage} />
                </Box>
                <Box my={2} display="flex" justifyContent='space-evenly' alignItems='center'>
                    <TextField
                        required
                        id="category"
                        name="category"
                        select
                        label="Format"
                        helperText="Select a tournament format"
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
                        label="Status"
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
                {
                    isGroupStage && <Box my={2} display="flex" justifyContent='space-evenly' alignItems='center'>
                        <TextField
                            type="number"
                            margin="normal"
                            id="qualifiers"
                            label="Amount of qualifiers per group"
                            name="qualifiers"
                            color='success'
                            value={qualifiers}
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
                            id="amount"
                            label="Amount of groups"
                            name="amount"
                            color='success'
                            value={amount}
                            sx={{
                                '&:hover fieldset': {
                                    borderColor: '#33CC33 !important',
                                },
                            }}
                            onChange={handleChange}
                        />
                    </Box>
                }
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2, fontSize: '1.225em' }}
                    color='success'
                    size='large'
                >
                    GENERATE
                </Button>
            </Box>
        </Paper>
    )
}

export default FormCreate