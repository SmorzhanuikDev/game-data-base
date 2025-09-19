import {configureStore} from '@reduxjs/toolkit'
import gamesSlice from "./Pages/Games/gamesSlice";
import createSagaMiddleware from 'redux-saga'
import gamesSaga from './Pages/Games/gamesSaga'
import gameDetailsSlice from "./Pages/GameDetails/gameDetailsSlice";
import gameDetailsSaga from "./Pages/GameDetails/gameDetailsSaga";
import {all} from 'redux-saga/effects'
import appSlice from "./appSlice";
import commonPageSlice from "./Pages/CommonPage/commonPageSlise";
import commonPageSaga from "./Pages/CommonPage/commonPageSaga";
import accountSlice from "./Pages/Account/AccountSlice";
import accountSaga from "./Pages/Account/AccountSaga";
import authSaga from "./Pages/Authorization/authSaga";
import authSlice from "./Pages/Authorization/authSlice";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        games: gamesSlice,
        gameDetails: gameDetailsSlice,
        appData: appSlice,
        commonPageData: commonPageSlice,
        accountData: accountSlice,
        authSaga: authSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})


function* rootSaga() {
    yield all([
        gamesSaga(),
        gameDetailsSaga(),
        commonPageSaga(),
        accountSaga(),
        authSaga()
    ])
}

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store