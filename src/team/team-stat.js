import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
    dislikeTeamThunk,
    getTeamStatsThunk,
    getUserLikedTeamStatusThunk,
    likeTeamThunk,
    removeStatusThunk
} from "../services/teams-thunks";
import {useNavigate} from "react-router-dom";

const TeamStat = ({tid}) => {
    const {currentUser} = useSelector((state) => state.users)
    const {stats, liked, disliked} = useSelector((state) => state.team)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getTeamStatsThunk(tid))}, [tid])
    useEffect(() => {dispatch(getUserLikedTeamStatusThunk({tid: tid}))}, [tid])

    const navigate = useNavigate()

    const handleNotLoggedIn = () => {
        if (currentUser._id === undefined) {
            navigate('/login')
        }
    }

    const handleLikeBtn = () => {
        handleNotLoggedIn()
        if (liked) {
            dispatch(removeStatusThunk({tid: tid, type: 'like'}))
        }
        else {
            dispatch(likeTeamThunk(tid))
        }
    }

    const handleDislikeBtn = () => {
        handleNotLoggedIn()
        if (disliked) {
            dispatch(removeStatusThunk({tid: tid, type: 'dislike'}))
        }
        else {
            dispatch(dislikeTeamThunk(tid))
        }
    }


    return (
        <>
            {stats.likes !== undefined &&
                <div>
                    {stats.likes}
                    <i  onClick={handleLikeBtn}
                        className={`bi bi-hand-thumbs-up ${liked ? 'text-primary' : 'icon-white'}`}>
                    </i>
                    <br/>
                    {stats.dislikes}
                    <i  onClick={handleDislikeBtn}
                        className={`bi bi-hand-thumbs-down ${disliked ? 'text-primary' : 'icon-white'}`}>
                    </i>
                </div>
            }
        </>
    )
}

export default TeamStat

