import { Box } from '@mui/material'
import Delete from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { RefereePropsType } from '../../../../../types/event.types';

const ActionsReferee = ({ referee, handleSure, handleEditReferee }: RefereePropsType) => {
    return (
        <Box>
            <EditIcon color="primary" sx={{ mx: 2, cursor: 'pointer' }} onClick={() => handleEditReferee(referee)} />
            <Delete color="error" sx={{ mx: 2, cursor: 'pointer' }} onClick={() => handleSure(referee)} />
        </Box>
    )
}

export default ActionsReferee