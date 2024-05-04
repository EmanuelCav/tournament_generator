import { useEffect } from 'react'
import { redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Box } from '@mui/material'

import Info from '../components/home/Info'
import Matchdays from '../components/home/Matchdays'
import Elimination from '../components/home/Elimination'
import Groups from '../components/home/Groups'
import Swiss from '../components/home/Swiss'

import { IReducer } from '../interface/General'

import { selector } from '../server/selector'

const Home = () => {

  const user = useSelector((state: IReducer) => selector(state).user)

  useEffect(() => {
    if (user.isLoggedIn) {
      redirect('/events')
    }
  }, [])

  return (
    <Box>
      <Info />
      <Matchdays />
      <Elimination />
      <Groups />
      <Swiss />
    </Box>
  )
}

export default Home