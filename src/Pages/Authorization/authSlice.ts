import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {commonApiRes, currentUser} from "./authTypes";
import {AxiosError} from "axios";

type initialStateType = {
    token: string | undefined
    error: string
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
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        setCurrentUser: (state, action: PayloadAction<currentUser>) => {
            state.currentUser = action.payload
        },
    }
})

export const {setCurrentUser, setToken, setError} = authSlice.actions

export default authSlice.reducer