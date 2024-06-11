import { useState } from "react"
import { Box, Typography } from "@mui/material"

import ActionsPeople from "./components/ActionsPeople"
import ChangeRole from "./components/ChangeRole"

import { PeoplePropsType } from "../../../../types/event.types"

import { updateRoleAction } from "../../../../server/actions/event.actions"

const People = ({ competitor, handleSureRemoveCompetitor, event, user, dispatch }: PeoplePropsType) => {

  const [isChangeRole, setIsChangeRole] = useState<boolean>(false)

  const handleChangeRole = () => {
    setIsChangeRole(!isChangeRole)
  }

  const updateRole = () => {

    dispatch(updateRoleAction({
      cid: competitor._id,
      token: user.token!,
      eid: event._id!,
      role: competitor.role.role === 'ADMIN' ? 'USER' : 'ADMIN',
      handleChangeRole
    }))

  }

  return (
    <Box p={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'} borderRadius={4} sx={{
      border: '2px solid #eeeeee'
    }} my={2}>
      {
        isChangeRole && <ChangeRole handleChangeRole={handleChangeRole} competitor={competitor} func={updateRole} />
      }
      <Typography variant="h6">{competitor.user.nickname}</Typography>
      <ActionsPeople competitor={competitor} event={event} user={user} handleSureRemoveCompetitor={handleSureRemoveCompetitor} handleChangeRole={handleChangeRole} />
    </Box>
  )
}

export default People