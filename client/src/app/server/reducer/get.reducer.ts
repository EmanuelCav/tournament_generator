import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IReducerGet } from "../../interface/Event";

const initialState: IReducerGet = {
    isMatchdays: true,
    isPositions: false,
    isTeams: false,
    isPeople: false,
    isReferees: false,
    isPlayers: false,
    isSettings: false,
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
            state.isPositions = false
            state.isSettings = false
        },
        teams: (state, action: PayloadAction<boolean>) => {
            state.isTeams = action.payload
            state.isMatchdays = false
            state.isPeople = false
            state.isReferees = false
            state.isPlayers = false
            state.isPositions = false
            state.isSettings = false
        },
        people: (state, action: PayloadAction<boolean>) => {
            state.isPeople = action.payload
            state.isTeams = false
            state.isMatchdays = false
            state.isReferees = false
            state.isPlayers = false
            state.isPositions = false
            state.isSettings = false
        },
        referees: (state, action: PayloadAction<boolean>) => {
            state.isReferees = action.payload
            state.isPeople = false
            state.isTeams = false
            state.isMatchdays = false
            state.isPlayers = false
            state.isPositions = false
            state.isSettings = false
        },
        players: (state, action: PayloadAction<boolean>) => {
            state.isPlayers = action.payload
            state.isReferees = false
            state.isPeople = false
            state.isTeams = false
            state.isMatchdays = false
            state.isPositions = false
            state.isSettings = false
        },
        positions: (state, action: PayloadAction<boolean>) => {
            state.isPositions = action.payload
            state.isReferees = false
            state.isPeople = false
            state.isTeams = false
            state.isMatchdays = false
            state.isPlayers = false
            state.isSettings = false
        },
        settings: (state, action: PayloadAction<boolean>) => {
            state.isSettings = action.payload
            state.isReferees = false
            state.isPeople = false
            state.isTeams = false
            state.isMatchdays = false
            state.isPlayers = false
            state.isPositions = false
        }
    }

})

export const { matchdays, teams, people, referees, players, positions, settings } = getSlice.actions

export default getSlice.reducer
