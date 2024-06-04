import { Box, Button, Typography } from "@mui/material"

import Referee from "./components/showReferees/Referee"

import { IReferee } from "../../interface/Event"
import { ShowRefereesPropsType } from "../../types/event.types"

const ShowReferees = ({ referees, handleAddReferee, handleSure, handleEditReferee }: ShowRefereesPropsType) => {
  return (
    <Box flex={1} py={2} px={4}>
      {
        referees.length === 0 && <Typography mt={2} textAlign='center' color='#33cc33' variant='h5'>There are not referees yet. Start to add.</Typography>
      }
      {
        referees.map((referee: IReferee) => {
          return <Referee referee={referee} handleSure={handleSure} handleEditReferee={handleEditReferee} key={referee._id} />
        })
      }
      <Button variant='text' sx={{ mt: 4 }} color='success' onClick={handleAddReferee}>
        Add a Referee
      </Button>
    </Box>
  )
}

export default ShowReferees