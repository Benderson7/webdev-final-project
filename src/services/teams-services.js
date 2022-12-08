import axios from "axios";

const BASE_API_URL = 'http://localhost:4000'
const api = axios.create({
    withCredentials: true
})

export const getTeamByUserID = async (uid) => {
    const response = await api.get(`${BASE_API_URL}/teams/${uid}`)
    const team = response.data
    return team
}


export const getTeamCommentsByTeamID = async (tid) => {
    const response = await api.get(`${BASE_API_URL}/teams/${tid}/comments`)
    return response.data
}
export const getTeamStats = async (tid) => {
    const response = await api.get(`${BASE_API_URL}/teams/${tid}/stats`)
    return response.data
}

export const postTeamComment = async (newComment) => {
    const response = await api.post(`${BASE_API_URL}/comment`, newComment)
    console.log(response.data)
    return response.data
}

export const likeTeam = async (uid, tid) => {
    console.log(uid)
    console.log(tid)
    const response = await api.post(`${BASE_API_URL}/users/${uid}/likes/${tid}`)
    return response.data
}