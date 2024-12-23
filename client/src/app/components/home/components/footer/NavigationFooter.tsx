import { Box, Button, Typography } from '@mui/material'

import { NavigationFooterPropsType } from '../../../../types/home.types'

const NavigationFooter = ({ navigation, title }: NavigationFooterPropsType) => {
    return (
        <Box p={2}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>{title}</Typography>
            <Box mt={2} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {
                    navigation.map((button, index) => {
                        return <Button
                            key={index}
                            size='small'
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
            </Box>
        </Box>
    )
}

export default NavigationFooter