import {call, put, takeEvery} from 'redux-saga/effects'
import {developers, FETCH_DEVELOPERS} from "./developersTypes";
import {createAction, PayloadAction} from "@reduxjs/toolkit";
import {developersAPI} from "../../API/develoresAPI";
import {setDevelopers, setIsFetching, setPage} from "./developersSlice";

function* fetchDevelopers({payload}: PayloadAction<number>) {
    try {
        const developers: developers = yield call(() => developersAPI.getDevelopers(payload))
        yield put(setDevelopers({developers, page: payload}))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    } finally {
        yield put(setIsFetching(false))
        yield put(setPage(payload))
    }
}

export const fetchDevelopersAction = createAction(FETCH_DEVELOPERS,
    (page: number) => ({payload: page}))

function* developersSaga() {
    yield takeEvery(FETCH_DEVELOPERS, fetchDevelopers)
}

export default developersSaga