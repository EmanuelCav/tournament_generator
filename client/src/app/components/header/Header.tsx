import { AppBar, Box, Toolbar } from "@mui/material"
import { useNavigate } from 'react-router-dom'

import Logo from "./components/Logo"
import Navigation from "./components/Navigation"

const Header = () => {

    const navigate = useNavigate()

    return (
        <Box>
            <AppBar sx={{
                background: '#87d2ab',
                padding: 1,
                zIndex: 6
            }}>
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Logo />
                    <Navigation navigate={navigate} />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header