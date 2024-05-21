import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IReducerGet } from "../../interface/Event";

const initialState: IReducerGet = {
    isMatchdays: false,
    isTeams: false,
}

const getSlice = createSlice({
    name: 'get',
    initialState,
    reducers: {
        matchdays: (state, action: PayloadAction<boolean>) => {
            state.isMatchdays = action.payload
            state.isTeams = false
        },
        teams: (state, action: PayloadAction<boolean>) => {
            state.isTeams = action.payload
            state.isMatchdays = false
        }
    }

})

export const { matchdays, teams } = getSlice.actions

export default getSlice.reducer
