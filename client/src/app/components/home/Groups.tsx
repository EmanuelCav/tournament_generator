import { Box, Container } from '@mui/material'
import DatasetIcon from '@mui/icons-material/Dataset';

import CategoryText from './components/categoriesInfo/CategoryText'
import CategoryImage from './components/categoriesInfo/CategoryImage'

const Groups = () => {
    return (
        <Box display="flex" justifyContent='center' alignItems='center' flexWrap='wrap' sx={{
            height: '100vh'
        }}>
            <Container fixed maxWidth="lg">
                <Box display="flex" justifyContent='center' alignItems='center' flexWrap='wrap'>
                    <CategoryText text='Group Stage' color='#33CC33' 
                    description='Automatic group stage generation: Create groups automatically or manually, assigning teams in a balanced and fair way. Set parameters such as number of groups, teams per group and classification criteria.' />
                    <CategoryImage Icon={DatasetIcon} />
                </Box>
            </Container>
        </Box>
    )
}

export default Groups