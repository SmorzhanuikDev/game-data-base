import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {platforms} from "./platformsTypes";

type initialStateType = {
    platforms: platforms
}
const initialState: initialStateType = {
    platforms: {} as platforms
}
const platformsSlice = createSlice({
    name: 'platforms',
    initialState,
    reducers: {
        setPlatforms: (state, action: PayloadAction<platforms>) => {
            if (action.payload.previous) {
                state.platforms.results = state.platforms.results.concat(action.payload.results)
            } else {
                state.platforms = action.payload
            }
        }
    }
})

export const {setPlatforms} = platformsSlice.actions

export default platformsSlice.reducer