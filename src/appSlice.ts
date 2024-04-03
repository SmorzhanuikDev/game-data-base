import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type initialStateType = {
    isAppLoading: boolean
}
const initialState: initialStateType = {
    isAppLoading: false
}
const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        setIsAppLoading: (state, action: PayloadAction<boolean>) => {
            state.isAppLoading = action.payload
        }
    }
})

export const {setIsAppLoading} = appSlice.actions

export default appSlice.reducer