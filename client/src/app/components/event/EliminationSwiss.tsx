import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material"

import TeamElimination from "./components/eliminationTable/TeamElimination"

import { IEvent, IMatch } from "../../interface/Event"

const EliminationSwiss = ({ event }: { event: IEvent }) => {

  return (
    <TableContainer component={Paper} sx={{ mt: 2, ml: 1 }}>
      <Table>

        <TableBody>
          <TableRow>
            {event.matchs!.map((fixture: IMatch[], index: number) => (
              <TableCell align="center" component="th" scope="row" key={index}>
                {
                  fixture.slice(0, event.isRoundTrip ? event.matchs![index].length! / 2 : event.matchs![index].length).map((match: IMatch, i: number) => {
                    return <Paper key={i} elevation={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', p: 2, mt: 1 }}>
                      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <TeamElimination team={match.local} />
                        <Typography>{match.targetLocal}</Typography>
                        {
                          event.matchs?.length! > 0 && event.isRoundTrip && <>
                            <Typography>
                              {fixture.slice(event.matchs![index].length! / 2, event.matchs![index].length!).find(ev => ev.visitant.name === match.local.name)?.targetVisitant}
                            </Typography>
                            <Typography>
                            {(fixture.slice(event.matchs![index].length! / 2, event.matchs![index].length!).find(ev => ev.visitant.name === match.local.name)?.targetVisitant! && match.targetLocal) ? (fixture.slice(event.matchs![index].length! / 2, event.matchs![index].length!).find(ev => ev.visitant.name === match.local.name)?.targetVisitant!) + match.targetLocal! : 0}
                            </Typography>
                          </>
                        }
                      </Box>
                      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <TeamElimination team={match.visitant} />
                        <Typography>{match.targetVisitant}</Typography>
                        {
                          event.matchs?.length! > 0 && event.isRoundTrip && <>
                            <Typography>
                              {fixture.slice(event.matchs![index].length! / 2, event.matchs![index].length!).find(ev => ev.local.name === match.visitant.name)?.targetLocal}
                            </Typography>
                            <Typography>
                            {(fixture.slice(event.matchs![index].length! / 2, event.matchs![index].length!).find(ev => ev.local.name === match.visitant.name)?.targetLocal!  && match.targetVisitant) ? fixture.slice(event.matchs![index].length! / 2, event.matchs![index].length!).find(ev => ev.local.name === match.visitant.name)?.targetLocal! + match.targetVisitant! : 0}
                            </Typography>
                          </>
                        }
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

export default EliminationSwiss