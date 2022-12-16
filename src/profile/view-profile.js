import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {getTeamByUserIDThunk, likeTeamThunk, postTeamCommentThunk} from "../services/teams-thunks";
import Comments from "../team/comments";
import TeamStat from "../team/team-stat";
import ProfileInfo from "./profile-info";
import UserComments from "./user-comments";
import LikedTeams from "./liked-team";
import DislikedTeams from "./disliked-teams";
import Team from "../team/team";

const ViewProfile = () => {
    const {uid} = useParams();
    const dispatch = useDispatch();
    const {currentUser} = useSelector((state) => state.users)
    const {team} = useSelector((state) => state.team)

    useEffect(() => {dispatch(getTeamByUserIDThunk(uid))}, [uid])

    if (currentUser._id !== undefined && currentUser._id === uid) {
        return (<Navigate to={'/profile'}/>)
    }

    return(
        <div className={"container wd-bg-white"}>
            <ProfileInfo uid={uid}/>
            {team && <Team uid={uid}/>}
            <UserComments uid={uid}/>
            <LikedTeams uid={uid}/>
            <DislikedTeams uid={uid}/>
           </div>
    )
}

export default ViewProfile;