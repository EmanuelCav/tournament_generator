import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

import { EventNavigationPropsType } from '../../../types/event.types'

const EventNavigation = ({ Icon, func, text }: EventNavigationPropsType) => {
    return (
        <ListItemButton onClick={func}>
            <ListItemIcon>
                <Icon />
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItemButton>
    )
}

export default EventNavigation