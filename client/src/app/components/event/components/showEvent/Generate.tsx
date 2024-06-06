import { Box, Button, Typography } from "@mui/material"

import { GeneratePropsType } from "../../../../types/event.types"

const Generate = ({ disabled, generateNow }: GeneratePropsType) => {

    return (
        <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
            <Typography variant="h6" color={disabled ? '#cc3333' : '#33cc33'}>You have to add more than 1 team to generate a tournament</Typography>
            <Button size="large" variant="contained" color="success" sx={{ mt: 2 }} disabled={disabled} onClick={generateNow}>GENERATE NOW</Button>
        </Box>
    )
}

export default Generate