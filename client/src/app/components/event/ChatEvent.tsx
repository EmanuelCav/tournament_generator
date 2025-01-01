import { Box } from "@mui/material"

import SendMessages from "./components/chatEvent/SendMessages"
import ShowMessages from "./components/chatEvent/ShowMessages"

import { ChatEventPropsType } from "../../types/event.types"

const ChatEvent = ({ event, user, dispatch }: ChatEventPropsType) => {
  return (
    <Box flex={1} py={2} px={4} width={'100%'}>
        <ShowMessages event={event} user={user} />
        <SendMessages event={event} user={user} dispatch={dispatch} />
    </Box>
  )
}

export default ChatEvent