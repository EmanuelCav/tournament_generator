import { createAsyncThunk } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";

import * as userApi from "../api/user.api";
import * as userReducer from "../reducer/user.reducer";

import { RegisterActionPropsType } from "../../types/action.types";

import { ILogin } from "../../interface/User";

export const loginAction = createAsyncThunk('users/login', async (userData: ILogin, { dispatch }) => {

    try {

        const { data } = await userApi.loginApi(userData)

        dispatch(userReducer.login(data))

    } catch (error) {
        console.log(error);
    }

})

export const registerAction = createAsyncThunk('users/register', async (registerData: RegisterActionPropsType, { dispatch }) => {

    try {

        const { data } = await userApi.registerApi(registerData.userData)

        dispatch(userReducer.login(data))

        registerData.setIsRegister(false)

        registerData.navigate('/')

    } catch (error) {
        console.log(error);
    }

})

export const generateUserAction = createAsyncThunk('users/generate', async (_, { dispatch }) => {

    try {

        const { data } = await userApi.generateUserApi()

        dispatch(userReducer.login(data))

    } catch (error) {
        console.log(error);
    }

})

export const autoLoginAction = createAsyncThunk('users/autologin', async (username: string, { dispatch }) => {

    try {

        const { data } = await userApi.autoLoginApi(username)

        dispatch(userReducer.login(data))

    } catch (error) {
        console.log(error);
    }

})

export const logoutAction = createAsyncThunk('users/logout', async (navigate: NavigateFunction, { dispatch }) => {

    try {

        dispatch(userReducer.logout())

        navigate('/')

    } catch (error) {
        console.log(error);
    }

})