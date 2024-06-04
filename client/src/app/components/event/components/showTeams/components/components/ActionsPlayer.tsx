import { Box, Typography } from "@mui/material"
import Delete from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { PlayerPropsType } from "../../../../../../types/event.types"

const ActionsPlayer = ({ player, handleSurePlayer, handleEditPlayer }: PlayerPropsType) => {
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Typography mx={2} variant="body1">{player.position}</Typography>
            <EditIcon color="primary" sx={{ mx: 2, cursor: 'pointer' }} onClick={() => handleEditPlayer(player)} />
            <Delete color="error" sx={{ mx: 2, cursor: 'pointer' }} onClick={() => handleSurePlayer(player)} />
        </Box>
    )
}

export default ActionsPlayer