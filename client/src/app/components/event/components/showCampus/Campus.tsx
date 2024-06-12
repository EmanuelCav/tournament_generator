import { Box, Typography } from '@mui/material'

import ActionsCampus from './components/ActionsCampus'

import { CampusPropsType } from '../../../../types/event.types'

const Campus = ({ campus, handleSure, isAvailableEdit, handleEditCampus }: CampusPropsType) => {
  return (
    <Box display={'flex'} my={2} justifyContent={'space-between'} width={'100%'} alignItems={'center'} p={2} borderRadius={4} sx={{
        border: '2px solid #eeeeee'
    }}>
        <Typography variant="h6">{campus.name}</Typography>
        {
          isAvailableEdit && <ActionsCampus campus={campus} handleEditCampus={handleEditCampus} handleSure={handleSure} />
        }
    </Box>
  )
}

export default Campus