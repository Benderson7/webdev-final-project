import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Navigate, useParams} from "react-router-dom";
import {getTeamByUserIDThunk} from "../services/teams-thunks";
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
        <>
            <ProfileInfo uid={uid}/>
            {team && <Team uid={uid}/>}
            <UserComments uid={uid}/>
            <LikedTeams uid={uid}/>
            <DislikedTeams uid={uid}/>
           </>
    )
}

export default ViewProfile;