import { ChangeEvent, useState } from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import { Box, Button, TextField, Typography } from "@mui/material"
import { useForm } from "react-hook-form"

import PasswordInput from "./components/PasswordInput"
import Terms from "./Terms"

import { registerAction } from "../../../server/actions/user.actions"

import { RegisterPropsType } from "../../../types/auth.types"

import { registerSchema } from "../../../schema/user.schema"

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

    return (
        <Box component="form" onSubmit={handleSubmit((data) => dispatch(registerAction({ navigate, setIsRegister, userData: data })))} onReset={reset as any}>
            {
                errors.fullname && <Typography mt={2} color='#f00'>{errors.fullname?.message}</Typography>
            }
            <TextField
                {...register("fullname")}
                margin="normal"
                fullWidth
                id="fullname"
                label="Fullname"
                name="fullname"
                autoFocus
                color='success'
                sx={{
                    '&:hover fieldset': {
                        borderColor: '#33CC33 !important',
                    },
                }}
                autoComplete="off"
                inputProps={{ maxLength: 50 }}
            />
            {
                errors.nickname && <Typography mt={2} color='#f00'>{errors.nickname?.message}</Typography>
            }
            <TextField
                {...register("nickname")}
                margin="normal"
                fullWidth
                id="nickname"
                label="Nickname"
                name="nickname"
                color='success'
                sx={{
                    '&:hover fieldset': {
                        borderColor: '#33CC33 !important',
                    },
                }}
                autoComplete="off"
                inputProps={{ maxLength: 30 }}
            />
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
                color='success'
                sx={{
                    '&:hover fieldset': {
                        borderColor: '#33CC33 !important',
                    },
                }}
            />
            <PasswordInput register={register} view={isPassword} name="password" label="Password" handleView={showPassword} errors={errors.password} />
            <PasswordInput register={register} view={isConfirm} name="confirm" label="Confirm Password" handleView={showConfirm} errors={errors.confirm} />
            <Terms status={status} handleChecked={handleChecked} />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2, fontSize: '1.225em' }}
                color='success'
                size='large'
            >
                Accept
            </Button>
        </Box>
    )
}

export default FormRegister