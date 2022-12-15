import {getCurrentUserThunk, logoutThunk} from "../services/users-thunks";
import {useDispatch, useSelector} from "react-redux";
import Team from "../team/team";
import UserComments from "./user-comments";
import LikedTeams from "./liked-team";
import DislikedTeams from "./disliked-teams";
import "./index.css"
import AccountInfo from "./account-info";
import {useEffect} from "react";

const Profile = () => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
    }

    useEffect(() => {dispatch(getCurrentUserThunk())}, [])

    return(
        <>
            {
                currentUser._id !== undefined &&
                <>
                    <h2>{currentUser.username}</h2>
                    <button onClick={handleLogoutBtn}>Logout</button>
                    <br/>
                    <AccountInfo/>
                    <Team uid={currentUser._id}/>
                    <UserComments uid={currentUser._id}/>
                    <LikedTeams uid={currentUser._id}/>
                    <DislikedTeams uid={currentUser._id}/>
                </>
            }
        </>
    )
}

export default Profile


// Show liked/dislike teams
/*
 */