import { Box } from '@mui/material'

import People from './components/showPeople/People'

import { ShowPeoplePropsType } from '../../types/event.types'

const ShowPeople = ({ competitors, handleSureRemoveCompetitor, event, user, dispatch }: ShowPeoplePropsType) => {
  return (
    <Box flex={1} py={2} px={4} width={'100%'}>
      {
        competitors.map((competitor) => {
          return <People competitor={competitor} event={event} user={user} handleSureRemoveCompetitor={handleSureRemoveCompetitor} dispatch={dispatch} key={competitor._id} />
        })
      }
    </Box>
  )
}

export default ShowPeople