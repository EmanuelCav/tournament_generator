import { Box, List } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import EventNavigation from './components/EventNavigation'

const EventsNavigation = () => {
  return (
    <Box width='20%' py={2}>
      <List>
          <EventNavigation Icon={CalendarMonthIcon} text='Matchdays' func={() => {}} />
          <EventNavigation Icon={CalendarMonthIcon} text='Positions' func={() => {}} />
          <EventNavigation Icon={CalendarMonthIcon} text='Scorers' func={() => {}} />
          <EventNavigation Icon={CalendarMonthIcon} text='Referees' func={() => {}} />
          <EventNavigation Icon={CalendarMonthIcon} text='Players' func={() => {}} />
          <EventNavigation Icon={CalendarMonthIcon} text='Remove' func={() => {}} />
      </List>
    </Box>
  )
}

export default EventsNavigation