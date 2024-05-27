import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

import { EventNavigationPropsType } from '../../../../types/event.types'

const EventNavigation = ({ Icon, func, text }: EventNavigationPropsType) => {
    return (
        <ListItem disablePadding>
            <ListItemButton onClick={func}>
                <ListItemIcon>
                    <Icon />
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
        </ListItem>
    )
}

export default EventNavigation