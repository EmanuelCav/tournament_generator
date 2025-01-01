import { useEffect, useState } from "react";
import { AppBar, Container, Toolbar } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

import Logo from "./components/Logo"
import Navigation from "./components/Navigation"
import MenuDrawer from "./components/MenuDrawer";

import { IReducer } from "../../interface/General"

import { selector } from "../../server/selector"
import { welcomeApi } from "../../server/api/status.api";

const Header = () => {

    const user = useSelector((state: IReducer) => selector(state).user)

    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const [isMenu, setIsMenu] = useState<boolean>(false)

    const handleMenu = () => {
        setIsMenu(!isMenu)
    }

    useEffect(() => {
        (async () => {
            await welcomeApi()
        })()
    }, [])

    return (
        <>
            <AppBar sx={{ bgcolor: '#2e7d32', padding: { xs: 1, sm: 2 } }}>
                <Container fixed maxWidth="lg">
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Logo isLoggedIn={user.isLoggedIn} navigate={navigate} location={location} token={user.user.token!} />
                        <Navigation location={location} navigate={navigate} user={user} dispatch={dispatch} setIsMenu={setIsMenu} />
                        <MenuIcon fontSize="large" color="inherit" sx={{ display: { xs: 'block', md: 'none' }, cursor: 'pointer' }} onClick={handleMenu} />
                    </Toolbar>
                </Container>
            </AppBar>
            <MenuDrawer isMenu={isMenu} handleMenu={handleMenu} navigate={navigate} user={user} dispatch={dispatch} setIsMenu={setIsMenu} />
        </>
    )
}

export default Header