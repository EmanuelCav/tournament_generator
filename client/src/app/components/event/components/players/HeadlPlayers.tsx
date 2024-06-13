import { TableCell, TableHead, TableRow } from "@mui/material"

const HeadPlayers = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell sx={{ fontSize: 20, color: '#33cc33' }}>Position</TableCell>
                <TableCell colSpan={2} sx={{ fontSize: 20, color: '#33cc33' }}>Player</TableCell>
                <TableCell sx={{ fontSize: 20, color: '#33cc33' }}>Points/Goals</TableCell>
                <TableCell sx={{ fontSize: 20, color: '#33cc33' }}>Assists</TableCell>
                <TableCell sx={{ fontSize: 20, color: '#33cc33' }}>Cards</TableCell>
                <TableCell sx={{ fontSize: 20, color: '#33cc33' }}>Expulsions</TableCell>
            </TableRow>
        </TableHead>
    )
}

export default HeadPlayers