import { Box, Typography } from "@mui/material"

import { PublicEventsPropsType } from "../../types/events.types"

import ShowEvents from "../general/ShowEvents"

const PublicEvents = ({ events, navigate, text, dispatch, user }: PublicEventsPropsType) => {

    return (
        <Box py={4} px={8}>
            <Typography variant="h4" color='#2e7d32' ml={4} mb={2} fontWeight={600}>Explorar</Typography>
            {
                events.length > 0 ? <ShowEvents events={events} navigate={navigate} text={text} dispatch={dispatch} user={user} /> : (
                    <Typography variant="h5" color='#cc3333'>Por el momento no hay eventos</Typography>
                )
            }    
        </Box>
    )
}

export default PublicEvents