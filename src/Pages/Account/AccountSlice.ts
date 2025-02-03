import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {user} from "./accountTypes";

type initialStateType = {
    currentUser: user | null
}

const initialState: initialStateType = {
    currentUser: null
}
const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<user>) => {
            state.currentUser = action.payload
        },
    }
})

export const {setUser} = accountSlice.actions

export default accountSlice.reducer