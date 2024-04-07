import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {gameListType, gameDetailsType, gameScreenshotsType, gameStoresType, storesListType} from "./gameDetailsTypes";

type initialStateType = {
    currentGame: gameDetailsType
    additionalContent: gameListType
    gameSeries: gameListType
    gameScreenshots: gameScreenshotsType
    gameStores: gameStoresType
    storesList: storesListType
}
const initialState: initialStateType = {
    currentGame: {} as gameDetailsType,
    additionalContent: {} as gameListType,
    gameSeries: {} as gameListType,
    gameScreenshots: {} as gameScreenshotsType,
    gameStores: {} as gameStoresType,
    storesList: {} as storesListType
}
const gameDetailsSlice = createSlice({
    name: 'gameDetails',
    initialState,
    reducers: {
        setGameDetails: (state, action: PayloadAction<gameDetailsType>) => {
            state.currentGame = action.payload
        },
        setAdditionalContent: (state, action: PayloadAction<gameListType>) => {
            state.additionalContent = action.payload
        },
        setGameSeries: (state, action: PayloadAction<gameListType>) => {
            state.gameSeries = action.payload
        },
        setGameScreenshots: (state, action: PayloadAction<gameScreenshotsType>) => {
            state.gameScreenshots = action.payload
        },
        setGameStores: (state, action: PayloadAction<gameStoresType>) => {
            state.gameStores = action.payload
        },
        setStoreList: (state, action: PayloadAction<storesListType>) => {
            state.storesList = action.payload
        }
    }
})

export const {setGameDetails, setAdditionalContent, setGameSeries, setGameScreenshots, setGameStores, setStoreList} = gameDetailsSlice.actions

export default gameDetailsSlice.reducer