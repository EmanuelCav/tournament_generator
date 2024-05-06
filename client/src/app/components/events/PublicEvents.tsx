import { Box, Grid, Typography } from "@mui/material"

import PublicEvent from "./publicEvents/PublicEvent"

import { IEvent } from "../../interface/Tournament"

const PublicEvents = ({ events }: { events: IEvent[] }) => {
    return (
        <Box py={4} px={8}>
            <Typography variant="h3" color='#33cc33'>Public events</Typography>    
            <Grid container spacing={1} py={4}>
                <Grid container spacing={3} wrap="wrap">
                    {
                        events.map((event: IEvent) => {
                            return <PublicEvent event={event} key={event._id} />
                        })
                    }
                </Grid>
            </Grid>
        </Box>
    )
}

export default PublicEvents