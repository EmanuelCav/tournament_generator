import { useEffect } from 'react'
import { Box, Typography } from '@mui/material'

import { IEvent } from '../../interface/Event'

const ShowEvent = ({ event }: { event: IEvent }) => {

  useEffect(() => {
    console.log(event);
  }, [])

  return (
    <Box flex={1}>
        <Typography>ShowEvent</Typography>
    </Box>
  )
}

export default ShowEvent