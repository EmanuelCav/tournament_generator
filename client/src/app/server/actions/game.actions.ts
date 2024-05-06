import { createAsyncThunk } from "@reduxjs/toolkit";

import * as eventApi from "../api/event.api";
import * as eventReducer from "../reducer/event.reducer";

export const eventsAction = createAsyncThunk('events/events', async (_, { dispatch }) => {

    try {

        const { data } = await eventApi.eventsApi()

        dispatch(eventReducer.events(data))

    } catch (error) {
        console.log(error);
    }

})