import { Box, Container } from '@mui/material'

import CategoryText from './components/categoriesInfo/CategoryText'
import CategoryImage from './components/categoriesInfo/CategoryImage'

const Groups = () => {
    return (
        <Box display="flex" justifyContent='center' alignItems='center' flexWrap='wrap' sx={{
            height: '100vh'
        }}>
            <Container fixed maxWidth="lg">
                <Box display="flex" justifyContent='center' alignItems='center' flexWrap='wrap'>
                    <CategoryText text='Group Stage' color='#33CC33' />
                    <CategoryImage image='/group.png' />
                </Box>
            </Container>
        </Box>
    )
}

export default Groups