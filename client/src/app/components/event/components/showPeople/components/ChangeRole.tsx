import { Box, Button, Paper, Typography } from "@mui/material"

import CloseForm from "../../../../general/CloseForm"

import { ChangeRolePropsType } from "../../../../../types/event.types"

const ChangeRole = ({ handleChangeRole, competitor, func }: ChangeRolePropsType) => {
    return (
        <Box display='flex' zIndex={16} justifyContent='center' width='100%' height='100vh' alignItems='center' position='absolute' top={0} left={0} sx={{
            background: 'rgba(0, 0, 0, 0.5)'
        }}>
            <Paper elevation={3} sx={{ p: 2 }}>
                <CloseForm handleClose={handleChangeRole} />
                <Typography variant="h6">Are you sure to change the role for {competitor.user.nickname}?</Typography>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2, fontSize: '1.225em' }}
                    color='success'
                    size='large'
                    onClick={func}
                >
                    CHANGE
                </Button>
            </Paper>
        </Box>
    )
}

export default ChangeRole