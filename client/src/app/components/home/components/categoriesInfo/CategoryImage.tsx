import { Box, Paper } from "@mui/material"

const CategoryImage = ({ Icon }: { Icon: any }) => {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' width='50%'>
            <Paper elevation={3}>
                <Icon color='success' fontSize={'large'} sx={{ fontSize: '21.2em' }} />  
            </Paper>
        </Box>
    )
}

export default CategoryImage