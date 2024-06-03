import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IReducerGet } from "../../interface/Event";

const initialState: IReducerGet = {
    isMatchdays: true,
    isTeams: false,
    isPeople: false
}

const getSlice = createSlice({
    name: 'get',
    initialState,
    reducers: {
        matchdays: (state, action: PayloadAction<boolean>) => {
            state.isMatchdays = action.payload
            state.isTeams = false
            state.isPeople = false
        },
        teams: (state, action: PayloadAction<boolean>) => {
            state.isTeams = action.payload
            state.isMatchdays = false
            state.isPeople = false
        },
        people: (state, action: PayloadAction<boolean>) => {
            state.isPeople = action.payload
            state.isTeams = false
            state.isMatchdays = false
        },
    }

})

export const { matchdays, teams, people } = getSlice.actions

export default getSlice.reducer
