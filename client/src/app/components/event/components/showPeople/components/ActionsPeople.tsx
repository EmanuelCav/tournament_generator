import { Box, Button, Typography } from "@mui/material"

import { ActionsPeoplePropsType } from "../../../../../types/event.types"

const ActionsPeople = ({ competitor, handleSureRemoveCompetitor, user, event, handleChangeRole }: ActionsPeoplePropsType) => {
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Typography variant="subtitle1">{competitor.role.role}</Typography>
      {
        user.user?._id === event.admin && competitor.user._id !== user.user?._id &&
        <>
          <Button variant="contained" sx={{ mx: 2 }} color="primary" onClick={handleChangeRole}>CHANGE ROLE</Button>
          <Button variant="contained" sx={{ mx: 2 }} color="error" onClick={() => handleSureRemoveCompetitor(competitor)}>QUIT</Button>
        </>
      }
    </Box>
  )
}

export default ActionsPeople