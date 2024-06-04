import { ChangeEvent, FormEvent, useState } from "react"
import { Box, Button, Paper, TextField } from "@mui/material"

import CloseForm from "../general/CloseForm"

import { FormAddPlayerPropsType } from "../../types/event.types"
import { ICreatePlayer } from "../../interface/Event"
import { createPlayerAction, updatePlayerAction } from "../../server/actions/event.actions"

const FormAddPlayer = ({ isEdit, handleAddPlayer, setIsEditPlayer, dispatch, event, user, team, player }: FormAddPlayerPropsType) => {

  const initialState: ICreatePlayer = {
    name: isEdit ? player.name : "",
    position: isEdit ? player.position : ""
  }

  const [playerData, setPlayerData] = useState<ICreatePlayer>(initialState)

  const { name, position } = playerData

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPlayerData({ ...playerData, [name]: value })
  }

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    if (isEdit) {
      dispatch(updatePlayerAction({
        cid: event.competitors?.find(c => c.user._id === user.user?._id)?._id!,
        token: user.token!,
        playerData,
        pid: player._id,
        setIsEditPlayer
      }))
      return
    }

    dispatch(createPlayerAction({
      handleAddPlayer,
      cid: event.competitors?.find(c => c.user._id === user.user?._id)?._id!,
      token: user.token!,
      playerData,
      tid: team._id,
      team
    }))

  }

  return (
    <Box display='flex' zIndex={16} justifyContent='center' width='100%' height='100vh' alignItems='center' position='absolute' top={0} left={0} sx={{
      background: 'rgba(0, 0, 0, 0.5)'
    }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <CloseForm handleClose={isEdit ? () => setIsEditPlayer(false) : () => handleAddPlayer(team)} />
        <Box component="form" noValidate sx={{ p: 4 }} onSubmit={handleSumbit}>
          <TextField
            margin="normal"
            fullWidth
            id="name"
            label="Player name"
            name="name"
            autoFocus
            color='success'
            value={name}
            sx={{
              '&:hover fieldset': {
                borderColor: '#33CC33 !important',
              },
            }}
            onChange={handleChange}
            autoComplete='off'
          />
          <TextField
            margin="normal"
            fullWidth
            id="position"
            label="Position"
            name="position"
            autoFocus
            color='success'
            value={position}
            sx={{
              '&:hover fieldset': {
                borderColor: '#33CC33 !important',
              },
            }}
            onChange={handleChange}
            autoComplete='off'
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2, fontSize: '1.225em' }}
            color='success'
            size='large'
          >
            {isEdit ? 'EDIT' : 'ADD'}
          </Button>
        </Box>
      </Paper>
    </Box>
  )
}

export default FormAddPlayer