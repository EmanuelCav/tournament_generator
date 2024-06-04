import { Box, Typography } from '@mui/material'

import ActionsTeam from './components/ActionsTeam'
import TextTeam from './components/TextTeam'
import Player from './components/Player'

import { ShowTeamPropsType } from '../../../../types/event.types'
import { IPlayer } from '../../../../interface/Event'

const ShowTeam = ({ team, handleSure, handleEditTeam, handleAddPlayer, isShowPlayers }: ShowTeamPropsType) => {

  return (
    <Box my={2} p={2} display={'flex'} justifyContent={'space-between'} flexDirection={'column'} width={'100%'} alignItems={'center'}>
      <Box display={'flex'} justifyContent={'space-between'} width={'100%'} alignItems={'center'}>
        <TextTeam team={team} />
        <ActionsTeam handleSure={handleSure} team={team} handleEditTeam={handleEditTeam} handleAddPlayer={handleAddPlayer} />
      </Box>
      <Box width={'100%'} mt={2}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mt={1} width={'100%'} p={2}>
          <Typography variant="h6">Player</Typography>
          <Typography variant="h6">Position</Typography>
        </Box>
        {
          isShowPlayers && team.players.map((player: IPlayer) => {
            return <Player player={player} key={player._id} />
          })
        }
      </Box>
    </Box>
  )
}

export default ShowTeam