import { Box, Paper, Typography } from '@mui/material'

import FormRegister from './components/FormRegister'
import CloseForm from './components/CloseForm'

import { FormAuthPropsType } from '../../types/auth.types'

const Register = ({ setIsRegister, navigate, dispatch }: FormAuthPropsType) => {

    const handleClose = () => {
        setIsRegister(false)
    }

    return (
        <Box position='fixed' top={0} left={0} display='flex' height='100vh' width='100%' zIndex={12} justifyContent='center' alignItems='center' sx={{
            background: 'rgba(0, 0, 0, 0.5)'
        }}>
            <Paper elevation={2} sx={{ width: '37.33%', padding: 2 }}>
                <CloseForm handleClose={handleClose} />
                <Typography color='#33CC33' variant="h5">Register</Typography>
                <FormRegister navigate={navigate} dispatch={dispatch} setIsRegister={setIsRegister} />
            </Paper>
        </Box>
    )
}

export default Register