import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit";

import { IReducerResponse } from '../../interface/Response';

import * as userAction from '../actions/user.actions';
import * as eventAction from '../actions/game.actions';

export const initialState: IReducerResponse = {
    loading: false
}

const responseSlice = createSlice({
    initialState,
    name: 'response',
    reducers: {
        loadingAction: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(userAction.loginAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(userAction.loginAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(userAction.loginAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(userAction.registerAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(userAction.registerAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(userAction.registerAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.eventsAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.eventsAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.eventsAction.rejected, (state) => {
            state.loading = false
        })
    }
})

export const { loadingAction } = responseSlice.actions

export default responseSlice.reducer