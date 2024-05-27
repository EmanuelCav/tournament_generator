import { Box, List } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import EventNavigation from './components/eventsNavigation/EventNavigation'

import { matchdays, teams } from '../../server/reducer/get.reducer';

import { EventsNavigationPropsType } from '../../types/event.types';

const EventsNavigation = ({ handleSure, dispatch }: EventsNavigationPropsType) => {

  const handleTeams = () => {
    dispatch(teams(true))
  }

  const handleMatchdays = () => {
    dispatch(matchdays(true))
  }

  return (
    <Box width='20%' py={2}>
      <List>
          <EventNavigation Icon={CalendarMonthIcon} text='Matchdays' func={handleMatchdays} />
          <EventNavigation Icon={CalendarMonthIcon} text='Positions' func={() => {}} />
          <EventNavigation Icon={CalendarMonthIcon} text='Scorers' func={() => {}} />
          <EventNavigation Icon={CalendarMonthIcon} text='Referees' func={() => {}} />
          <EventNavigation Icon={CalendarMonthIcon} text='Teams' func={handleTeams} />
          <EventNavigation Icon={CalendarMonthIcon} text='Remove' func={handleSure} />
      </List>
    </Box>
  )
}

export default EventsNavigation