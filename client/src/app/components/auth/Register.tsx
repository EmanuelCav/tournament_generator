import { Box, Paper, Typography } from '@mui/material'

import FormRegister from './components/FormRegister'
import CloseForm from './components/CloseForm'

const Register = ({ setIsRegister }: { setIsRegister: (isRegister: boolean) => void }) => {
    return (
        <Box position='absolute' top={0} left={0} display='flex' height='100vh' width='100%' zIndex={12} justifyContent='center' alignItems='center' sx={{
            background: 'rgba(0, 0, 0, 0.5)'
        }}>
            <Paper elevation={2} sx={{ maxWidth: '57.66%', padding: 2 }}>
                <CloseForm setIsRegister={setIsRegister} />
                <Typography color='#33CC33' variant="h5">Register</Typography>
                <FormRegister />
            </Paper>
        </Box>
    )
}

export default Register