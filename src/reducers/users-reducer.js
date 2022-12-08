import {createSlice} from "@reduxjs/toolkit";
import {
    getProfileThunk,
    loginThunk,
    logoutThunk,
    getCurrentUserThunk,
    registerThunk,
    updateThunk,
    getCommentsByUserThunk
} from "../services/users-thunks";

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        currentUser: {},
        profile: {},
        comments: []
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
        [getCurrentUserThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [getProfileThunk.fulfilled]: (state, action) => {
            state.profile = action.payload
        },
        [updateThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = payload;
        },
        [getCommentsByUserThunk.fulfilled]: (state, action) => {
            state.comments = action.payload
        }
    }
})

export default usersReducer.reducer