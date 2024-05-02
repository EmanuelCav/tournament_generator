import { Box, Container } from '@mui/material'

import backgroundImage from '../../../../public/background.jpg'

import Cards from './components/info/Cards'
import HeaderHome from './components/info/HeaderHome'

const Info = () => {
    return (
        <Box sx={{
            height: '100vh',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            width: '100%'
        }}>
            <Container fixed maxWidth="lg">
                <HeaderHome />
                <Cards />
            </Container>
        </Box>
    )
}

export default Info