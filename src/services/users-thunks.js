import {createAsyncThunk} from "@reduxjs/toolkit";
import {login, logout, register, getCurrentUser, updateUser, getProfile} from "./users-service";

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
