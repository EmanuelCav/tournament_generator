import { useState } from 'react';
import { Box, Button } from '@mui/material'

import { NavigationPropsType } from '../../../types/header.types';
import { INavigation } from '../../../interface/General';

const navigation: INavigation[] = [{
    title: "Contacto",
    path: "/"
}, {
    title: "Nosotros",
    path: "/"
}, {
    title: "Unirse",
    path: "/"
}, {
    title: "Crear",
    path: "/"
}]

const Navigation = ({ navigate, location, isLoggedIn, dispatch }: NavigationPropsType) => {

    const [isMenu, setIsMenu] = useState<boolean>(false)

    const redirectRoute = (route: string) => {
        navigate("/" + route)
    }

    const handleMenu = () => {
        setIsMenu(!isMenu)
    }

    return (
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
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
                    >
                        {button.title}
                    </Button>
                })
            }
            <Button
                sx={{
                    backgroundColor: '#2e7d32',
                    color: 'white',
                    border: '2px solid white',
                    fontWeight: 600,
                    '&:hover': {
                        backgroundColor: '#006400'
                    }
                }}
            >
                Iniciar sesión
            </Button>
        </Box>
    )
}

export default Navigation