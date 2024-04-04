import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {gameAdditionsType, gameDetailsType} from "./gameDetailsTypes";

type initialStateType = {
    currentGame: gameDetailsType
    additionalContent: gameAdditionsType
}
const initialState: initialStateType = {
    currentGame: {} as gameDetailsType,
    additionalContent: {} as gameAdditionsType
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
        }
    }
})

export const {setGameDetails, setAdditionalContent} = gameDetailsSlice.actions

export default gameDetailsSlice.reducer