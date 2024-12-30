import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';

import DatasetIcon from '@mui/icons-material/Dataset';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

import CardTournament from './components/tournaments/CardTournament';

import { ITournament } from '../../interface/General';

const tournaments: ITournament[] = [
    {
        title: "Todos contra todos",
        description: "Cada equipo enfrenta contra todos los demás en competencia de pares.",
        Icon: <CalendarMonthIcon color='success' fontSize='large' sx={{ fontSize: 100 }} />,
    },
    {
        title: "Fase de grupos",
        description: "Los equipos se dividen en grupos y avanzan según sus resultados.",
        Icon: <DatasetIcon color='success' fontSize='large' sx={{ fontSize: 100 }} />
    },
    {
        title: "Formato suizo",
        description: "Los equipos se enfrentan a oponentes de niveles similares en cada ronda.",
        Icon: <CompareArrowsIcon color='success' fontSize='large' sx={{ fontSize: 100 }} />
    },
    {
        title: "Eliminación directa",
        description: "Los equipos compiten en rondas eliminatorias hasta que quede un campeón.",
        Icon: <AccountTreeIcon color='success' fontSize='large' sx={{ fontSize: 100 }} />
    },
]

const Tournaments: React.FC = () => {

    return (
        <Box
            sx={{
                backgroundImage: `url("/background_3.jpg")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            id='Formatos'
        >
            <Container fixed maxWidth="lg">
                <Box bgcolor={"#ffffff"} sx={{
                    m: { xs: 0, sm: 2, md: 4 },
                    p: {
                        xs: 1
                    }
                }}>
                    <Typography sx={{ typography: { xs: 'h4', sm: 'h3' } }} gutterBottom align="center" color='#2e7d32' fontWeight={600}>
                        Organiza Torneos a Tu Medida
                    </Typography>
                    <Typography variant="h5" paragraph align="center" color='#2e7d32' fontWeight={500}>
                        Elige entre los diferentes formatos de torneos que mejor se adapten a tus necesidades
                    </Typography>
                    <Grid container spacing={4}>
                        {tournaments.map((tournament, index) => {
                            return <Grid item xs={12} sm={6} md={3} key={index}>
                                <CardTournament tournament={tournament} />
                            </Grid>
                        })}
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Tournaments