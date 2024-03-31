import {createSlice} from '@reduxjs/toolkit'

type initialStateType = { gamesList: number[] }
const initialState: initialStateType = {
    gamesList: []
}
const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        setGamesList: (state, action) => {
            state.gamesList = action.payload
        }
    }
})

export const {setGamesList} = gamesSlice.actions

export default gamesSlice.reducer