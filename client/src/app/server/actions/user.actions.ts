import { createAsyncThunk } from "@reduxjs/toolkit";

import * as userApi from "../api/user.api";
import * as userReducer from "../reducer/user.reducer";

import { LoginActionPropsType, LogoutActionPropsType, RegisterActionPropsType } from "../../types/action.types";

import { dangerMessage } from "../../helper/message";

export const loginAction = createAsyncThunk('users/login', async (loginData: LoginActionPropsType, { dispatch }) => {

    try {

        const { data } = await userApi.loginApi(loginData.userData)

        dispatch(userReducer.login(data))

        loginData.navigate('/')

    } catch (error: any) {
        dangerMessage(error.response.data[0].message)
    }

})

export const registerAction = createAsyncThunk('users/register', async (registerData: RegisterActionPropsType, { dispatch }) => {

    try {

        const { data } = await userApi.registerApi(registerData.userData)

        dispatch(userReducer.login(data))

        registerData.setIsRegister(false)

        registerData.navigate('/')

    } catch (error: any) {
        dangerMessage(error.response.data[0].message)
    }

})

export const logoutAction = createAsyncThunk('users/logout', async (logoutData: LogoutActionPropsType, { dispatch }) => {

    try {

        dispatch(userReducer.logout())

        logoutData.setIsMenu(false)
    
        logoutData.navigate('/')

    } catch (error) {
        console.log(error);
    }

})