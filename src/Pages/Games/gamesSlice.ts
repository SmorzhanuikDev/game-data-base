import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {gamesListType, gameType} from "./gamesTypes";

type initialStateType = {
    gamesList: gamesListType,
    searchGameList: gameType[]
}
const initialState: initialStateType = {
    gamesList: {} as gamesListType,
    searchGameList: {} as gameType[]
}
const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        setGamesList: (state, action:PayloadAction<gamesListType>) => {
            state.gamesList = action.payload
        },
        setSearchGameList: (state, action:PayloadAction<gameType[]>) => {
            state.searchGameList = action.payload
        },
    }
})

export const {setGamesList, setSearchGameList} = gamesSlice.actions

export default gamesSlice.reducer