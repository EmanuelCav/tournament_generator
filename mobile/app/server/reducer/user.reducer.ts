import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit";

import { IReducerUser, IUserInfo } from '../../interface/User'

export const initialState: IReducerUser = {
    user: {},
    isLoggedIn: false
}

const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        login: (state, action: PayloadAction<IUserInfo>) => {
            state.user = action.payload
            state.isLoggedIn = true
        },
        logout: (state) => {
            state.user = {}
            state.isLoggedIn = false
        }
    }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer