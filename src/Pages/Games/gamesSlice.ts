import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {gamesListType, gameType, genresDetailType, commonItemDataType, tagsType} from "./gamesTypes";

type initialStateType = {
    gamesList: gamesListType,
    searchGameList: gameType[]
    isEmptySearch: boolean
    genreDetails: genresDetailType
    tags: tagsType
    currentTags: commonItemDataType[]
    isExactSearch: boolean
    developer: commonItemDataType
}
const initialState: initialStateType = {
    gamesList: {} as gamesListType,
    searchGameList: [] as gameType[],
    isEmptySearch: false,
    genreDetails: {} as genresDetailType,
    tags: {} as tagsType,
    currentTags: [] as commonItemDataType[],
    isExactSearch: true,
    developer: {} as commonItemDataType,
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
            if (state.tags.results) {
                state.tags.results = state.tags.results.concat(action.payload.results)
            } else {
                state.tags = action.payload
            }
        },
        setCurrentTags: (state, action: PayloadAction<commonItemDataType>) => {
            if (!state.currentTags.find(tag => tag.id === action.payload.id)) {
                state.currentTags = state.currentTags.concat(action.payload)
            }
        },
        deleteTag: (state, action: PayloadAction<number>) => {
            const index = state.currentTags.findIndex(tag => tag.id === action.payload)
            if (index !== -1) {
                state.currentTags.splice(index, 1)
            }
        },
        deleteAllTags: (state) => {
            state.currentTags = []
        },
        setDeveloper: (state, {payload}: PayloadAction<commonItemDataType>) => {
            state.developer = payload
        }
    }
})

export const {
    setTags,
    setGamesList,
    setSearchGameList,
    setGenreDetails,
    setCurrentTags,
    deleteTag,
    deleteAllTags,
    setDeveloper
} = gamesSlice.actions

export default gamesSlice.reducer