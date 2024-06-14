import { Box } from "@mui/material"

const CategoryImage = ({ Icon }: { Icon: any }) => {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' width='50%'>
            <Icon color='success' fontSize={'large'} sx={{ fontSize: '21.2em' }} />
        </Box>
    )
}

export default CategoryImage