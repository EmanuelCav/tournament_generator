import { TableCell, TableHead, TableRow } from "@mui/material"

import { FilterPlayersKeyPropsType } from "../../../../types/key.types"

const HeadPlayers = ({ handleFilterPlayers }: { handleFilterPlayers: (filter: FilterPlayersKeyPropsType) => void }) => {
    return (
        <TableHead>
            <TableRow>
                <TableCell align="center" sx={{ fontSize: 20, color: '#33cc33' }}>Position</TableCell>
                <TableCell align="center" colSpan={2} sx={{ fontSize: 20, color: '#33cc33' }}>Player</TableCell>
                <TableCell align="center" onClick={() => handleFilterPlayers('points')} sx={{ fontSize: 20, color: '#33cc33', cursor: 'pointer', ":active": {
                    background: '#ffffff'
                }, ":hover": {
                    background: '#dddddd'
                } }}>Points/Goals</TableCell>
                <TableCell align="center" onClick={() => handleFilterPlayers('assists')} sx={{ fontSize: 20, color: '#33cc33', cursor: 'pointer', ":active": {
                    background: '#ffffff'
                }, ":hover": {
                    background: '#dddddd'
                }  }} >Assists</TableCell>
                <TableCell align="center" onClick={() => handleFilterPlayers('cards')} sx={{ fontSize: 20, color: '#33cc33', cursor: 'pointer', ":active": {
                    background: '#ffffff'
                }, ":hover": {
                    background: '#dddddd'
                }  }}>Cards</TableCell>
                <TableCell align="center" onClick={() => handleFilterPlayers('serialCards')} sx={{ fontSize: 20, color: '#33cc33', cursor: 'pointer', ":active": {
                    background: '#ffffff'
                }, ":hover": {
                    background: '#dddddd'
                }  }}>Expulsions</TableCell>
            </TableRow>
        </TableHead>
    )
}

export default HeadPlayers