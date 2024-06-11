import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { Box, Button, InputLabel, MenuItem, TextField, Typography } from "@mui/material"

import DangerAction from "./components/settings/DangerAction"
import RestartEvent from "./components/settings/RestartEvent"

import { ICategory, ICreateEvent, IStatus } from "../../interface/Event"
import { SettingsPropsType } from "../../types/event.types"

import { categoriesApi } from "../../server/api/category.api"
import { statusApi } from "../../server/api/status.api"
import { restartMatchsAction, updateEventAction } from "../../server/actions/event.actions"

const Settings = ({ user, eventInfo, dispatch, handleSure }: SettingsPropsType) => {

  const initialState: ICreateEvent = {
    event: eventInfo.event!,
    description: eventInfo.description!,
    category: eventInfo.category?.category!,
    status: eventInfo.status?.status!
  }

  const [eventData, setEventData] = useState<ICreateEvent>(initialState)
  const [image, setImage] = useState<string>(eventInfo.image?.image!)

  const { event, description, category, status } = eventData

  const [isRestartEvent, setIsRestartEvent] = useState<boolean>(false)

  const [categories, setCategories] = useState<ICategory[]>([])
  const [statusData, setStatusData] = useState<IStatus[]>([])

  const handleRestartEvent = () => {
    setIsRestartEvent(!isRestartEvent)
  }

  const getCategories = async () => {

    try {

      const { data } = await categoriesApi(user.token!)
      setCategories(data)

    } catch (error) {
      console.log(error);
    }

  }

  const getStatus = async () => {

    try {

      const { data } = await statusApi(user.token!)
      setStatusData(data)

    } catch (error) {
      console.log(error);
    }

  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEventData({ ...eventData, [name]: value })
  }

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    setImage(files![0] as any)
  }

  const restartEvent = () => {
    dispatch(restartMatchsAction({
      id: eventInfo._id!,
      token: user.token!,
      handleRestartEvent
    }))
  }

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    const formData = new FormData()

    formData.append("event", event)
    formData.append("description", description)
    formData.append("category", category)
    formData.append("status", status)

    if (image) {
      formData.append("file", image)
    }

    dispatch(updateEventAction({
      formData,
      token: user.token!,
      id: eventInfo._id!
    }))

  }

  useEffect(() => {
    getCategories()
    getStatus()
  }, [])

  return (
    <Box flex={1} py={2} px={4}>
      {
        isRestartEvent && <RestartEvent func={restartEvent} handleRestartEvent={handleRestartEvent} />
      }
      <Box component="form" noValidate onSubmit={handleSumbit}>
        <TextField
          required
          margin="normal"
          fullWidth
          id="event"
          label="Title"
          name="event"
          value={event}
          color='success'
          sx={{
            '&:hover fieldset': {
              borderColor: '#33CC33 !important',
            },
          }}
          onChange={handleChange}
          inputProps={{ maxLength: 40 }}
        />
        <TextField
          required
          multiline
          margin="normal"
          rows={3}
          fullWidth
          id="description"
          label="Description"
          name="description"
          value={description}
          color='success'
          sx={{
            '&:hover fieldset': {
              borderColor: '#33CC33 !important'
            },
          }}
          onChange={handleChange}
          inputProps={{ maxLength: 200 }}
        />
        <Box className='image-event-form' display='flex' justifyContent='space-evenly' alignItems='center' flexDirection='column' my={2}>
          <Typography variant='h6' my={1}>Tournament image</Typography>
          <InputLabel htmlFor="fileInput" sx={{ cursor: 'pointer' }}>
            <Box component="img" src={image ? URL.createObjectURL(image as any) : "https://res.cloudinary.com/ddfm1znoo/image/upload/v1717421190/_715ec024-a870-44b1-9553-5499482553f9_ahgxhu.jpg"} width={40} height={40} />
          </InputLabel>
          <input id="fileInput" name='image' type="file" onChange={handleChangeImage} />
        </Box>
        <TextField
          sx={{ mt: 2 }}
          disabled={eventInfo.done!}
          id="category"
          name="category"
          fullWidth
          select
          value={category}
          label="Format"
          helperText="Select a tournament format"
          onChange={handleChange}
        >
          {categories.map((option) => (
            <MenuItem key={option.category} value={option.category}>
              {option.category}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          sx={{ mt: 2 }}
          id="status"
          name="status"
          fullWidth
          select
          value={status}
          label="Status"
          helperText="Select a tournament status"
          onChange={handleChange}
        >
          {statusData.map((option) => (
            <MenuItem key={option.status} value={option.status}>
              {option.status}
            </MenuItem>
          ))}
        </TextField>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ my: 2, fontSize: '1.225em' }}
          color='success'
          size='large'
        >
          UPDATE
        </Button>
      </Box>
      <DangerAction text="RESTART THE EVENT" button="RESTART" func={handleRestartEvent} />
      <DangerAction text="REMOVE THE EVENT" button="REMOVE" func={handleSure} />
    </Box>
  )
}

export default Settings