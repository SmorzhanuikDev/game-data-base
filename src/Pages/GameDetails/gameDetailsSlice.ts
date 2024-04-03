import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {gameDetailsType} from "./gameDetailsTypes";

type initialStateType = {
    currentGame: gameDetailsType
}
const initialState: initialStateType = {
    currentGame: {} as gameDetailsType
}
const gameDetailsSlice = createSlice({
    name: 'gameDetails',
    initialState,
    reducers: {
        setGameDetails: (state, action: PayloadAction<gameDetailsType>) => {
            state.currentGame = action.payload
        }
    }
})

export const {setGameDetails} = gameDetailsSlice.actions

export default gameDetailsSlice.reducer