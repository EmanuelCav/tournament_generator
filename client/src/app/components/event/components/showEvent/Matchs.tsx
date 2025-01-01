import { Paper, Table, TableContainer, TableBody, TableRow, TableCell, Typography, Button, Box } from "@mui/material"

import HeadMatchs from "./components/HeadMatchs"

import { IMatch } from "../../../../interface/Event"
import { MatchsPropsType } from "../../../../types/event.types"

import { eliminationMatch } from "../../../../helper/functions"

const Matchs = ({ event, handleAddReferee, handleAddScore, handleUpdateSchedule, handleUpdateCampus, isAdmin }: MatchsPropsType) => {

  const orderMatchdays = [...event.matchs!].sort((a, b) => b.length - a.length)

  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table>
        <HeadMatchs />
        {orderMatchdays!.map((fixture: IMatch[], index: number) => (
          <TableBody key={index}>
            {
              event.category?.category === "FIXTURE" && <Typography variant="h6" m={1} width={'100%'} color={'#33cc33'}>Matchday {index + 1}</Typography>
            }
            {
              event.category?.category === "ELIMINATION" && <Typography variant="h6" m={1} width={'100%'} color={'#33cc33'}>
                {eliminationMatch(event.matchs!, index, event.matchs?.length! > 0 ? event.isRoundTrip ? Math.log(event.matchs![0].length) / Math.log(2) : Math.log(event.matchs![0].length * 2) / Math.log(2) : 0)}
                </Typography>
            }
            {
              fixture.map((match: IMatch, i: number) => {
                return <TableRow key={i}>
                  <TableCell component="th" scope="row" sx={{ display: { md: 'table-cell', xs: 'none' }}}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      {match.schedule ? `${match.schedule.split("T")[0]} - ${match.schedule.split("T")[1].split(".")[0]}` : "Not defined"}
                      {
                        isAdmin && <Button sx={{ mt: 1 }} variant="contained" color="primary" onClick={() => handleUpdateSchedule(match)}>DEFINE</Button>
                      }
                    </Box>
                  </TableCell>
                  <TableCell sx={{ display: { md: 'table-cell', xs: 'none' }}}>
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
                    <Typography sx={{ display: { sm: 'none', xs: 'block' }}}>{match.targetLocal}</Typography>
                  </TableCell>
                  <TableCell sx={{ display: { sm: 'table-cell', xs: 'none' }}}><Typography>{match.targetLocal}</Typography></TableCell>
                  <TableCell align="center" sx={{ display: { sm: 'table-cell', xs: 'none' }}}>
                    {
                      (isAdmin && typeof match.targetLocal === 'undefined') ? <Button sx={{ mt: 1 }} variant="contained" color="primary" onClick={() => handleAddScore(match)}>DEFINE</Button> : "-"
                    }
                  </TableCell>
                  <TableCell sx={{ display: { sm: 'table-cell', xs: 'none' }}}><Typography>{match.targetVisitant}</Typography></TableCell>
                  <TableCell>
                    <Box component="img" src={match.visitant.logo} loading="lazy" width={40} height={40} />
                    <Typography>{match.visitant.name}</Typography>
                    <Typography sx={{ display: { sm: 'none', xs: 'block' }}}>{match.targetVisitant}</Typography>
                  </TableCell>
                  <TableCell sx={{ display: { md: 'table-cell', xs: 'none' }}}>
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