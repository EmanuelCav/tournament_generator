import { createAsyncThunk } from "@reduxjs/toolkit";

import * as userApi from "../api/user.api";
import * as userReducer from "../reducer/user.reducer";

import { AutoLoginActionPropsType, ForgotPasswordActionPropsType, LoginActionPropsType, LogoutActionPropsType, RegisterActionPropsType, UpdatePasswordActionPropsType } from "../../types/action.types";
import { IForgotPassword } from "../../interface/User";

import { dangerMessage, successMessage } from "../../helper/message";

export const loginAction = createAsyncThunk('users/login', async (loginData: LoginActionPropsType, { dispatch }) => {

    try {

        const { data } = await userApi.loginApi(loginData.userData)

        dispatch(userReducer.login(data))

        loginData.navigate('/')

    } catch (error: any) {
        if(error.response.data[0]) {
            dangerMessage(error.response.data[0].message)
        } else {
            dangerMessage(error.response.data.message)
        }
    }

})

export const registerAction = createAsyncThunk('users/register', async (registerData: RegisterActionPropsType, { dispatch }) => {

    try {

        const { data } = await userApi.registerApi(registerData.userData)

        registerData.setIsRegister(false)

        dispatch(userReducer.verification(data.token))

        successMessage(data.message)

        registerData.navigate('/events')

    } catch (error: any) {
        if(error.response.data[0]) {
            dangerMessage(error.response.data[0].message)
        } else {
            dangerMessage(error.response.data.message)
        }
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

export const autoLoginAction = createAsyncThunk('users/autologin', async (userData: AutoLoginActionPropsType, { dispatch }) => {

    try {

        const { data } = await userApi.autoLoginApi(userData.nickname)

        dispatch(userReducer.login(data))
    
        userData.navigate('/panel')

    } catch (error) {
        console.log(error);
    }

})

export const forgotPasswordAction = createAsyncThunk('users/forgotpassword', async (userData: ForgotPasswordActionPropsType, { dispatch }) => {

    try {

        const { data } = await userApi.forgotPasswordApi(userData.emailData)

        dispatch(userReducer.verification(data.token))

        successMessage(data.message)

        userData.setIsForgotPassword(false)

    } catch (error: any) {
        dangerMessage(error.response.data[0].message)
    }

})

export const updatePasswordAction = createAsyncThunk('users/updatepassword', async (userData: UpdatePasswordActionPropsType) => {

    try {

        const { data } = await userApi.updatePasswordApi(userData.passwordData, userData.token)

        successMessage(data.message)

        userData.navigate('/auth')

    } catch (error: any) {
        if(error.response.data[0]) {
            dangerMessage(error.response.data[0].message)
        } else {
            dangerMessage(error.response.data.message)
        }
    }

})