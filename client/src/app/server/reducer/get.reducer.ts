import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IReducerGet } from "../../interface/Event";

const initialState: IReducerGet = {
    isMatchdays: true,
    isTeams: false,
    isPeople: false,
    isReferees: false,
    isPlayers: false
}

const getSlice = createSlice({
    name: 'get',
    initialState,
    reducers: {
        matchdays: (state, action: PayloadAction<boolean>) => {
            state.isMatchdays = action.payload
            state.isTeams = false
            state.isPeople = false
            state.isReferees = false
            state.isPlayers = false
        },
        teams: (state, action: PayloadAction<boolean>) => {
            state.isTeams = action.payload
            state.isMatchdays = false
            state.isPeople = false
            state.isReferees = false
            state.isPlayers = false
        },
        people: (state, action: PayloadAction<boolean>) => {
            state.isPeople = action.payload
            state.isTeams = false
            state.isMatchdays = false
            state.isReferees = false
            state.isPlayers = false
        },
        referees: (state, action: PayloadAction<boolean>) => {
            state.isReferees = action.payload
            state.isPeople = false
            state.isTeams = false
            state.isMatchdays = false
            state.isPlayers = false
        },
        players: (state, action: PayloadAction<boolean>) => {
            state.isPlayers = action.payload
            state.isReferees = false
            state.isPeople = false
            state.isTeams = false
            state.isMatchdays = false
        }
    }

})

export const { matchdays, teams, people, referees, players } = getSlice.actions

export default getSlice.reducer
