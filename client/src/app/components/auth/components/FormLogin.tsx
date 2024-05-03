import { useForm } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material"
import { yupResolver } from "@hookform/resolvers/yup";

import { FormLoginPropsType } from "../../../types/auth.types"

import { loginSchema } from "../../../schema/user.schema";

const FormLogin = ({ }: FormLoginPropsType) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    return (
        <Box component='form' onSubmit={handleSubmit((data) => {})} onReset={reset as any}>
            <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
                color='success'
                sx={{
                    '&:hover fieldset': {
                        borderColor: '#33CC33 !important',
                    },
                }}
            />
            <TextField
                margin="normal"
                fullWidth
                id="password"
                label="Password"
                name="password"
                autoFocus
                color='success'
                sx={{
                    '&:hover fieldset': {
                        borderColor: '#33CC33 !important',
                    },
                }}
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