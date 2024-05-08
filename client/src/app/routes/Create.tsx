import { Box } from "@mui/material"
import { useSelector } from "react-redux"

import HeaderCreate from "../components/create/HeaderCreate"
import FormCreate from "../components/create/FormCreate"

import { IReducer } from "../interface/General"

import { selector } from "../server/selector"

const Create = () => {

    const user = useSelector((state: IReducer) => selector(state).user)

    return (
        <Box className="full-screen" display='flex' justifyContent='space-evenly' alignItems='center' flexDirection="column">
            <HeaderCreate />
            <FormCreate user={user.user}  />
        </Box>
    )
}

export default Create