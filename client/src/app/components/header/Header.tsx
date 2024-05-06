import { AppBar, Box, Toolbar } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, useLocation } from 'react-router-dom'

import Logo from "./components/Logo"
import Navigation from "./components/Navigation"

import { IReducer } from "../../interface/General"

import { selector } from "../../server/selector"

const Header = () => {

    const user = useSelector((state: IReducer) => selector(state).user)

    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

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
                    <Logo navigate={navigate} isLoggedIn={user.isLoggedIn} />
                    <Navigation navigate={navigate} location={location} isLoggedIn={user.isLoggedIn} dispatch={dispatch} />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header