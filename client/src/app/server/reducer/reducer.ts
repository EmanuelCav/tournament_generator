import { combineReducers } from "@reduxjs/toolkit";

import userReducer from './user.reducer'
import eventReducer from './event.reducer'
import responseReducer from './response.reducer'

export default combineReducers({
    user: userReducer,
    event: eventReducer,
    response: responseReducer
})