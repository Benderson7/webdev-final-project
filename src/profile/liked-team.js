import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUserLikedTeamsThunk} from "../services/teams-thunks";
import {Link} from "react-router-dom";

const LikedTeams = ({uid}) => {
    const {likedTeams} = useSelector((state) => state.users)
    const {liked, disliked} = useSelector((state) => state.team)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getUserLikedTeamsThunk(uid))}, [uid, liked, disliked])

    return (
        <div className={"container wd-bg-white mb-3"}>
            <h2>Liked Teams</h2>
            <ul className={"list-group"}>
                {likedTeams.map((team) =>
                    <li className={"list-group-item"}>
                        <Link className={"text-primary"} to={`/profile/${team.team.user._id}`}>
                            {team.team.user.username}
                        </Link>
                    </li>)}
            </ul>
        </div>
    )
}

export default LikedTeams