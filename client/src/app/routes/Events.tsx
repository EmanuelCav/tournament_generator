import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { Box } from '@mui/material'

import JoinEvent from '../components/events/JoinEvent'
import PublicEvents from '../components/events/PublicEvents'

import { IReducer } from '../interface/General'

import { eventsAction } from '../server/actions/event.actions'
import { selector } from '../server/selector';

const Events = () => {

    const event = useSelector((state: IReducer) => selector(state).event)
    const user = useSelector((state: IReducer) => selector(state).user)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(eventsAction(user.user.token!) as any)
    }, [])
    
    return (
        <Box>
            <JoinEvent dispatch={dispatch} navigate={navigate} user={user.user} />
            <PublicEvents events={event.events} navigate={navigate} dispatch={dispatch} user={user.user} text='JOIN' />
        </Box>
    )
}

export default Events