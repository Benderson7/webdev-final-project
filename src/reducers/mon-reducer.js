import { createSlice } from "@reduxjs/toolkit";
import {searchMonThunk, updateMonThunk} from "../services/pokemon-thunks";
import {getTeamsWithPokemonThunk} from "../services/teams-thunks";

const initialState = {
    mon: undefined,
    loading: true,
    allTeams: []
}

const monSlice = createSlice({
    name: 'mon',
    initialState,
    extraReducers: {
        [searchMonThunk.fulfilled]:
            (state, { payload }) => {
                state.mon = payload
                state.loading = false
            },
        [updateMonThunk.fulfilled]:
            (state, { payload }) => {
                state.mon = payload
                state.loading = false
            },
        [getTeamsWithPokemonThunk.fulfilled]: (state, action) => {
            state.allTeams = action.payload
        }
    }
});

export default monSlice.reducer;