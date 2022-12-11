import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    getTeamByUserID,
    getTeamCommentsByTeamID,
    getTeamStats,
    postTeamComment,
    likeTeam,
    getUserLikedTeamStatus, removeStatus, dislikeTeam, getUserLikedTeams, getUserDislikedTeams
} from "./teams-services";

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
    async (tid) => await likeTeam(tid)
)

export const dislikeTeamThunk = createAsyncThunk(
    'dislikeTeam',
    async (tid) => await dislikeTeam(tid)
)

export const removeStatusThunk = createAsyncThunk(
    'removeStatus',
    async (remove) => await removeStatus(remove.uid, remove.tid, remove.type)
)


export const getUserLikedTeamStatusThunk = createAsyncThunk(
    'getUserLikedTeamStatus',
    async (status) => await getUserLikedTeamStatus(status.tid)
)

export const getUserLikedTeamsThunk = createAsyncThunk(
    'getUserLikedTeams',
    async (uid) => await getUserLikedTeams(uid)
)


export const getUserDislikedTeamsThunk = createAsyncThunk(
    'getUserDislikedTeams',
    async (uid) => await getUserDislikedTeams(uid)
)

