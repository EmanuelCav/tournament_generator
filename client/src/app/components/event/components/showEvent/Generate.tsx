import { Box, Button, Typography } from "@mui/material"

import { GeneratePropsType } from "../../../../types/event.types"

import { isPowerTwo } from "../../../../helper/functions"

const Generate = ({ disabled, generateNow, event }: GeneratePropsType) => {

    return (
        <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
            <Typography variant="h6" color={disabled ? '#cc3333' : '#33cc33'}>You have to add more than 1 team to generate a tournament</Typography>
            {
                event.category?.category === "ELIMINATION" && <Typography color={!isPowerTwo(event.teams?.length!) ? '#cc3333' : '#33cc33'} variant="h6">The number of teams must be exact power of 2 (like 2, 4, 8, 16, 32 etc.)</Typography>
            }
            <Button size="large" variant="contained" color="success" sx={{ mt: 2 }} onClick={generateNow}
            disabled={disabled || (event.category?.category === "ELIMINATION" && !isPowerTwo(event.teams?.length!))}>GENERATE NOW</Button>
        </Box>
    )
}

export default Generate