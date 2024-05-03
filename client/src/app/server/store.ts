import { Tuple, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { thunk } from 'redux-thunk'

import reducer from './reducer/user.reducer'

import { key_name_persist } from '../config/config'

const persistedReducer = persistReducer({
    key: `${key_name_persist}`,
    version: 1,
    storage
}, reducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: () => new Tuple(thunk),
    devTools: import.meta.env.DEV 
})
