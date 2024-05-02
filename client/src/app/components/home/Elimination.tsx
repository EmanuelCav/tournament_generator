import { Box, Container } from '@mui/material'

import CategoryText from './components/categoriesInfo/CategoryText'
import CategoryImage from './components/categoriesInfo/CategoryImage'

const Elimination = () => {
    return (
        <Box bgcolor={'#AAF6AA'} display="flex" justifyContent='center' alignItems='center' flexWrap='wrap' sx={{
            height: '100vh'
        }}>
            <Container fixed maxWidth="lg">
                <Box display="flex" justifyContent='center' alignItems='center' flexWrap='wrap'>
                    <CategoryImage image='/cuadro.png' />
                    <CategoryText text='Elimination' color='#ffffff' />
                </Box>
            </Container>
        </Box>
    )
}

export default Elimination