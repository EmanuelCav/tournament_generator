import { ChangeEvent, useState } from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material"
import { useForm } from "react-hook-form"

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { registerAction } from "../../../server/actions/user.actions"

import { RegisterPropsType } from "../../../types/auth.types"

import { registerSchema } from "../../../schema/user.schema"
import { IRegister } from "../../../interface/User";

const FormRegister = ({ navigate, dispatch, setIsRegister }: RegisterPropsType) => {

    const [isPassword, setIsPassword] = useState<boolean>(false)
    const [isConfirm, setIsConfirm] = useState<boolean>(false)

    const [status, setStatus] = useState<boolean>(false)

    const showPassword = () => {
        setIsPassword(!isPassword)
    }

    const showConfirm = () => {
        setIsConfirm(!isConfirm)
    }

    const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target
        setStatus(checked)
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    })

    const handleRegister = (data: IRegister) => {
        if (!status) return
        dispatch(registerAction({ navigate, setIsRegister, userData: data }))
    }

    return (
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            onSubmit={handleSubmit((data) => handleRegister(data))} onReset={reset as any}>
            {
                errors.nickname && <Typography mt={2} color='#f00'>{errors.fullname?.message}</Typography>
            }
            <TextField
                {...register("nickname")}
                fullWidth
                label="Nombre de Usuario"
                variant="outlined"
                required
                margin="dense"
                id="nickname"
                name="nickname"
                autoFocus
                color='success'
                sx={{
                    '&:hover fieldset': {
                        borderColor: '#2e7d32 !important',
                    },
                }}
                autoComplete="off"
                inputProps={{ maxLength: 26 }}
            />
            {
                errors.email && <Typography mt={2} color='#f00'>{errors.email?.message}</Typography>
            }
            <TextField
                {...register("email")}
                fullWidth
                label="Correo Electrónico"
                variant="outlined"
                type="email"
                required
                margin="dense"
                id="email"
                name="email"
                color='success'
                sx={{
                    '&:hover fieldset': {
                        borderColor: '#2e7d32 !important',
                    },
                }}
                autoComplete="off"
                inputProps={{ maxLength: 26 }}
            />
            {
                errors.password && <Typography mt={2} color='#f00'>{errors.password?.message}</Typography>
            }
            <Box position="relative" display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
                <TextField
                    {...register("password")}
                    fullWidth
                    label="Contraseña"
                    variant="outlined"
                    type={isPassword ? "text" : "password"}
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
                {
                    isConfirm ? <VisibilityOffIcon sx={{ cursor: 'pointer', position: 'absolute', left: '90%' }} color="success" onClick={showPassword} />
                        : <VisibilityIcon sx={{ cursor: 'pointer', position: 'absolute', left: '90%' }} color="success" onClick={showPassword} />
                }
            </Box>
            {
                errors.confirm && <Typography mt={2} color='#f00'>{errors.confirm?.message}</Typography>
            }
            <Box position="relative" display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
                <TextField
                    {...register("confirm")}
                    fullWidth
                    label="Confirmar Contraseña"
                    variant="outlined"
                    type={isConfirm ? "text" : "password"}
                    required
                    margin="dense"
                    id="confirm"
                    name="confirm"
                    color='success'
                    sx={{
                        '&:hover fieldset': {
                            borderColor: '#2e7d32 !important',
                        },
                    }}
                    autoComplete="off"
                    inputProps={{ maxLength: 50 }}
                />
                {
                    isConfirm ? <VisibilityOffIcon sx={{ cursor: 'pointer', position: 'absolute', left: '90%' }} color="success" onClick={showConfirm} />
                        : <VisibilityIcon sx={{ cursor: 'pointer', position: 'absolute', left: '90%' }} color="success" onClick={showConfirm} />
                }
            </Box>
            <FormControlLabel
                control={<Checkbox color="success" onChange={handleChecked} required />}
                label="Acepto los términos y condiciones"
            />
            <Button
                fullWidth
                type="submit"
                variant="contained"
                color="success"
                sx={{ fontWeight: 600, py: 1 }}
            >
                Registrarse
            </Button>
        </Box>
    )
}

export default FormRegister