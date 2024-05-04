import { Box, Checkbox, Typography } from '@mui/material'

import { TermsPropsType } from '../../../types/auth.types'

const Terms = ({ status, handleChecked }: TermsPropsType) => {
    return (
        <Box my={2} display='flex' justifyContent='flex-start' alignItems='center'>
            <Checkbox color='success' name='status' value={status} checked={status} onChange={handleChecked} />
            <Typography component='h6' color='#33CC33' sx={{
                cursor: 'pointer',
                ":hover": {
                    textDecoration: 'underline'
                },
                ":active": {
                    textDecoration: 'none'
                }
            }}>
                Accept Terms and confitions
            </Typography>
        </Box>
    )
}

export default Terms