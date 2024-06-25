import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from "@mui/material"

import { IPassword } from "../interface/User"
import { IReducer } from "../interface/General";

import { updatePasswordAction } from "../server/actions/user.actions";
import { selector } from "../server/selector";

const ResetPassword = () => {

    const user = useSelector((state: IReducer) => selector(state).user)

    const initialState: IPassword = {
        password: "",
        confirm: ""
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [passwordData, setPasswordData] = useState<IPassword>(initialState)

    const { password, confirm } = passwordData

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setPasswordData({ ...passwordData, [name]: value })
    }

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        dispatch(updatePasswordAction({
            navigate,
            passwordData,
            token: user.user.token!
        }) as any)

    }

    useEffect(() => {
        if (user.isLoggedIn && user.user.token) {
            navigate('/events')
        }
    }, [])

    return (
        <Box display="flex" justifyContent="center" alignItems="center" className="full-screen">
            <Box component="form" noValidate sx={{ p: 4 }} onSubmit={handleSumbit}>
                <TextField
                    type="password"
                    margin="normal"
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    autoFocus
                    color='success'
                    value={password}
                    sx={{
                        '&:hover fieldset': {
                            borderColor: '#33CC33 !important',
                        },
                    }}
                    onChange={handleChange}
                    autoComplete="off"
                    inputProps={{ maxLength: 75 }}
                />
                <TextField
                    type="password"
                    margin="normal"
                    fullWidth
                    id="confirm"
                    label="Confirm password"
                    name="confirm"
                    autoFocus
                    color='success'
                    value={confirm}
                    sx={{
                        '&:hover fieldset': {
                            borderColor: '#33CC33 !important',
                        },
                    }}
                    onChange={handleChange}
                    autoComplete="off"
                    inputProps={{ maxLength: 75 }}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2, fontSize: '1.225em' }}
                    color='success'
                    size='large'
                >
                    RESET
                </Button>
            </Box>
        </Box>
    )
}

export default ResetPassword