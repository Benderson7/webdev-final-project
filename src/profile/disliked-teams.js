import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUserDislikedTeamsThunk} from "../services/teams-thunks";
import {Link} from "react-router-dom";

const DislikedTeams = ({uid}) => {
    const {dislikedTeams} = useSelector((state) => state.users)
    const {liked, disliked} = useSelector((state) => state.team)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getUserDislikedTeamsThunk(uid))}, [uid, liked, disliked])

    return (
        <div className={"container wd-bg-white mt-3"}>
            <h2>Disliked Teams</h2>
            <ul className={"list-group"}>
                {dislikedTeams.map((team) =>
                    <li className={"list-group-item"}>
                        <Link className={"text-primary"} to={`/profile/${team.team.user._id}`}>
                            {team.team.user.username}
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default DislikedTeams