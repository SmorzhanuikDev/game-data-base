import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {user} from "./accountTypes";
import {commonApiRes} from "../Authorization/authTypes";

type initialStateType = {
    currentUser: user | null
    passRes: commonApiRes
    isLoading: boolean
}

const initialState: initialStateType = {
    currentUser: null,
    passRes: {} as commonApiRes,
    isLoading: false
}
const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setUser: (state, {payload}: PayloadAction<user>) => {
            state.currentUser = payload
        },
        setPassRes: (state, {payload}: PayloadAction<commonApiRes>) => {
            state.passRes = payload
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
    }
})

export const {setUser, setPassRes, setIsLoading} = accountSlice.actions

export default accountSlice.reducer