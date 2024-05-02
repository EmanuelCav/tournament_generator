import { Box } from "@mui/material"

const CategoryImage = ({ image }: { image: string }) => {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' width='50%'>
            <Box
                component="img"
                src={image}
                alt="image_index"
            />
        </Box>
    )
}

export default CategoryImage