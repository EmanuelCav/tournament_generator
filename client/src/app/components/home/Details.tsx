import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import StadiumIcon from '@mui/icons-material/Stadium';
import GavelIcon from '@mui/icons-material/Gavel';
import PeopleIcon from '@mui/icons-material/People';
import ScheduleIcon from '@mui/icons-material/Schedule';

import Detail from './components/details/Detail';

import { ITournament } from '../../interface/General';

const configuracionPartidos: ITournament[] = [
    {
        title: "Estadios",
        description: "Selecciona dónde se jugarán los partidos, desde estadios grandes hasta canchas locales, adaptando el espacio a las necesidades del torneo.",
        Icon: <StadiumIcon sx={{ fontSize: 60, color: '#FF5722' }} />,
    },
    {
        title: "Árbitros",
        description: "Asegura la imparcialidad con designaciones claras, asignando árbitros calificados para cada encuentro.",
        Icon: <GavelIcon sx={{ fontSize: 60, color: '#4CAF50' }} />,
    },
    {
        title: "Jugadores",
        description: "Organiza los participantes, asigna equipos y jugadores, para que cada partido tenga los equipos listos para competir.",
        Icon: <PeopleIcon sx={{ fontSize: 60, color: '#2196F3' }} />,
    },
    {
        title: "Horarios",
        description: "Define fechas y horas para cada enfrentamiento, asegurando que todos los partidos se jueguen a tiempo.",
        Icon: <ScheduleIcon sx={{ fontSize: 60, color: '#FFC107' }} />,
    },
];

const Details: React.FC = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5f5f5'
        }}>
            <Container fixed maxWidth="lg">
                <Box sx={{
                    m: { xs: 0, sm: 2, md: 4 },
                    p: {
                        xs: 1
                    }
                }}>
                    <Typography sx={{ typography: { xs: 'h4', sm: 'h3' } }} gutterBottom align="center" color='#2e7d32' fontWeight={600}>
                        Configuración Detallada de Partidos
                    </Typography>
                    <Typography variant="h5" paragraph align="center" color='#2e7d32' fontWeight={500}>
                        Da vida a tu torneo con herramientas para asignar estadios, árbitros, jugadores y horarios a cada enfrentamiento
                    </Typography>
                    <Grid container spacing={4}>
                        {configuracionPartidos.map((detail, index) => {
                            return <Grid item xs={12} sm={6} md={3} key={index}>
                                <Detail detail={detail} />
                            </Grid>
                        })}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Details;