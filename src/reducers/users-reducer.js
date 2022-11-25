import {createSlice} from "@reduxjs/toolkit";
import {loginThunk, logoutThunk, profileThunk, registerThunk} from "../services/users-thunks";

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        currentUser: null
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
        }
    }
})

export default usersReducer.reducer