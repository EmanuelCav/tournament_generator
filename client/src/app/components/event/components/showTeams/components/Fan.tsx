import { Box, Button, Typography } from "@mui/material"

import { FanPropsType } from "../../../../../types/event.types"

const Fan = ({ fan, handleSureQuitFan, team, isAvailableEdit }: FanPropsType) => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mt={1} width={'100%'} p={2} borderRadius={4} sx={{
        border: '2px solid #eeeeee'
    }}>
        <Typography variant="subtitle1">{fan.user.nickname}</Typography>
        {
          isAvailableEdit && <Button variant="outlined" color="error" onClick={() => handleSureQuitFan(team)}>QUIT</Button>
        }
    </Box>
  )
}

export default Fan