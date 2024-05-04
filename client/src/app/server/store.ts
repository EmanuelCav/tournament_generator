import { Tuple, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { thunk } from 'redux-thunk'

import { key_name_persist } from '../config/config'

import reducers from './reducer/reducer'

const persistedReducer = persistReducer({
    key: `${key_name_persist}`,
    version: 1,
    storage
}, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: () => new Tuple(thunk),
    devTools: import.meta.env.DEV 
})
