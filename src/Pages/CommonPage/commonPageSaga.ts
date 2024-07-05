import {call, put, takeEvery} from 'redux-saga/effects'
import {content, FETCH_CONTENT} from "./commonPageTypes";
import {createAction, PayloadAction} from "@reduxjs/toolkit";
import {setContent, setIsFetching, setPage} from "./commonPageSlise";
import {commonAPI} from "../../API/commonAPI";

function* fetchContent({payload}: PayloadAction<{ page: number, endpoint: string }>) {
    try {
        const content: content = yield call(() => commonAPI.getContent(payload.endpoint, payload.page))
        yield put(setContent({content, page: payload.page}))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    } finally {
        yield put(setIsFetching(false))
        yield put(setPage(payload.page))
    }
}

export const fetchContentAction = createAction(FETCH_CONTENT,
    (page: number, endpoint: string) => ({payload: {page, endpoint}}))

function* commonPageSaga() {
    yield takeEvery(FETCH_CONTENT, fetchContent)
}

export default commonPageSaga