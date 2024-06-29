import {call, put, takeEvery} from 'redux-saga/effects'
import {FETCH_PLATFORMS, platforms} from "./platformsTypes";
import {setPlatforms} from "./platformsSlice";
import {createAction, PayloadAction} from "@reduxjs/toolkit";
import {platformAPI} from "../../API/platformsAPI";

function* fetchPlatforms({payload}: PayloadAction<number>) {
    try {
        const platforms: platforms = yield call(() => platformAPI.getPlatforms(payload))
        yield put(setPlatforms(platforms))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

export const fetchPlatformsAction = createAction(FETCH_PLATFORMS,
    (page: number) => ({payload: page}))

function* platformsSaga() {
    yield takeEvery(FETCH_PLATFORMS, fetchPlatforms)
}

export default platformsSaga