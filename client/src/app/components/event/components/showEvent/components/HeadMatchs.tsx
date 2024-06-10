import { TableCell, TableHead, TableRow } from '@mui/material'

const HeadMatchs = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell sx={{ fontSize: 20, color: '#33cc33' }}>Date</TableCell>
                <TableCell align="right" sx={{ fontSize: 20, color: '#33cc33' }}>Local</TableCell>
                <TableCell align="center" colSpan={3} sx={{ fontSize: 20, color: '#33cc33' }}>Score</TableCell>
                <TableCell sx={{ fontSize: 20, color: '#33cc33' }}>Visitant</TableCell>
                <TableCell sx={{ fontSize: 20, color: '#33cc33' }}>Referee</TableCell>
            </TableRow>
        </TableHead>
    )
}

export default HeadMatchs