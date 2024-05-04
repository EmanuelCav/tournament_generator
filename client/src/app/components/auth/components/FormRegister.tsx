import { ChangeEvent, useState } from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import { Box, Button, TextField } from "@mui/material"
import { useForm } from "react-hook-form"

import PasswordInput from "./components/PasswordInput"

import { registerSchema } from "../../../schema/user.schema"
import Terms from "./Terms"

const FormRegister = () => {

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
        <Box component="form" onSubmit={handleSubmit((data) => {})} onReset={reset as any}>
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
            <TextField
                {...register("nickname")}
                margin="normal"
                fullWidth
                id="nickname"
                label="Nickname"
                name="nickname"
                autoFocus
                color='success'
                sx={{
                    '&:hover fieldset': {
                        borderColor: '#33CC33 !important',
                    },
                }}
                autoComplete="off"
                inputProps={{ maxLength: 30 }}
            />
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
            <PasswordInput register={register} view={isPassword} name="password" label="Password" handleView={showPassword} />
            <PasswordInput register={register} view={isConfirm} name="confirm" label="Confirm Password" handleView={showConfirm} />
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