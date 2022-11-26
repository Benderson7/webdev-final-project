import {createSlice} from "@reduxjs/toolkit";
import {loginThunk, logoutThunk, profileThunk, registerThunk, updateThunk} from "../services/users-thunks";

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        currentUser: {}
    },
    extraReducers: {
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null
        },
        [profileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [updateThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = payload;
        }
    }
})

export default usersReducer.reducer