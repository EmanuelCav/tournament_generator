import { ListItem, ListItemButton, ListItemText } from "@mui/material"

import { ListDrawerPropsType } from "../../../../types/header.types"

const ListDrawer = ({ text, func }: ListDrawerPropsType) => {
    return (
        <ListItem onClick={func}>
            <ListItemButton component="a" sx={{
                '&.Mui-selected': {
                    backgroundColor: '#2e7d32'
                }
            }}>
                <ListItemText primary={text} />
            </ListItemButton>
        </ListItem>
    )
}

export default ListDrawer