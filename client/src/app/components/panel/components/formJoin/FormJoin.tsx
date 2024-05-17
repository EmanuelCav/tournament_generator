import { Box, Button, TextField } from "@mui/material"

const FormJoin = () => {
  return (
    <Box component="form" noValidate>
      <TextField
        margin="normal"
        fullWidth
        id="id"
        label="Event ID"
        name="id"
        autoFocus
        color='success'
        sx={{
          '&:hover fieldset': {
            borderColor: '#33CC33 !important',
          },
        }}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 2, mb: 2, fontSize: '1.225em' }}
        color='success'
        size='large'
      >
        Join
      </Button>
    </Box>
  )
}

export default FormJoin