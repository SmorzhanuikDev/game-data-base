import {configureStore} from '@reduxjs/toolkit'
import gamesSlice from "./Pages/Games/gamesSlice";
import createSagaMiddleware from 'redux-saga'
import gamesSaga from './Pages/Games/gamesSaga'
import gameDetailsSlice from "./Pages/GameDetails/gameDetailsSlice";
import gameDetailsSaga from "./Pages/GameDetails/gameDetailsSaga";
import {all} from 'redux-saga/effects'
import appSlice from "./appSlice";
import genresSlice from "./Pages/Genres/genresSlice";
import genresSaga from "./Pages/Genres/genresSaga";
import developersSaga from "./Pages/Developers/developersSaga";
import developersSlice from "./Pages/Developers/developersSlice";
import platformsSaga from "./Pages/Platforms/platformsSaga";
import platformsSlice from "./Pages/Platforms/platformsSlice";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        games: gamesSlice,
        genresData: genresSlice,
        gameDetails: gameDetailsSlice,
        appData: appSlice,
        platformsData: platformsSlice,
        developersData: developersSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})


function* rootSaga() {
    yield all([
        gamesSaga(),
        gameDetailsSaga(),
        genresSaga(),
        developersSaga(),
        platformsSaga()
    ])
}

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store