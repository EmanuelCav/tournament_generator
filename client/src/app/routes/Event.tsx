import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { Box, Container } from '@mui/material'

import EventsNavigation from '../components/event/EventsNavigation'
import ShowEvent from '../components/event/ShowEvent'
import ShowTeams from '../components/event/ShowTeams';
import Sure from '../components/event/Sure';

import { eventAction, removeEventAction } from '../server/actions/event.actions';
import { getEvent } from '../server/reducer/event.reducer';

import { IReducer } from '../interface/General';

import { selector } from '../server/selector';
import { removeTeamApi } from '../server/api/event.api';

const Event = () => {

    const user = useSelector((state: IReducer) => selector(state).user)
    const event = useSelector((state: IReducer) => selector(state).event)
    const get = useSelector((state: IReducer) => selector(state).get)

    const [isText, setIsText] = useState<boolean>(false)
    const [isRemoveTeam, setIsRemoveTeam] = useState<boolean>(false)
    const [idTeam, setIdTeam] = useState<string | null>(null)

    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSure = () => {
        setIsText(!isText)
    }

    const handleSureRemoveTeam = (id: string) => {
        setIdTeam(id)
        setIsRemoveTeam(!isRemoveTeam)
    }

    const executeEvent = () => {
        dispatch(removeEventAction({
            id: event.event._id!,
            navigate,
            token: user.user.token!
        }) as any)
    }

    const removeTeam = async () => {

        try {

            const { data } = await removeTeamApi(idTeam!, event.event._id!, user.user.token!)
            dispatch(getEvent(data))

            setIsRemoveTeam(false)

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        dispatch(eventAction({ token: user.user.token!, id: params.id! }) as any)
    }, [params.id])

    return (
        <Container fixed maxWidth="lg">
            {
                isText && <Sure handleSure={handleSure} func={executeEvent} />
            }
            {
                isRemoveTeam && <Sure handleSure={handleSure} func={removeTeam} />
            }
            <Box display='flex' justifyContent='flex-start' alignItems='flex-start'>
                <EventsNavigation event={event.event} dispatch={dispatch} handleSure={handleSure} />
                {
                    get.isTeams && <ShowTeams handleSure={handleSureRemoveTeam} event={event.event} />
                }
                {
                    get.isMatchdays && <ShowEvent event={event.event} />
                }
            </Box>
        </Container>
    )
}

export default Event