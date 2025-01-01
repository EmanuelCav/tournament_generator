import { Box } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";

import FormCreate from "../components/create/FormCreate"

import { IReducer } from "../interface/General"

import { selector } from "../server/selector"

const Create = () => {

    const user = useSelector((state: IReducer) => selector(state).user)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <Box className="full-screen" display='flex' justifyContent='space-evenly' alignItems='center' flexDirection="column">
            <FormCreate user={user.user} dispatch={dispatch} navigate={navigate} />
        </Box>
    )
}

export default Create