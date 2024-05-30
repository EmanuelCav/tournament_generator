import { ChangeEvent, FormEvent as FE, useState } from 'react'
import { Box, Button, Paper, TextField } from '@mui/material'

import { FormEventPropsType } from '../../../types/events.types'

import { joinEventAction } from '../../../server/actions/event.actions'

const FormEvent = ({ dispatch, navigate, user }: FormEventPropsType) => {

    const [id, setId] = useState<string>('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value)
    }

    const handleSumbit = (e: FE<HTMLFormElement>) => {
        e.preventDefault()

        dispatch(joinEventAction({
            navigate,
            id,
            token: user.token!
        }))
    }

    return (
        <Paper elevation={3} sx={{ p: 4, width: '33.33%', mt: 2 }}>
            <Box component="form" noValidate onSubmit={handleSumbit}>
                <TextField
                    margin="normal"
                    fullWidth
                    id="id"
                    label="Event ID"
                    name="id"
                    autoFocus
                    color='success'
                    value={id}
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
                    Join
                </Button>
            </Box>
        </Paper>
    )
}

export default FormEvent