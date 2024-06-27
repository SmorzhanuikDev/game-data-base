import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type initialStateType = {
    platforms: any
}
const initialState: initialStateType = {
    platforms: {} as any
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