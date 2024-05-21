import { Typography } from '@mui/material'

import { ITeam } from '../../../interface/Event'

const TeamFromCreate = ({ team }: { team: ITeam }) => {
  return (
    <Typography>{team.name}</Typography>
  )
}

export default TeamFromCreate