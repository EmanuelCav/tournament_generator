import { combineReducers } from "@reduxjs/toolkit";

import userReducer from './user.reducer'
import tournamentReducer from './tournament.reducer'
import responseReducer from './response.reducer'

export default combineReducers({
    user: userReducer,
    tournament: tournamentReducer,
    response: responseReducer
})