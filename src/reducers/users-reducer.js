import {createSlice} from "@reduxjs/toolkit";
import {
    getProfileThunk,
    loginThunk,
    logoutThunk,
    profileThunk,
    registerThunk,
    updateThunk
} from "../services/users-thunks";

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        currentUser: {},
        profile: {}
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
        [getProfileThunk.fulfilled]: (state, action) => {
            state.profile = action.payload
        },
        [updateThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = payload;
        }
    }
})

export default usersReducer.reducer