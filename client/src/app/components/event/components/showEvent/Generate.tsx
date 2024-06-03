import { Box, Button, Typography } from "@mui/material"

const Generate = ({ disabled }: { disabled: boolean }) => {
    return (
        <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
            <Typography variant="h6" color={disabled ? '#cc3333' : '#33cc33'}>You have to add more than 2 teams to generate a tournament</Typography>
            <Button size="large" variant="contained" color="success" sx={{ mt: 2 }} disabled={disabled}>GENERATE NOW</Button>
        </Box>
    )
}

export default Generate