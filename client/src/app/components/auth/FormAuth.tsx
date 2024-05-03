import { Paper, Button, Typography, Box } from "@mui/material"

import FormLogin from "./components/FormLogin"

import { FormLoginPropsType } from "../../types/auth.types"

const FormAuth = ({ dispatch, navigate }: FormLoginPropsType) => {
    return (
        <Box display='flex' height='100%' justifyContent='center' alignItems='center' width='50%'>
            <Paper elevation={2} sx={{ maxWidth: '47.37%', padding: 2 }}>
                <Typography color='#33CC33' variant="h5">Log In</Typography>
                <FormLogin dispatch={dispatch} navigate={navigate} />
                <Button size='small' variant='text' color='success'>Forgot password?</Button>
            </Paper>
        </Box>
    )
}

export default FormAuth