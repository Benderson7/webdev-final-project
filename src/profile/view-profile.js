import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Navigate, useParams} from "react-router-dom";
import {getTeamByUserIDThunk, likeTeamThunk, postTeamCommentThunk} from "../services/teams-thunks";
import Comments from "../team/comments";
import TeamStat from "../team/team-stat";
import ProfileInfo from "./profile-info";
import {getCurrentUserThunk} from "../services/users-thunks";

const ViewProfile = () => {

    const {currentUser} = useSelector((state) => state.users)
    const {uid} = useParams();
    const {team} = useSelector((state) => state.team)
    const [post, setPost] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {dispatch(getTeamByUserIDThunk(uid))}, [uid])
    useEffect(() => {dispatch(getCurrentUserThunk)}, [])

    const handlePostComment = (uid, tid, comment) => {
        dispatch(postTeamCommentThunk({user: uid, team: tid, comment: comment}))
        setPost('')
    }

    const handleLikeBtn = (uid, tid) => {
        dispatch(likeTeamThunk({uid: uid, tid: tid}))
    }


    if (currentUser._id !== undefined && currentUser._id === uid) {
        return (<Navigate to={'/profile'}/>)
    }


    return(
        <>
            <ProfileInfo uid={uid}/>
            <h2>This is your team(ID's)</h2>
            {team.pokemons !== undefined && team.pokemons.map((pokemon) => (<li>{pokemon}</li>))}
            <h3>Comments</h3>
            <textarea
                onChange={(e) => setPost(e.target.value)}
                value={post}
                placeholder={"Post your comment"}
            />
            <br/>
            <button onClick={() => handlePostComment(uid, team._id, post)}>
                Post Comment
            </button>
            {team._id !== undefined && <Comments tid={team._id}/>}
            <h4>stats</h4>
            {team._id !== undefined && <TeamStat tid={team._id}/>}
            <button onClick={() => handleLikeBtn(uid, team._id)}>Like</button>
            <button>Dislike</button>
        </>
    )
}

export default ViewProfile;