import { Paper, Typography } from "@mui/material"

import { CardInfoPropsType } from "../../../../../types/home.types"

const CardInfo = ({ text, Icon }: CardInfoPropsType) => {
  return (
    <Paper elevation={3} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', p: 2, width: 255, mt: 1 }}>
      <Typography variant="h4" color="#33cc33" my={1}>{text}</Typography>
      <Icon color='success' fontSize={'large'} sx={{ fontSize: '10.32em' }} />
    </Paper>
  )
}

export default CardInfo