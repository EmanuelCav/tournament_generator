import { Box } from "@mui/material"

import { LogoPropsType } from "../../../types/header.types"

const Logo = ({ navigate, isLoggedIn }: LogoPropsType) => {

    const redirectIndex = () => {
        if(isLoggedIn) {
            navigate('/events')
        } else {
            navigate('/')
        }
    }

    return (
        <Box
            component="img"
            src="/header.png"
            alt="logo"
            onClick={redirectIndex}
            sx={{ cursor: 'pointer' }}
            className="no-select"
        />
    )
}

export default Logo