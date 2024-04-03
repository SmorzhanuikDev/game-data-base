import {call, put, takeEvery} from 'redux-saga/effects'
import {gameAPI} from "../../API/gameAPI";
import {FETCH_GAME_LIST, gamesListType, gamesSearchParamsType} from "./gamesTypes";
import {setGamesList} from "./gamesSlice";
import {createAction, PayloadAction} from "@reduxjs/toolkit";
import {setIsAppLoading} from "../../appSlice";

function* fetchGames({payload}: PayloadAction<gamesSearchParamsType>) {
    try {
        yield put(setIsAppLoading(true))
        const gamesList: gamesListType = yield call(() => gameAPI.getGames(payload))
        yield put(setGamesList(gamesList))
        yield put(setIsAppLoading(false))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

export const fetchGamesAction = createAction(FETCH_GAME_LIST,
    (params: gamesSearchParamsType) => ({payload: params})
)

function* gamesSaga() {
    yield takeEvery(FETCH_GAME_LIST, fetchGames)
}

export default gamesSaga