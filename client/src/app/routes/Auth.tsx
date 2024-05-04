import { useState } from "react"
import { Box } from "@mui/material"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import FormAuth from "../components/auth/FormAuth"
import ImageAuth from "../components/auth/ImageAuth"
import Register from "../components/auth/Register"

const Auth = () => {

    const [isRegister, setIsRegister] = useState<boolean>(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" className="full-screen">
            {
                isRegister && <Register setIsRegister={setIsRegister} />
            }
            <ImageAuth />
            <FormAuth navigate={navigate} dispatch={dispatch} setIsRegister={setIsRegister} />
        </Box>
    )
}

export default Auth