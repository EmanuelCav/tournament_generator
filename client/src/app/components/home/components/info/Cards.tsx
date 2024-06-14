import { Box } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DatasetIcon from '@mui/icons-material/Dataset';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

import CardInfo from './components/CardInfo';

const Cards = () => {

  return (
    <Box width='100%' display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
      <CardInfo text="Matchdays" Icon={CalendarMonthIcon}  />
      <CardInfo text="Elimination" Icon={AccountTreeIcon} />
      <CardInfo text="Group Stage" Icon={DatasetIcon} />
      <CardInfo text="Swiss Format" Icon={CompareArrowsIcon} />
    </Box>
  );
}

export default Cards