import {logoutThunk, getCurrentUserThunk} from "../services/users-thunks";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import ProfileInfo from "./profile-info";
import {useEffect} from "react";
import Team from "../team/team";
import UserComments from "./user-comments";

const Profile = () => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
    }
    const handleEditBtn = () => {
        navigate('/edit-profile');
    }
    useEffect(() => {dispatch(getCurrentUserThunk())}, [])

    return(
        <>
            <h1>Profile</h1>
            {
                currentUser._id !== undefined &&
                <>
                    <h2>Welcome new user: {currentUser.username}</h2>
                    <button onClick={handleLogoutBtn}>Logout</button>
                    <button onClick={handleEditBtn}>Edit Profile</button>
                    <br/>
                    <ProfileInfo uid={currentUser._id}/>
                    <Team uid={currentUser._id}/>
                    <UserComments uid={currentUser._id}/>
                </>
            }

        </>
    )
}

export default Profile


// Show Team
// Show liked/dislike
// Show comments that you made