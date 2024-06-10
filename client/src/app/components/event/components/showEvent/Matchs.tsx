import { Paper, Table, TableContainer, TableBody, TableRow, TableCell, Typography, Button } from "@mui/material"

import HeadMatchs from "./components/HeadMatchs"

import { IMatch } from "../../../../interface/Event"
import { MatchsPropsType } from "../../../../types/event.types"

const Matchs = ({ matchs, handleAddReferee, handleAddScore, isAdmin }: MatchsPropsType) => {
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
                    <TableCell component="th" scope="row">{match.schedule ? match.schedule.getDay() : "Not defined"}</TableCell>
                    <TableCell align="right">{match.local.name}</TableCell>
                    <TableCell>{match.targetLocal}</TableCell>
                    <TableCell>
                      {
                        isAdmin ? <Button sx={{ mt: 1 }} variant="contained" color="primary" onClick={() => handleAddScore(match)}>DEFINE</Button> : "-"
                      }
                      </TableCell>
                    <TableCell>{match.targetVisitant}</TableCell>
                    <TableCell>{match.visitant.name}</TableCell>
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