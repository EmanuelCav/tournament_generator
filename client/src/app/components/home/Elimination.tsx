import { Box, Container } from '@mui/material'
import AccountTreeIcon from '@mui/icons-material/AccountTree';

import CategoryText from './components/categoriesInfo/CategoryText'
import CategoryImage from './components/categoriesInfo/CategoryImage'

const Elimination = () => {
    return (
        <Box bgcolor={'#55F177'} display="flex" justifyContent='center' alignItems='center' flexWrap='wrap' sx={{
            height: '100vh'
        }}>
            <Container fixed maxWidth="lg">
                <Box display="flex" justifyContent='center' alignItems='center' flexWrap='wrap'>
                    <CategoryImage Icon={AccountTreeIcon} />
                    <CategoryText text='Direct Elimination' 
                        description='Automatic creation of direct elimination tournaments: Set up direct elimination tournaments in a few steps, generating brackets automatically according to the number of participants. Customize the tournament structure with options to include preliminary rounds.'
                    />
                </Box>
            </Container>
        </Box>
    )
}

export default Elimination