import { Grid } from "@mui/material"

import PublicEvent from "./components/PublicEvent"

import { PublicEventsPropsType } from "../../types/events.types"

const ShowEvents = ({ events, navigate, text, dispatch, user }: PublicEventsPropsType) => {
    return (
        <Grid container spacing={2}>
            {events.map((event) => {
                return <PublicEvent dispatch={dispatch} event={event} 
                navigate={navigate} text={text} user={user} key={event._id} />
            })}
        </Grid>
    )
}

export default ShowEvents