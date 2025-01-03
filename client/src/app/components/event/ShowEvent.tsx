import { ChangeEvent, useState } from "react";
import { Box, Button, FormControlLabel, Switch, Typography } from '@mui/material'

import Matchs from './components/showEvent/Matchs'
import Generate from './components/showEvent/Generate'
import AddReferee from "./components/showEvent/AddReferee";
import AddScore from "./components/showEvent/AddScore";
import AddDate from "./components/showEvent/AddDate";
import AddCampus from "./components/showEvent/AddCampus";

import { generateMatchsAction } from '../../server/actions/event.actions'

import { ShowEventPropsType } from '../../types/event.types'
import { IMatch } from "../../interface/Event";

const ShowEvent = ({ event, dispatch, user }: ShowEventPropsType) => {

  const [isAddReferee, setIsAddReferee] = useState<boolean>(false)
  const [isAddScore, setIsAddScore] = useState<boolean>(false)
  const [isAddDate, setIsAddDate] = useState<boolean>(false)
  const [isAddCampus, setIsAddCampus] = useState<boolean>(false)

  const [isRoundTrip, setIsRoundTrip] = useState<boolean>(event.isRoundTrip!)
  const [isSingleFinal, setIsSingleFinal] = useState<boolean>(true)

  const [matchData, setMatchData] = useState<IMatch | null>(null)

  const generateNow = async () => {
    dispatch(generateMatchsAction({
      id: event._id!,
      token: user.token!,
      category: event.category?.category!,
      round: isRoundTrip ? 'trip' : 'one',
      singleFinal: isSingleFinal ? 'single' : 'trip'
    }))
  }

  const handleSingleFinal = (event: ChangeEvent<HTMLInputElement>) => {
    setIsSingleFinal(event.target.checked);
  };

  const handleRoundTrip = (event: ChangeEvent<HTMLInputElement>) => {
    setIsRoundTrip(event.target.checked);
  };

  const handleAddReferee = (match: IMatch) => {
    setIsAddReferee(!isAddReferee)
    setMatchData(match)
  }

  const handleAddScore = (match: IMatch) => {
    setIsAddScore(!isAddScore)
    setMatchData(match)
  }

  const handleUpdateSchedule = (match: IMatch) => {
    setIsAddDate(!isAddDate)
    setMatchData(match)
  }

  const handleUpdateCampus = (match: IMatch) => {
    setIsAddCampus(!isAddCampus)
    setMatchData(match)
  }

  return (
    <Box sx={{ width: '100%' }}>
      {
        isAddReferee && <AddReferee matchData={matchData!} event={event} handleAddReferee={handleAddReferee} dispatch={dispatch} user={user} />
      }
      {
        isAddScore && <AddScore matchData={matchData!} event={event} setIsAddScore={setIsAddScore} dispatch={dispatch} user={user} />
      }
      {
        isAddDate && <AddDate matchData={matchData!} event={event} handleUpdateSchedule={handleUpdateSchedule} dispatch={dispatch} user={user} />
      }
      {
        isAddCampus && <AddCampus matchData={matchData!} event={event} handleUpdateCampus={handleUpdateCampus} dispatch={dispatch} user={user} />
      }
      <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box component="img" src={event.image?.image} width={120} height={120} borderRadius={25} loading="lazy" />
        <Typography variant="h4" textAlign='center' color='#33cc33' ml={2}>{event.event}</Typography>
      </Box>
      {
        event.admin === user.user?._id && <FormControlLabel control={<Switch disabled={event.done} checked={isRoundTrip} onChange={handleRoundTrip} />} label="Round trip" />
      }
      {
        event.admin === user.user?._id && isRoundTrip && (event.category?.category === "GROUP STAGE" || event.category?.category === "SWISS" || event.category?.category === "ELIMINATION") && 
        <FormControlLabel control={<Switch disabled={event.done} checked={isSingleFinal} onChange={handleSingleFinal} />} label="Single final" />
      }
      {
        event.matchs?.length! > 0 ? (
          <>
            {
              event.admin === user.user?._id && <Button size="large" variant="contained" color="primary" sx={{ my: 2 }} onClick={generateNow} disabled={event.done}>GENERATE AGAIN</Button>
            }
            <Matchs isAdmin={event.competitors?.find((c) => c.user._id === user.user?._id)?.role.role === 'ADMIN'} event={event}
              handleAddReferee={handleAddReferee} handleAddScore={handleAddScore} handleUpdateSchedule={handleUpdateSchedule} handleUpdateCampus={handleUpdateCampus} />
          </>
        ) : (
          <>
            {
              event.admin === user.user?._id && <Generate disabled={event.teams?.length! < 2} generateNow={generateNow} event={event} />
            }
          </>
        )
      }
    </Box>
  )
}

export default ShowEvent