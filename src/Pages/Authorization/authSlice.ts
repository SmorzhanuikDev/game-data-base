import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {refreshToken} from "../../API";

type initialStateType = {
    token: string | undefined
    error: string
    isLoading: boolean
}
const initialState: initialStateType = {
    token: '',
    error: '',
    isLoading: false,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string | undefined>) => {
            state.token = action.payload
            refreshToken(action.payload)
            state.isLoading = false
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.isLoading = false
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    }
})

export const {setToken, setError, setIsLoading} = authSlice.actions

export default authSlice.reducer