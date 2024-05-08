import { useState, useEffect } from 'react'
import { Box, Button, Paper, TextField, Typography, MenuItem } from '@mui/material'

import { IUserInfo } from '../../interface/User'
import { ICategory, IStatus } from '../../interface/Event'

import { categoriesApi } from '../../server/api/category.api'
import { statusApi } from '../../server/api/status.api'

const FormCreate = ({ user }: { user: IUserInfo }) => {

    const [categories, setCategories] = useState<ICategory[]>([])
    const [status, setStatus] = useState<IStatus[]>([])

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
            setStatus(data)

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getCategories()
        getStatus()
    }, [])

    return (
        <Paper elevation={3} sx={{ p: 4, width: '37.33%' }}>
            <Typography color='#33CC33' variant="h5">Log In</Typography>
            <Box component="form" noValidate p={2}>
                <TextField
                    required
                    margin="normal"
                    fullWidth
                    id="event"
                    label="Title"
                    name="event"
                    autoFocus
                    color='success'
                    sx={{
                        '&:hover fieldset': {
                            borderColor: '#33CC33 !important',
                        },
                    }}
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
                    color='success'
                    sx={{
                        '&:hover fieldset': {
                            borderColor: '#33CC33 !important'
                        },
                    }}
                />
                <TextField
                    margin="normal"
                    type='file'
                    fullWidth
                    id="image"
                    name="image"
                    color='success'
                    sx={{
                        '&:hover fieldset': {
                            borderColor: '#33CC33 !important'
                        },
                    }}
                />
                <Box my={2} display="flex" justifyContent='space-evenly' alignItems='center'>
                    <TextField
                        required
                        id="category"
                        name="category"
                        select
                        label="Select"
                        defaultValue="EUR"
                        helperText="Select a tournament event"
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
                        defaultValue="PUBLIC"
                        helperText="Select a tournament status"
                    >
                        {status.map((option) => (
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