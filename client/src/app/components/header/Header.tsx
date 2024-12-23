import { AppBar, Container, Toolbar } from "@mui/material"
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
        <AppBar sx={{ bgcolor: '#2e7d32', padding: { xs: 1, sm: 2 } }}>
            <Container fixed maxWidth="lg">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Logo isLoggedIn={user.isLoggedIn} navigate={navigate} />
                    <Navigation dispatch={dispatch} location={location} isLoggedIn={user.isLoggedIn} navigate={navigate} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header