import { TableCell, TableHead, TableRow } from "@mui/material"

import { HeadPlayersPropsType } from "../../../../types/event.types"
import { IStatistic } from "../../../../interface/Event"

const HeadPlayers = ({ handleFilterPlayers, player }: HeadPlayersPropsType) => {
    return (
        <TableHead>
            <TableRow>
                <TableCell align="center" sx={{ fontSize: 20, color: '#33cc33' }}>Position</TableCell>
                <TableCell align="center" sx={{ fontSize: 20, color: '#33cc33' }}>Player</TableCell>
                {
                    player?.statistics.map((statistic: IStatistic) => {
                        return <TableCell key={statistic._id} align="center" onClick={() => handleFilterPlayers('points')} sx={{
                            fontSize: 20, color: '#33cc33', cursor: 'pointer', ":active": {
                                background: '#ffffff'
                            }, ":hover": {
                                background: '#dddddd'
                            }
                        }}>{statistic.name}</TableCell>
                    })
                }
            </TableRow>
        </TableHead>
    )
}

export default HeadPlayers