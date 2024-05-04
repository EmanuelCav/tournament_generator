import { AppBar, Box, Toolbar } from "@mui/material"
import { useSelector } from "react-redux"
import { useNavigate, useLocation } from 'react-router-dom'

import Logo from "./components/Logo"
import Navigation from "./components/Navigation"

import { IReducer } from "../../interface/General"

import { selector } from "../../server/selector"

const Header = () => {

    const user = useSelector((state: IReducer) => selector(state).user)

    const navigate = useNavigate()
    const location = useLocation()

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
                    <Logo navigate={navigate} />
                    <Navigation navigate={navigate} location={location} isLoggedIn={user.isLoggedIn} />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header