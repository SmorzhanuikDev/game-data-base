import {call, put, takeEvery} from 'redux-saga/effects'
import {gameAPI} from "../../API/gameAPI";
import {createAction, PayloadAction} from "@reduxjs/toolkit";
import {
    FETCH_GAME_ADDITIONAL_CONTENT,
    FETCH_GAME_DETAILS, FETCH_GAME_SCREENSHOTS, FETCH_GAME_SERIES,
    gameAdditionsType,
    gameDetailsType, gameScreenshotsType, gameSeriesType
} from "./gameDetailsTypes";
import {setAdditionalContent, setGameDetails, setGameScreenshots, setGameSeries} from "./gameDetailsSlice";
import {setIsAppLoading} from "../../appSlice";

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
        const gameAdditions: gameAdditionsType = yield call(() => gameAPI.getGameAdditions(payload))
        yield put(setAdditionalContent(gameAdditions))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

function* fetchGameSeries({payload}: PayloadAction<number>) {
    try {
        const gameSeries: gameSeriesType = yield call(() => gameAPI.getGameSeries(payload))
        yield put(setGameSeries(gameSeries))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

function* fetchGameScreenshots({payload}: PayloadAction<number>) {
    try {
        yield put(setIsAppLoading(true))
        const gameSeries: gameScreenshotsType = yield call(() => gameAPI.getGameScreenshots(payload))
        yield put(setGameScreenshots(gameSeries))
        yield put(setIsAppLoading(false))
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

function* gamesSaga() {
    yield takeEvery(FETCH_GAME_DETAILS, fetchGameDetails)
    yield takeEvery(FETCH_GAME_ADDITIONAL_CONTENT, fetchGameAdditions)
    yield takeEvery(FETCH_GAME_ADDITIONAL_CONTENT, fetchGameSeries)
    yield takeEvery(FETCH_GAME_SCREENSHOTS, fetchGameScreenshots)
}

export default gamesSaga