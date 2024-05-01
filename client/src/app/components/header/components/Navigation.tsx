import { Box, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';

const Navigation = () => {
    return (
        <Box>
            <Button variant='contained' sx={{
                mx: 4, backgroundColor: '#33CC33', ":hover": {
                    backgroundColor: '#6CF96C'
                }
            }} startIcon={<AddIcon />}>
                Start now
            </Button>
            <Button variant='contained' sx={{
                mx: 4, backgroundColor: '#33CC33', ":hover": {
                    backgroundColor: '#6CF96C'
                }
            }} startIcon={<PhoneIcon />}>
                Contact us
            </Button>
            <Button variant='contained' sx={{
                mx: 4, backgroundColor: '#33CC33', ":hover": {
                    backgroundColor: '#6CF96C'
                }
            }} startIcon={<PersonIcon />}>
                Log in
            </Button>
        </Box>
    )
}

export default Navigation