import { TableCell, TableHead, TableRow } from "@mui/material"

const HeadPositions = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell sx={{ fontSize: 20, color: '#33cc33' }}>Position</TableCell>
                <TableCell colSpan={2} sx={{ fontSize: 20, color: '#33cc33' }}>Team</TableCell>
                <TableCell sx={{ fontSize: 20, color: '#33cc33' }}>Played</TableCell>
                <TableCell sx={{ fontSize: 20, color: '#33cc33' }}>Won</TableCell>
                <TableCell sx={{ fontSize: 20, color: '#33cc33' }}>Drawn</TableCell>
                <TableCell sx={{ fontSize: 20, color: '#33cc33' }}>Lost</TableCell>
                <TableCell sx={{ fontSize: 20, color: '#33cc33' }}>GF</TableCell>
                <TableCell sx={{ fontSize: 20, color: '#33cc33' }}>GA</TableCell>
                <TableCell sx={{ fontSize: 20, color: '#33cc33' }}>GD</TableCell>
                <TableCell sx={{ fontSize: 20, color: '#33cc33' }}>Points</TableCell>
            </TableRow>
        </TableHead>
    )
}

export default HeadPositions