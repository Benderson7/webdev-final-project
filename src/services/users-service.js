import axios, {all} from "axios";

const BASE_API_URL = 'http://localhost:4000'

const api = axios.create({
    withCredentials: true
});

export const register = async (user) => {
    const response = await api.post(`${BASE_API_URL}/register`, user)
    const newUser = response.data
    return newUser
}

export const login = async (user) => {
    const response = await api.post(`${BASE_API_URL}/login`, user)
    return response.data
}

export const logout = async () => {
    const response = await api.post(`${BASE_API_URL}/logout`)
    return response.data
}

export const getCurrentUser = async () => {
    const response = await api.post(`${BASE_API_URL}/users/current`)
    return response.data
}


export const getProfile = async (uid) => {
    const response = await api.get(`${BASE_API_URL}/profile/${uid}`)
    return response.data
}

export const updateUser = async (user) => {
     await api.put(`${BASE_API_URL}/users/${user._id}`, user);
     return user;
}

export const getCommentsByUser = async (uid) => {
    const response = await api.get(`${BASE_API_URL}/users/${uid}/comments`)
    return response.data
}

export const getAllUsers = async () => {
    const allUsers = await api.get(`${BASE_API_URL}/users`)
    return allUsers.data
}

export const deleteUser = async (uid) => {
    const status = await api.delete(`${BASE_API_URL}/users/${uid}`)
    return uid
}