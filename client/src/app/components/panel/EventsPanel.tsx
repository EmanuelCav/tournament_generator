import { Box } from "@mui/material"

import ShowEvents from "../general/ShowEvents"

import { PublicEventsPropsType } from "../../types/events.types"

const EventsPanel = ({ events, navigate, text, dispatch, user }: PublicEventsPropsType) => {
  return (
    <Box py={4} px={8}>
      <ShowEvents events={events} navigate={navigate} text={text} dispatch={dispatch} user={user} />
    </Box>
  )
}

export default EventsPanel