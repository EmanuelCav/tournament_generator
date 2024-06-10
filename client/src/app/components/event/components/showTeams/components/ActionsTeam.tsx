import { Box, Button } from "@mui/material"
import Delete from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { ShowTeamPropsType } from "../../../../../types/event.types";

const ActionsTeam = ({ handleSure, team, handleEditTeam, handleAddPlayer, event, user, joinTeam, isJoined }: ShowTeamPropsType) => {
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            {
                event.competitors?.find((c) => c.user._id === user._id)?.role.role === 'ADMIN' &&
                <>
                    <Button variant="outlined" onClick={() => handleAddPlayer(team)}>Add player</Button>
                    <EditIcon color="primary" sx={{ mx: 2, cursor: 'pointer' }} onClick={() => handleEditTeam(team)} />
                    <Delete color="error" sx={{ mx: 2, cursor: 'pointer' }} onClick={() => handleSure(team)} />
                </>
            }
            {
                isJoined ? (
                    <>
                        {
                            team.competitors.find((c) => c.user._id === user._id) && <Button variant="outlined" color="error" sx={{ mx: 2, cursor: 'pointer' }} onClick={() => joinTeam(team._id)}>SEPARATE</Button>
                        }
                    </>
                ) : (
                    <Button variant="outlined" color="success" sx={{ mx: 2, cursor: 'pointer' }} onClick={() => joinTeam(team._id)}>JOIN</Button>
                )
            }
        </Box>
    )
}

export default ActionsTeam