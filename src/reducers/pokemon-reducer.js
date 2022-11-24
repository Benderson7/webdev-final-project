import { createSlice } from "@reduxjs/toolkit";
import {getPokemonThunk} from "../services/pokemon-thunks";

const initialState = {
    pokemon: [],
    loading: true
}

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    extraReducers: {
        [getPokemonThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.pokemon = payload
            }
    }
});

export default pokemonSlice.reducer;