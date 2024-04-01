import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {gamesListType} from "./gamesTypes";

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
        setGamesList: (state, action:PayloadAction<gamesListType>) => {
            state.gamesList = action.payload
        }
    }
})

export const {setGamesList} = gamesSlice.actions

export default gamesSlice.reducer