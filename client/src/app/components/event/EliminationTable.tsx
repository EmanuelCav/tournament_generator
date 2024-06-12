import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material"

import TeamElimination from "./components/eliminationTable/TeamElimination"

import { IMatch } from "../../interface/Event"

const EliminationTable = ({ matchs }: { matchs: IMatch[][] }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table>
        {matchs.map((fixture: IMatch[], index: number) => (
          <TableBody key={index}>
            {
              fixture.map((match: IMatch, i: number) => {
                return <TableRow key={i}>
                  <TableCell component="th" scope="row">
                    <Paper elevation={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', p: 2 }}>
                      <TeamElimination team={match.local} />
                      <TeamElimination team={match.visitant} />
                    </Paper>
                  </TableCell>
                </TableRow>
              })
            }
          </TableBody>
        ))}
      </Table>
    </TableContainer>
  )
}

export default EliminationTable