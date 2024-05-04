import { useForm } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material"
import { yupResolver } from "@hookform/resolvers/yup";

import { FormLoginPropsType } from "../../../types/auth.types"

import { loginSchema } from "../../../schema/user.schema";
import { loginAction } from "../../../server/actions/user.actions";

const FormLogin = ({ navigate, dispatch }: FormLoginPropsType) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    return (
        <Box component='form' onSubmit={handleSubmit((data) => dispatch(loginAction({ navigate, userData: data }) as any))} onReset={reset as any}>
            {
                errors.email && <Typography mt={2} color='#f00'>{errors.email?.message}</Typography>
            }
            <TextField
                {...register("email")}
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
            {
                errors.password && <Typography mt={2} color='#f00'>{errors.password?.message}</Typography>
            }
            <TextField
                {...register("password")}
                margin="normal"
                type="password"
                fullWidth
                id="password"
                label="Password"
                name="password"
                autoFocus
                color='success'
                sx={{
                    '&:hover fieldset': {
                        borderColor: '#33CC33 !important'
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