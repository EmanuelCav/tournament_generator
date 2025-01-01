import { ChangeEvent, FormEvent, useState } from "react"
import { Box, Button, Paper, TextField } from "@mui/material"

import CloseForm from "../general/CloseForm"

import { FormAddRefereePropsType } from "../../types/event.types"
import { ICreateTeam } from "../../interface/Event"
import { createRefereeAction, updateRefereeAction } from "../../server/actions/event.actions"

const FormAddReferee = ({ handleAddReferee, dispatch, user, event, isEdit, refereeInfo, setIsEditReferee }: FormAddRefereePropsType) => {

  const initialState: ICreateTeam = {
    name: isEdit ? refereeInfo.name : ''
  }

  const [refereeData, setRefereeData] = useState<ICreateTeam>(initialState)

  const { name } = refereeData

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRefereeData({ ...refereeData, [name]: value })
  }

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    if(isEdit) {
      dispatch(updateRefereeAction({
        token: user.token!,
        refereeData,
        cid: event.competitors?.find(c => c.user._id === user.user?._id)?._id!,
        rid: refereeInfo._id,
        setIsEditReferee
      }))
      return
    }

    dispatch(createRefereeAction({
      token: user.token!,
      id: event.competitors?.find(c => c.user._id === user.user?._id)?._id!,
      handleAddReferee,
      refereeData
    }))

  }

  return (
    <Box display='flex' zIndex={16} justifyContent='center' width='100%' height='100vh' alignItems='center' position='fixed' top={0} left={0} sx={{
      background: 'rgba(0, 0, 0, 0.5)'
    }}>
      <Paper elevation={3} sx={{ p: 2, width: { md: '37.33%', xs: '90%' } }}>
        <CloseForm handleClose={isEdit ? () => setIsEditReferee(false) : handleAddReferee} />
        <Box component="form" noValidate sx={{ p: 4 }} onSubmit={handleSumbit}>
          <TextField
            margin="normal"
            fullWidth
            id="name"
            label="Referee name"
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
            inputProps={{ maxLength: 40 }}
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

export default FormAddReferee