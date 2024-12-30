import { Box } from "@mui/material"

import { LogoPropsType } from "../../../types/header.types"

const Logo = ({ navigate, isLoggedIn, location }: LogoPropsType) => {

    const redirectIndex = () => {
        if (isLoggedIn) {
            if (location.pathname === "/events") {
                const element = document.getElementById("Introduction");
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                navigate('/events')
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