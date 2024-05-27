import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

import { EventNavigationPropsType } from '../../../../types/event.types'

const EventNavigation = ({ Icon, func, text, isHere }: EventNavigationPropsType) => {
    return (
        <ListItem disablePadding sx={{ bgcolor: isHere ? '#bbbbbb' : '#ffffff'}}>
            <ListItemButton onClick={func}>
                <ListItemIcon>
                    <Icon color='success' />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: isHere ? '#ffffff' : '#33cc33' }} />
            </ListItemButton>
        </ListItem>
    )
}

export default EventNavigation