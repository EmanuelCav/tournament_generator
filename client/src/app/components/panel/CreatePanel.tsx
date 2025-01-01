import { Box, } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import PublicIcon from '@mui/icons-material/Public';
import AdjustIcon from '@mui/icons-material/Adjust';

import CardPanel from "./components/createPanel/CardPanel";

import { CreatePanelPropsType } from "../../types/panel.types";

const CreatePanel = ({ navigate, handleJoinEvent }: CreatePanelPropsType) => {

    const redirectCreate = () => {
        navigate('/create')
    }

    const redirectPublic = () => {
        navigate('/events')
    }

    return (
        <Box sx={{ mt: { xs: 4, sm: 9 }}} display='flex' justifyContent='space-around' alignItems='center' width='100%' flexWrap='wrap' p={8}>
            <CardPanel text="Public events" func={redirectPublic} Icon={PublicIcon} />
            <CardPanel text="Create an event" func={redirectCreate} Icon={AddIcon} />
            <CardPanel text="Join an event" func={handleJoinEvent} Icon={AdjustIcon} />
        </Box>
    )
}

export default CreatePanel