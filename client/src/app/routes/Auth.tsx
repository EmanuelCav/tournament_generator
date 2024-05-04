import { useEffect, useState } from "react"
import { Box } from "@mui/material"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import FormAuth from "../components/auth/FormAuth"
import ImageAuth from "../components/auth/ImageAuth"
import Register from "../components/auth/Register"

import { selector } from "../server/selector"

import { IReducer } from "../interface/General"

const Auth = () => {

    const user = useSelector((state: IReducer) => selector(state).user)

    const [isRegister, setIsRegister] = useState<boolean>(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (user.isLoggedIn) {
            navigate('/events')
        }
    }, [])

    return (
        <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" className="full-screen">
            {
                isRegister && <Register setIsRegister={setIsRegister} dispatch={dispatch} navigate={navigate} />
            }
            {
                !user.isLoggedIn && <>
                    <ImageAuth />
                    <FormAuth navigate={navigate} dispatch={dispatch} setIsRegister={setIsRegister} />
                </>
            }
        </Box>
    )
}

export default Auth