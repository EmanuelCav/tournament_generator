import { Box, Button, Typography } from "@mui/material"

import Referee from "./components/showReferees/Referee"

import { IReferee } from "../../interface/Event"
import { ShowRefereesPropsType } from "../../types/event.types"

const ShowReferees = ({ event, user, handleAddReferee, handleSure, handleEditReferee }: ShowRefereesPropsType) => {
  return (
    <Box flex={1} py={2} px={4} width={'100%'}>
      {
        event.referees!.length === 0 && <Typography mt={2} textAlign='center' color='#33cc33' variant='h5'>There are not referees yet.</Typography>
      }
      {
        event.referees!.map((referee: IReferee) => {
          return <Referee isAvailableEdit={event.competitors?.find((c) => c.user._id === user._id)?.role.role === 'ADMIN'} 
          referee={referee} handleSure={handleSure} handleEditReferee={handleEditReferee} key={referee._id} />
        })
      }
      {
        event.competitors?.find((c) => c.user._id === user._id)?.role.role === 'ADMIN' &&
        <Button variant='text' sx={{ mt: 4 }} color='success' onClick={handleAddReferee}>
          Add a Referee
        </Button>
      }
    </Box>
  )
}

export default ShowReferees