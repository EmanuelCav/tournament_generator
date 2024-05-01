import { Box } from '@mui/material'

import Info from '../components/home/Info'
import Matchdays from '../components/home/Matchdays'
import Elimination from '../components/home/Elimination'
import Groups from '../components/home/Groups'
import Swiss from '../components/home/Swiss'

const Home = () => {
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