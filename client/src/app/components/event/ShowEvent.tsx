import { Box, Typography } from '@mui/material'

import { IEvent } from '../../interface/Event'

const ShowEvent = ({ event }: { event: IEvent }) => {

  return (
    <Box flex={1} py={2} px={4}>
      <Typography variant="h4" textAlign='center' color='#33cc33'>{event.title}</Typography>
      <Typography>ShowEvent</Typography>
    </Box>
  )
}

export default ShowEvent