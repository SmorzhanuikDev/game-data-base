import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {gamesListType, gameType} from "./gamesTypes";

type initialStateType = {
    gamesList: gamesListType,
    searchGameList: gameType[]
    isEmptySearch: boolean
}
const initialState: initialStateType = {
    gamesList: {} as gamesListType,
    searchGameList: [] as gameType[],
    isEmptySearch: false
}
const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        setGamesList: (state, action: PayloadAction<gamesListType>) => {
            state.gamesList = action.payload
        },
        setSearchGameList: (state, action: PayloadAction<gameType[]>) => {
            action.payload.length === 0
                ? state.isEmptySearch = true
                : state.isEmptySearch = false
            state.searchGameList = action.payload
        },
    }
})

export const {setGamesList, setSearchGameList} = gamesSlice.actions

export default gamesSlice.reducer