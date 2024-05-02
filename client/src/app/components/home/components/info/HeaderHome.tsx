import { Box } from "@mui/material"

import TextHeaderHome from "./components/TextHeaderHome"
import ImageHeaderHome from "./components/ImageHeaderHome"

const HeaderHome = () => {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' flexWrap='wrap'>
            <TextHeaderHome />
            <ImageHeaderHome />
        </Box>
    )
}

export default HeaderHome