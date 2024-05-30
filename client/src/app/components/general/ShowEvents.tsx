import { Grid } from "@mui/material"

import PublicEvent from "./components/PublicEvent"

import { IEvent } from "../../interface/Event"
import { PublicEventsPropsType } from "../../types/events.types"

const ShowEvents = ({ events, navigate, text, dispatch, user }: PublicEventsPropsType) => {
    return (
        <Grid container spacing={1} py={4}>
            <Grid container spacing={3} wrap="wrap">
                {
                    events.map((event: IEvent) => {
                        return <PublicEvent event={event} navigate={navigate} dispatch={dispatch} text={text} user={user} key={event._id} />
                    })
                }
            </Grid>
        </Grid>
    )
}

export default ShowEvents