import {call, put, takeEvery} from 'redux-saga/effects'
import {gameAPI} from "../../API/gameAPI";
import {createAction, PayloadAction} from "@reduxjs/toolkit";
import {
    FETCH_GAME_ADDITIONAL_CONTENT,
    FETCH_GAME_DETAILS,
    FETCH_GAME_SCREENSHOTS,
    FETCH_GAME_SERIES,
    FETCH_GAME_STORES,
    gameListType,
    gameDetailsType,
    gameScreenshotsType, gameStoresType, FETCH_STORES_LIST, storesListType
} from "./gameDetailsTypes";
import {
    setAdditionalContent,
    setGameDetails,
    setGameScreenshots,
    setGameSeries,
    setGameStores, setStoreList
} from "./gameDetailsSlice";

function* fetchGameDetails({payload}: PayloadAction<number>) {
    try {
        const gameDetails: gameDetailsType = yield call(() => gameAPI.getGameDetails(payload))
        yield put(setGameDetails(gameDetails))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

function* fetchGameAdditions({payload}: PayloadAction<number>) {
    try {
        const gameAdditions: gameListType = yield call(() => gameAPI.getGameAdditions(payload))
        yield put(setAdditionalContent(gameAdditions))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

function* fetchGameSeries({payload}: PayloadAction<number>) {
    try {
        const gameSeries: gameListType = yield call(() => gameAPI.getGameSeries(payload))
        yield put(setGameSeries(gameSeries))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

function* fetchGameScreenshots({payload}: PayloadAction<number>) {
    try {
        const gameSeries: gameScreenshotsType = yield call(() => gameAPI.getGameScreenshots(payload))
        yield put(setGameScreenshots(gameSeries))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

function* fetchGameStores({payload}: PayloadAction<number>) {
    try {
        const gameStores: gameStoresType = yield call(() => gameAPI.getGameStores(payload))
        yield put(setGameStores(gameStores))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

function* fetchStoresList({payload}: PayloadAction<number>) {
    try {
        const storesList: storesListType = yield call(() => gameAPI.getStoresList(payload))
        yield put(setStoreList(storesList))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

export const fetchGameDetailsAction = createAction(FETCH_GAME_DETAILS,
    (gameId: number) => ({payload: gameId})
)
export const fetchGameAdditionsAction = createAction(FETCH_GAME_ADDITIONAL_CONTENT,
    (gameId: number) => ({payload: gameId})
)
export const fetchGameSeriesAction = createAction(FETCH_GAME_SERIES,
    (gameId: number) => ({payload: gameId})
)
export const fetchGameScreenshotsAction = createAction(FETCH_GAME_SCREENSHOTS,
    (gameId: number) => ({payload: gameId})
)
export const fetchGameStoresAction = createAction(FETCH_GAME_STORES,
    (gameId: number) => ({payload: gameId})
)
export const fetchStoresListAction = createAction(FETCH_STORES_LIST)

function* gamesSaga() {
    yield takeEvery(FETCH_GAME_DETAILS, fetchGameDetails)
    yield takeEvery(FETCH_GAME_ADDITIONAL_CONTENT, fetchGameAdditions)
    yield takeEvery(FETCH_GAME_ADDITIONAL_CONTENT, fetchGameSeries)
    yield takeEvery(FETCH_GAME_SCREENSHOTS, fetchGameScreenshots)
    yield takeEvery(FETCH_GAME_STORES, fetchGameStores)
    yield takeEvery(FETCH_STORES_LIST, fetchStoresList)
}

export default gamesSaga