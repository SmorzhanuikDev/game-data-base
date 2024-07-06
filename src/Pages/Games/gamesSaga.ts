import {call, put, takeEvery} from 'redux-saga/effects'
import {gameAPI} from "../../API/gameAPI";
import {FETCH_GAME_LIST, gamesListType, gamesSearchParamsType, SEARCH_GAME_LIST} from "./gamesTypes";
import {setGamesList, setSearchGameList} from "./gamesSlice";
import {createAction, PayloadAction} from "@reduxjs/toolkit";

function* fetchGames({payload}: PayloadAction<gamesSearchParamsType>) {
    try {

        const gamesList: gamesListType = yield call(() => gameAPI.getGames(payload))
        yield put(setGamesList(gamesList))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

function* searchGames({payload}: PayloadAction<gamesSearchParamsType>) {
    try {

        const gamesList: gamesListType = yield call(() => gameAPI.getGames(payload))
        yield put(setSearchGameList(gamesList.results))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

export const fetchGamesAction = createAction(FETCH_GAME_LIST,
    (params: gamesSearchParamsType) => ({payload: params})
)
export const searchGamesAction = createAction(SEARCH_GAME_LIST,
    (params: gamesSearchParamsType) => ({payload: params})
)

function* gamesSaga() {
    yield takeEvery(FETCH_GAME_LIST, fetchGames)
    yield takeEvery(SEARCH_GAME_LIST, searchGames)
}

export default gamesSaga