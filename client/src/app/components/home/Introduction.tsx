import { Box, Container, Grid } from '@mui/material'
import { NavigateFunction } from 'react-router-dom'

import InfoText from './components/introduction/InfoText'
import InfoImage from './components/introduction/InfoImage'

const Introduction = ({ navigate }: { navigate: NavigateFunction }) => {

    const redirectLogin = () => {
        navigate('/auth')
    }

    return (
        <Box
            sx={{
                mt: { xs: 9, sm: 12 },
                backgroundImage: `url("/background_4.jpg")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        id="Introduction">
            <Container fixed maxWidth="lg">
                <Box sx={{
                    m: { xs: 0, sm: 2, md: 4 },
                    p: {
                        xs: 1
                    }
                }}>
                    <Grid container spacing={2} p={4} alignItems="center">
                        <InfoText redirectLogin={redirectLogin} />
                        <InfoImage />
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Introduction