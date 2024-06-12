import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit";

import { IReducerResponse } from '../../interface/Response';

import * as userAction from '../actions/user.actions';
import * as eventAction from '../actions/event.actions';

export const initialState: IReducerResponse = {
    loading: false
}

const responseSlice = createSlice({
    initialState,
    name: 'response',
    reducers: {
        loadingAction: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(userAction.loginAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(userAction.loginAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(userAction.loginAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(userAction.registerAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(userAction.registerAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(userAction.registerAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.eventsAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.eventsAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.eventsAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.eventAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.eventAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.eventAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.createEventAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.createEventAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.createEventAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.userEventsAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.userEventsAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.userEventsAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.createTeamAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.createTeamAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.createTeamAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.removeEventAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.removeEventAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.removeEventAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.removeTeamAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.removeTeamAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.removeTeamAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.updateTeamAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.updateTeamAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.updateTeamAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.createRefereeAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.createRefereeAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.createRefereeAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.removeRefereeAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.removeRefereeAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.removeRefereeAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.updateRefereeAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.updateRefereeAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.updateRefereeAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.createPlayerAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.createPlayerAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.createPlayerAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.removePlayerAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.removePlayerAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.removePlayerAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.updatePlayerAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.updatePlayerAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.updatePlayerAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.generateMatchsAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.generateMatchsAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.generateMatchsAction.rejected, (state) => {
            state.loading = false
        })
        
        builder.addCase(eventAction.joinTeamAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.joinTeamAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.joinTeamAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.addRefereeAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.addRefereeAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.addRefereeAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.updateScoreAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.updateScoreAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.updateScoreAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.updateScheduleAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.updateScheduleAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.updateScheduleAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.updateRoleAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.updateRoleAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.updateRoleAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.removeCompetitorAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.removeCompetitorAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.removeCompetitorAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.restartMatchsAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.restartMatchsAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.restartMatchsAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.updateEventAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.updateEventAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.updateEventAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.createCampusAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.createCampusAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.createCampusAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.removeCampusAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.removeCampusAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.removeCampusAction.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(eventAction.updateCampusAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(eventAction.updateCampusAction.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(eventAction.updateCampusAction.rejected, (state) => {
            state.loading = false
        })
    }
})

export const { loadingAction } = responseSlice.actions

export default responseSlice.reducer