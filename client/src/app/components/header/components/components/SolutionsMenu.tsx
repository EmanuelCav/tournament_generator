import { Box, Grid, Menu } from '@mui/material'

import SolutionCategory from './components/SolutionCategory'

import { SolutionsMenuPropsType } from '../../../../types/header.types'

const format: string[] = ["Todos contra todos", "Fase de grupos", "Formato suizo", "Eliminación directa"]
const tools: string[] = ["Estadios", "Árbitros", "Jugadores", "Horarios"]
const visualization: string[] = ["Posiciones", "Eliminación"]

const SolutionsMenu = ({ anchorEl, handleMenuClose }: SolutionsMenuPropsType) => {
    return (
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <Box sx={{ padding: 2 }}>
                <Grid container spacing={3}>
                    <SolutionCategory solutions={format} func={handleMenuClose} title='Formatos' />
                    <SolutionCategory solutions={tools} func={handleMenuClose} title='Herramientas' />
                    <SolutionCategory solutions={visualization} func={handleMenuClose} title='Visualización' />
                </Grid>
            </Box>
        </Menu>
    )
}

export default SolutionsMenu