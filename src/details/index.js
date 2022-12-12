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

import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {searchMonThunk} from "../services/pokemon-thunks";
import capitalize from "../util";
import "./index.css";

function Details() {
    const {id} = useParams();
    const {mon, loading} = useSelector(state => state.mon);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(searchMonThunk(id))
    }, [])
    return (
        loading ? <h1>Loading...</h1> :
            <div className="list-group list-group-horizontal row">
                <div className="list-group-item col-2">
                    <img className="details-img" src={mon.sprite} alt={mon.name}/>
                </div>
                <div className="list-group-item col-10">
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
    );
}

export default Details;