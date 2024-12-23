import { Box, Button, Grid, Typography } from '@mui/material'

const InfoText = () => {
    return (
        <Grid xs={12} md={6} p={2}>
            <Typography sx={{
            typography: { xs: 'h4', sm: 'h3' }}} gutterBottom color={"#ffffff"} align="center" fontWeight={600}>
                Organiza Campeonatos Con Facilidad
            </Typography>
            <Typography variant="h5" paragraph color={"#ffffff"} align="center" fontWeight={500}>
                Personaliza y gestiona torneos de manera profesional. Diseña campeonatos personalizados con diferentes formatos y herramientas intuitivas con funcionalidades avanzadas para visualizar
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    sx={{
                        mt: 2,
                        backgroundColor: '#2e7d32',
                        color: 'white',
                        border: '2px solid white',
                        fontWeight: 600,
                        fontSize: 16,
                        px: 6,
                        '&:hover': {
                            backgroundColor: '#006400'
                        }
                    }}
                >
                    Comienza Ahora
                </Button>
            </Box>
        </Grid>
    )
}

export default InfoText