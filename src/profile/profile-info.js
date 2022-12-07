import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProfileThunk} from "../services/users-thunks";

const ProfileInfo = ({uid}) => {
    const {profile} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getProfileThunk(uid))}, [uid])

    console.log(uid)
    return (
        <>
            <h1>You are currently viewing: {profile.username}</h1>
            <ul>
                <li>{profile.firstName}</li>
                <li>{profile.lastName}</li>
                <li>{profile.email}</li>
                <li>{profile.password}</li>
                <li>{profile.username}</li>
            </ul>
        </>
    )
}

export default ProfileInfo