import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {gameAdditionsType, gameDetailsType, gameScreenshotsType, gameSeriesType} from "./gameDetailsTypes";

type initialStateType = {
    currentGame: gameDetailsType
    additionalContent: gameAdditionsType
    gameSeries: gameSeriesType
    gameScreenshots: gameScreenshotsType
}
const initialState: initialStateType = {
    currentGame: {} as gameDetailsType,
    additionalContent: {} as gameAdditionsType,
    gameSeries: {} as gameSeriesType,
    gameScreenshots: {} as gameScreenshotsType
}
const gameDetailsSlice = createSlice({
    name: 'gameDetails',
    initialState,
    reducers: {
        setGameDetails: (state, action: PayloadAction<gameDetailsType>) => {
            state.currentGame = action.payload
        },
        setAdditionalContent: (state, action: PayloadAction<gameAdditionsType>) => {
            state.additionalContent = action.payload
        },
        setGameSeries: (state, action: PayloadAction<gameSeriesType>) => {
            state.gameSeries = action.payload
        },
        setGameScreenshots: (state, action: PayloadAction<gameScreenshotsType>) => {
            state.gameScreenshots = action.payload
        }
    }
})

export const {setGameDetails, setAdditionalContent, setGameSeries, setGameScreenshots} = gameDetailsSlice.actions

export default gameDetailsSlice.reducer