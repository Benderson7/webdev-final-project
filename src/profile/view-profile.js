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
    const navigate = useNavigate();
    const {currentUser} = useSelector((state) => state.users)
    const {team} = useSelector((state) => state.team)
    const [post, setPost] = useState("");

    useEffect(() => {dispatch(getTeamByUserIDThunk(uid))}, [uid])


    const handlePostComment = (tid, comment) => {
        if (currentUser._id === undefined) {
            navigate('Must login to post a comment.')
        }
        else {
            dispatch(postTeamCommentThunk({user: currentUser._id, team: tid, comment: comment}))
            setPost('')
        }
    }

    if (currentUser._id !== undefined && currentUser._id === uid) {
        return (<Navigate to={'/profile'}/>)
    }


    return(
        <>
            <ProfileInfo uid={uid}/>
            {team && <Team uid={uid}/>}
            <textarea
                onChange={(e) => setPost(e.target.value)}
                value={post}
                placeholder={"Post your comment"}
            />
            <br/>
            <button onClick={() => handlePostComment(team._id, post)}>
                Post Comment
            </button>
            <UserComments uid={uid}/>
            <LikedTeams uid={uid}/>
            <DislikedTeams uid={uid}/>
           </>
    )
}

export default ViewProfile;