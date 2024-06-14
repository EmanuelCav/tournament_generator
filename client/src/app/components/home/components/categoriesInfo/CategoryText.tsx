import { Box, Typography } from "@mui/material"

import { CategoryTextPropsType } from "../../../../types/home.types"

const CategoryText = ({ text, color, description }: CategoryTextPropsType) => {
    return (
        <Box width='50%' p={4}>
            <Typography variant="h2" color={color}>
                {text}
            </Typography>
            <Typography variant="h5" mt={4} color={color}>
                {description}
            </Typography>
        </Box>
    )
}

export default CategoryText