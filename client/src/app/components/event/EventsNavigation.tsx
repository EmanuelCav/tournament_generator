import { Box, List } from '@mui/material'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShieldIcon from '@mui/icons-material/Shield';
import GroupsIcon from '@mui/icons-material/Groups';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SportsIcon from '@mui/icons-material/Sports';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import SettingsIcon from '@mui/icons-material/Settings';
import StadiumIcon from '@mui/icons-material/Stadium';
import SmsIcon from '@mui/icons-material/Sms';

import EventNavigation from './components/eventsNavigation/EventNavigation'

import { matchdays, teams, people, referees, players, settings, positions, campus, chat } from '../../server/reducer/get.reducer';

import { EventsNavigationPropsType } from '../../types/event.types';

const EventsNavigation = ({ dispatch, get, event, user }: EventsNavigationPropsType) => {

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

  const handlePlayers = () => {
    dispatch(players(true))
  }

  const handleSettings = () => {
    dispatch(settings(true))
  }

  const handlePositions = () => {
    dispatch(positions(true))
  }

  const handleCampus = () => {
    dispatch(campus(true))
  }

  const handleChat = () => {
    dispatch(chat(true))
  }

  return (
    <Box width='20%' py={2} position={'relative'}>
      <List sx={{ width: 225, position: 'fixed', zIndex: 4 }}>
        <EventNavigation Icon={CalendarMonthIcon} isHere={get.isMatchdays} text='Matchdays' func={handleMatchdays} />
        <EventNavigation Icon={LeaderboardIcon} isHere={get.isPositions} text='Positions' func={handlePositions} />
        <EventNavigation Icon={CrisisAlertIcon} isHere={get.isPlayers} text='Players' func={handlePlayers} />
        <EventNavigation Icon={SportsIcon} isHere={get.isReferees} text='Referees' func={handleReferees} />
        <EventNavigation Icon={GroupsIcon} isHere={get.isPeople} text='People' func={handlePeople} />
        <EventNavigation Icon={ShieldIcon} isHere={get.isTeams} text='Teams' func={handleTeams} />
        <EventNavigation Icon={StadiumIcon} isHere={get.isCampus} text='Campus' func={handleCampus} />
        <EventNavigation Icon={SmsIcon} isHere={get.isChat} text='Chat' func={handleChat} />
        {
          user._id === event.admin && <EventNavigation Icon={SettingsIcon} isHere={get.isSettings} text='Settings' func={handleSettings} />
        }
      </List>
    </Box>
  )
}

export default EventsNavigation