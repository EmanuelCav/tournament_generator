import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material"

import HeadPositions from "./components/positions/HeadPositions"

import { ITeam } from "../../interface/Event"

const Positions = ({ teams }: { teams: ITeam[] }) => {
  return (
    <TableContainer component={Paper} sx={{ flex: 1, py: 2, px: 4 }}>
      <Table>
        <HeadPositions />
        <TableBody>
          {
            teams.map((team: ITeam, index: number) => {
              return <TableRow key={index}>
                <TableCell align="center" component="th" scope="row">{index + 1}</TableCell>
                <TableCell align="left"><Box component="img" src={team.logo.image} width={40} height={40} /></TableCell>
                <TableCell align="left">{team.name}</TableCell>
                <TableCell align="center">{team.victory + team.draw + team.defeat}</TableCell>
                <TableCell align="center">{team.victory}</TableCell>
                <TableCell align="center">{team.draw}</TableCell>
                <TableCell align="center">{team.defeat}</TableCell>
                <TableCell align="center">{team.favor}</TableCell>
                <TableCell align="center">{team.against}</TableCell>
                <TableCell align="center">{team.favor - team.against}</TableCell>
                <TableCell align="center">{team.points}</TableCell>
              </TableRow>
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Positions