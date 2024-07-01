import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {developers} from "./developersTypes";
import {numericPatterns} from "date-fns/parse/_lib/constants";

type initialStateType = {
    developers: developers
    isFetching: boolean,
    page: number
}
const initialState: initialStateType = {
    developers: {} as developers,
    isFetching: true,
    page: 1
}
const developersSlice = createSlice({
    name: 'developers',
    initialState,
    reducers: {
        setDevelopers: (state, action: PayloadAction<{ developers: developers, page: number }>) => {
            if (action.payload.page > 1) {
                state.developers.results = state.developers.results.concat(action.payload.developers.results)
            } else {
                state.developers = action.payload.developers
            }
        },
        setIsFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload + 1
        }
    }
})

export const {setDevelopers, setIsFetching, setPage} = developersSlice.actions

export default developersSlice.reducer