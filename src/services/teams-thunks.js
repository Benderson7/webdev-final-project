import {createAsyncThunk} from "@reduxjs/toolkit";
import {getTeamByUserID, getTeamCommentsByTeamID, getTeamStats, postTeamComment, likeTeam} from "./teams-services";

export const getTeamByUserIDThunk = createAsyncThunk(
    'teamByUserID',
    async (uid) => {
        return await getTeamByUserID(uid)
    }
)

export const getTeamCommentsByTeamIDThunk = createAsyncThunk(
    'getTeamComments',
    async (tid) => {
        return await getTeamCommentsByTeamID(tid)
    }
)

export const getTeamStatsThunk = createAsyncThunk(
    'getTeamStats',
    async (tid) => {
        return await getTeamStats(tid)
    }
)

export const postTeamCommentThunk = createAsyncThunk(
    'postTeamComment',
    async (newComment) => {
        return await postTeamComment(newComment)
    }
)

export const likeTeamThunk = createAsyncThunk(
    'likeTeam',
    async (userLikesTeam) => await likeTeam(userLikesTeam.uid, userLikesTeam.tid)
)
