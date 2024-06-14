import { Box, Container } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import CategoryText from './components/categoriesInfo/CategoryText'
import CategoryImage from './components/categoriesInfo/CategoryImage'

const Matchdays = () => {
    return (
        <Box display="flex" justifyContent='center' alignItems='center' flexWrap='wrap' sx={{
            height: '100vh'
        }}>
            <Container fixed maxWidth="lg">
                <Box display="flex" justifyContent='center' alignItems='center' flexWrap='wrap'>
                    <CategoryText text='All against all'
                        description='Automatic fixture generation: Create detailed fixtures for any type of championship in just a few clicks with our advanced algorithms ensure a balanced and fair schedule for all participants.'
                    />
                    <CategoryImage Icon={CalendarMonthIcon} />
                </Box>
            </Container>
        </Box>
    )
}

export default Matchdays