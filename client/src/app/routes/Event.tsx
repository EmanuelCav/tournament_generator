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
import ShowReferees from '../components/event/ShowReferees';
import FormAddPlayer from '../components/event/FormAddPlayer';
import Settings from '../components/event/Settings';
import Positions from '../components/event/Positions';
import Players from '../components/event/Players';

import { eventAction, joinTeamAction, removeCompetitorAction, removeEventAction, removePlayerAction, removeRefereeAction, removeTeamAction } from '../server/actions/event.actions';
import { selector } from '../server/selector';
import { getTeams } from '../server/reducer/statistic.reducer';
import { getPositionsApi } from '../server/api/event.api';

import { IReducer } from '../interface/General';
import { ICompetitor, IPlayer, IReferee, ITeam } from '../interface/Event';

const Event = () => {

    const user = useSelector((state: IReducer) => selector(state).user)
    const event = useSelector((state: IReducer) => selector(state).event)
    const get = useSelector((state: IReducer) => selector(state).get)
    const statistic = useSelector((state: IReducer) => selector(state).statistic)

    const [isText, setIsText] = useState<boolean>(false)
    const [isRemoveTeam, setIsRemoveTeam] = useState<boolean>(false)
    const [isAddTeam, setIsAddTeam] = useState<boolean>(false)
    const [isEditTeam, setIsEditTeam] = useState<boolean>(false)
    const [isAddReferee, setIsAddReferee] = useState<boolean>(false)
    const [isRemoveReferee, setIsRemoveReferee] = useState<boolean>(false)
    const [isEditReferee, setIsEditReferee] = useState<boolean>(false)
    const [isAddPlayer, setIsAddPlayer] = useState<boolean>(false)
    const [isRemovePlayer, setIsRemovePlayer] = useState<boolean>(false)
    const [isEditPlayer, setIsEditPlayer] = useState<boolean>(false)
    const [isRemoveCompetitor, setIsRemoveCompetitor] = useState<boolean>(false)

    const [infoTeam, setInfoTeam] = useState<ITeam | null>(null)
    const [infoReferee, setInfoReferee] = useState<IReferee | null>(null)
    const [infoPlayer, setInfoPlayer] = useState<IPlayer | null>(null)
    const [infoCompetitor, setInfoCompetitor] = useState<ICompetitor | null>(null)

    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSure = () => {
        setIsText(!isText)
    }

    const handleSureRT = () => {
        setIsRemoveTeam(!isRemoveTeam)
    }

    const handleSureRR = () => {
        setIsRemoveReferee(!isRemoveReferee)
    }

    const handleSureRP = () => {
        setIsRemovePlayer(!isRemovePlayer)
    }

    const handleSureRC = () => {
        setIsRemoveCompetitor(!isRemoveCompetitor)
    }

    const handleAddTeam = () => {
        setIsAddTeam(!isAddTeam)
    }

    const handleSureRemoveTeam = (team: ITeam) => {
        setInfoTeam(team)
        setIsRemoveTeam(!isRemoveTeam)
    }

    const handleSureRemoveReferee = (referee: IReferee) => {
        setInfoReferee(referee)
        setIsRemoveReferee(!isRemoveReferee)
    }

    const handleSureRemovePlayer = (player: IPlayer) => {
        setInfoPlayer(player)
        setIsRemovePlayer(!isRemovePlayer)
    }

    const handleSureRemoveCompetitor = (competitor: ICompetitor) => {
        setInfoCompetitor(competitor)
        setIsRemoveCompetitor(!isRemoveCompetitor)
    }

    const handleEditTeam = (team: ITeam) => {
        setInfoTeam(team)
        setIsEditTeam(!isEditTeam)
    }

    const handleEditReferee = (referee: IReferee) => {
        setInfoReferee(referee)
        setIsEditReferee(!isEditReferee)
    }

    const handleEditPlayer = (player: IPlayer) => {
        setInfoPlayer(player)
        setIsEditPlayer(!isEditPlayer)
    }

    const handleAddReferee = () => {
        setIsAddReferee(!isAddReferee)
    }

    const handleAddPlayer = (team: ITeam) => {
        setInfoTeam(team)
        setIsAddPlayer(!isAddPlayer)
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

    const removeReferee = async () => {

        dispatch(removeRefereeAction({
            cid: event.event.competitors?.find(c => c.user._id === user.user.user?._id)?._id!,
            rid: infoReferee?._id!,
            token: user.user.token!,
            setIsRemoveReferee
        }) as any)

    }

    const removePlayer = () => {

        dispatch(removePlayerAction({
            pid: infoPlayer?._id!,
            cid: event.event.competitors?.find(c => c.user._id === user.user.user?._id)?._id!,
            token: user.user.token!,
            setIsRemovePlayer
        }) as any)

    }

    const removeCompetitor = () => {

        dispatch(removeCompetitorAction({
            eid: event.event._id!,
            cid: infoCompetitor?._id!,
            token: user.user.token!,
            setIsRemoveCompetitor
        }) as any)

    }

    const joinTeam = (id: string) => {

        dispatch(joinTeamAction({
            id,
            token: user.user.token!
        }) as any)

    }

    const getPositions = async () => {
        const { data } = await getPositionsApi(event.event._id!, user.user.token!)
        dispatch(getTeams(data) as any)
    }

    useEffect(() => {
        if(event.event._id) {
            getPositions()
        }
    }, [event.event._id])

    useEffect(() => {
        dispatch(eventAction({ token: user.user.token!, id: params.id! }) as any)
    }, [params.id])

    return (
        <Container fixed maxWidth="lg">
            {
                isText && <Sure handleSure={handleSure} func={executeEvent} text='event' />
            }
            {
                isRemoveTeam && <Sure handleSure={handleSureRT} func={removeTeam} text='team' />
            }
            {
                isRemoveReferee && <Sure handleSure={handleSureRR} func={removeReferee} text='referee' />
            }
            {
                isRemovePlayer && <Sure handleSure={handleSureRP} func={removePlayer} text='player' />
            }
            {
                isRemoveCompetitor && <Sure handleSure={handleSureRC} func={removeCompetitor} text='competitor' />
            }
            {
                isAddPlayer && <FormAddPlayer handleAddPlayer={handleAddPlayer} dispatch={dispatch} user={user.user} event={event.event} setIsEditPlayer={setIsEditPlayer} isEdit={false} team={infoTeam!} player={infoPlayer!} />
            }
            {
                isAddTeam && <FormAddTeam handleAddTeam={handleAddTeam} dispatch={dispatch} user={user.user} event={event.event} />
            }
            {
                isAddReferee && <FormAddReferee handleAddReferee={handleAddReferee} setIsEditReferee={setIsEditReferee} dispatch={dispatch} user={user.user} event={event.event} isEdit={false} refereeInfo={infoReferee!} />
            }
            {
                isEditTeam && <EditTeam dispatch={dispatch} team={infoTeam!} eid={event.event._id!} setIsEditTeam={setIsEditTeam} token={user.user.token!} />
            }
            {
                isEditReferee && <FormAddReferee handleAddReferee={handleAddReferee} setIsEditReferee={setIsEditReferee} dispatch={dispatch} user={user.user} event={event.event} isEdit={true} refereeInfo={infoReferee!} />
            }
            {
                isEditPlayer && <FormAddPlayer handleAddPlayer={handleAddPlayer} setIsEditPlayer={setIsEditPlayer} dispatch={dispatch} user={user.user} event={event.event} isEdit={true} team={infoTeam!} player={infoPlayer!} />
            }
            <Box display='flex' justifyContent='flex-start' alignItems='flex-start'>
                <EventsNavigation dispatch={dispatch} get={get} event={event.event} user={user.user.user!} />
                {
                    get.isTeams && <ShowTeams user={user.user.user!} handleAddTeam={handleAddTeam} handleEditTeam={handleEditTeam} handleSure={handleSureRemoveTeam} event={event.event}
                        handleAddPlayer={handleAddPlayer} handleSurePlayer={handleSureRemovePlayer} handleEditPlayer={handleEditPlayer} joinTeam={joinTeam} />
                }
                {
                    get.isMatchdays && <ShowEvent event={event.event} user={user.user} dispatch={dispatch} />
                }
                {
                    get.isPositions && <Positions teams={statistic.teams} />
                }
                {
                    get.isPeople && <ShowPeople competitors={event.event?.competitors!} event={event.event} user={user.user} handleSureRemoveCompetitor={handleSureRemoveCompetitor} dispatch={dispatch} />
                }
                {
                    get.isReferees && <ShowReferees event={event.event} user={user.user.user!} handleEditReferee={handleEditReferee} handleAddReferee={handleAddReferee} handleSure={handleSureRemoveReferee} />
                }
                {
                    get.isSettings && <Settings user={user.user} dispatch={dispatch} eventInfo={event.event} handleSure={handleSure} />
                }
                {
                    get.isPlayers && <Players />
                }
            </Box>
        </Container>
    )
}

export default Event