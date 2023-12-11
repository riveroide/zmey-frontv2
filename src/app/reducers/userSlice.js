import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "userInfo",
    initialState: {
        currentUser: null,
        isLoading: false,
        error: false,
    },
    reducers: {
        loginStart: (state) =>{
            state.isLoading = true
        },
        loginSuccess: (state,action) =>{
            state.isLoading = false
            state.currentUser = action.payload
        },
        loginFailed: (state) =>{
            state.isLoading = false
            state.error = true
        }
    }
})

export const {loginStart, loginSuccess, loginFailed} = userSlice.actions
export default userSlice.reducer