import React, { useEffect, useState } from "react"
import { Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import FormAuth from "../components/auth/FormAuth"
import ImageAuth from "../components/auth/ImageAuth"
import Register from "../components/auth/Register"
import ForgotPassword from "../components/auth/ForgotPassword"
import CodeForm from "../components/auth/CodeForm";

import { selector } from "../server/selector"

import { IReducer } from "../interface/General"

const Auth: React.FC = () => {

    const user = useSelector((state: IReducer) => selector(state).user)

    const [isRegister, setIsRegister] = useState<boolean>(false)
    const [isCode, setIsCode] = useState<boolean>(false)
    const [isForgotPassword, setIsForgotPassword] = useState<boolean>(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (user.isLoggedIn && user.user.token) {
            navigate('/events')
        }
    }, [])

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f4f6f8',
                padding: 4,
                mt: { xs: 8, sm: 0 }
            }}
        >
            {
                isRegister && <Register dispatch={dispatch} navigate={navigate} setIsRegister={setIsRegister} />
            }
            {
                isCode && <CodeForm />
            }
            {
                isForgotPassword && <ForgotPassword dispatch={dispatch} setIsForgotPassword={setIsForgotPassword} setIsCode={setIsCode} />
            }
            <Grid
                container
                sx={{
                    maxWidth: 900,
                    backgroundColor: 'white',
                    boxShadow: 3,
                    borderRadius: 2,
                    overflow: 'hidden',
                }}
            >
                <ImageAuth />
                <FormAuth dispatch={dispatch} navigate={navigate}
                    setIsForgotPassword={setIsForgotPassword} setIsRegister={setIsRegister} />
            </Grid>
        </Box>
    );
};

export default Auth;
