import { Box } from '@mui/material';

import CardInfo from './components/CardInfo';

const Cards = () => {

  return (
    <Box width='100%' display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
      <CardInfo text="Matchdays" image="/fixture.png" />
      <CardInfo text="Elimination" image="/cuadro.png" />
      <CardInfo text="Group Stage" image="/group.png" />
      <CardInfo text="Swiss Format" image="/swiss.png" />
    </Box>
  );
}

export default Cards