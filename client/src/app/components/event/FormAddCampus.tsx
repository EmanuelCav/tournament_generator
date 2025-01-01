import { ChangeEvent, FormEvent, useState } from "react"
import { Box, Button, Paper, TextField } from "@mui/material"

import CloseForm from "../general/CloseForm"

import { FormAddCampusPropsType } from "../../types/event.types"
import { ICreateTeam } from "../../interface/Event"
import { createCampusAction, updateCampusAction } from "../../server/actions/event.actions"

const FormAddCampus = ({ handleAddCampus, dispatch, user, event, isEdit, campusInfo, setIsEditCampus }: FormAddCampusPropsType) => {

  const initialState: ICreateTeam = {
    name: isEdit ? campusInfo.name : ''
  }

  const [campusData, setCampusData] = useState<ICreateTeam>(initialState)

  const { name } = campusData

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCampusData({ ...campusData, [name]: value })
  }

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    if(isEdit) {
      dispatch(updateCampusAction({
        campusData,
        cid: event.competitors?.find(c => c.user._id === user.user?._id)?._id!,
        id: campusInfo._id,
        setIsEditCampus,
        token: user.token!
      }))
      return
    }

    dispatch(createCampusAction({
      token: user.token!,
      id: event.competitors?.find(c => c.user._id === user.user?._id)?._id!,
      campusData,
      handleAddCampus
    }))

  }

  return (
    <Box display='flex' zIndex={16} justifyContent='center' width='100%' height='100vh' alignItems='center' position='fixed' top={0} left={0} sx={{
      background: 'rgba(0, 0, 0, 0.5)'
    }}>
      <Paper elevation={3} sx={{ p: 2, width: { md: '37.33%', xs: '90%' } }}>
        <CloseForm handleClose={isEdit ? () => setIsEditCampus(false) : handleAddCampus} />
        <Box component="form" noValidate sx={{ p: 4 }} onSubmit={handleSumbit}>
          <TextField
            margin="normal"
            fullWidth
            id="name"
            label="Campus name"
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

export default FormAddCampus