import { Typography, Box } from '@mui/material'
import Delete from '@mui/icons-material/Delete';

import { TeamFromCreatePropsType } from '../../../types/create.types';

const TeamFromCreate = ({ team, removeTeam }: TeamFromCreatePropsType) => {
  return (
    <Box width={'100%'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={1}>
      <Typography variant='body1' mt={1}>{team.name}</Typography>
      <Delete color="error" sx={{ mx: 2, cursor: 'pointer' }} onClick={() => removeTeam(team._id)} />
    </Box>
  )
}

export default TeamFromCreate