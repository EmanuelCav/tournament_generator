import { createAsyncThunk } from "@reduxjs/toolkit";

import * as eventApi from "../api/event.api";
import * as eventReducer from "../reducer/event.reducer";

import { CreateEventActionPropsType, CreateTeamActionPropsType, EventActionPropsType, RemoveEventActionPropsType } from "../../types/action.types";

export const eventsAction = createAsyncThunk('events/events', async (_, { dispatch }) => {

    try {

        const { data } = await eventApi.eventsApi()

        dispatch(eventReducer.events(data))

    } catch (error) {
        console.log(error);
    }

})

export const userEventsAction = createAsyncThunk('events/userEvents', async (token: string, { dispatch }) => {

    try {

        const { data } = await eventApi.userEventApi(token)

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

export const createEventAction = createAsyncThunk('events/createevent', async (eventData: CreateEventActionPropsType, { dispatch }) => {    

    try {

        const { data } = await eventApi.createEventApi(eventData.formData, eventData.token)

        dispatch(eventReducer.createEvent(data))

        eventData.setIsCreate(false)

    } catch (error) {
        console.log(error);
    }

})

export const createTeamAction = createAsyncThunk('events/createteam', async (teamData: CreateTeamActionPropsType, { dispatch }) => {    

    try {

        
        const { data } = await eventApi.createTeamApi(teamData.id, teamData.formData, teamData.token)

        dispatch(eventReducer.createEvent(data))

        teamData.handleAddTeam()

    } catch (error) {
        console.log(error);
    }

})

export const removeEventAction = createAsyncThunk('events/removeteam', async (teamData: RemoveEventActionPropsType, { dispatch }) => {    

    try {
        
        const { data } = await eventApi.removeEventApi(teamData.id, teamData.token)

        dispatch(eventReducer.removeEvent(teamData.id))

        console.log(data.message);

        teamData.navigate('/panel')

    } catch (error) {
        console.log(error);
    }

})