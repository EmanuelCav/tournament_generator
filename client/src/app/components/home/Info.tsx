import { Box, Container } from '@mui/material'

import Cards from './components/info/Cards'
import HeaderHome from './components/info/HeaderHome'

const Info = () => {
    return (
        <Box sx={{
            height: '100vh',
            backgroundImage: `url("/background.jpg")`,
            backgroundSize: 'cover',
            width: '100%',
        }}>
            <Container fixed maxWidth="lg" sx={{ height: '100%' }}>
                <Box display='flex' height={'100%'} justifyContent='space-around' alignItems='center' flexDirection='column'>
                    <HeaderHome />
                    <Cards />
                </Box>
            </Container>
        </Box>
    )
}

export default Info