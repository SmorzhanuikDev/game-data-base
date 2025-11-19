import {call, put, takeEvery} from 'redux-saga/effects'
import {createAction} from "@reduxjs/toolkit";
import {FETCH_USER, userRes} from "./accountTypes";
import {accountAPI} from "../../API/accountAPI";
import {setUser} from "./AccountSlice";

function* fetchUser() {
    try {
        const userRes: userRes = yield call(() => accountAPI.getUser());
        if (userRes.success) {
            yield put(setUser(userRes.user))
        }
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