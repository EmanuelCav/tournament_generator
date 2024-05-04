import { createAsyncThunk } from "@reduxjs/toolkit";

import * as userApi from "../api/user.api";
import * as userReducer from "../reducer/user.reducer";

import { LoginActionPropsType } from "../../types/action.types";

export const loginAction = createAsyncThunk('users/login', async (loginData: LoginActionPropsType, { dispatch }) => {

    try {

        const { data } = await userApi.loginApi(loginData.userData)

        dispatch(userReducer.login(data))

        loginData.navigate('/')

    } catch (error) {
        console.log(error);
    }

})