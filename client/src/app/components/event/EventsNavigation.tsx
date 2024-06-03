import { Box, List } from '@mui/material'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Delete from '@mui/icons-material/Delete';
import ShieldIcon from '@mui/icons-material/Shield';
import GroupsIcon from '@mui/icons-material/Groups';

import EventNavigation from './components/eventsNavigation/EventNavigation'

import { matchdays, teams, people } from '../../server/reducer/get.reducer';

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

  return (
    <Box width='20%' py={2}>
      <List>
          <EventNavigation Icon={CalendarMonthIcon} isHere={get.isMatchdays} text='Matchdays' func={handleMatchdays} />
          <EventNavigation Icon={CalendarMonthIcon} isHere={get.isMatchdays} text='Positions' func={() => {}} />
          <EventNavigation Icon={CalendarMonthIcon} isHere={get.isMatchdays} text='Scorers' func={() => {}} />
          <EventNavigation Icon={CalendarMonthIcon} isHere={get.isTeams} text='Referees' func={() => {}} />
          <EventNavigation Icon={GroupsIcon} isHere={get.isPeople} text='People' func={handlePeople} />
          <EventNavigation Icon={ShieldIcon} isHere={get.isTeams} text='Teams' func={handleTeams} />
          <EventNavigation Icon={Delete} isHere={get.isTeams} text='Remove' func={handleSure} />
      </List>
    </Box>
  )
}

export default EventsNavigation