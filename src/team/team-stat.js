import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getTeamStatsThunk} from "../services/teams-thunks";

const TeamStat = ({tid}) => {
    const {stats} = useSelector((state) => state.team)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getTeamStatsThunk(tid))}, [tid])
    return (
        <>
            {stats.likes !== undefined &&
                <div>
                    likes = {stats.likes}
                    <br/>
                    dislikes = {stats.dislikes}
                </div>
            }
        </>
    )
}

export default TeamStat

