import { Box, Typography } from '@mui/material'

import { ITeamMatch } from '../../../../interface/Event'

const TeamElimination = ({ team }: { team: ITeamMatch }) => {
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} p={1}>
            <Box component="img" src={team.logo} width={40} height={40} />
            <Typography ml={1}>{team.name}</Typography>
        </Box>
    )
}

export default TeamElimination