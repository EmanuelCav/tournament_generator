import { TableCell, TableHead, TableRow, Typography } from "@mui/material"
import Delete from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { HeadPlayersPropsType } from "../../../../types/event.types"
import { IStatistic } from "../../../../interface/Event"

const HeadPlayers = ({ handleFilterPlayers, statistics, handleRemoveStatistic, handleEditStatistic, event, user }: HeadPlayersPropsType) => {
    return (
        <TableHead>
            <TableRow>
                <TableCell align="center" sx={{ fontSize: 20, color: '#33cc33' }}>Position</TableCell>
                <TableCell align="center" sx={{ fontSize: 20, color: '#33cc33' }}>Player</TableCell>
                {
                    statistics.map((statistic: IStatistic) => {
                        return <TableCell key={statistic._id} align="center">
                            <Typography onClick={() => handleFilterPlayers('points')} sx={{
                                fontSize: 20, color: '#33cc33', cursor: 'pointer', ":active": {
                                    background: '#ffffff'
                                }, ":hover": {
                                    background: '#dddddd'
                                }
                            }}>{statistic.name}</Typography>
                            {
                                event.competitors?.find((c) => c.user._id === user._id)?.role.role === 'ADMIN' &&
                                <>
                                    <EditIcon color="primary" sx={{ mx: 2, cursor: 'pointer' }} onClick={() => handleEditStatistic(statistic)} />
                                    <Delete color="error" sx={{ mx: 2, cursor: 'pointer' }} onClick={() => handleRemoveStatistic(statistic)} />
                                </>
                            }
                        </TableCell>
                    })
                }
            </TableRow>
        </TableHead>
    )
}

export default HeadPlayers