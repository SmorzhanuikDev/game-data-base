import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {gamesListType, gameType, genresDetailType, tagsType} from "./gamesTypes";

type initialStateType = {
    gamesList: gamesListType,
    searchGameList: gameType[]
    isEmptySearch: boolean
    genreDetails: genresDetailType
    tags: tagsType
}
const initialState: initialStateType = {
    gamesList: {} as gamesListType,
    searchGameList: [] as gameType[],
    isEmptySearch: false,
    genreDetails: {} as genresDetailType,
    tags: {} as tagsType
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
        setGenreDetails: (state, action: PayloadAction<genresDetailType>) => {
            state.genreDetails = action.payload
        },
        setTags: (state, action: PayloadAction<tagsType>) => {
            state.tags = action.payload
        },
    }
})

export const {
    setTags,
    setGamesList,
    setSearchGameList,
    setGenreDetails
} = gamesSlice.actions

export default gamesSlice.reducer