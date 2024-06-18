import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material"

import TeamElimination from "./components/eliminationTable/TeamElimination"

import { IEvent, IMatch } from "../../interface/Event"

import HeadEliminationTable from "./components/eliminationTable/HeadEliminationTable"

const EliminationTable = ({ event }: { event: IEvent }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 2, ml: 1 }}>
      <Table>
        <HeadEliminationTable n={event.matchs?.length! > 0 ? event.isRoundTrip ? Math.log(event.matchs![0].length) / Math.log(2) : Math.log(event.matchs![0].length * 2) / Math.log(2) : 0} />
        <TableBody>
          <TableRow>
            {event.matchs!.map((fixture: IMatch[], index: number) => (
              <TableCell align="center" component="th" scope="row" key={index}>
                {
                  fixture.slice(0, event.isRoundTrip ? event.matchs![0].length! / 2 : event.matchs![0].length).map((match: IMatch, i: number) => {
                    return <Paper key={i} elevation={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', p: 2, mt: 1 }}>
                      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <TeamElimination team={match.local} />
                        <Typography>{match.targetLocal}</Typography>
                      </Box>
                      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <TeamElimination team={match.visitant} />
                        <Typography>{match.targetVisitant}</Typography>
                      </Box>
                    </Paper>
                  })
                }
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default EliminationTable