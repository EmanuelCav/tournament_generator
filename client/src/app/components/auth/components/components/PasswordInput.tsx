import { Box, TextField } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { PasswordInputPropsType } from "../../../../types/auth.types";

const PasswordInput = ({ view, register, name, label, handleView }: PasswordInputPropsType) => {
    return (
        <Box position="relative" display='flex' justifyContent='center' alignItems='center'>
            <TextField
                {...register(`${name}`)}
                margin="normal"
                type={view ? "text" : "password"}
                fullWidth
                id={name}
                label={label}
                name={name}
                autoFocus
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
    )
}

export default PasswordInput