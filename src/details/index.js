/**
 Details page requirements
 The details page allow users to view a details view of the search result.
 They can see more information when they click on the search result.
 The details page must fulfill the following requirements.
 - Must retrieve details from the remote API based on some unique identifier provided as a parameter from the search/results page
 - Must display additional related data from the local database.
 For instance, if you are displaying the details of a movie, some other folks might have reviewed the movie.
 All reviews related to the movie must be shown in all or partial form
 - Must provide links to related data/users.
 For instance, if you are displaying the details of a movie, and below you are displaying a list of reviews for that movie,
 provide links to the profile pages of folks who wrote the reviews for the movie
 - Must be mapped to /details/{unique identifier} or /details?identifier={unique identifier}
 where unique identifier uniquely identifies the item being displayed
 **/

import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {searchMonThunk, updateMonThunk} from "../services/pokemon-thunks";
import capitalize from "../util";
import "./index.css";

function Details() {
    const {id} = useParams();
    const {mon, loading} = useSelector(state => state.mon);
    const {currentUser} = useSelector(state => state.users)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(searchMonThunk(id))
    }, [])
    const addToTeamHandler = () => {
        if (!currentUser) {
            alert("Please log in if you would like to create/edit a Pokemon team!");
            return;
        }
        const updatedMon = {
            ...mon,
            teams: mon.teams ? [...mon.teams.map(team => team.id), currentUser.team] : [currentUser.team]
        }
        dispatch(updateMonThunk(updatedMon));
    }
    const removeFromTeamHandler = () => {
        if (!currentUser) {
            alert("Please log in if you would like to create/edit a Pokemon team!");
            return;
        }
        const updatedMon = {
            ...mon,
            teams: mon.teams.filter((team) => team._id !== currentUser.team)
        }
        dispatch(updateMonThunk(updatedMon));
    }
    return (
        loading ? <h1>Loading...</h1> :
            <div>
                <div className="list-group list-group-horizontal row mb-2">
                    <div className="list-group-item col-12 col-lg-3 d-flex justify-content-center">
                        <img className="details-img" src={mon.sprite} alt={mon.name}/>
                    </div>
                    <div className="list-group-item col-12 col-lg-9">
                        <div className="list-group">
                            <div className="list-group list-group-flush">
                                <div className="list-group-item fw-bold">
                                    {capitalize(mon.name)}
                                </div>
                                <div className="list-group-item">
                                    <span className="fw-bold">Type(s): </span>
                                    {mon.types.length === 1 ? capitalize(mon.types[0]) : `${capitalize(mon.types[0])}, ${capitalize(mon.types[1])}`}
                                </div>
                                <div className="list-group-item">
                                    <span className="fw-bold">Ability: </span>
                                    {mon.abilities[0]}
                                    <br/>
                                    <span className="fw-bold">Hidden Ability: </span>
                                    {mon.abilities[1]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-2">
                    {
                        mon.teams.map(team => team._id).includes(currentUser.team) ?
                            <button type="button"
                                    className="btn btn-lg btn-warning"
                                    onClick={removeFromTeamHandler}>
                                Remove from Team
                            </button> :
                            <button type="button"
                                    className="btn btn-lg btn-success"
                                    onClick={addToTeamHandler}>
                                Add to Team
                            </button>

                    }
                </div>
                <h2>Users who have this Pokemon on their Team</h2>
                <div className="list-group">
                    {
                        mon.teams.map(team => {
                            return <div className="list-group-item" key={team._id}>
                                <Link to={`/profile/${team.user._id}`}>{team.user.username}</Link>
                            </div>
                        })
                    }
                </div>
            </div>
    );
}

export default Details;