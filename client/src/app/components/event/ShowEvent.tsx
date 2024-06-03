import { Box, Typography } from '@mui/material'

import Matchs from './components/showEvent/Matchs'
import Generate from './components/showEvent/Generate'

import { IEvent } from '../../interface/Event'

const ShowEvent = ({ event }: { event: IEvent }) => {

  return (
    <Box flex={1} py={2} px={4}>
      <Typography variant="h4" textAlign='center' color='#33cc33'>{event.event}</Typography>
      {
        event.matchs?.length! > 0 ? (
          <Matchs />
        ) : (
          <Generate disabled={event.teams?.length! < 2} />
        )
      }
    </Box>
  )
}

export default ShowEvent