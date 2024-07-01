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
        setPlatforms: (state, action: PayloadAction<{ platforms: platforms, page: number }>) => {
            if (action.payload.page > 1)  {
                state.platforms.results = state.platforms.results.concat(action.payload.platforms.results)
            } else {
                state.platforms = action.payload.platforms
            }
        }
    }
})

export const {setPlatforms} = platformsSlice.actions

export default platformsSlice.reducer