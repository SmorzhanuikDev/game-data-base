import {call, put, takeEvery} from 'redux-saga/effects'
import {gameAPI} from "../../API/gameAPI";
import {fetchGamesListType, GAMES_FETCH_SUCCEEDED, gamesListType} from "./types";
import {setGamesList} from "./gamesSlice";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchGames({params}: fetchGamesListType) {
    try {
        const gamesList: gamesListType = yield call(gameAPI.getGames, params)
        yield put(setGamesList(gamesList))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

function* gamesSaga() {
    yield takeEvery(GAMES_FETCH_SUCCEEDED, fetchGames)
}

export default gamesSaga