import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
    dislikeTeamThunk,
    getTeamStatsThunk,
    getUserLikedTeamStatusThunk,
    likeTeamThunk,
    removeStatusThunk
} from "../services/teams-thunks";
import "./index.css"

const TeamStat = ({tid}) => {
    const {currentUser} = useSelector((state) => state.users)
    const {stats, liked, disliked} = useSelector((state) => state.team)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getTeamStatsThunk(tid))}, [tid])
    useEffect(() => {dispatch(getUserLikedTeamStatusThunk({tid: tid}))}, [tid])

    const handleNotLoggedIn = () => {
        if (currentUser._id === undefined) {
            alert("Login first to like/dislike a team.")
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
            {stats &&
                <div className={"mb-3"}>
                    {stats.likes}
                    <i  onClick={handleLikeBtn}
                        className={`bi bi-hand-thumbs-up bi-bootstrap-fill ${liked ? 'wd-blue' : 'icon-white'}`}>
                    </i>
                    {stats.dislikes}
                    <i  onClick={handleDislikeBtn}
                        className={`bi bi-hand-thumbs-down ${disliked ? 'wd-red' : 'icon-white'}`}>
                    </i>
                </div>
            }
        </>
    )
}

export default TeamStat

