import { Box, Paper, Typography } from "@mui/material"

import CloseForm from "../general/CloseForm"
import FormJoin from "./components/formJoin/FormJoin"

const ContainFormJoin = ({ handleJoinEvent }: { handleJoinEvent: () => void }) => {
  return (
    <Box position='fixed' top={0} left={0} display='flex' height='100vh' width='100%' zIndex={12} justifyContent='center' alignItems='center' sx={{
      background: 'rgba(0, 0, 0, 0.5)'
    }}>
      <Paper elevation={2} sx={{ width: '37.33%', padding: 2 }}>
        <CloseForm handleClose={handleJoinEvent} />
        <Typography color='#33CC33' variant="h5">Join an event</Typography>
        <FormJoin />
      </Paper>
    </Box>
  )
}

export default ContainFormJoin