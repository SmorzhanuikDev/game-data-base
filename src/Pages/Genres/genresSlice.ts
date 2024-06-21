import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {genresType} from "./genresTypes";

type initialStateType = {
    genres: genresType
}
const initialState: initialStateType = {
    genres: {} as genresType
}
const genresSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {
        setGenres: (state, action: PayloadAction<genresType>) => {
            state.genres = action.payload
        }
    }
})

export const {setGenres} = genresSlice.actions

export default genresSlice.reducer