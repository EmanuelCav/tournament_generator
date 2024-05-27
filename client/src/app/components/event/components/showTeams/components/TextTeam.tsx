import { Box, Typography } from "@mui/material"

import { ITeam } from "../../../../../interface/Event"

const TextTeam = ({ team }: { team: ITeam }) => {
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
            <Box 
                src={team.logo.image}
                component='img'
                width={60}
                height={60}
                style={{
                    borderRadius: 12
                }}
            />
            <Typography variant="h6" mt={1}>{team.name}</Typography>
        </Box>
    )
}

export default TextTeam