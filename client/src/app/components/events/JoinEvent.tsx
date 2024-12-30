import { Box, Paper, Typography } from "@mui/material"

import FormEvent from "./joinEvent/FormEvent"

import { FormEventPropsType } from "../../types/events.types"

const JoinEvent = ({ dispatch, navigate, user }: FormEventPropsType) => {
  return (
    <Box width='100%' display="flex" justifyContent="center" alignItems="center" flexDirection="column" bgcolor="#AAF6AA" py={12}
      sx={{
        mt: { xs: 9, sm: 12 },
        backgroundImage: `url("/background_join.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <Paper elevation={2} sx={{ py: 4, px: 6 }}>
        <Typography variant="h5" gutterBottom align="center" color='#2e7d32' fontWeight={600}>
          Unirse a un evento
        </Typography>
        <FormEvent dispatch={dispatch} navigate={navigate} user={user} />
      </Paper>
    </Box>
  )
}

export default JoinEvent