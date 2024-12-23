import React from 'react'
import { Box, Container, Grid } from '@mui/material'

import InfoText from './components/introduction/InfoText'
import InfoImage from './components/introduction/InfoImage'

const Introduction: React.FC = () => {
    return (
        <Box
            sx={{
                mt: 10,
                backgroundImage: `url("/background_4.jpg")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Container fixed maxWidth="lg">
                <Box sx={{
                    m: { xs: 0, sm: 2, md: 4 },
                    p: {
                        xs: 1
                    }
                }}>
                    <Grid container spacing={2} p={4} alignItems="center">
                        <InfoText />
                        <InfoImage />
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Introduction