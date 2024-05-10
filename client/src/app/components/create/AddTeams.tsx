import { useState } from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'

import FormAddTeam from './components/FormAddTeam'

import { AddTeamsPropsType } from '../../types/create.types'

const AddTeams = ({ dispatch, user, event }: AddTeamsPropsType) => {

  const [isAddTeam, setIsAddTeam] = useState<boolean>(false)

  const handleAddTeam = () => {
    setIsAddTeam(!isAddTeam)
  }

  return (
    <Paper elevation={3} sx={{ p: 4, width: '37.33%' }}>
      {
        isAddTeam && <FormAddTeam handleAddTeam={handleAddTeam} dispatch={dispatch} user={user} event={event} />
      }
      <Typography color='#33CC33' variant="h5">Introduce teams</Typography>
      <Box component="form" noValidate p={2}>
        <Button variant='text' color='success' onClick={handleAddTeam}>
          Add a team
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2, fontSize: '1.225em' }}
          color='success'
          size='large'
        >
          NEXT
        </Button>
      </Box>
    </Paper>
  )
}

export default AddTeams