import { Box, Typography } from '@mui/material'

import FormRegister from './components/FormRegister'
import CloseForm from '../general/CloseForm'

import { RegisterPropsType } from '../../types/auth.types'

const Register = ({ setIsRegister, navigate, dispatch }: RegisterPropsType) => {

    const handleClose = () => {
        setIsRegister(false)
    }

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            display="flex"
            height="100vh"
            width="100%"
            zIndex={12}
            justifyContent="center"
            alignItems="center"
            sx={{
                background: 'rgba(0, 0, 0, 0.5)',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 400,
                    backgroundColor: 'white',
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                    m: 1
                }}
            >
                <CloseForm handleClose={handleClose} />
                <Typography variant="h5" color="#2e7d32" align="center" fontWeight={600} gutterBottom>
                    Crear Cuenta
                </Typography>
                <FormRegister dispatch={dispatch} navigate={navigate} setIsRegister={setIsRegister} />
            </Box>
        </Box >
    )
}

export default Register