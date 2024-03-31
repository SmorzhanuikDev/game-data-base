import {createSlice} from '@reduxjs/toolkit'
import {gamesListType} from "./types";

type initialStateType = {
    gamesList: gamesListType
}
const initialState: initialStateType = {
    gamesList: {} as gamesListType
}
const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        setGamesList: (state, action) => {
            state.gamesList = action.payload
        }
    }
})

export const {setGamesList} = gamesSlice.actions

export default gamesSlice.reducer