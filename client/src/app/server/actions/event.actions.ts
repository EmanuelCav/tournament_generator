import { createAsyncThunk } from "@reduxjs/toolkit";

import * as eventApi from "../api/event.api";
import * as eventReducer from "../reducer/event.reducer";

import { CreateEventActionPropsType, CreateRefereeActionPropsType, CreateTeamActionPropsType, EventActionPropsType, JoinEventActionPropsType, RemoveEventActionPropsType, RemoveTeamActionPropsType, UpdateTeamActionPropsType } from "../../types/action.types";

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

        dispatch(eventReducer.getEvent(data))

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

export const removeEventAction = createAsyncThunk('events/removeevent', async (teamData: RemoveEventActionPropsType, { dispatch }) => {    

    try {
        
        const { data } = await eventApi.removeEventApi(teamData.id, teamData.token)

        dispatch(eventReducer.removeEvent(teamData.id))

        console.log(data.message);

        teamData.navigate('/panel')

    } catch (error) {
        console.log(error);
    }

})

export const removeTeamAction = createAsyncThunk('events/removetean', async (teamData: RemoveTeamActionPropsType, { dispatch }) => {    

    try {
        
        const { data } = await eventApi.removeTeamApi(teamData.tid, teamData.eid, teamData.token)

        dispatch(eventReducer.getEvent(data))

        teamData.setIsRemoveTeam!(false)

    } catch (error) {
        console.log(error);
    }

})

export const updateTeamAction = createAsyncThunk('events/updateteam', async (teamData: UpdateTeamActionPropsType, { dispatch }) => {    

    try {
        
        const { data } = await eventApi.updateTeamApi(teamData.tid, teamData.eid, teamData.teamData, teamData.token)

        dispatch(eventReducer.getEvent(data))

        teamData.setIsEditTeam(false)

    } catch (error) {
        console.log(error);
    }

})

export const joinEventAction = createAsyncThunk('events/joinevent', async (teamData: JoinEventActionPropsType, { dispatch }) => {    

    try {
        
        const { data } = await eventApi.joinEventApi(teamData.id, teamData.token)

        dispatch(eventReducer.getEvent(data))

        teamData.navigate(`/events/${data._id}`)

    } catch (error) {
        console.log(error);
    }

})

export const createRefereeAction = createAsyncThunk('events/createreferee', async (refereeData: CreateRefereeActionPropsType, { dispatch }) => {    

    try {
        
        const { data } = await eventApi.createRefereeApi(refereeData.id, refereeData.refereeData, refereeData.token)

        dispatch(eventReducer.getEvent(data))

        refereeData.handleAddReferee()

    } catch (error) {
        console.log(error);
    }

})

