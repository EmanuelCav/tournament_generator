import { NavigateFunction } from 'react-router-dom';
import { Box, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import ButtonNav from './components/ButtonNav';

const Navigation = ({ navigate }: { navigate: NavigateFunction }) => {

    const redirectRoute = (route: string) => {
        navigate("/" + route)
    }

    return (
        <Box>
            <ButtonNav text='Start now' Icon={AddIcon} redirect={redirectRoute} route='auth' />
            <ButtonNav text='Contact us' Icon={PhoneIcon} redirect={redirectRoute} route='auth' />
            <ButtonNav text='Log in' Icon={PersonIcon} redirect={redirectRoute} route='auth' />
        </Box>
    )
}

export default Navigation