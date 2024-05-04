import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit";

import { IReducerTournament } from '../../interface/Tournament';

export const initialState: IReducerTournament = {
    tournaments: []
}

const tournamentSlice = createSlice({
    initialState,
    name: 'tournament',
    reducers: {
        tournaments: (state, action: PayloadAction<any>) => {
            state.tournaments = action.payload
        }
    }
})

export const { tournaments } = tournamentSlice.actions

export default tournamentSlice.reducer