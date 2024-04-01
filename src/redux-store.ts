import {configureStore} from '@reduxjs/toolkit'
import gamesSlice from "./Pages/Games/gamesSlice";
import createSagaMiddleware from 'redux-saga'
import gamesSaga from './Pages/Games/gamesSaga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        games: gamesSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(gamesSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store