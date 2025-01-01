import { Box } from "@mui/material"

import { LogoPropsType } from "../../../types/header.types"

const Logo = ({ navigate, isLoggedIn, location, token }: LogoPropsType) => {

    const redirectIndex = () => {
        if (isLoggedIn && token) {
            if (location.pathname === "/panel") {
                const element = document.getElementById("panel");
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                navigate('/panel')
            }
        } else {
            if (location.pathname === "/") {
                const element = document.getElementById("Introduction");
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                navigate('/')
            }
        }
    }

    return (
        <Box
            component="img"
            src="/logo.png"
            alt="logo"
            onClick={redirectIndex}
            sx={{ cursor: 'pointer' }}
            className="no-select"
            width={60}
            height={60}
        />
    )
}

export default Logo