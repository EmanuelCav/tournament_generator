import { ChangeEvent, useState } from "react";
import { Box, Button, FormControlLabel, Switch, Typography } from '@mui/material'

import Matchs from './components/showEvent/Matchs'
import Generate from './components/showEvent/Generate'
import AddReferee from "./components/showEvent/AddReferee";
import AddScore from "./components/showEvent/AddScore";
import AddDate from "./components/showEvent/AddDate";

import { generateMatchsAction } from '../../server/actions/event.actions'

import { ShowEventPropsType } from '../../types/event.types'
import { IMatch } from "../../interface/Event";

const ShowEvent = ({ event, dispatch, user }: ShowEventPropsType) => {

  const [isAddReferee, setIsAddReferee] = useState<boolean>(false)
  const [isAddScore, setIsAddScore] = useState<boolean>(false)
  const [isAddDate, setIsAddDate] = useState<boolean>(false)
  const [isRoundTrip, setIsRoundTrip] = useState<boolean>(event.isRoundTrip!)

  const [matchData, setMatchData] = useState<IMatch | null>(null)

  const generateNow = async () => {
    dispatch(generateMatchsAction({
      id: event._id!,
      token: user.token!,
      category: event.category?.category!,
      round: isRoundTrip ? 'trip' : 'one'
    }))
  }

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

  return (
    <Box flex={1} py={2} px={4}>
      {
        isAddReferee && <AddReferee matchData={matchData!} event={event} handleAddReferee={handleAddReferee} dispatch={dispatch} user={user} />
      }
      {
        isAddScore && <AddScore matchData={matchData!} event={event} setIsAddScore={setIsAddScore} dispatch={dispatch} user={user} />
      }
      {
        isAddDate && <AddDate matchData={matchData!} event={event} handleUpdateSchedule={handleUpdateSchedule} dispatch={dispatch} user={user} />
      }
      <Typography variant="h4" textAlign='center' color='#33cc33'>{event.event}</Typography>
      {
        event.admin === user.user?._id && <FormControlLabel control={<Switch disabled={event.done} checked={isRoundTrip} onChange={handleRoundTrip} />} label="Round trip" />
      }
      {
        event.matchs?.length! > 0 ? (
          <>
            {
              event.admin === user.user?._id && <Button size="large" variant="contained" color="primary" sx={{ my: 2 }} onClick={generateNow} disabled={event.done}>GENERATE AGAIN</Button>
            }
            <Matchs isAdmin={event.competitors?.find((c) => c.user._id === user.user?._id)?.role.role === 'ADMIN'} event={event}
              handleAddReferee={handleAddReferee} handleAddScore={handleAddScore} handleUpdateSchedule={handleUpdateSchedule} />
          </>
        ) : (
          <>
            {
              event.admin === user.user?._id && <Generate disabled={event.teams?.length! < 2} generateNow={generateNow} />
            }
          </>
        )
      }
    </Box>
  )
}

export default ShowEvent