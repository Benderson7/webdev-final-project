import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProfileThunk} from "../services/users-thunks";

const ProfileInfo = ({uid}) => {
    const {profile, currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getProfileThunk(uid))}, [uid])

    return (
        <div className={"container pt-3"}>
            <h3 class="text-black border-bottom border-2">{profile.username}</h3>
            {currentUser._id === profile._id &&
                <>
                    <div>First Name: {profile.firstName ? profile.firstName : "Not set"}</div>
                    <div>Last Name: {profile.lastName ? profile.lastName : "Not set"}</div>
                    <div>Email: {profile.email ? profile.email : "Not set"}</div>
                </>
            }
        </div>
    )
}

export default ProfileInfo