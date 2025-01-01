import { Box, Button, Typography } from "@mui/material"
import Delete from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { PlayerPropsType } from "../../../../../../types/event.types"

const ActionsPlayer = ({ player, handleSurePlayer, handleEditPlayer, handleEditPlayerData }: PlayerPropsType) => {
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Typography mx={2} variant="body1" sx={{ display: { sm: 'block', xs: 'none' }}}>{player.position}</Typography>
            <Button color="primary" variant="outlined" sx={{ display: { sm: 'block', xs: 'none' }}} onClick={() => handleEditPlayerData(player)}>Update</Button>
            <EditIcon color="primary" sx={{ mx: 2, cursor: 'pointer', display: { sm: 'block', xs: 'none' } }} onClick={() => handleEditPlayer(player)} />
            <Delete color="error" sx={{ mx: 2, cursor: 'pointer' }} onClick={() => handleSurePlayer(player)} />
        </Box>
    )
}

export default ActionsPlayer