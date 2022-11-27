import {createSlice} from "@reduxjs/toolkit";
import {getTeamByUserIDThunk} from "../services/teams-thunks";

const teamsReducer = createSlice({
    name: 'teams',
    initialState: {
        team: {}
    },
    extraReducers: {
        [getTeamByUserIDThunk.fulfilled]: (state, action) => {
            state.team = action.payload
        }
    }
})

export default teamsReducer.reducer