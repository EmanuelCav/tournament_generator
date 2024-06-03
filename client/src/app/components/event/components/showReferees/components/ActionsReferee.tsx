import { Box } from '@mui/material'
import Delete from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ActionsReferee = () => {
    return (
        <Box>
            <EditIcon color="primary" sx={{ mx: 2, cursor: 'pointer' }} />
            <Delete color="error" sx={{ mx: 2, cursor: 'pointer' }} />
        </Box>
    )
}

export default ActionsReferee