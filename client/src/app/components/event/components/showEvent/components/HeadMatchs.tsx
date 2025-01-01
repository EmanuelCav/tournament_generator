import { TableCell, TableHead, TableRow } from '@mui/material'

const HeadMatchs = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell sx={{ fontSize: 20, color: '#33cc33', display: { md: 'table-cell', xs: 'none' } }}>Date</TableCell>
                <TableCell sx={{ fontSize: 20, color: '#33cc33', display: { md: 'table-cell', xs: 'none' } }}>Campus</TableCell>
                <TableCell align="right" sx={{ fontSize: 20, color: '#33cc33' }}>Local</TableCell>
                <TableCell align="center" colSpan={3} sx={{ fontSize: 20, color: '#33cc33', display: { sm: 'table-cell', xs: 'none' } }}>Score</TableCell>
                <TableCell sx={{ fontSize: 20, color: '#33cc33' }}>Visitant</TableCell>
                <TableCell sx={{ fontSize: 20, color: '#33cc33', display: { md: 'table-cell', xs: 'none' } }}>Referee</TableCell>
            </TableRow>
        </TableHead>
    )
}

export default HeadMatchs