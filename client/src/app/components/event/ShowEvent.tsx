import { Box, Button, Typography } from '@mui/material'

import Matchs from './components/showEvent/Matchdays'
import Generate from './components/showEvent/Generate'

import { generateMatchsAction } from '../../server/actions/event.actions'

import { ShowEventPropsType } from '../../types/event.types'

const ShowEvent = ({ event, dispatch, user }: ShowEventPropsType) => {

  const generateNow = async () => {
    dispatch(generateMatchsAction({
      id: event._id!,
      token: user.token!
    }))
  }

  return (
    <Box flex={1} py={2} px={4}>
      <Typography variant="h4" textAlign='center' color='#33cc33'>{event.event}</Typography>
      {
        event.matchs?.length! > 0 ? (
          <>
            {
              event.admin === user.user?._id && <Button size="large" variant="contained" color="primary" sx={{ my: 2 }} onClick={generateNow}>GENERATE AGAIN</Button>
            }
            <Matchs matchs={event.matchs!} />
          </>
        ) : (
          <>
            {
              event.admin === user.user?._id && <Generate disabled={event.teams?.length! < 2} generateNow={generateNow} />
            }
          </>
        )
      }
    </Box>
  )
}

export default ShowEvent