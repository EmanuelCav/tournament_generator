import { Box, Typography } from '@mui/material'

import ActionsReferee from './components/ActionsReferee'

import { IReferee } from '../../../../interface/Event'

const Referee = ({ referee }: { referee: IReferee }) => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} width={'100%'} alignItems={'center'} p={2} borderRadius={4} sx={{
        border: '2px solid #eeeeee'
    }}>
        <Typography variant="h6">{referee.name}</Typography>
        <ActionsReferee />
    </Box>
  )
}

export default Referee