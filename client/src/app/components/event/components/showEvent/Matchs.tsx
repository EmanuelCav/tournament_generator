import { Paper, Table, TableContainer, TableBody, TableRow, TableCell, Typography, Button, Box } from "@mui/material"

import HeadMatchs from "./components/HeadMatchs"

import { IMatch } from "../../../../interface/Event"
import { MatchsPropsType } from "../../../../types/event.types"

const Matchs = ({ matchs, handleAddReferee, handleAddScore, handleUpdateSchedule, isAdmin }: MatchsPropsType) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table>
        <HeadMatchs />
        {matchs.map((fixture: IMatch[], index: number) => (
          <>
            <Typography variant="h6" m={1} color={'#33cc33'}>Matchday {index + 1}</Typography>
            <TableBody key={index}>
              {
                fixture.map((match: IMatch, i: number) => {
                  return <TableRow key={i}>
                    <TableCell component="th" scope="row" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      {match.schedule ? `${match.schedule.split("T")[0]} - ${match.schedule.split("T")[1].split(".")[0]}` : "Not defined"}
                      {
                        isAdmin && <Button sx={{ mt: 1 }} variant="contained" color="primary" onClick={() => handleUpdateSchedule(match)}>DEFINE</Button>
                      }
                    </TableCell>
                    <TableCell align="right">
                      <Box component="img" src={match.local.logo} width={40} height={40} />
                      <Typography>{match.local.name}</Typography>
                    </TableCell>
                    <TableCell>{match.targetLocal}</TableCell>
                    <TableCell>
                      {
                        isAdmin ? <Button sx={{ mt: 1 }} variant="contained" color="primary" onClick={() => handleAddScore(match)}>DEFINE</Button> : "-"
                      }
                    </TableCell>
                    <TableCell>{match.targetVisitant}</TableCell>
                    <TableCell>
                      <Box component="img" src={match.visitant.logo} width={40} height={40} />
                      <Typography>{match.visitant.name}</Typography>
                    </TableCell>
                    <TableCell sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      {match.referee ? match.referee : "Not defined"}
                      {
                        isAdmin && <Button sx={{ mt: 1 }} variant="contained" color="primary" onClick={() => handleAddReferee(match)}>DEFINE</Button>
                      }
                    </TableCell>
                  </TableRow>
                })
              }
            </TableBody>
          </>
        ))}
      </Table>
    </TableContainer>
  )
}

export default Matchs