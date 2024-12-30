import { createAsyncThunk } from "@reduxjs/toolkit";

import * as userApi from "../api/user.api";
import * as userReducer from "../reducer/user.reducer";

import * as ActionTypes from "../../types/action.types";

import { dangerMessage, successMessage } from "../../helper/message";

export const loginAction = createAsyncThunk('users/login', async (loginData: ActionTypes.LoginActionPropsType, { dispatch }) => {

    try {

        const { data } = await userApi.loginApi(loginData.userData)

        dispatch(userReducer.login(data))

        loginData.navigate('/panel')

    } catch (error: any) {
        if(error.response.data[0]) {
            dangerMessage(error.response.data[0].message)
        } else {
            dangerMessage(error.response.data.message)
        }
    }

})

export const registerAction = createAsyncThunk('users/register', async (registerData: ActionTypes.RegisterActionPropsType, { dispatch }) => {

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

export const logoutAction = createAsyncThunk('users/logout', async (logoutData: ActionTypes.LogoutActionPropsType, { dispatch }) => {

    try {

        dispatch(userReducer.logout())

        logoutData.setIsMenu(false)
    
        logoutData.navigate('/')

    } catch (error) {
        console.log(error);
    }

})

export const autoLoginAction = createAsyncThunk('users/autologin', async (userData: ActionTypes.AutoLoginActionPropsType, { dispatch }) => {

    try {

        const { data } = await userApi.autoLoginApi(userData.nickname)

        dispatch(userReducer.login(data))
    
        userData.navigate('/panel')

    } catch (error) {
        console.log(error);
    }

})

export const forgotPasswordAction = createAsyncThunk('users/forgotpassword', async (userData: ActionTypes.ForgotPasswordActionPropsType, { dispatch }) => {

    try {

        const { data } = await userApi.forgotPasswordApi(userData.emailData)

        dispatch(userReducer.verification(data.token))

        successMessage(data.message)

        userData.setIsForgotPassword(false)
        userData.setIsCode(true)

    } catch (error: any) {
        dangerMessage(error.response.data[0].message)
    }

})

export const uploadCode = createAsyncThunk('users/code', async (userData: ActionTypes.UploadCodeActionPropsType) => {

    try {

        await userApi.uploadCodeApi(userData.codeData, userData.token)

        userData.navigate('/resetpassword')

    } catch (error: any) {
        if(error.response.data[0]) {
            dangerMessage(error.response.data[0].message)
        } else {
            dangerMessage(error.response.data.message)
        }
    }

})

export const updatePasswordAction = createAsyncThunk('users/updatepassword', async (userData: ActionTypes.UpdatePasswordActionPropsType) => {

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