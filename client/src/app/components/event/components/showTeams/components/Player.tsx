import { Box, Typography } from "@mui/material"

import ActionsPlayer from "./components/ActionsPlayer"

import { PlayerPropsType } from "../../../../../types/event.types"

const Player = ({ player, handleSurePlayer, handleEditPlayer }: PlayerPropsType) => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mt={1} width={'100%'} p={2} borderRadius={4} sx={{
        border: '2px solid #eeeeee'
    }}>
        <Typography variant="subtitle1">{player.name}</Typography>
        <ActionsPlayer player={player} handleEditPlayer={handleEditPlayer} handleSurePlayer={handleSurePlayer} />
    </Box>
  )
}

export default Player