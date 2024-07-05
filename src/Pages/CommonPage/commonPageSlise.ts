import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {content} from "./commonPageTypes";

type initialStateType = {
    content: content
    isFetching: boolean,
    page: number
}
const initialState: initialStateType = {
    content: {} as content,
    isFetching: true,
    page: 1
}
const commonPageSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        setContent: (state, {payload}: PayloadAction<{ content: content, page: number }>) => {
            if (payload.page > 1) {

                state.content = {...payload.content, results: state.content.results.concat(payload.content.results)}
            } else {
                state.content = payload.content
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

export const {setContent, setIsFetching, setPage} = commonPageSlice.actions

export default commonPageSlice.reducer