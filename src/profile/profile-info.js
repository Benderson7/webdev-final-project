import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProfileThunk} from "../services/users-thunks";

const ProfileInfo = ({uid}) => {
    const {profile, currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getProfileThunk(uid))}, [uid])

    return (
        <>
            <h3 class="text-white">{profile.username}</h3>
            {currentUser._id === profile._id &&
                <>
                    <div>First Name: {profile.firstName ? profile.firstName : "Not set"}</div>
                    <div>Last Name: {profile.lastName ? profile.lastName : "Not set"}</div>
                    <div>Email: {profile.email ? profile.email : "Not set"}</div>
                </>
            }
        </>
    )
}

export default ProfileInfo