import { TableCell, TableHead, TableRow } from '@mui/material'

const HeadMatchs = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell sx={{ fontSize: 20, color: '#33cc33' }}>Date</TableCell>
                <TableCell sx={{ fontSize: 20, color: '#33cc33' }}>Local</TableCell>
                <TableCell sx={{ fontSize: 20, color: '#33cc33' }}>Visitant</TableCell>
            </TableRow>
        </TableHead>
    )
}

export default HeadMatchs