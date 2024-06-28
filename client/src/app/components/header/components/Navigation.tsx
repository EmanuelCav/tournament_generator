import { useState } from 'react';
import { Box, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
// import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CoPresentIcon from '@mui/icons-material/CoPresent';

import ButtonNav from './components/ButtonNav';
import MenuHeader from './components/MenuHeader';

import { NavigationPropsType } from '../../../types/header.types';

const Navigation = ({ navigate, location, isLoggedIn, dispatch }: NavigationPropsType) => {

    const [isMenu, setIsMenu] = useState<boolean>(false)

    const redirectRoute = (route: string) => {
        navigate("/" + route)
    }

    const handleMenu = () => {
        setIsMenu(!isMenu)
    }

    return (
        <Box>
            {
                isLoggedIn ? (
                    <Box>
                        {
                            isMenu && <MenuHeader setIsMenu={setIsMenu} dispatch={dispatch} navigate={navigate} />
                        }
                        <ButtonNav text='Panel' Icon={CoPresentIcon} redirect={redirectRoute} route='panel' />
                        <Button variant='contained' sx={{
                            mx: 4, backgroundColor: '#33CC33', ":hover": {
                                backgroundColor: '#6CF96C'
                            }
                        }} startIcon={<KeyboardArrowDownIcon />} onClick={handleMenu}>
                            Menu
                        </Button>
                    </Box>
                ) : (
                    <Box>
                        {
                            location.pathname !== "/auth" && <Box>
                                <ButtonNav text='Start now' Icon={AddIcon} redirect={redirectRoute} route='events' />
                                {/* <ButtonNav text='Contact us' Icon={PhoneIcon} redirect={redirectRoute} route='auth' /> */}
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