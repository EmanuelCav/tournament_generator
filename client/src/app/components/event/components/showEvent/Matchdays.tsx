import { Paper, Table, TableContainer, TableBody, TableRow, TableCell, Typography } from "@mui/material"

import { IMatch } from "../../../../interface/Event"

import HeadMatchs from "./components/HeadMatchs"

const Matchdays = ({ matchs }: { matchs: IMatch[][] }) => {
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
                  <TableCell>{match.local.name}</TableCell>
                  <TableCell>{match.visitant.name}</TableCell>
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

export default Matchdays