import { Box } from "@mui/material"
import Delete from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { ShowTeamPropsType } from "../../../../../types/event.types";

const ActionsTeam = ({ handleSure, team, handleEditTeam }: ShowTeamPropsType) => {
    return (
        <Box>
            <EditIcon color="primary" sx={{ mx: 2, cursor: 'pointer' }} onClick={() => handleEditTeam(team)} />
            <Delete color="error" sx={{ mx: 2, cursor: 'pointer' }} onClick={() => handleSure(team)} />
        </Box>
    )
}

export default ActionsTeam