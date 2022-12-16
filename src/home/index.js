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
            <div className={"wd-bg-white container pb-3"}>
                <h3>Recent Teams</h3>
                {recentTeams.map(team => {
                    return (
                        <div className={"container"}>
                            <div className={"row"}>
                                <h5>
                                    <Link to={`/profile/${team.user._id}`} className={"text-primary"}>
                                        {team.user.username}
                                    </Link>'s Team
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
                                                    <Link to={`/details/${pokemon.id}`}>
                                                        <u>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</u>
                                                    </Link>
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
                {currentUser._id !== undefined &&
                    <>
                        <h3>Your Recent Comments</h3>
                        <ul className={"list-group mb-2"}>
                            {recentCommentsByUser.map((comment) =>
                                <li className={"list-group-item"}>
                                    <div className={"row"}>
                                        <div className={"col"}>
                                            On&nbsp;
                                            <Link to={`profile/${comment.team.user._id}`}
                                                  className={"text-primary"}>
                                                {comment.team.user.username}
                                            </Link>
                                            's Team
                                            <div>
                                                {comment.comment}
                                            </div>
                                        </div>
                                        <div className={"col-3"}>
                                            <button className={"btn btn-danger float-end"}
                                                    onClick={() => dispatch(() => handleDeleteBtn(comment._id))}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </>
                }
                <h3>Other User's Recent Comments</h3>
                <ul className={"list-group"}>
                    {recentComments.map((comment) =>
                        <li className={"list-group-item"}>
                            <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"row text-primary"}>
                                        <Link to={`/profile/${comment.user._id}`}>
                                            {comment.user.username}
                                        </Link>
                                    </div>
                                    <div className={"row"}>
                                        <div>
                                            {comment.comment}
                                        </div>
                                    </div>
                                </div>
                                <div className={"col"}>
                                    On&nbsp;
                                    <Link to={`profile/${comment.team.user._id}`} className={"text-primary"}>
                                        {comment.team.user.username}
                                    </Link>
                                    's Team
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