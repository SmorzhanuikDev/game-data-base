import {call, put, takeEvery} from 'redux-saga/effects'
import {gameAPI} from "../../API/gameAPI";
import {
    FETCH_CURRENT_TAG,
    FETCH_GAME_LIST,
    FETCH_GENRE_DETAILS, FETCH_TAGS,
    gamesListType,
    gamesSearchParamsType,
    genresDetailType,
    SEARCH_GAME_LIST, tagBySearchType, tagsType
} from "./gamesTypes";
import {setCurrentTags, setGamesList, setGenreDetails, setSearchGameList, setTags} from "./gamesSlice";
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

function* fetchTags() {
    try {
        const tags: tagsType = yield call(commonAPI.getTags)
        yield put(setTags(tags))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

function* fetchCurrentTag({payload}: PayloadAction<number>) {
    try {
        const tags: tagBySearchType = yield call(commonAPI.getCurrentTag, payload)
        yield put(setCurrentTags(tags))
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
export const fetchTagsAction = createAction(FETCH_TAGS)
export const fetchCurrentTagAction = createAction(FETCH_CURRENT_TAG, (id: number) => ({payload: id}))

function* gamesSaga() {
    yield takeEvery(FETCH_GAME_LIST, fetchGames)
    yield takeEvery(SEARCH_GAME_LIST, searchGames)
    yield takeEvery(FETCH_GENRE_DETAILS, fetchGenreDetails)
    yield takeEvery(FETCH_TAGS, fetchTags)
    yield takeEvery(FETCH_CURRENT_TAG, fetchCurrentTag)
}

export default gamesSaga