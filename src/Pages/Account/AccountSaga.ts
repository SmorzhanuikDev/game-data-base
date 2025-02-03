import {call, put, takeEvery} from 'redux-saga/effects'
import {createAction, PayloadAction} from "@reduxjs/toolkit";
import {FETCH_USER, user} from "./accountTypes";
import {accountAPI} from "../../API/accountAPI";
import {setUser} from "./AccountSlice";

function* fetchUser({payload}: PayloadAction<{ password: string, login: string }>) {
    try {
        const user: user = yield call(() => accountAPI.logIn(payload.password, payload.login));
        yield put(setUser(user))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

export const fetchUserAction = createAction(
    FETCH_USER,
    (password: string, login: string) => ({payload: {password, login}})
)

function* userSaga() {
    yield takeEvery(FETCH_USER, fetchUser)
}

export default userSaga