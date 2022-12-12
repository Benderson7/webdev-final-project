import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const POKEMON_API = `${API_BASE}/pokemon`;

export const getPokemon = async () => {
    const response = await axios.get(POKEMON_API);
    return response.data;
};

export const searchMon = async (id) => {
    const response = await axios.get(`${POKEMON_API}/${id}`);
    return response.data;
};