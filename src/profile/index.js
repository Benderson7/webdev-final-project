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
                <div className={"container wd-bg-white pt-3"}>
                    <div className={"row container"}>
                        <div className={"col-10 border-bottom border-2"}>
                            <h2 className="text-black">{currentUser.username}</h2>
                        </div>
                        <div className={"col-2 border-bottom border-2"}>
                            <button className="btn btn-danger float-end" onClick={handleLogoutBtn}>Logout</button>
                        </div>
                    </div>
                    <AccountInfo/>
                    <Team uid={currentUser._id}/>
                    <UserComments uid={currentUser._id}/>
                    <LikedTeams uid={currentUser._id}/>
                    <DislikedTeams uid={currentUser._id}/>
                    <br/>
                </div>
            }
        </>
    )
}

export default Profile


// Show liked/dislike teams
/*
 */