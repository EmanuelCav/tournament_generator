import { combineReducers } from "@reduxjs/toolkit";

import userReducer from './user.reducer'
import tournamentReducer from './tournament.reducer'

export default combineReducers({
    user: userReducer,
    tournament: tournamentReducer
})