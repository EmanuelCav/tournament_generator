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
            <Typography variant="h4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore iste reiciendis, consequatur blanditiis debitis vitae at eum voluptas. Doloremque tenetur obcaecati explicabo excepturi nihil sapiente amet labore. Exercitationem, illum asperiores!</Typography>
        </Box>
    )
}

export default ImageAuth