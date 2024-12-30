import { ChangeEvent, FormEvent as FE, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'

import { FormEventPropsType } from '../../../types/events.types'

import { joinEventAction } from '../../../server/actions/event.actions'

const FormEvent = ({ dispatch, navigate, user }: FormEventPropsType) => {

    const [id, setId] = useState<string>('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value)
    }

    const handleSumbit = (e: FE<HTMLFormElement>) => {
        e.preventDefault()

        if (!user.token) {
            navigate('/auth')
            return
        }

        dispatch(joinEventAction({
            navigate,
            id,
            token: user.token!
        }))
    }

    return (
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            onSubmit={handleSumbit}>
            <TextField
                onChange={handleChange}
                label="Código"
                variant="outlined"
                fullWidth
                required
                margin="dense"
                id="id"
                name="id"
                autoComplete="off"
                color='success'
                sx={{
                    '&:hover fieldset': {
                        borderColor: '#2e7d32 !important',
                    },
                }}
                inputProps={{ maxLength: 8 }}
            />
            <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{ fontWeight: 600, py: 1 }}
            >
                Unirse
            </Button>
        </Box>
    )
}

export default FormEvent