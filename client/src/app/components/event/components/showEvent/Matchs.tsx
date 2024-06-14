import { Paper, Table, TableContainer, TableBody, TableRow, TableCell, Typography, Button, Box } from "@mui/material"

import HeadMatchs from "./components/HeadMatchs"

import { IMatch } from "../../../../interface/Event"
import { MatchsPropsType } from "../../../../types/event.types"

const Matchs = ({ event, handleAddReferee, handleAddScore, handleUpdateSchedule, handleUpdateCampus, isAdmin }: MatchsPropsType) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table>
        <HeadMatchs />
        {event.matchs!.map((fixture: IMatch[], index: number) => (
          <TableBody key={index}>
            <Typography variant="h6" m={1} width={'100%'} color={'#33cc33'}>Matchday {index + 1}</Typography>
            {
              fixture.map((match: IMatch, i: number) => {
                return <TableRow key={i}>
                  <TableCell component="th" scope="row">
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      {match.schedule ? `${match.schedule.split("T")[0]} - ${match.schedule.split("T")[1].split(".")[0]}` : "Not defined"}
                      {
                        isAdmin && <Button sx={{ mt: 1 }} variant="contained" color="primary" onClick={() => handleUpdateSchedule(match)}>DEFINE</Button>
                      }
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      {match.campus ? match.campus : "Not defined"}
                      {
                        isAdmin && <Button sx={{ mt: 1 }} variant="contained" color="primary" onClick={() => handleUpdateCampus(match)}>DEFINE</Button>
                      }
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <Box component="img" src={match.local.logo} loading="lazy" width={40} height={40} />
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
                    <Box component="img" src={match.visitant.logo} loading="lazy" width={40} height={40} />
                    <Typography>{match.visitant.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      {match.referee ? match.referee : "Not defined"}
                      {
                        isAdmin && <Button sx={{ mt: 1 }} variant="contained" color="primary" onClick={() => handleAddReferee(match)}>DEFINE</Button>
                      }
                    </Box>
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

export default Matchs