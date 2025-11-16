import {call, put, takeEvery} from 'redux-saga/effects'
import {createAction, PayloadAction} from "@reduxjs/toolkit";
import {FETCH_USER, LOG_IN, user} from "./accountTypes";
import {accountAPI} from "../../API/accountAPI";
import {setUser} from "./AccountSlice";

function* fetchUser() {
    try {
        const user: user = yield call(() => accountAPI.getUser());
        yield put(setUser(user))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

export const accountAction = {
    fetchUserAction: createAction(FETCH_USER),
}

function* userSaga() {
    yield takeEvery(FETCH_USER, fetchUser)
}

export default userSaga