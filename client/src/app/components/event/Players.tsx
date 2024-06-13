import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material"

import HeadPlayers from "./components/players/HeadlPlayers"

import { IPlayer } from "../../interface/Event"

const Players = ({ players }: { players: IPlayer[] }) => {
  return (
    <TableContainer component={Paper} sx={{ flex: 1, py: 2, px: 4 }}>
      <Table>
        <HeadPlayers />
        <TableBody>
          {
            players.map((player: IPlayer, index: number) => {
              return <TableRow key={index}>
                <TableCell align="center" component="th" scope="row">{index + 1}</TableCell>
                <TableCell align="left"><Box component="img" src={player.team.logo.image} width={40} height={40} /></TableCell>
                <TableCell align="center">{player.name}</TableCell>
                <TableCell align="center">{player.points}</TableCell>
                <TableCell align="center">{player.assists}</TableCell>
                <TableCell align="center">{player.cards}</TableCell>
                <TableCell align="center">{player.serialCards}</TableCell>
              </TableRow>
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Players