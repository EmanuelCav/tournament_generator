import { Box } from '@mui/material'

import People from './components/showPeople/People'

import { ICompetitor } from '../../interface/Event'

const ShowPeople = ({ competitors }: { competitors: ICompetitor[] }) => {
  return (
    <Box width={'100%'} py={2} px={4}>
      {
        competitors.map((competitor) => {
          return <People competitor={competitor} key={competitor._id} />
        })
      }
    </Box>
  )
}

export default ShowPeople