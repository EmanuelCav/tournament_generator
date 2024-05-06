import { Box, Button, Paper, TextField } from '@mui/material'

const FormEvent = () => {
    return (
        <Paper elevation={3} sx={{ p: 4, width: '33.33%', mt: 2 }}>
            <Box component="form" noValidate>
                <TextField
                    // {...register("email")}
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
        </Paper>
    )
}

export default FormEvent