import { Tuple, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { thunk } from 'redux-thunk'

import reducers from './reducer/reducer'

const persistedReducer = persistReducer({
    key: "cupcraft_tournament_generator",
    version: 1,
    storage: AsyncStorage
}, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: () => new Tuple(thunk),
    devTools: __DEV__
})
