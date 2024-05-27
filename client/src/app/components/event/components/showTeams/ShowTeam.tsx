import { Box } from '@mui/material'

import ActionsTeam from './components/ActionsTeam'
import TextTeam from './components/TextTeam'

import { ShowTeamPropsType } from '../../../../types/event.types'

const ShowTeam = ({ team, handleSure }: ShowTeamPropsType) => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} width={'100%'} alignItems={'center'} p={2}>
        <TextTeam team={team} />
        <ActionsTeam handleSure={handleSure} team={team} />
    </Box>
  )
}

export default ShowTeam