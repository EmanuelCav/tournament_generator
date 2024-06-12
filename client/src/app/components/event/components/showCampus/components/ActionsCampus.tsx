import { Box } from '@mui/material'
import Delete from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { CampusPropsType } from '../../../../../types/event.types';

const ActionsCampus = ({ campus, handleEditCampus, handleSure }: CampusPropsType) => {
    return (
        <Box>
            <EditIcon color="primary" sx={{ mx: 2, cursor: 'pointer' }} onClick={() => handleEditCampus(campus)} />
            <Delete color="error" sx={{ mx: 2, cursor: 'pointer' }} onClick={() => handleSure(campus)} />
        </Box>
    )
}

export default ActionsCampus