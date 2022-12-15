import {createSlice, current} from "@reduxjs/toolkit";
import {
    getProfileThunk,
    loginThunk,
    logoutThunk,
    getCurrentUserThunk,
    registerThunk,
    updateUserThunk,
    getCommentsByUserThunk,
    getAllUsersThunk,
    deleteUserThunk,
    getRecentCommentsByUserThunk,
    getRecentCommentsThunk,
    getRecentTeamsThunk
} from "../services/users-thunks";
import {deleteCommentOnTeamThunk, getUserDislikedTeamsThunk, getUserLikedTeamsThunk} from "../services/teams-thunks";

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        currentUser: {},
        profile: {},
        comments: [],
        likedTeams: [],
        dislikedTeams: [],
        allUsers: [],
        recentCommentsByUser: [],
        recentComments: [],
        recentTeams: []
    },
    extraReducers: {
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [registerThunk.rejected]: (state, action) => {
            alert("Registration Failed")
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [loginThunk.rejected]: (state, action) => {
            alert("Login failed")
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
        [getRecentCommentsThunk.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.recentComments = action.payload
        },
        [getRecentCommentsByUserThunk.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.recentCommentsByUser = action.payload
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
        },
        [deleteCommentOnTeamThunk.fulfilled]: (state, action) => {
            state.recentCommentsByUser = state.comments.filter(comment => comment._id !== action.payload)
        },
        [getRecentTeamsThunk.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.recentTeams = action.payload
        }
    }
})

export default usersReducer.reducer