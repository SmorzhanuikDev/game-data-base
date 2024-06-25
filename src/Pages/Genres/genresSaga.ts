import {call, put, takeEvery} from 'redux-saga/effects'
import {FETCH_GENRES, genresType} from "./genresTypes";
import {setGenres} from "./genresSlice";
import {createAction} from "@reduxjs/toolkit";
import {setIsAppLoading} from "../../appSlice";
import {genreAPI} from "../../API/genreAPI";

function* fetchGenres() {
    try {
        yield put(setIsAppLoading(true))
        const genres: genresType = yield call(() => genreAPI.getGenres())
        yield put(setGenres(genres))
    } catch (e: any) {
        yield put({type: 'ERROR', message: e.message})
    }
}

export const fetchGenresAction = createAction(FETCH_GENRES)

function* genresSaga() {
    yield takeEvery(FETCH_GENRES, fetchGenres)
}

export default genresSaga