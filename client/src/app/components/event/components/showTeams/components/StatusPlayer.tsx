import { Box, Typography } from '@mui/material'

const StatusPlayer = () => {
    return (
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mt={1} width={'100%'} p={2}>
            <Typography variant="h6">Player</Typography>
            <Typography variant="h6">Position</Typography>
        </Box>
    )
}

export default StatusPlayer