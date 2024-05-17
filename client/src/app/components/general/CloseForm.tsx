import { Box } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

const CloseForm = ({ handleClose }: { handleClose: () => void }) => {

    return (
        <Box width='100%' textAlign='right'>
            <CloseIcon color="error" onClick={handleClose} sx={{
                cursor: 'pointer'
            }} />
        </Box>
    )
}

export default CloseForm