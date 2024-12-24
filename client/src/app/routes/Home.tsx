import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Introduction from '../components/home/Introduction'
import Tournaments from '../components/home/Tournaments'
// import Subscriptions from '../components/home/Subscriptions'
import Details from '../components/home/Details'
import Display from '../components/home/Display'
import Footer from '../components/home/Footer'
import Enjoy from '../components/home/Enjoy'

import { IReducer } from '../interface/General'
// import { ISubscription } from '../interface/User'

import { selector } from '../server/selector'
import { statusApi, /*subscriptionsApi*/ } from '../server/api/user.api'
import { autoLoginAction } from '../server/actions/user.actions'

const Home = () => {

  const user = useSelector((state: IReducer) => selector(state).user)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // const [showSubscriptions, setShowSubscriptions] = useState<ISubscription[]>([])

  // const getSubscriptions = async () => {

  //   try {

  //     const { data } = await subscriptionsApi()
  //     setShowSubscriptions(data)

  //   } catch (error) {
  //     console.log(error);
  //   }

  // }

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

  // useEffect(() => {
  //   getSubscriptions()
  // }, [])

  useEffect(() => {
    if (user.isLoggedIn) {
      navigate('/events')
    }
  }, [])

  return (
    <>
      {
        !user.isLoggedIn &&
        <>
          <Introduction navigate={navigate} />
          <Tournaments />
          <Details />
          <Display />
          <Enjoy />
          {/* <Subscriptions showSubscriptions={showSubscriptions} /> */}
          <Footer navigate={navigate} />
        </>
      }
    </>
  )
}

export default Home