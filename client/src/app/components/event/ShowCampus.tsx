import { Box, Button, Typography } from "@mui/material"

import Campus from "./components/showCampus/Campus"

import { ShowCampusPropsType } from "../../types/event.types"
import { ICampus } from "../../interface/Event"

const ShowCampus = ({ event, handleSure, user, handleEditCampus, handleAddCampus }: ShowCampusPropsType) => {
  return (
    <Box flex={1} py={2} px={4}>
      {
        event.campus!.length === 0 && <Typography mt={2} textAlign='center' color='#33cc33' variant='h5'>There are not campus yet.</Typography>
      }
      {
        event.campus!.map((campus: ICampus) => {
          return <Campus isAvailableEdit={event.competitors?.find((c) => c.user._id === user._id)?.role.role === 'ADMIN'}
            campus={campus} handleSure={handleSure} handleEditCampus={handleEditCampus} key={campus._id} />
        })
      }
      {
        event.competitors?.find((c) => c.user._id === user._id)?.role.role === 'ADMIN' &&
        <Button variant='text' sx={{ mt: 4 }} color='success' onClick={handleAddCampus}>
          Add a Campus
        </Button>
      }
    </Box>
  )
}

export default ShowCampus