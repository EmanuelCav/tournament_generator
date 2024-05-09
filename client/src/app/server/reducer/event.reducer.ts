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
        createEvent: (state, action: PayloadAction<IEvent>) => {
            state.event = action.payload,
            state.events = [...state.events, action.payload]
        }
    }
})

export const { events, event, createEvent } = eventsSlice.actions

export default eventsSlice.reducer