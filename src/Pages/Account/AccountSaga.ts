import {call, put, takeEvery} from 'redux-saga/effects'
import {createAction, PayloadAction} from "@reduxjs/toolkit";
import {CHANGE_PASSWORD, changePassData, FETCH_USER, userRes} from "./accountTypes";
import {accountAPI} from "../../API/accountAPI";
import {setIsLoading, setMessage, setUser} from "./AccountSlice";
import {commonApiRes} from "../Authorization/authTypes";

function* fetchUser() {
    try {
        yield put(setIsLoading(true))
        const userRes: userRes = yield call(() => accountAPI.getUser());
        if (!userRes.success) {
            yield put(setUser(userRes.user))
        }
        yield put(setIsLoading(false))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

function* changePassword({payload}: PayloadAction<changePassData>) {
    try {
        const response: commonApiRes = yield call(() => accountAPI.changePassword(payload));
        yield put(setMessage(response))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

export const accountAction = {
    fetchUser: createAction(FETCH_USER),
    changePassword: createAction(CHANGE_PASSWORD,
        (changePassData: changePassData) => ({payload: changePassData})),
}

function* userSaga() {
    yield takeEvery(FETCH_USER, fetchUser)
    yield takeEvery(CHANGE_PASSWORD, changePassword)
}

export default userSaga