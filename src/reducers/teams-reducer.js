import {createSlice} from "@reduxjs/toolkit";
import {
    getTeamByUserIDThunk,
    getTeamCommentsByTeamIDThunk,
    getTeamStatsThunk, likeTeamThunk,
    postTeamCommentThunk
} from "../services/teams-thunks";

const teamsReducer = createSlice({
    name: 'teams',
    initialState: {
        team: {},
        // Not sure about these fields
        stats: {},
        comments: [],
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
            state.stats.likes += 1
        }
    }
})

export default teamsReducer.reducer