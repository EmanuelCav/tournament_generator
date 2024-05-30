import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Box } from "@mui/material"

import CreatePanel from "../components/panel/CreatePanel"
import EventsPanel from "../components/panel/EventsPanel"
import ContainFormJoin from "../components/panel/ContainFormJoin"

import { userEventsAction } from "../server/actions/event.actions";
import { selector } from "../server/selector";

import { IReducer } from "../interface/General";

const Panel = () => {

    const event = useSelector((state: IReducer) => selector(state).event)
    const user = useSelector((state: IReducer) => selector(state).user)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [isJoinEvent, setIsJoinEvent] = useState<boolean>(false)

    const handleJoinEvent = () => {
        setIsJoinEvent(!isJoinEvent)
    }

    useEffect(() => {
        dispatch(userEventsAction(user.user.token!) as any)
    }, [])

    return (
        <Box>
            {
                isJoinEvent && <ContainFormJoin handleJoinEvent={handleJoinEvent} />
            }
            <CreatePanel navigate={navigate} handleJoinEvent={handleJoinEvent} />
            <EventsPanel navigate={navigate} events={event.events} text="VISUALIZE" dispatch={dispatch} user={user.user} />
        </Box>
    )
}

export default Panel