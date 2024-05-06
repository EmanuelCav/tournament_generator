import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit";

import { IEvent, IReducerEvent } from '../../interface/Tournament';

export const initialState: IReducerEvent = {
    events: []
}

const eventsSlice = createSlice({
    initialState,
    name: 'tournament',
    reducers: {
        events: (state, action: PayloadAction<IEvent[]>) => {
            state.events = action.payload
        }
    }
})

export const { events } = eventsSlice.actions

export default eventsSlice.reducer