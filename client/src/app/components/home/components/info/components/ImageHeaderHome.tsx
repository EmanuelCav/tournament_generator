import { Box } from "@mui/material"

const ImageHeaderHome = () => {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' width='50%'>
            <Box 
                component="img"
                src="logo.png"
                alt="image"
                width={200}
                height={200}
            />
        </Box>
    )
}

export default ImageHeaderHome