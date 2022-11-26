import {createAsyncThunk} from "@reduxjs/toolkit";
import {login, logout, register, profile, updateUser} from "./users-service";

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

export const profileThunk = createAsyncThunk(
    'profile',
    async () => await profile()
)

export const updateThunk = createAsyncThunk(
    'updateUser',
    async (user) => {
        await updateUser(user)
        return user;
    }
)
