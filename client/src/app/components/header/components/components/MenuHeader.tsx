import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';

import { MenuHeaderPropsType } from '../../../../types/header.types';
import { logoutAction } from '../../../../server/actions/user.actions';

const MenuHeader = ({ dispatch, navigate }: MenuHeaderPropsType) => {

    const handleLogout = () => {
        dispatch(logoutAction(navigate))
    }

    return (
        <Paper elevation={3} sx={{ position: 'absolute', zIndex: 14, top: 75, right: 75 }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleLogout}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Log out" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Paper>
    )
}

export default MenuHeader