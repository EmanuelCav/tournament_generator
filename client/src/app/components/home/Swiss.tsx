import { Box, Container } from '@mui/material'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

import CategoryText from './components/categoriesInfo/CategoryText'
import CategoryImage from './components/categoriesInfo/CategoryImage'

const Swiss = () => {
    return (
        <Box bgcolor={'#55F177'} display="flex" justifyContent='center' alignItems='center' flexWrap='wrap' sx={{
            height: '100vh'
        }}>
            <Container fixed maxWidth="lg">
                <Box display="flex" justifyContent='center' alignItems='center' flexWrap='wrap'>
                    <CategoryImage Icon={CompareArrowsIcon} />
                    <CategoryText text="Swiss Format"
                    description='Automatic Swiss-format tournament generation: Set up Swiss-format tournaments in a few steps, allowing all participants to compete in each round. Advanced algorithms evenly match participants based on their previous results.' />
                </Box>
            </Container>
        </Box>
    )
}

export default Swiss