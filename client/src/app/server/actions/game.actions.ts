import { createAsyncThunk } from "@reduxjs/toolkit";

import * as eventApi from "../api/event.api";
import * as eventReducer from "../reducer/event.reducer";

import { EventActionPropsType } from "../../types/action.types";

export const eventsAction = createAsyncThunk('events/events', async (_, { dispatch }) => {

    try {

        const { data } = await eventApi.eventsApi()

        dispatch(eventReducer.events(data))

    } catch (error) {
        console.log(error);
    }

})

export const eventAction = createAsyncThunk('events/event', async (eventData: EventActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.eventApi(eventData.id, eventData.token)

        dispatch(eventReducer.event(data))

    } catch (error) {
        console.log(error);
    }

})