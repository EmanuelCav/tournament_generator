import { useState } from "react"
import { Box } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"

import HeaderCreate from "../components/create/HeaderCreate"
import FormCreate from "../components/create/FormCreate"
import AddTeams from "../components/create/AddTeams"

import { IReducer } from "../interface/General"

import { selector } from "../server/selector"

const Create = () => {

    const user = useSelector((state: IReducer) => selector(state).user)
    const event = useSelector((state: IReducer) => selector(state).event)

    const dispatch = useDispatch()

    const [isCreate, setIsCreate] = useState<boolean>(true)

    return (
        <Box className="full-screen" display='flex' justifyContent='space-evenly' alignItems='center' flexDirection="column">
            <HeaderCreate />
            {
                isCreate ? <FormCreate user={user.user} dispatch={dispatch} setIsCreate={setIsCreate} />
                : <AddTeams dispatch={dispatch} user={user.user} event={event.event} />
            }
        </Box>
    )
}

export default Create