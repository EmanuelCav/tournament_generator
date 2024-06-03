import { Box, Typography } from "@mui/material"

import { ICompetitor } from "../../../../interface/Event"

const People = ({ competitor }: { competitor: ICompetitor }) => {
  return (
    <Box p={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'} borderRadius={4} sx={{
        border: '2px solid #eeeeee'
    }}>
        <Typography variant="h6">{competitor.user.nickname}</Typography>
        <Typography variant="subtitle1">{competitor.role.role}</Typography>
    </Box>
  )
}

export default People