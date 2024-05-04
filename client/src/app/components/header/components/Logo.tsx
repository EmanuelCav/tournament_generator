import { Box } from "@mui/material"

import { NavigateFunction } from "react-router-dom"

const Logo = ({ navigate }: { navigate: NavigateFunction }) => {

    const redirectIndex = () => {
        navigate('/')
    }

    return (
        <Box
            component="img"
            src="/header.png"
            alt="logo"
            onClick={redirectIndex}
            sx={{ cursor: 'pointer' }}
        />
    )
}

export default Logo