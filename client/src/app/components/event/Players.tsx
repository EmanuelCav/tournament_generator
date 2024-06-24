import { useEffect, useState } from "react"
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material"

import HeadPlayers from "./components/players/HeadPlayers"
import FormStatistics from "./components/players/FormStatistics"
import Sure from "./Sure"

import { IPlayer, IStatistic } from "../../interface/Event"
import { PlayersPropsType } from "../../types/event.types"
import { FilterPlayersKeyPropsType } from "../../types/key.types"

import { playersApi } from "../../server/api/event.api"
import { getPlayers } from "../../server/reducer/statistic.reducer"
import { removeStatisticAction } from "../../server/actions/event.actions"

const Players = ({ players, event, user, dispatch }: PlayersPropsType) => {

  const [isAddStatistic, setIsAddStatistic] = useState<boolean>(false)
  const [isRemoveStatistic, setIsRemoveStatistic] = useState<boolean>(false)
  const [isEditStatistic, setIsEditStatistic] = useState<boolean>(false)

  const [statisticInfo, setStatisticInfo] = useState<IStatistic | null>(null)

  const [filterPlayers, setFilterPlayers] = useState<FilterPlayersKeyPropsType>('points')

  const handleFilterPlayers = (filter: FilterPlayersKeyPropsType) => {
    setFilterPlayers(filter)
  }

  const handleSure = () => {
    setIsRemoveStatistic(!isRemoveStatistic)
  }

  const handleRemoveStatistic = (statistic: IStatistic) => {
    setStatisticInfo(statistic)
    setIsRemoveStatistic(!isRemoveStatistic)
  }

  const handleEditStatistic = (statistic: IStatistic) => {
    setStatisticInfo(statistic)
    setIsEditStatistic(!isEditStatistic)
  }

  const handleAddStatistics = () => {
    setIsAddStatistic(!isAddStatistic)
  }

  const getAllPlayers = async () => {
    const { data } = await playersApi(event._id!, filterPlayers, user.token!)
    dispatch(getPlayers(data) as any)
  }

  const removeStatistic = () => {
    dispatch(removeStatisticAction({
      token: user.token!,
      cid: event.competitors?.find(c => c.user._id === user.user?._id)?._id!,
      sid: statisticInfo?._id!,
      handleSure
    }))
  }

  useEffect(() => {
    getAllPlayers()
  }, [filterPlayers, event.event])

  return (
    <TableContainer component={Paper} sx={{ flex: 1, py: 2, px: 4, mt: 2, ml: 1 }}>
      {
        isAddStatistic && <FormStatistics handleAddStatistics={handleAddStatistics} event={event} dispatch={dispatch} user={user} isEdit={false} statisticInfo={statisticInfo!} setIsEditStatistic={setIsEditStatistic} />
      }
      {
        isRemoveStatistic && <Sure handleSure={handleSure} func={removeStatistic} text='statistic' />
      }
      {
        isEditStatistic && <FormStatistics handleAddStatistics={handleAddStatistics} event={event} dispatch={dispatch} user={user} isEdit={true} statisticInfo={statisticInfo!} setIsEditStatistic={setIsEditStatistic} />
      }
      {
        event.competitors?.find((c) => c.user._id === user.user!._id)?.role.role === 'ADMIN' &&
        <Button variant="contained" color="success" disabled={players.length < 1} onClick={handleAddStatistics}>Add statistic</Button>
      }
      {
        players.length < 1 && <Typography color="#cc3333" variant="h6" my={2}>Create a player to add statistics</Typography>
      }
      <Table>
        <HeadPlayers handleFilterPlayers={handleFilterPlayers} statistics={players.length > 0 ? players[0].statistics : []}
          handleRemoveStatistic={handleRemoveStatistic} handleEditStatistic={handleEditStatistic} event={event} user={user.user!} />
        <TableBody>
          {
            players.map((player: IPlayer, index: number) => {
              return <TableRow key={index}>
                <TableCell align="center" component="th" scope="row">{index + 1}</TableCell>
                <TableCell align="left">
                  <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Box component="img" src={player.team.logo.image} width={40} height={40} />
                    <Typography align="center" variant="body1" mx={2}>{player.name}</Typography>
                  </Box>
                </TableCell>
                {
                  player.statistics.map((statistic: IStatistic) => {
                    return <TableCell key={statistic._id} align="center" component="th" scope="row">{statistic.value}</TableCell>
                  })
                }
              </TableRow>
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Players