import React from 'react';
import { Box, Grid, Typography, Card, CardContent, Container } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import EventIcon from '@mui/icons-material/Event';

const contenidoSecciones = [
    {
        titulo: "Herramienta Versátil para Todos los Deportes",
        descripcion:
            "Nuestra plataforma se adapta a cualquier deporte, desde fútbol hasta tenis. Configura torneos de manera profesional y personalizada para satisfacer las necesidades de cada disciplina.",
        icono: <SportsSoccerIcon sx={{ fontSize: 60, color: '#2e7d32' }} />,
    },
    {
        titulo: "Crea, Gestiona y Disfruta",
        descripcion:
            "Más que una herramienta de gestión, nuestra plataforma te permite crear experiencias inolvidables para jugadores, equipos y espectadores. Fácil de usar y altamente funcional, es perfecta para organizadores de eventos deportivos.",
        icono: <EventIcon sx={{ fontSize: 60, color: '#2e7d32' }} />,
    },
];

const Enjoy: React.FC = () => {
    return (
        <Box sx={{
            backgroundImage: `url("/background_1.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Container maxWidth="lg">
                <Box sx={{
                    m: { xs: 0, sm: 2, md: 4 },
                    p: {
                        xs: 1
                    }
                }}>
                    <Typography sx={{ typography: { xs: 'h4', sm: 'h3' } }} gutterBottom align="center" color='#2e7d32' fontWeight={600}>
                        Herramienta y Gestión
                    </Typography>
                    <Typography variant="h5" paragraph align="center" color='#2e7d32' fontWeight={500}>
                        Descubre cómo nuestra plataforma transforma la organización de eventos deportivos en una experiencia profesional y memorable
                    </Typography>
                    <Grid container spacing={4}>
                        {contenidoSecciones.map((seccion, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        py: 3,
                                    }}
                                >
                                    {seccion.icono}
                                    <CardContent>
                                        <Typography variant="h5" component="div" align="center" gutterBottom fontWeight={500} color="#2e7d32">
                                            {seccion.titulo}
                                        </Typography>
                                        <Typography variant="body1" align="center">
                                            {seccion.descripcion}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Enjoy;
