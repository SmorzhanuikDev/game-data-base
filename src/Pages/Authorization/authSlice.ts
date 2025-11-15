import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type initialStateType = {
    token: string | undefined
    error: string
}
const initialState: initialStateType = {
    token: '',
    error: '',
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string | undefined>) => {
            state.token = action.payload
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        }
    }
})

export const {setToken, setError} = authSlice.actions

export default authSlice.reducer