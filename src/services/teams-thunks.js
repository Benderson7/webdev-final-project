import {createAsyncThunk} from "@reduxjs/toolkit";
import {getTeamByUserID} from "./teams-services";

export const getTeamByUserIDThunk = createAsyncThunk(
    'teamByUserID',
    async (uid) => {
        return await getTeamByUserID(uid)
    }
)

