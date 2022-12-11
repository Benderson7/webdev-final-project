import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    login,
    logout,
    register,
    getCurrentUser,
    updateUser,
    getProfile,
    getCommentsByUser,
    getAllUsers, deleteUser
} from "./users-service";

export const logoutThunk = createAsyncThunk(
    'logout',
    async () => await logout()
)

export const loginThunk = createAsyncThunk(
    'login',
    async (user) => await login(user)
)

export const registerThunk = createAsyncThunk(
    'register',
    async (user) => await register(user)
)

export const getCurrentUserThunk = createAsyncThunk(
    'profile',
    async () => await getCurrentUser()
)

export const getProfileThunk = createAsyncThunk(
    'getProfile',
    async (uid) => await getProfile(uid)
)

export const updateThunk = createAsyncThunk(
    'updateUser',
    async (user) => {
        await updateUser(user)
        return user;
    }
)

export const getCommentsByUserThunk = createAsyncThunk(
    'getCommentsByUser',
    async (uid) => await getCommentsByUser(uid)
)

export const getAllUsersThunk = createAsyncThunk(
    'getAllUsers',
    async () => await getAllUsers()
)

export const deleteUserThunk = createAsyncThunk(
    'deleteUser',
    async (uid) => await deleteUser(uid)
)