import { Box } from "@mui/material"

import TextHeaderHome from "./components/TextHeaderHome"
import ImageHeaderHome from "./components/ImageHeaderHome"

const HeaderHome = () => {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' flexWrap='wrap' p={4} sx={{ boxShadow: 4 }} bgcolor={'#ffffff'} width={'100%'}>
            <TextHeaderHome />
            <ImageHeaderHome />
        </Box>
    )
}

export default HeaderHome