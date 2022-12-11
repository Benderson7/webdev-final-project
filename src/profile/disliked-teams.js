import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUserDislikedTeamsThunk} from "../services/teams-thunks";
import {Link} from "react-router-dom";

const DislikedTeams = ({uid}) => {
    const {dislikedTeams} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getUserDislikedTeamsThunk(uid))}, [uid])

    return (
        <>
            <h2>Disliked Teams</h2>
            {dislikedTeams.map((team) => <li>Disliked <Link to={team.team.user._id}>{team.team.user.username}'s</Link> team</li>)}
        </>
    )
}

export default DislikedTeams