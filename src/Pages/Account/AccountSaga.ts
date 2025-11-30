import {call, put, takeEvery} from 'redux-saga/effects'
import {createAction, PayloadAction} from "@reduxjs/toolkit";
import {CHANGE_NAME, CHANGE_PASSWORD, changePassData, DELETE_ACCOUNT, FETCH_USER, userRes} from "./accountTypes";
import {accountAPI} from "../../API/accountAPI";
import {setDeleteAccountRes, setIsLoading, setNameRes, setPassRes, setUser} from "./AccountSlice";
import {changeNameRes, commonApiRes} from "../Authorization/authTypes";

function* fetchUser() {
    try {
        yield put(setIsLoading(true))
        const userRes: userRes = yield call(() => accountAPI.getUser());
        if (userRes.success) {
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
        yield put(setPassRes(response))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

function* changeName({payload}: PayloadAction<string>) {
    try {
        const response: changeNameRes = yield call(() => accountAPI.changeName(payload));
        yield put(setNameRes(response))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

function* deleteAccount({payload}: PayloadAction<string>) {
    try {
        const response: commonApiRes = yield call(() => accountAPI.deleteAccount(payload));
        yield put(setDeleteAccountRes(response))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

export const accountAction = {
    fetchUser: createAction(FETCH_USER),
    changePassword: createAction(CHANGE_PASSWORD,
        (changePassData: changePassData) => ({payload: changePassData})),
    changeName: createAction(CHANGE_NAME, (newName: string) => ({payload: newName})),
    deleteAccount: createAction(DELETE_ACCOUNT, (password: string) => ({payload: password})),
}

function* userSaga() {
    yield takeEvery(FETCH_USER, fetchUser)
    yield takeEvery(CHANGE_PASSWORD, changePassword)
    yield takeEvery(CHANGE_NAME, changeName)
    yield takeEvery(DELETE_ACCOUNT, deleteAccount)
}

export default userSaga