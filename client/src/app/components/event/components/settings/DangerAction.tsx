import { Button, Paper, Typography } from "@mui/material"

import { DangerActionPropsType } from "../../../../types/event.types"

const DangerAction = ({ text, button, func }: DangerActionPropsType) => {
    return (
        <Paper elevation={3} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', p: 2, mt: 3 }}>
            <Typography variant="h6" color="#cc3333">{text}</Typography>
            <Button variant="contained" color="error" onClick={func}>{button}</Button>
        </Paper>
    )
}

export default DangerAction