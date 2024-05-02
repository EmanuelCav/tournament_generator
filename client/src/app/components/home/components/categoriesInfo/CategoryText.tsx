import { Box, Typography } from "@mui/material"

import { CategoryTextPropsType } from "../../../../types/home.types"

const CategoryText = ({ text, color }: CategoryTextPropsType) => {
    return (
        <Box width='50%' p={4}>
            <Typography variant="h2" color={color}>
                {text}
            </Typography>
            <Typography variant="h6" mt={4} color={color}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae eum deleniti exercitationem tempore soluta quaerat reprehenderit tempora? Repellendus, earum? Nesciunt atque ad reprehenderit eveniet unde magni ea repudiandae nobis repellat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati nisi quia architecto rerum, id dolorum cumque. Voluptatibus, eveniet eos. Illum officiis tenetur rem delectus eveniet alias mollitia omnis, fuga commodi?
            </Typography>
        </Box>
    )
}

export default CategoryText