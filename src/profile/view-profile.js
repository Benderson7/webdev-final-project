import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getProfileThunk, profileThunk} from "../services/users-thunks";

const ViewProfile = () => {
    const {uid} = useParams();
    const {profile} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    // eslint-disable-next-line
    useEffect(() => {dispatch(getProfileThunk(uid))}, [])
    return(
        <div>

            <h1>You are currently viewing: {profile.username}</h1>
            <ul>
                <li>{profile.firstName}</li>
                <li>{profile.lastName}</li>
                <li>{profile.email}</li>
                <li>{profile.password}</li>
            </ul>
        </div>
    )
}

export default ViewProfile;