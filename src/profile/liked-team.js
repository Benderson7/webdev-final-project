import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUserLikedTeamsThunk} from "../services/teams-thunks";
import {Link} from "react-router-dom";

const LikedTeams = ({uid}) => {
    const {likedTeams} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getUserLikedTeamsThunk(uid))}, [uid])

    return (
        <>
            <h2>Liked Teams</h2>
            {likedTeams.map((team) => <li>Liked <Link to={team.team.user._id}>{team.team.user.username}'s</Link> team</li>)}
        </>
    )
}

export default LikedTeams