import { Paper, Button, Typography, Box } from "@mui/material"

import FormLogin from "./components/FormLogin"

import { FormAuthPropsType } from "../../types/auth.types"

const FormAuth = ({ dispatch, navigate, setIsRegister, setIsForgotPassword }: FormAuthPropsType) => {

    const showRegister = () => {
        setIsRegister(true)
    }

    return (
        <Box display='flex' height='100%' justifyContent='center' alignItems='center' flexDirection='column' width='50%'>
            <Paper elevation={2} sx={{ maxWidth: '47.37%', padding: 2 }}>
                <Typography color='#33CC33' variant="h5">Log In</Typography>
                <FormLogin dispatch={dispatch} navigate={navigate} />
                <Button size='small' variant='text' color='success' onClick={() => setIsForgotPassword(true)}>Forgot password?</Button>
            </Paper>
            <Box display='flex' justifyContent='center' alignItems='center' mt={2}>
                <Typography variant="body1" mr={2}>Don't you have an account?</Typography>
                <Button size='medium' variant='text' color='success' onClick={showRegister}>Register</Button>
            </Box>
        </Box>
    )
}

export default FormAuth