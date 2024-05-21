import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from  "react-redux";
import { Box, Container } from '@mui/material'

import EventsNavigation from '../components/event/EventsNavigation'
import ShowEvent from '../components/event/ShowEvent'
import ShowTeams from '../components/event/ShowTeams';

import { eventAction } from '../server/actions/event.actions';

import { IReducer } from '../interface/General';

import { selector } from '../server/selector';

const Event = () => {

    const user = useSelector((state: IReducer) => selector(state).user)
    const event = useSelector((state: IReducer) => selector(state).event)
    const get = useSelector((state: IReducer) => selector(state).get)

    const params = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(eventAction({ token: user.user.token!, id: params.id! }) as any)
    }, [params.id])

    return (
        <Container fixed maxWidth="lg">
            <Box display='flex' justifyContent='flex-start' alignItems='flex-start'>
                <EventsNavigation />
                {
                    get.isTeams && <ShowTeams event={event.event} />
                }
                {
                    get.isMatchdays && <ShowEvent event={event.event} />
                }
            </Box>
        </Container>
    )
}

export default Event