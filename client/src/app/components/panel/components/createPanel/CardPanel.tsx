import { Paper, Typography } from "@mui/material"

import { CardPanelPropsType } from "../../../../types/panel.types";

const CardPanel = ({ text, func, Icon }: CardPanelPropsType) => {

    return (
        <Paper className="hvr-bounce-in" sx={{ p: 8, display: 'flex', height: '100%', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column', cursor: 'pointer' }} onClick={func}>
            <Typography variant="h5">{text}</Typography>
            <Icon color="success" fontSize="large" />
        </Paper>
    )
}

export default CardPanel