import { Box, Button, Paper, Typography } from "@mui/material"

import CloseForm from "../../../general/CloseForm"

import { RestartEventPropsType } from "../../../../types/event.types"

const RestartEvent = ({ handleRestartEvent, func }: RestartEventPropsType) => {
    return (
        <Box display='flex' zIndex={16} justifyContent='center' width='100%' height='100vh' alignItems='center' position='absolute' top={0} left={0} sx={{
            background: 'rgba(0, 0, 0, 0.5)'
        }}>
            <Paper elevation={3} sx={{ p: 2 }}>
                <CloseForm handleClose={handleRestartEvent} />
                <Typography variant="h6" color="cc3333">Are you sure to restart the event?</Typography>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2, fontSize: '1.225em' }}
                    color='error'
                    size='large'
                    onClick={func}
                >
                    RESTART
                </Button>
            </Paper>
        </Box>
    )
}

export default RestartEvent