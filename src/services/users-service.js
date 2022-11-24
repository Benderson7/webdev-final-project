import axios from "axios";

const BASE_API_URL = 'http://localhost:4000'

export const register = async (user) => {
    const response = await axios.post(`${BASE_API_URL}/register`, user)
    const newUser = response.data
    return newUser
}

export const login = async (user) => {
    const response = await axios.post(`${BASE_API_URL}/login`, user)
    return response.data
}

export const logout = async () => {
    const response = await axios.post(`${BASE_API_URL}/logout`)
    return response.data
}
