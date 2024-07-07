import {call, put, takeEvery} from 'redux-saga/effects'
import {gameAPI} from "../../API/gameAPI";
import {
    FETCH_GAME_LIST,
    FETCH_GENRE_DETAILS,
    gamesListType,
    gamesSearchParamsType,
    genresDetailType,
    SEARCH_GAME_LIST
} from "./gamesTypes";
import {setGamesList, setGenreDetails, setSearchGameList} from "./gamesSlice";
import {createAction, PayloadAction} from "@reduxjs/toolkit";
import {commonAPI} from "../../API/commonAPI";

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

function* fetchGenreDetails({payload}: PayloadAction<string>) {
    try {
        const genreDetails: genresDetailType = yield call(() => commonAPI.getGenreDetails(payload))
        yield put(setGenreDetails(genreDetails))
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
export const fetchGenresDetailsAction = createAction(FETCH_GENRE_DETAILS,
    (id: string) => ({payload: id})
)

function* gamesSaga() {
    yield takeEvery(FETCH_GAME_LIST, fetchGames)
    yield takeEvery(SEARCH_GAME_LIST, searchGames)
    yield takeEvery(FETCH_GENRE_DETAILS, fetchGenreDetails)
}

export default gamesSaga