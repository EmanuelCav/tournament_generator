import { NavigateFunction } from "react-router-dom";
import { Box, Paper, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

const CreatePanel = ({ navigate }: { navigate: NavigateFunction }) => {

    const redirectCreate = () => {
        navigate('/create')
    }

    return (
        <Box display='flex' justifyContent='center' alignItems='center' p={12}>
            <Paper className="hvr-bounce-in" sx={{ p: 8, display: 'flex', height: '100%', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column', cursor: 'pointer'}} onClick={redirectCreate}>
                <Typography variant="h5">Create an event</Typography>
                <AddIcon color="success" fontSize="large" />
            </Paper>
        </Box>
    )
}

export default CreatePanel