import { Box, Button, TextField } from "@mui/material"

import { FormLoginPropsType } from "../../../types/auth.types"

const FormLogin = ({ }: FormLoginPropsType) => {
    return (
        <Box component='form'>
            <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                // value={email}
                autoFocus
                color='success'
                sx={{
                    '&:hover fieldset': {
                        borderColor: '#33CC33 !important',
                    },
                }}
            // onChange={handleChange}
            />
            <TextField
                margin="normal"
                fullWidth
                id="password"
                label="Password"
                name="password"
                // value={password}
                autoFocus
                color='success'
                sx={{
                    '&:hover fieldset': {
                        borderColor: '#33CC33 !important',
                    },
                }}
            // onChange={handleChange}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2, fontSize: '1.225em' }}
                color='success'
                size='large'
            >
                Sign in
            </Button>
        </Box>
    )
}

export default FormLogin