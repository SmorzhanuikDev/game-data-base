import {call, put, takeEvery} from 'redux-saga/effects'
import {createAction, PayloadAction} from "@reduxjs/toolkit";
import {CREATE_ACCOUNT, FETCH_TOKEN, singInFormData, singUpData, singUpFormData, tokenRes} from "./authTypes";
import {setError, setToken} from "./authSlice";
import {accountAPI} from "../../API/accountAPI";

function* fetchToken({payload}: PayloadAction<singInFormData>) {
    try {
        const response: tokenRes = yield call(() => accountAPI.logIn(payload.password, payload.login));
        if (response.success) {
            yield put(setToken(response.token))
        } else {
            yield put(setError(response.message));
        }
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}
function* createAccount({payload}: PayloadAction<singUpData>) {
    debugger
    try {

        const response: tokenRes = yield call(() => accountAPI.createAccount(payload));
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
    (authData: singInFormData) => ({payload: authData}),
)
export const createAccountAction = createAction(CREATE_ACCOUNT,
    (authData: singUpData) => ({payload: authData}),
)

function* authSaga() {
    yield takeEvery(FETCH_TOKEN, fetchToken)
    yield takeEvery(CREATE_ACCOUNT, createAccount)
}

export default authSaga