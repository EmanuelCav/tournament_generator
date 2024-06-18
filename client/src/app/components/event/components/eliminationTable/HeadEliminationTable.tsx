import { TableCell, TableHead, TableRow } from "@mui/material"
import { headersElimination } from "../../../../helper/functions"

const HeadEliminationTable = ({ n }: { n: number }) => {
    return (
        <TableHead>
            <TableRow>
                {
                    headersElimination(n).map((round: string) => {
                        return <TableCell align="center" sx={{ fontSize: 20, color: '#33cc33' }} key={round}>{round}</TableCell>
                    })
                }
            </TableRow>
        </TableHead>
    )
}

export default HeadEliminationTable