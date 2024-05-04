import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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

  const navigate = useNavigate()

  useEffect(() => {
    if (user.isLoggedIn) {
      navigate('/events')
    }
  }, [])

  return (
    <Box>
      {
        !user.isLoggedIn &&
        <>
          <Info />
          <Matchdays />
          <Elimination />
          <Groups />
          <Swiss />
        </>
      }
    </Box>
  )
}

export default Home