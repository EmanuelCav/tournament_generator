import { useState } from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'

import FormAddTeam from './components/FormAddTeam'
import TeamFromCreate from './components/TeamFromCreate'

import { removeTeamAction } from '../../server/actions/event.actions'

import { AddTeamsPropsType } from '../../types/create.types'
import { ITeam } from '../../interface/Event'

const AddTeams = ({ dispatch, user, event, navigate }: AddTeamsPropsType) => {

  const [isAddTeam, setIsAddTeam] = useState<boolean>(false)

  const handleAddTeam = () => {
    setIsAddTeam(!isAddTeam)
  }

  const removeTeam = async (id: string) => {

      dispatch(removeTeamAction({
        eid: event._id!,
        tid: id,
        token: user.token!
      }))

  }

  const finishCreate = () => {
    navigate(`/events/${event._id}`)
  }

  return (
    <Paper elevation={3} sx={{ p: 4, width: '37.33%' }}>
      {
        isAddTeam && <FormAddTeam handleAddTeam={handleAddTeam} dispatch={dispatch} user={user} event={event} />
      }
      <Typography color='#33CC33' variant="h5">Introduce teams</Typography>
      {
        event.teams?.map((team: ITeam) => {
          return <TeamFromCreate team={team} removeTeam={removeTeam} key={team._id} />
        })
      }
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
          onClick={finishCreate}
        >
          NEXT
        </Button>
      </Box>
    </Paper>
  )
}

export default AddTeams