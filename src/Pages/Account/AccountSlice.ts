import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {user} from "./accountTypes";
import {changeNameRes, commonApiRes} from "../Authorization/authTypes";

type initialStateType = {
    currentUser: user | null
    passRes: commonApiRes
    nameRes: changeNameRes
    deleteAccountRes: commonApiRes
    isLoading: boolean
}

const initialState: initialStateType = {
    currentUser: null,
    passRes: {} as commonApiRes,
    isLoading: false,
    nameRes: {} as changeNameRes,
    deleteAccountRes: {} as commonApiRes
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
        setDeleteAccountRes: (state, {payload}: PayloadAction<commonApiRes>) => {
            state.deleteAccountRes = payload
        },
        setNameRes: (state, {payload}: PayloadAction<changeNameRes>) => {
            state.nameRes = payload
            if (payload.success && state.currentUser) {
                state.currentUser.name = payload.newName
            }
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
    }
})

export const {setUser, setPassRes, setIsLoading, setNameRes, setDeleteAccountRes} = accountSlice.actions

export default accountSlice.reducer