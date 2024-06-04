import { Box, Typography } from '@mui/material'

import ActionsTeam from './components/ActionsTeam'
import TextTeam from './components/TextTeam'
import Player from './components/Player'
import StatusPlayer from './components/StatusPlayer'

import { ShowTeamPropsType } from '../../../../types/event.types'
import { IPlayer } from '../../../../interface/Event'

const ShowTeam = ({ team, handleSure, handleEditTeam, handleAddPlayer, isShowPlayers, handleSurePlayer, handleEditPlayer }: ShowTeamPropsType) => {

  return (
    <Box my={2} p={2} display={'flex'} justifyContent={'space-between'} flexDirection={'column'} width={'100%'} alignItems={'center'}>
      <Box display={'flex'} justifyContent={'space-between'} width={'100%'} alignItems={'center'}>
        <TextTeam team={team} />
        <ActionsTeam handleSure={handleSure} team={team} handleEditTeam={handleEditTeam} handleAddPlayer={handleAddPlayer} />
      </Box>
      <Box width={'100%'} mt={2}>
        {
          isShowPlayers && (
            <>
              {
                team.players.length > 0 ? <StatusPlayer />
                  : <Typography variant='h6' color='#cc3333'>This team has not players yet</Typography>
              }
            </>
          )
        }
        {
          isShowPlayers && team.players.map((player: IPlayer) => {
            return <Player player={player} handleSurePlayer={handleSurePlayer!} handleEditPlayer={handleEditPlayer!} key={player._id} />
          })
        }
      </Box>
    </Box>
  )
}

export default ShowTeam