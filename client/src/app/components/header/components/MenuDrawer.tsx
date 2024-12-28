import { Box, Drawer, List } from "@mui/material"

import ListDrawer from "./components/ListDrawer"

import { MenuDrawerPropsType } from "../../../types/header.types"

const MenuDrawer = ({ isMenu, handleMenu, navigate }: MenuDrawerPropsType) => {
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
                <List>
                    <ListDrawer text="Contacto" func={() => navigate('/contact')} />
                    <ListDrawer text="Explorar" func={() => navigate('/events')} />
                    <ListDrawer text="Crear" func={() => navigate('/create')} />
                    <ListDrawer text="Iniciar sesión" func={() => navigate('/auth')} />
                </List>
            </Box>
        </Drawer>
    )
}

export default MenuDrawer