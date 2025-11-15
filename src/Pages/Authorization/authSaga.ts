import {call, put, takeEvery} from 'redux-saga/effects'
import {createAction, PayloadAction} from "@reduxjs/toolkit";
import {FETCH_TOKEN, singInData, token} from "./authTypes";
import {setError, setToken} from "./authSlice";
import {accountAPI} from "../../API/accountAPI";

function* fetchToken({payload}: PayloadAction<{ login: string, password: string }>) {
    try {
        const response: token = yield call(() => accountAPI.logIn(payload.password, payload.login));
        if (response.success) {
            yield put(setToken(response.token))
        } else {
            yield put(setError(response.message));
        }
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

export const fetchTokenAction = createAction(FETCH_TOKEN,
    (authData: singInData) => ({payload: authData})
)

function* authSaga() {
    yield takeEvery(FETCH_TOKEN, fetchToken)
}

export default authSaga