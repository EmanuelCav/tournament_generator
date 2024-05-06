import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit";

import { IEvent, IReducerEvent } from '../../interface/Event';

export const initialState: IReducerEvent = {
    events: [],
    event: {}
}

const eventsSlice = createSlice({
    initialState,
    name: 'event',
    reducers: {
        events: (state, action: PayloadAction<IEvent[]>) => {
            state.events = action.payload
        },
        event: (state, action: PayloadAction<IEvent>) => {
            state.event = action.payload
        },
    }
})

export const { events, event } = eventsSlice.actions

export default eventsSlice.reducer