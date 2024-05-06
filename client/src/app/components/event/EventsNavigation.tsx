import { Box, List, ListItem } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import EventNavigation from './components/EventNavigation'

const EventsNavigation = () => {
  return (
    <Box width='20%'>
      <List>
        <ListItem disablePadding>
          <EventNavigation Icon={CalendarMonthIcon} text='Matchdays' func={() => {}} />
        </ListItem>
      </List>
    </Box>
  )
}

export default EventsNavigation