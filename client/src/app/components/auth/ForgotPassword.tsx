import { ChangeEvent, FormEvent, useState } from "react"
import { Box, Button, Paper, TextField, Typography } from "@mui/material"

import CloseForm from "../general/CloseForm"

import { IForgotPassword } from "../../interface/User"
import { ForgotPasswordPropsType } from "../../types/auth.types"

import { forgotPasswordAction } from "../../server/actions/user.actions"

const ForgotPassword = ({ setIsForgotPassword, setIsCode, dispatch }: ForgotPasswordPropsType) => {

    const initialState: IForgotPassword = {
        email: ""
    }

    const [emailData, setEmailData] = useState<IForgotPassword>(initialState)

    const { email } = emailData

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setEmailData({ ...emailData, [name]: value })
    }

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        dispatch(forgotPasswordAction({
            emailData,
            setIsForgotPassword,
            setIsCode
        }))

    }

    return (
        <Box display='flex' zIndex={16} justifyContent='center' width='100%' height='100vh' alignItems='center' position='fixed' top={0} left={0} sx={{
            background: 'rgba(0, 0, 0, 0.5)'
        }}>
            <Paper elevation={3} sx={{ p: 2, m: 1 }}>
                <CloseForm handleClose={() => setIsForgotPassword(false)} />
                <Box component="form" noValidate sx={{ p: 4 }} onSubmit={handleSumbit}>
                    <Typography variant="body1">Reestablecer contraseña</Typography>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="name"
                        label="Correo electrónico"
                        name="email"
                        autoFocus
                        color='success'
                        value={email}
                        sx={{
                            '&:hover fieldset': {
                                borderColor: '#33CC33 !important',
                            },
                        }}
                        onChange={handleChange}
                        autoComplete="off"
                        inputProps={{ maxLength: 75 }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2, fontSize: '1.225em' }}
                        color='success'
                        size='large'
                    >
                        CONTINUAR
                    </Button>
                </Box>
            </Paper>
        </Box>
    )
}

export default ForgotPassword