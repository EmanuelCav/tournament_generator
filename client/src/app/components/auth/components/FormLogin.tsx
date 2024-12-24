import { useForm } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material"
import { yupResolver } from "@hookform/resolvers/yup";

import { ILogin } from "../../../interface/User";
import { FormPropsType } from "../../../types/auth.types"

import { loginAction } from "../../../server/actions/user.actions";

import { loginSchema } from "../../../schema/user.schema";

const FormLogin = ({ navigate, dispatch, setIsForgotPassword }: FormPropsType) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const handleLogin = (data: ILogin) => {
        dispatch(loginAction({ navigate, userData: data }))
    }

    return (
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            onSubmit={handleSubmit((data) => handleLogin(data))} onReset={reset as any}>
            {
                errors.email && <Typography mt={2} color='#f00'>{errors.email?.message}</Typography>
            }
            <TextField
                {...register("email")}
                label="Correo Electrónico"
                variant="outlined"
                fullWidth
                required
                margin="dense"
                id="email"
                name="email"
                autoFocus
                color='success'
                sx={{
                    '&:hover fieldset': {
                        borderColor: '#2e7d32 !important',
                    },
                }}
                inputProps={{ maxLength: 50 }}
            />
            {
                errors.password && <Typography mt={2} color='#f00'>{errors.password?.message}</Typography>
            }
            <TextField
                {...register("password")}
                label="Contraseña"
                variant="outlined"
                type="password"
                fullWidth
                required
                margin="dense"
                id="password"
                name="password"
                color='success'
                sx={{
                    '&:hover fieldset': {
                        borderColor: '#2e7d32 !important',
                    },
                }}
                autoComplete="off"
                inputProps={{ maxLength: 50 }}
            />
            <Typography
                variant="body1"
                sx={{
                    color: 'text.secondary', cursor: 'pointer', ":hover": {
                        textDecoration: 'underline'
                    }
                }}
                onClick={() => setIsForgotPassword(true)}>
                ¿Olvido su contraseña?
            </Typography>
            <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{ fontWeight: 600, py: 1 }}
            >
                Iniciar Sesión
            </Button>
        </Box>
    )
}

export default FormLogin