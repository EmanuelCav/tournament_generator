import { NavigateFunction } from "react-router-dom";
import { Box, } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import PublicIcon from '@mui/icons-material/Public';
import AdjustIcon from '@mui/icons-material/Adjust';

import CardPanel from "./components/createPanel/CardPanel";

const CreatePanel = ({ navigate }: { navigate: NavigateFunction }) => {

    const redirectCreate = () => {
        navigate('/create')
    }

    const redirectPublic = () => {
        navigate('/events')
    }

    const joinEvent = () => {
        navigate('/events')
    }

    return (
        <Box display='flex' justifyContent='space-around' alignItems='center' width='100%' flexWrap='wrap' p={12}>
            <CardPanel text="Public events" func={redirectPublic} Icon={PublicIcon} />
            <CardPanel text="Create an event" func={redirectCreate} Icon={AddIcon} />
            <CardPanel text="Join an event" func={joinEvent} Icon={AdjustIcon} />
        </Box>
    )
}

export default CreatePanel