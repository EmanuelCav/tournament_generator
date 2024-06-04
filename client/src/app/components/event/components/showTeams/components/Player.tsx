import { Box, Typography } from "@mui/material"

import { IPlayer } from "../../../../../interface/Event"

const Player = ({ player }: { player: IPlayer }) => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mt={1} width={'100%'} p={2} borderRadius={4} sx={{
        border: '2px solid #eeeeee'
    }}>
        <Typography variant="subtitle1">{player.name}</Typography>
        <Typography variant="body1">{player.position}</Typography>
    </Box>
  )
}

export default Player