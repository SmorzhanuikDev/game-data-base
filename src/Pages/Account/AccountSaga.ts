import {call, put, takeEvery} from 'redux-saga/effects'
import {createAction, PayloadAction} from "@reduxjs/toolkit";
import {FETCH_USER, LOG_IN, user} from "./accountTypes";
import {accountAPI} from "../../API/accountAPI";
import {setUser} from "./AccountSlice";

function* logIn({payload}: PayloadAction<{ password: string, login: string }>) {
    try {
        const token: string = yield call(() => accountAPI.logIn(payload.password, payload.login));
        localStorage.setItem("token", token);
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

function* fetchUser({payload}: PayloadAction<{ password: string, login: string }>) {
    try {
        const user: user = yield call(() => accountAPI.logIn(payload.password, payload.login));
        yield put(setUser(user))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

const accountAction = {
    fetchUserAction: createAction(
        FETCH_USER,
        (password: string, login: string) => ({payload: {password, login}})
    ),
    logInAction: createAction(
        LOG_IN,
        (password: string, login: string) => ({payload: {password, login}})
    )
}

function* userSaga() {
    yield takeEvery(FETCH_USER, fetchUser)
    yield takeEvery(LOG_IN, logIn)
}

export default userSaga