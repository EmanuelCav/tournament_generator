import { AppBar, Box, Toolbar } from "@mui/material"

import Logo from "./components/Logo"
import Navigation from "./components/Navigation"

const Header = () => {
    return (
        <Box>
            <AppBar sx={{
                background: '#ffffff',
                padding: 1,
                zIndex: 6
            }}>
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Logo />
                    <Navigation />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header