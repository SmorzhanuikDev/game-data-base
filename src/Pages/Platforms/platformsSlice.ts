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
        setPlatforms: (state, action: PayloadAction<any>) => {
            state.platforms = action.payload
        }
    }
})

export const {setPlatforms} = platformsSlice.actions

export default platformsSlice.reducer