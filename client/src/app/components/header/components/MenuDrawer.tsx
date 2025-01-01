import { Box, Drawer, List } from "@mui/material"

import ListDrawer from "./components/ListDrawer"

import { logoutAction } from "../../../server/actions/user.actions"

import { MenuDrawerPropsType } from "../../../types/header.types"

const MenuDrawer = ({ isMenu, handleMenu, navigate, user, setIsMenu, dispatch }: MenuDrawerPropsType) => {

    const redirectCreate = () => {
        if (user.isLoggedIn && user.user.token) {
            navigate("/create")
        } else {
            navigate("/auth")
        }
    }

    const logout = () => {
        dispatch(logoutAction({
            navigate,
            setIsMenu
        }) as any)
    }

    const loggedInMenu = (
        <List>
            <ListDrawer text="Panel" func={() => navigate("/panel")} />
            <ListDrawer text="Explorar" func={() => navigate("/events")} />
            <ListDrawer text="Crear" func={redirectCreate} />
            <ListDrawer text="Cerrar sesión" func={logout} />
        </List>
    );

    const loggedOutMenu = (
        <List>
            <ListDrawer text="Explorar" func={() => navigate("/events")} />
            <ListDrawer text="Crear" func={redirectCreate} />
            <ListDrawer text="Iniciar sesión" func={() => navigate("/auth")} />
        </List>
    );


    return (
        <Drawer
            anchor="left"
            open={isMenu}
            onClose={handleMenu}
        >
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={handleMenu}
                onKeyDown={handleMenu}
            >
                {
                    user.isLoggedIn && user.user.token ? loggedInMenu : loggedOutMenu
                }
            </Box>
        </Drawer>
    )
}

export default MenuDrawer