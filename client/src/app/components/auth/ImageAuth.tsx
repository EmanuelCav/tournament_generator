import { Box, Typography } from "@mui/material"

const ImageAuth = () => {
    return (
        <Box display='flex' px={12} height='100%' justifyContent='center' alignItems='center' flexDirection='column' width='50%'>
            <Box
                component="img"
                alt="image_app"
                src="/logo.png"
                width={386}
                height={386}
            />
            <Typography variant="h4" color='#33cc33'>The boost your event needs</Typography>
        </Box>
    )
}

export default ImageAuth