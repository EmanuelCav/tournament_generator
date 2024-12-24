import { Box } from "@mui/material"

import CloseIcon from '@mui/icons-material/Close';

const CloseForm = ({ handleClose }: { handleClose: () => void }) => {

    return (
        <Box width='100%' textAlign='right'>
            <CloseIcon color="error" onClick={handleClose} sx={{
                cursor: 'pointer',
                ":hover": {
                    background: '#eeeeee'
                }
            }} />
        </Box>
    )
}

export default CloseForm