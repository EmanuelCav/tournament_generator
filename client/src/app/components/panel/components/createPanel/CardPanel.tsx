import { Paper, Typography } from "@mui/material"

import { CardPanelPropsType } from "../../../../types/panel.types";

const CardPanel = ({ text, func, Icon }: CardPanelPropsType) => {

    return (
        <Paper className="hvr-bounce-in"
            sx={{
                width: { xs: '100%', md: 'auto' },
                p: { md: 8, xs: 1 },
                display: 'flex', height: '100%', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column', cursor: 'pointer', mt: 4
            }} onClick={func}>
            <Typography variant="h5" align="center" gutterBottom>{text}</Typography>
            <Icon color="success" fontSize="large" />
        </Paper>
    )
}

export default CardPanel