import {createSlice, current} from "@reduxjs/toolkit";
import {
    getProfileThunk,
    loginThunk,
    logoutThunk,
    getCurrentUserThunk,
    registerThunk,
    updateUserThunk,
    getCommentsByUserThunk, getAllUsersThunk, deleteUserThunk
} from "../services/users-thunks";
import {getUserDislikedTeamsThunk, getUserLikedTeamsThunk} from "../services/teams-thunks";

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        currentUser: {},
        profile: {},
        comments: [],
        likedTeams: [],
        dislikedTeams: [],
        allUsers: []
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
        [updateUserThunk.fulfilled]: (state, action) => {
            action.payload.password = ''
            state.currentUser = action.payload;
        },
        [getCommentsByUserThunk.fulfilled]: (state, action) => {
            state.comments = action.payload
        },
        [getUserLikedTeamsThunk.fulfilled]: (state, action) => {
            state.likedTeams = action.payload
        },
        [getUserDislikedTeamsThunk.fulfilled]: (state, action) => {
            state.dislikedTeams = action.payload
        },
        [getAllUsersThunk.fulfilled]: (state, action) => {
            state.allUsers = action.payload
        },
        [deleteUserThunk.fulfilled]: (state, action) => {
            state.allUsers = state.allUsers.filter(user => user._id !== action.payload)
        }
    }
})

export default usersReducer.reducer