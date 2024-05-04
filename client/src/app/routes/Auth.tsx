import { Box } from "@mui/material"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import FormAuth from "../components/auth/FormAuth"
import ImageAuth from "../components/auth/ImageAuth"

const Auth = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" className="full-screen">
            <ImageAuth />
            <FormAuth navigate={navigate} dispatch={dispatch} />
        </Box>
    )
}

export default Auth