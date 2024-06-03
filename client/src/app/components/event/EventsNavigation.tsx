import { Box, List } from '@mui/material'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Delete from '@mui/icons-material/Delete';
import ShieldIcon from '@mui/icons-material/Shield';
import GroupsIcon from '@mui/icons-material/Groups';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SportsIcon from '@mui/icons-material/Sports';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';

import EventNavigation from './components/eventsNavigation/EventNavigation'

import { matchdays, teams, people, referees } from '../../server/reducer/get.reducer';

import { EventsNavigationPropsType } from '../../types/event.types';

const EventsNavigation = ({ handleSure, dispatch, get }: EventsNavigationPropsType) => {

  const handleTeams = () => {
    dispatch(teams(true))
  }

  const handleMatchdays = () => {
    dispatch(matchdays(true))
  }

  const handlePeople = () => {
    dispatch(people(true))
  }

  const handleReferees = () => {
    dispatch(referees(true))
  }

  return (
    <Box width='20%' py={2}>
      <List>
          <EventNavigation Icon={CalendarMonthIcon} isHere={get.isMatchdays} text='Matchdays' func={handleMatchdays} />
          <EventNavigation Icon={LeaderboardIcon} isHere={get.isMatchdays} text='Positions' func={() => {}} />
          <EventNavigation Icon={CrisisAlertIcon} isHere={get.isMatchdays} text='Scorers' func={() => {}} />
          <EventNavigation Icon={SportsIcon} isHere={get.isReferees} text='Referees' func={handleReferees} />
          <EventNavigation Icon={GroupsIcon} isHere={get.isPeople} text='People' func={handlePeople} />
          <EventNavigation Icon={ShieldIcon} isHere={get.isTeams} text='Teams' func={handleTeams} />
          <EventNavigation Icon={Delete} isHere={true} text='Remove' func={handleSure} />
      </List>
    </Box>
  )
}

export default EventsNavigation