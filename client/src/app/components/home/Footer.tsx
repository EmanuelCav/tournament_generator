import { NavigateFunction } from "react-router-dom"
import { Box } from "@mui/material"

import LogoFooter from "./components/footer/LogoFooter"
import NavFooter from "./components/footer/NavFooter"

const Footer = ({ navigate }: { navigate: NavigateFunction }) => {
    return (
        <Box bgcolor={'#87d2ab'} display={'flex'} justifyContent={'space-evenly'} alignItems={'center'}>
            <LogoFooter />
            <NavFooter navigate={navigate} />
        </Box>
    )
}

export default Footer