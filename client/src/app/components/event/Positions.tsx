import { useEffect } from "react"
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material"

import HeadPositions from "./components/positions/HeadPositions"

import { PositionsPropsType } from "../../types/event.types"
import { ITeam } from "../../interface/Event"

import { getPositionsApi } from "../../server/api/event.api"
import { getTeams } from "../../server/reducer/statistic.reducer"

const Positions = ({ teams, dispatch, event, user }: PositionsPropsType) => {

  const sortedTeams = () => {

    const copyTeams = [...teams]

    const sorted = copyTeams.sort((a, b) => {
      
      if (a.points !== b.points) {
        return b.points - a.points;
      }
      
      const diffA = a.favor - a.against;
      const diffB = b.favor - b.against;
      if (diffA !== diffB) {
        return diffB - diffA;
      }
      
      return b.favor - a.favor;
    });

    return sorted

  }

  const getPositions = async () => {
    const { data } = await getPositionsApi(event._id!, user.token!)
    dispatch(getTeams(data) as any)
  }

  useEffect(() => {
    getPositions()
  }, [event.event])

  return (
    <TableContainer component={Paper} sx={{ flex: 1, py: 2, px: 4, ml: 1, width: '100%' }}>
      <Table>
        <HeadPositions />
        <TableBody>
          {
            sortedTeams().map((team: ITeam, index: number) => {
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