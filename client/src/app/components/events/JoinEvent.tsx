import { Box, Typography } from "@mui/material"

import FormEvent from "./joinEvent/FormEvent"

import { FormEventPropsType } from "../../types/events.types"

const JoinEvent = ({ dispatch, navigate, user }: FormEventPropsType) => {
  return (
    <Box width='100%' display="flex" justifyContent="center" alignItems="center" flexDirection="column" bgcolor="#AAF6AA" py={12}
      sx={{
        backgroundImage: `url("/background_join.jpg")`,
        backgroundSize: 'cover',
      }}>
      <Typography variant="h4" color="#ffffff" bgcolor={"#33cc33"} p={2} textAlign='center' width='33.33%'>Join an event</Typography>
      <FormEvent dispatch={dispatch} navigate={navigate} user={user} />
    </Box>
  )
}

export default JoinEvent