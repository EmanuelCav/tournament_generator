import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit";

import { IPlayer, IStatisticEvent, ITeam } from '../../interface/Event';

export const initialState: IStatisticEvent = {
    players: [],
    teams: []
}

const statisticSlice = createSlice({
    initialState,
    name: 'statistic',
    reducers: {
        getPlayers: (state, action: PayloadAction<IPlayer[]>) => {
            state.players = action.payload
        },
        getTeams: (state, action: PayloadAction<ITeam[]>) => {
            state.teams = action.payload
        }
    }
})

export const { getPlayers, getTeams } = statisticSlice.actions

export default statisticSlice.reducer