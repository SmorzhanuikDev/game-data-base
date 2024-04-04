import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {gameAdditionsType, gameDetailsType, gameSeriesType} from "./gameDetailsTypes";

type initialStateType = {
    currentGame: gameDetailsType
    additionalContent: gameAdditionsType
    gameSeries: gameSeriesType
}
const initialState: initialStateType = {
    currentGame: {} as gameDetailsType,
    additionalContent: {} as gameAdditionsType,
    gameSeries: {} as gameSeriesType
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
        }
    }
})

export const {setGameDetails, setAdditionalContent, setGameSeries} = gameDetailsSlice.actions

export default gameDetailsSlice.reducer