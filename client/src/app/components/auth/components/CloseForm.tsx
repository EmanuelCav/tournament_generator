import { Box } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

const CloseForm = ({ setIsRegister }: { setIsRegister: (isRegister: boolean) => void }) => {

    const handleRegister = () => {
        setIsRegister(false)
    }

    return (
        <Box width='100%' textAlign='right'>
            <CloseIcon color="error" onClick={handleRegister} sx={{
                cursor: 'pointer'
            }} />
        </Box>
    )
}

export default CloseForm