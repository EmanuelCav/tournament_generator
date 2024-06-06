import { Box, Typography } from "@mui/material"

import { PublicEventsPropsType } from "../../types/events.types"

import ShowEvents from "../general/ShowEvents"

const PublicEvents = ({ events, navigate, text, dispatch, user }: PublicEventsPropsType) => {

    return (
        <Box py={4} px={8}>
            <Typography variant="h3" color='#33cc33'>Public events</Typography>
            {
                events.length > 0 ? <ShowEvents events={events} navigate={navigate} text={text} dispatch={dispatch} user={user} /> : (
                    <Typography variant="h5" color='#cc3333'>There are not events yet</Typography>
                )
            }    
        </Box>
    )
}

export default PublicEvents