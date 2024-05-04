import { Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CoPresentIcon from '@mui/icons-material/CoPresent';

import ButtonNav from './components/ButtonNav';

import { NavigationPropsType } from '../../../types/header.types';

const Navigation = ({ navigate, location, isLoggedIn }: NavigationPropsType) => {

    const redirectRoute = (route: string) => {
        navigate("/" + route)
    }

    return (
        <Box>
            {
                isLoggedIn ? (
                    <Box>
                        <ButtonNav text='Panel' Icon={CoPresentIcon} redirect={redirectRoute} route='auth' />
                        <ButtonNav text='Menu' Icon={KeyboardArrowDownIcon} redirect={redirectRoute} route='auth' />
                    </Box>
                ) : (
                    <Box>
                        {
                            location.pathname !== "/auth" && <Box>
                                <ButtonNav text='Start now' Icon={AddIcon} redirect={redirectRoute} route='auth' />
                                <ButtonNav text='Contact us' Icon={PhoneIcon} redirect={redirectRoute} route='auth' />
                                <ButtonNav text='Log in' Icon={PersonIcon} redirect={redirectRoute} route='auth' />
                            </Box>
                        }
                    </Box>
                )
            }
        </Box >
    )
}

export default Navigation