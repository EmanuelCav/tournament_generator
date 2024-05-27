import { Box } from "@mui/material"
import Delete from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { ShowTeamPropsType } from "../../../../../types/event.types";

const ActionsTeam = ({ handleSure, team }: ShowTeamPropsType) => {
    return (
        <Box>
            <EditIcon color="primary" sx={{ mx: 2, cursor: 'pointer' }} />
            <Delete color="error" sx={{ mx: 2, cursor: 'pointer' }} onClick={() => handleSure(team._id)} />
        </Box>
    )
}

export default ActionsTeam