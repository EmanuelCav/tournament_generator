import { Box, Typography } from '@mui/material'

import ActionsReferee from './components/ActionsReferee'

import { RefereePropsType } from '../../../../types/event.types'

const Referee = ({ referee, handleSure, handleEditReferee, isAvailableEdit }: RefereePropsType) => {
  return (
    <Box display={'flex'} my={2} justifyContent={'space-between'} width={'100%'} alignItems={'center'} p={2} borderRadius={4} sx={{
        border: '2px solid #eeeeee'
    }}>
        <Typography variant="h6">{referee.name}</Typography>
        {
          isAvailableEdit && <ActionsReferee handleSure={handleSure} referee={referee} handleEditReferee={handleEditReferee} />
        }
    </Box>
  )
}

export default Referee