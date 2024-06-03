import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { Box, Container } from '@mui/material'

import EventsNavigation from '../components/event/EventsNavigation'
import ShowEvent from '../components/event/ShowEvent'
import ShowTeams from '../components/event/ShowTeams';
import Sure from '../components/event/Sure';
import FormAddTeam from '../components/create/components/FormAddTeam';
import EditTeam from '../components/event/EditTeam';
import ShowPeople from '../components/event/ShowPeople';
import FormAddReferee from '../components/event/FormAddReferee';

import { eventAction, removeEventAction, removeTeamAction } from '../server/actions/event.actions';
import { selector } from '../server/selector';

import { IReducer } from '../interface/General';
import { ITeam } from '../interface/Event';
import ShowReferees from '../components/event/ShowReferees';

const Event = () => {

    const user = useSelector((state: IReducer) => selector(state).user)
    const event = useSelector((state: IReducer) => selector(state).event)
    const get = useSelector((state: IReducer) => selector(state).get)

    const [isText, setIsText] = useState<boolean>(false)
    const [isRemoveTeam, setIsRemoveTeam] = useState<boolean>(false)
    const [isAddTeam, setIsAddTeam] = useState<boolean>(false)
    const [isEditTeam, setIsEditTeam] = useState<boolean>(false)
    const [isAddReferee, setIsAddReferee] = useState<boolean>(false)

    const [infoTeam, setInfoTeam] = useState<ITeam | null>(null)

    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSure = () => {
        setIsText(!isText)
    }

    const handleAddTeam = () => {
        setIsAddTeam(!isAddTeam)
    }

    const handleSureRemoveTeam = (team: ITeam) => {
        setInfoTeam(team)
        setIsRemoveTeam(!isRemoveTeam)
    }

    const handleEditTeam = (team: ITeam) => {
        setInfoTeam(team)
        setIsEditTeam(!isEditTeam)
    }

    const handleAddReferee = () => {
        setIsAddReferee(!isAddReferee)
    }

    const executeEvent = () => {
        dispatch(removeEventAction({
            id: event.event._id!,
            navigate,
            token: user.user.token!
        }) as any)
    }

    const removeTeam = async () => {

        dispatch(removeTeamAction({
            eid: event.event._id!,
            tid: infoTeam?._id!,
            token: user.user.token!,
            setIsRemoveTeam
        }) as any)

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
            {
                isAddTeam && <FormAddTeam handleAddTeam={handleAddTeam} dispatch={dispatch} user={user.user} event={event.event} />
            }
            {
                isEditTeam && <EditTeam dispatch={dispatch} team={infoTeam!} eid={event.event._id!} setIsEditTeam={setIsEditTeam} token={user.user.token!} />
            }
            {
                isAddReferee && <FormAddReferee handleAddReferee={handleAddReferee} dispatch={dispatch} user={user.user} event={event.event}/>
            }
            <Box display='flex' justifyContent='flex-start' alignItems='flex-start'>
                <EventsNavigation dispatch={dispatch} handleSure={handleSure} get={get} />
                {
                    get.isTeams && <ShowTeams handleAddTeam={handleAddTeam} handleEditTeam={handleEditTeam} handleSure={handleSureRemoveTeam} event={event.event} />
                }
                {
                    get.isMatchdays && <ShowEvent event={event.event} />
                }
                {
                    get.isPeople && <ShowPeople competitors={event.event?.competitors!} />
                }
                {
                    get.isReferees && <ShowReferees referees={event.event?.referees!} handleAddReferee={handleAddReferee} />
                }
            </Box>
        </Container>
    )
}

export default Event