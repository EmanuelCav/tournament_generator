import { Box, TextField, Typography } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { PasswordInputPropsType } from "../../../../types/auth.types";

const PasswordInput = ({ view, register, name, label, handleView, errors }: PasswordInputPropsType) => {
    return (
        <Box>
            {
                errors && <Typography mt={2} color='#f00'>{errors.message}</Typography>
            }
            <Box position="relative" display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
                <TextField
                    {...register(`${name}`)}
                    margin="normal"
                    type={view ? "text" : "password"}
                    fullWidth
                    id={name}
                    label={label}
                    name={name}
                    color='success'
                    sx={{
                        '&:hover fieldset': {
                            borderColor: '#33CC33 !important',
                        }
                    }}
                />
                {
                    view ? <VisibilityOffIcon sx={{ cursor: 'pointer', position: 'absolute', left: '95%' }} color="success" onClick={handleView} />
                        : <VisibilityIcon sx={{ cursor: 'pointer', position: 'absolute', left: '95%' }} color="success" onClick={handleView} />
                }
            </Box>
        </Box>
    )
}

export default PasswordInput