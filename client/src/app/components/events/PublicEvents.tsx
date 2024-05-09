import { Box, Typography } from "@mui/material"

import { PublicEventsPropsType } from "../../types/events.types"

import ShowEvents from "../general/ShowEvents"

const PublicEvents = ({ events, navigate, text }: PublicEventsPropsType) => {

    return (
        <Box py={4} px={8}>
            <Typography variant="h3" color='#33cc33'>Public events</Typography>    
            <ShowEvents events={events} navigate={navigate} text={text} />
        </Box>
    )
}

export default PublicEvents