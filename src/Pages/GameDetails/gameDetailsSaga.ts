import {call, put, takeEvery} from 'redux-saga/effects'
import {gameAPI} from "../../API/gameAPI";
import {createAction, PayloadAction} from "@reduxjs/toolkit";
import {FETCH_GAME_DETAILS, gameDetailsType} from "./gameDetailsTypes";
import {setGameDetails} from "./gameDetailsSlice";
import {setIsAppLoading} from "../../appSlice";

function* fetchGameDetails({payload}: PayloadAction<number>) {
    try {
        yield put(setIsAppLoading(true))
        const gameDetails: gameDetailsType = yield call(() => gameAPI.getGameDetails(payload))
        yield put(setGameDetails(gameDetails))
        yield put(setIsAppLoading(false))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

export const fetchGameDetailsAction = createAction(FETCH_GAME_DETAILS,
    (gameId: number) => ({payload: gameId})
)

function* gamesSaga() {
    yield takeEvery(FETCH_GAME_DETAILS, fetchGameDetails)
}

export default gamesSaga