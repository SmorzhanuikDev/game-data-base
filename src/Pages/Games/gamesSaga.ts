import {call, put, takeEvery} from 'redux-saga/effects'
import {gameAPI} from "../../API/gameAPI";
import {fetchGamesListType, FETCH_GAME_LIST, gamesListType, fetchGamesParamsType} from "./types";
import {setGamesList} from "./gamesSlice";

function* fetchGames({params}: fetchGamesListType) {
    try {
        const gamesList: gamesListType = yield call(gameAPI.getGames, params)
        yield put(setGamesList(gamesList))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

export const gamesActions = {
    fetchGames: (params:fetchGamesParamsType):fetchGamesListType => ({type:FETCH_GAME_LIST, params })
}

function* gamesSaga() {
    yield takeEvery(FETCH_GAME_LIST, fetchGames)
}

export default gamesSaga