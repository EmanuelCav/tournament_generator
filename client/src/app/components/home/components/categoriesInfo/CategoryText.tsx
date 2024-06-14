import { Box, Paper, Typography } from "@mui/material"

import { CategoryTextPropsType } from "../../../../types/home.types"

const CategoryText = ({ text, description }: CategoryTextPropsType) => {
    return (
        <Box width='50%' p={4}>
            <Paper elevation={3} sx={{ p: 4, bgcolor: '#2e7d32' }}>
                <Typography variant="h2" color={'#ffffff'}>
                    {text}
                </Typography>
                <Typography variant="h5" mt={4} color={'#ffffff'}>
                    {description}
                </Typography>
            </Paper>
        </Box>
    )
}

export default CategoryText