import { createAsyncThunk } from "@reduxjs/toolkit";

import * as eventApi from "../api/event.api";
import * as eventReducer from "../reducer/event.reducer";
import { getPlayers, getTeams } from "../reducer/statistic.reducer";
import { matchdays } from "../reducer/get.reducer";

import * as typesActionsEvent from "../../types/action.types";

// import { dangerMessage } from "../../helper/message";

export const eventsAction = createAsyncThunk('events/events', async (token: string | undefined, { dispatch }) => {

    try {

        const { data } = await eventApi.eventsApi(token)

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

export const eventAction = createAsyncThunk('events/event', async (eventData: typesActionsEvent.EventActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.eventApi(eventData.id, eventData.token)

        dispatch(eventReducer.getEvent(data))
        dispatch(matchdays(true))

    } catch (error) {
        console.log(error);
    }

})

export const createEventAction = createAsyncThunk('events/createevent', async (eventData: typesActionsEvent.CreateEventActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.createEventApi(eventData.formData, eventData.token)

        dispatch(eventReducer.createEvent(data))

        eventData.navigation.navigate("Event")

    } catch (error) {
        console.log(error);
    }

})

export const createTeamAction = createAsyncThunk('events/createteam', async (teamData: typesActionsEvent.CreateTeamActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.createTeamApi(teamData.id, teamData.formData, teamData.token)

        dispatch(eventReducer.createEvent(data))

        teamData.handleAddTeam()

    } catch (error) {
        console.log(error);
    }

})

export const removeEventAction = createAsyncThunk('events/removeevent', async (teamData: typesActionsEvent.RemoveEventActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.removeEventApi(teamData.id, teamData.token)

        dispatch(eventReducer.removeEvent(teamData.id))

        console.log(data.message);

        teamData.navigation.navigate("Event")

    } catch (error) {
        console.log(error);
    }

})

export const removeTeamAction = createAsyncThunk('events/removetean', async (teamData: typesActionsEvent.RemoveTeamActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.removeTeamApi(teamData.tid, teamData.eid, teamData.token)

        dispatch(eventReducer.getEvent(data))

        teamData.setIsRemoveTeam!(false)

    } catch (error) {
        console.log(error);
    }

})

export const updateTeamAction = createAsyncThunk('events/updateteam', async (teamData: typesActionsEvent.UpdateTeamActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.updateTeamApi(teamData.tid, teamData.eid, teamData.teamData, teamData.token)

        dispatch(eventReducer.getEvent(data))

        teamData.setIsEditTeam(false)

    } catch (error) {
        console.log(error);
    }

})

export const joinEventAction = createAsyncThunk('events/joinevent', async (teamData: typesActionsEvent.JoinEventActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.joinEventApi(teamData.id, teamData.token)

        dispatch(eventReducer.getEvent(data))

        teamData.navigation.navigate("Event")

    } catch (error) {
        console.log(error);
    }

})

export const createRefereeAction = createAsyncThunk('events/createreferee', async (refereeData: typesActionsEvent.CreateRefereeActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.createRefereeApi(refereeData.id, refereeData.refereeData, refereeData.token)

        dispatch(eventReducer.getEvent(data))

        refereeData.handleAddReferee()

    } catch (error) {
        console.log(error);
    }

})

export const removeRefereeAction = createAsyncThunk('events/removereferee', async (refereeData: typesActionsEvent.RemoveRefereeActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.removeRefereeApi(refereeData.rid, refereeData.cid, refereeData.token)

        dispatch(eventReducer.getEvent(data))

        refereeData.setIsRemoveReferee(false)

    } catch (error) {
        console.log(error);
    }

})

export const updateRefereeAction = createAsyncThunk('events/updatereferee', async (refereeData: typesActionsEvent.UpdateRefereeActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.updateRefereeApi(refereeData.rid, refereeData.cid, refereeData.refereeData, refereeData.token)

        dispatch(eventReducer.getEvent(data))

        refereeData.setIsEditReferee(false)

    } catch (error) {
        console.log(error);
    }

})

export const createPlayerAction = createAsyncThunk('events/createplayer', async (playerData: typesActionsEvent.CreatePlayerActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.createPlayerApi(playerData.tid, playerData.cid, playerData.playerData, playerData.token)

        dispatch(eventReducer.getEvent(data))

        playerData.handleAddPlayer(playerData.team)

    } catch (error) {
        console.log(error);
    }

})

export const removePlayerAction = createAsyncThunk('events/removeplayer', async (playerData: typesActionsEvent.RemovePlayerActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.removePlayerApi(playerData.pid, playerData.cid, playerData.token)

        dispatch(eventReducer.getEvent(data))

        playerData.setIsRemovePlayer(false)

    } catch (error) {
        console.log(error);
    }

})

export const updatePlayerAction = createAsyncThunk('events/updateplayer', async (playerData: typesActionsEvent.UpdatePlayerActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.updatePlayerApi(playerData.pid, playerData.cid, playerData.playerData, playerData.token)

        dispatch(eventReducer.getEvent(data))

        playerData.setIsEditPlayer(false)

    } catch (error) {
        console.log(error);
    }

})

export const generateMatchsAction = createAsyncThunk('events/generateMatchs', async (eventData: typesActionsEvent.GenerateMatchsActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.generateMatchApi(eventData.id, eventData.category, eventData.round, eventData.singleFinal, eventData.token)

        dispatch(eventReducer.getEvent(data))

    } catch (error) {
        console.log(error);
    }

})

export const joinTeamAction = createAsyncThunk('events/jointeam', async (eventData: typesActionsEvent.JoinTeamActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.joinTeamApi(eventData.id, eventData.token)

        dispatch(eventReducer.getEvent(data))

    } catch (error) {
        console.log(error);
    }

})

export const addRefereeAction = createAsyncThunk('events/addreferee', async (eventData: typesActionsEvent.AddRefereeActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.refereeMatchApi(eventData.match._id, eventData.eid, eventData.referee, eventData.token)

        dispatch(eventReducer.getEvent(data))

        eventData.handleAddReferee(eventData.match)

    } catch (error) {
        console.log(error);
    }

})

export const updateScoreAction = createAsyncThunk('events/addscore', async (eventData: typesActionsEvent.AddScoreActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.updateScoreApi(eventData.match._id, eventData.eid, eventData.targetData, eventData.category, eventData.token)

        dispatch(eventReducer.getEvent(data))

        eventData.setIsAddScore(false)

    } catch (error) {
        console.log(error);
    }

})

export const updateScheduleAction = createAsyncThunk('events/updateschedule', async (eventData: typesActionsEvent.UpdateScheduleActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.updateScheduleApi(eventData.match._id, eventData.eid, eventData.scheduleData, eventData.token)

        dispatch(eventReducer.getEvent(data))

        eventData.handleUpdateSchedule(eventData.match)

    } catch (error) {
        console.log(error);
    }

})

export const updateRoleAction = createAsyncThunk('events/updaterole', async (eventData: typesActionsEvent.UpdateRoleActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.updateRoleApi(eventData.eid, eventData.cid, eventData.role, eventData.token)

        dispatch(eventReducer.getEvent(data))

        eventData.handleChangeRole()

    } catch (error) {
        console.log(error);
    }

})

export const removeCompetitorAction = createAsyncThunk('events/removecompetitor', async (eventData: typesActionsEvent.RemoveCompetitorActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.removeCompetitorApi(eventData.eid, eventData.cid, eventData.token)

        dispatch(eventReducer.getEvent(data))

        eventData.setIsRemoveCompetitor(false)

    } catch (error) {
        console.log(error);
    }

})

export const restartMatchsAction = createAsyncThunk('events/restartmatchs', async (eventData: typesActionsEvent.RestartMatchActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.restartMatchApi(eventData.id, eventData.token)

        dispatch(eventReducer.getEvent(data))
        dispatch(getTeams([]))
        dispatch(getPlayers([]))

        eventData.handleRestartEvent()

    } catch (error) {
        console.log(error);
    }

})

export const updateEventAction = createAsyncThunk('events/updateevent', async (eventData: typesActionsEvent.UpdateEventActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.updateEventApi(eventData.id, eventData.formData, eventData.token)

        dispatch(eventReducer.getEvent(data.event))

    } catch (error) {
        console.log(error);
    }

})

export const createCampusAction = createAsyncThunk('events/createcampus', async (refereeData: typesActionsEvent.CreateCampusActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.createCampusApi(refereeData.id, refereeData.campusData, refereeData.token)

        dispatch(eventReducer.getEvent(data))

        refereeData.handleAddCampus()

    } catch (error) {
        console.log(error);
    }

})

export const removeCampusAction = createAsyncThunk('events/removecampus', async (refereeData: typesActionsEvent.RemoveCampusActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.removeCampusApi(refereeData.id, refereeData.cid, refereeData.token)

        dispatch(eventReducer.getEvent(data))

        refereeData.setIsRemoveCampus(false)

    } catch (error) {
        console.log(error);
    }

})

export const updateCampusAction = createAsyncThunk('events/updatecampus', async (refereeData: typesActionsEvent.UpdateCampusActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.updateCampusApi(refereeData.id, refereeData.cid, refereeData.campusData, refereeData.token)

        dispatch(eventReducer.getEvent(data))

        refereeData.setIsEditCampus(false)

    } catch (error) {
        console.log(error);
    }

})

export const addCampusAction = createAsyncThunk('events/addcampus', async (eventData: typesActionsEvent.AddCampusActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.campusMatchApi(eventData.match._id, eventData.eid, eventData.campus, eventData.token)

        dispatch(eventReducer.getEvent(data))

        eventData.handleUpdateCampus(eventData.match)

    } catch (error) {
        console.log(error);
    }

})

export const updatePlayerDataAction = createAsyncThunk('events/updateplayerdata', async (eventData: typesActionsEvent.UpdatePlayerDataActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.updatePlayerDataApi(eventData.sid, eventData.cid, eventData.playerData, eventData.token)

        dispatch(eventReducer.getEvent(data))

        eventData.handleClose()

    } catch (error) {
        console.log(error);
    }

})

export const createStatisticAction = createAsyncThunk('events/createstatistic', async (eventData: typesActionsEvent.CreateStatisticActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.createStatisticApi(eventData.eid, eventData.cid, eventData.statisticData, eventData.token)

        dispatch(eventReducer.getEvent(data.event))
        dispatch(getPlayers(data.players))

        eventData.handleAddStatistics()

    } catch (error) {
        console.log(error);
    }

})

export const removeStatisticAction = createAsyncThunk('events/removestatistic', async (eventData: typesActionsEvent.RemoveStatisticActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.removeStatisticApi(eventData.sid, eventData.cid, eventData.token)

        dispatch(eventReducer.getEvent(data.event))
        dispatch(getPlayers(data.players))

        eventData.handleSure()

    } catch (error) {
        console.log(error);
    }

})

export const updateStatisticAction = createAsyncThunk('events/updatestatistic', async (eventData: typesActionsEvent.UpdateStatisticActionPropsType, { dispatch }) => {

    try {

        const { data } = await eventApi.updateStatisticApi(eventData.sid, eventData.cid, eventData.statisticData, eventData.token)

        dispatch(eventReducer.getEvent(data.event))
        dispatch(getPlayers(data.players))

        eventData.setIsEditStatistic(false)

    } catch (error) {
        console.log(error);
    }

})