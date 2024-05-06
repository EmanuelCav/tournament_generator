import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material"

import CreatePanel from "../components/panel/CreatePanel"
import EventsPanel from "../components/panel/EventsPanel"

const Panel = () => {

    const navigate = useNavigate()

    return (
        <Box>
            <CreatePanel navigate={navigate} />
            <EventsPanel />
        </Box>
    )
}

export default Panel