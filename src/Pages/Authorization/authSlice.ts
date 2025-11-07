import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {currentUser} from "./authTypes";
import {AxiosError} from "axios";

type initialStateType = {
    token: string | undefined
    error: AxiosError | undefined
    currentUser: currentUser
}
const initialState: initialStateType = {
    token: '',
    error: undefined,
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