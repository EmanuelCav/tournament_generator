import { Button } from "@mui/material"

import { ButtonNavPropsType } from "../../../../types/header.types"

const ButtonNav = ({ text, Icon, redirect, route }: ButtonNavPropsType) => {
    return (
        <Button variant='contained' sx={{
            mx: 4, backgroundColor: '#33CC33', ":hover": {
                backgroundColor: '#6CF96C'
            }
        }} startIcon={<Icon />} onClick={() => redirect(route)}>
            {text}
        </Button>
    )
}

export default ButtonNav