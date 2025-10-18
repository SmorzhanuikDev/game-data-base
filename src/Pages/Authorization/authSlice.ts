import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {currentUser} from "./authTypes";

type initialStateType = {
    token: string | undefined
    error: any
    currentUser: currentUser
}
const initialState: initialStateType = {
    token: '',
    error: '',
    currentUser: {} as currentUser,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string | undefined>) => {
            state.token = action.payload
        },
        setError: (state, action: PayloadAction<any>) => {
            state.error = action.payload
        },
        setCurrentUser: (state, action: PayloadAction<currentUser>) => {
            state.currentUser = action.payload
        },
    }
})

export const {setCurrentUser, setToken, setError} = authSlice.actions

export default authSlice.reducer