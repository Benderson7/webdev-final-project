import {createSlice} from "@reduxjs/toolkit";
import {
    deleteCommentOnTeamThunk,
    dislikeTeamThunk,
    getTeamByUserIDThunk,
    getTeamCommentsByTeamIDThunk,
    getTeamStatsThunk, getUserLikedTeamStatusThunk, likeTeamThunk,
    postTeamCommentThunk, removeStatusThunk
} from "../services/teams-thunks";

const teamReducer = createSlice({
    name: 'teams',
    initialState: {
        team: null,
        stats: null,
        comments: [],
        liked: false,
        disliked: false
    },
    extraReducers: {
        [getTeamByUserIDThunk.fulfilled]: (state, action) => {
            state.team = action.payload
        },
        [getTeamCommentsByTeamIDThunk.fulfilled]: (state, action) => {
            state.comments = action.payload
        },
        [getTeamStatsThunk.fulfilled]: (state, action) => {
            state.stats = action.payload
        },
        [postTeamCommentThunk.fulfilled]: (state, action) => {
            state.comments.push(action.payload)
        },
        [likeTeamThunk.fulfilled]: (state, action) => {
            if (action.payload !== null) {
                state.stats.likes += 1
                state.liked = true
                state.disliked = false
                if (action.payload.request === 'update') {
                    state.stats.dislikes -= 1
                }
            }
        },
        [dislikeTeamThunk.fulfilled]: (state, action) => {
            if (action.payload !== null) {
                state.stats.dislikes += 1
                state.liked = false
                state.disliked = true
                if (action.payload.request === 'update') {
                    state.stats.likes -= 1
                }
            }
        },
        [getUserLikedTeamStatusThunk.fulfilled]: (state, action) => {
            if (action.payload === null) {
                state.liked = false
                state.disliked = false
            }
            else {
                const status = action.payload.status
                if (status === 'DISLIKE') {
                    state.liked = false
                    state.disliked = true
                }
                else {
                    state.liked = true
                    state.disliked = false
                }
            }
        },
        [removeStatusThunk.fulfilled]: (state, action) => {
            state.liked = false;
            state.disliked = false;
            if (action.payload.type === 'like') {
                state.stats.likes -= 1
            }
            else {
                state.stats.dislikes -= 1
            }
        },
        [deleteCommentOnTeamThunk.fulfilled]: (state, action) => {
            state.comments = state.comments.filter(comment => comment._id !== action.payload)
        }
    }
})

export default teamReducer.reducer