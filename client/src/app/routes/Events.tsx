import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { Box } from '@mui/material'

import JoinEvent from '../components/events/JoinEvent'
import PublicEvents from '../components/events/PublicEvents'

import { IReducer } from '../interface/General'

import { eventsAction } from '../server/actions/event.actions'

const Events = () => {

    const event = useSelector((state: IReducer) => state.event)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(eventsAction() as any)
    }, [])
    
    return (
        <Box>
            <JoinEvent />
            <PublicEvents events={event.events} navigate={navigate} />
        </Box>
    )
}

export default Events