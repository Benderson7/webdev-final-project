import {useDispatch, useSelector} from "react-redux";
import AllUsers from "./all-users";
import {useEffect, useState} from "react";
import {getRecentCommentsByUserThunk, getRecentCommentsThunk, getRecentTeamsThunk} from "../services/users-thunks";
import {Link} from "react-router-dom";
import {deleteCommentOnTeamThunk} from "../services/teams-thunks";

function Home() {

    const {currentUser, recentComments, recentCommentsByUser, recentTeams} = useSelector((state) => state.users)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRecentCommentsThunk())
        dispatch(getRecentCommentsByUserThunk())
        dispatch(getRecentTeamsThunk())
    }, [])

    const handleDeleteBtn = (cid) => {
        dispatch(deleteCommentOnTeamThunk(cid))
    }


    if (currentUser.role === 'ADMIN') {
        return (
            <>
                <h2>USERS</h2>
                <AllUsers/>
            </>
        );
    }
    else {
        // Popular Teams
        return (
            <div className={"wd-bg-white container"}>
                <h3>Recent Teams</h3>
                {recentTeams.map(team => {
                    return (
                        <div className={"container"}>
                            <div className={"row"}>
                                <h5>
                                    <Link to={`/profile/${team.user._id}`}>{team.user.username}</Link>'s Team
                                </h5>
                            </div>
                            <div className={"row"}>
                                {team.pokemons.map(
                                    (pokemon) => {
                                        return (
                                            <div className={"col-4 mb-3"}>
                                                <div className={"text-center"}>
                                                    <img width={100} src={pokemon.sprite}/>
                                                    <br/>
                                                    <Link to={`/details/${pokemon.id}`}>{pokemon.name}</Link>
                                                    <br/>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                    </div>
                    )
                })}
                <h3>Your Recent Comments</h3>
                <ul className={"list-group"}>
                    {recentCommentsByUser.map((comment) =>
                        <li className={"list-group-item"}>
                            <div className={"row"}>
                                <div className={"col"}>
                                    {comment.comment}
                                </div>
                                <div className={"col"}>
                                    <Link to={`profile/${comment.team.user._id}`}>
                                        On {comment.team.user.username}'s Team
                                    </Link>
                                </div>
                                <div className={"col-2"}>
                                    <button className={"btn btn-danger"}
                                            onClick={() => dispatch(() => handleDeleteBtn(comment._id))}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
                <br/>
                <h3>Other User's Recent Comments</h3>
                <ul className={"list-group"}>
                    {recentComments.map((comment) =>
                        <li className={"list-group-item"}>
                            <div className={"row"}>
                                <div className={"col"}>
                                    {comment.comment}
                                </div>
                                <div className={"col"}>
                                    <Link to={`profile/${comment.team.user._id}`}>
                                        On {comment.team.user.username}'s Team
                                    </Link>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Home;