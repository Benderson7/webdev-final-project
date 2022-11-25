import { createSlice } from "@reduxjs/toolkit";
import { searchMonThunk } from "../services/pokemon-thunks";

const initialState = {
    mon: undefined,
    loading: true
}

const monSlice = createSlice({
    name: 'mon',
    initialState,
    extraReducers: {
        [searchMonThunk.fulfilled]:
            (state, { payload }) => {
                state.mon = payload
                state.loading = false
            }
    }
});

export default monSlice.reducer;