import {call, put, takeEvery} from 'redux-saga/effects'
import {gameAPI} from "../../API/gameAPI";
import {FETCH_GAME_LIST, fetchGamesListType, gamesListType, gamesSearchParamsType} from "./gamesTypes";
import {setGamesList} from "./gamesSlice";
import {createAction, PayloadAction} from "@reduxjs/toolkit";

function* fetchGames({payload}: PayloadAction<gamesSearchParamsType>) {
    debugger
    try {
        const gamesList: gamesListType = yield call(() => gameAPI.getGames(payload))
        yield put(setGamesList(gamesList))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

export const gamesActions = {
    fetchGames: (params: gamesSearchParamsType): fetchGamesListType => ({type: FETCH_GAME_LIST, params})
}
export const fetchGamesAction = createAction(FETCH_GAME_LIST,
    (params: gamesSearchParamsType) => ({payload: params})
)

function* gamesSaga() {
    yield takeEvery(FETCH_GAME_LIST, fetchGames)
}

export default gamesSaga