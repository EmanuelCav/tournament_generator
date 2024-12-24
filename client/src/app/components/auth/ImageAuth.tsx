import { Box, Grid, Typography } from "@mui/material"

const ImageAuth = () => {
    return (
        <Grid
            item
            xs={12}
            sm={6}
            sx={{
                backgroundColor: '#2e7d32',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 4,
            }}
        >
            <Box
                component="img"
                src="/logo.png"
                alt="Logo"
                sx={{ width: 120, height: 120, marginBottom: 2 }}
            />
            <Typography variant="h4" sx={{ fontWeight: 700, textAlign: 'center' }}>
                CupCraft
            </Typography>
            <Typography variant="body1" sx={{ fontStyle: 'italic', textAlign: 'center', mt: 1 }}>
                Organiza Campeonatos Con Facilidad
            </Typography>
        </Grid>
    )
}

export default ImageAuth