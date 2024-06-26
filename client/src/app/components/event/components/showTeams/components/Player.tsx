import { Box, Typography } from "@mui/material"

import ActionsPlayer from "./components/ActionsPlayer"

import { PlayerPropsType } from "../../../../../types/event.types"

const Player = ({ player, handleSurePlayer, handleEditPlayer, isAvailableEdit, handleEditPlayerData }: PlayerPropsType) => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mt={1} width={'100%'} p={2} borderRadius={4} sx={{
        border: '2px solid #eeeeee'
    }}>
        <Typography variant="subtitle1">{player.name}</Typography>
        {
          isAvailableEdit && <ActionsPlayer player={player} handleEditPlayer={handleEditPlayer} handleEditPlayerData={handleEditPlayerData} handleSurePlayer={handleSurePlayer} />
        }
    </Box>
  )
}

export default Player