import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@mui/material'

import Info from '../components/home/Info'
import Matchdays from '../components/home/Matchdays'
import Elimination from '../components/home/Elimination'
import Groups from '../components/home/Groups'
import Swiss from '../components/home/Swiss'
import Subscriptions from '../components/home/Subscriptions'
import Footer from '../components/home/Footer'

import { IReducer } from '../interface/General'
import { ISubscription } from '../interface/User'

import { selector } from '../server/selector'
import { statusApi, subscriptionsApi } from '../server/api/user.api'
import { autoLoginAction } from '../server/actions/user.actions'

const Home = () => {

  const user = useSelector((state: IReducer) => selector(state).user)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const [showSubscriptions, setShowSubscriptions] = useState<ISubscription[]>([])

  const getSubscriptions = async () => {

    try {

      const { data } = await subscriptionsApi()
      setShowSubscriptions(data)

    } catch (error) {
      console.log(error);
    }

  }

  const getVerification = async () => {

    try {

      const { data } = await statusApi(user.user.token!)

      dispatch(autoLoginAction({
        navigate,
        nickname: data.nickname
      }) as any)

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    if (!user.isLoggedIn) {
      if (user.user.token) {
        getVerification()
      }
    }
  }, [])

  useEffect(() => {
    getSubscriptions()
  }, [])

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
          <Subscriptions showSubscriptions={showSubscriptions} />
          <Footer navigate={navigate} />
        </>
      }
    </Box>
  )
}

export default Home