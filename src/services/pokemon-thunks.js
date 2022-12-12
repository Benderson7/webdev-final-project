import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./pokemon-service"

export const getPokemonThunk = createAsyncThunk(
    'pokemon/getPokemon', async () =>
        await service.getPokemon()
);

export const searchMonThunk = createAsyncThunk(
    'pokemon/searchMon', async (id) =>
        await service.searchMon(id)
);