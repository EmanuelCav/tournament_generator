import { MouseEvent, useState } from 'react';
import { Box, Button } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import SolutionsMenu from './components/SolutionsMenu';

import { NavigationPropsType } from '../../../types/header.types';
import { INavigation } from '../../../interface/General';

import { logoutAction } from '../../../server/actions/user.actions';

const navigation: INavigation[] = [{
    title: "Explorar",
    path: "/events"
}, {
    title: "Crear",
    path: "/create"
}]

const Navigation = ({ navigate, location, user, dispatch, setIsMenu }: NavigationPropsType) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);

    const handleMenuOpen = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        dispatch(logoutAction({
            navigate,
            setIsMenu
        }))
    }

    return (
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <SolutionsMenu handleMenuClose={handleMenuClose} anchorEl={anchorEl}
                navigate={navigate} pathname={location.pathname} />
            {
                (!user.isLoggedIn && !user.user.token) ? (<Button
                    color="inherit"
                    sx={{
                        fontWeight: 600,
                        position: 'relative',
                        '&:hover': {
                            color: '#ffffff'
                        },
                        '&:after': {
                            content: '""',
                            position: 'absolute',
                            width: '0%',
                            height: '2px',
                            bottom: 0,
                            left: 0,
                            backgroundColor: '#ffffff',
                            transition: 'width 0.3s ease-in-out',
                        },
                        '&:hover:after': {
                            width: '100%',
                        },
                    }}
                    onClick={handleMenuOpen}
                    endIcon={<KeyboardArrowDownIcon />}
                >
                    Soluciones
                </Button>
                ) : (
                    <Button
                        color="inherit"
                        sx={{
                            fontWeight: 600,
                            position: 'relative',
                            '&:hover': {
                                color: '#ffffff'
                            },
                            '&:after': {
                                content: '""',
                                position: 'absolute',
                                width: '0%',
                                height: '2px',
                                bottom: 0,
                                left: 0,
                                backgroundColor: '#ffffff',
                                transition: 'width 0.3s ease-in-out',
                            },
                            '&:hover:after': {
                                width: '100%',
                            },
                        }}
                        onClick={() => navigate("/panel")}
                    >
                        Panel
                    </Button>
                )
            }
            {
                navigation.map((button, index) => {
                    return <Button
                        key={index}
                        color="inherit"
                        sx={{
                            fontWeight: 600,
                            position: 'relative',
                            '&:hover': {
                                color: '#ffffff'
                            },
                            '&:after': {
                                content: '""',
                                position: 'absolute',
                                width: '0%',
                                height: '2px',
                                bottom: 0,
                                left: 0,
                                backgroundColor: '#ffffff',
                                transition: 'width 0.3s ease-in-out',
                            },
                            '&:hover:after': {
                                width: '100%',
                            },
                        }}
                        onClick={() => navigate(button.path)}
                    >
                        {button.title}
                    </Button>
                })
            }
            {
                (user.isLoggedIn && user.user.token) ? (<Button
                    sx={{
                        backgroundColor: '#2e7d32',
                        color: 'white',
                        border: '2px solid white',
                        fontWeight: 600,
                        '&:hover': {
                            backgroundColor: '#006400'
                        }
                    }}
                    onClick={logout}
                >
                    Cerrar sesión
                </Button>) : (
                    <>
                        {
                            location.pathname !== "/auth" && <Button
                                sx={{
                                    backgroundColor: '#2e7d32',
                                    color: 'white',
                                    border: '2px solid white',
                                    fontWeight: 600,
                                    '&:hover': {
                                        backgroundColor: '#006400'
                                    }
                                }}
                                onClick={() => navigate('/auth')}
                            >
                                Iniciar sesión
                            </Button>
                        }
                    </>
                )}
        </Box>
    )
}

export default Navigation