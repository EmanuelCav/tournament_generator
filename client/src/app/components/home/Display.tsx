import React from 'react';
import { Box, Typography, Container } from '@mui/material';

import TableChartIcon from '@mui/icons-material/TableChart';
import BracketIcon from '@mui/icons-material/AccountTree';

import Visualization from './components/display/Visualization';

import { ITournament } from '../../interface/General';

const visualizaion: ITournament[] = [
  {
    title: "Tablas de Posiciones",
    description: "Sigue los puntos, victorias y desempeño de los equipos en tiempo real. Una herramienta esencial para entender el progreso de tu torneo.",
    Icon: <TableChartIcon sx={{ fontSize: 100, color: '#2e7d32' }} />,
  },
  {
    title: "Cuadro de Eliminación",
    description: "Visualiza cómo los equipos avanzan hacia la final en un formato de eliminación directa claro y atractivo.",
    Icon: <BracketIcon sx={{ fontSize: 100, color: '#2e7d32' }} />,
  }
];

const Display: React.FC = () => {
  return (
    <Box sx={{
      backgroundImage: `url("/background_2.jpg")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }} id='Visualización'>
      <Container fixed maxWidth="lg">
        <Box bgcolor={"#2e7d32"}
          sx={{
            m: { xs: 0, sm: 2, md: 4 },
            p: {
              xs: 1
          }
          }}>
          <Typography sx={{
            typography: { xs: 'h4', sm: 'h3' }
          }} gutterBottom align="center" color='#ffffff' fontWeight={600}>
            Visualización Clara y Dinámica
          </Typography>
          <Typography variant="h5" paragraph align="center" color='#ffffff' fontWeight={500}>
            Monitorea el progreso de tu torneo de manera fácil y visual con herramientas que destacan la información más relevante
          </Typography>
          <Visualization option={visualizaion[0]} />
          <Visualization option={visualizaion[1]} />
        </Box>
      </Container>
    </Box>
  );
};

export default Display;
