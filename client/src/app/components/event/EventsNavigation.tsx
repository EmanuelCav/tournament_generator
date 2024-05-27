import { Box, List } from '@mui/material'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Delete from '@mui/icons-material/Delete';
import ShieldIcon from '@mui/icons-material/Shield';

import EventNavigation from './components/eventsNavigation/EventNavigation'

import { matchdays, teams } from '../../server/reducer/get.reducer';

import { EventsNavigationPropsType } from '../../types/event.types';

const EventsNavigation = ({ handleSure, dispatch, get }: EventsNavigationPropsType) => {

  const handleTeams = () => {
    dispatch(teams(true))
  }

  const handleMatchdays = () => {
    dispatch(matchdays(true))
  }

  return (
    <Box width='20%' py={2}>
      <List>
          <EventNavigation Icon={CalendarMonthIcon} isHere={get.isMatchdays} text='Matchdays' func={handleMatchdays} />
          <EventNavigation Icon={CalendarMonthIcon} isHere={get.isMatchdays} text='Positions' func={() => {}} />
          <EventNavigation Icon={CalendarMonthIcon} isHere={get.isMatchdays} text='Scorers' func={() => {}} />
          <EventNavigation Icon={CalendarMonthIcon} isHere={get.isTeams} text='Referees' func={() => {}} />
          <EventNavigation Icon={ShieldIcon} isHere={get.isTeams} text='Teams' func={handleTeams} />
          <EventNavigation Icon={Delete} isHere={get.isTeams} text='Remove' func={handleSure} />
      </List>
    </Box>
  )
}

export default EventsNavigation