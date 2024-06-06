import { Box, Paper, Typography } from "@mui/material"

import { CardInfoPropsType } from "../../../../../types/home.types"

const CardInfo = ({ text, image }: CardInfoPropsType) => {
  return (
    <Paper elevation={3} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', p: 2 }}>
      <Typography variant="h4" color="#33cc33" my={1}>{text}</Typography>
      <Box
        component="img"
        src={image}
        alt="image-card"
        width={222}
        height={222}
      />
    </Paper>
  )
}

export default CardInfo