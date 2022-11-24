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

function Details() {
    const {name} = useParams();
    const {mon, loading} = useSelector(state => state.mon);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(searchMonThunk(name))
    }, [])
    console.log(mon);
    return (
        loading ? <h1>Loading...</h1> :
            <div className="list-group">
                <div className="list-group-item">
                    <img src={mon.sprite}/>
                </div>
                <div className="list-group-item">
                    {mon.id}
                </div>
                <div className="list-group-item">
                    Types: {mon.types.map((t) => <span>{t} </span>)}
                </div>
                <div className="list-group-item">
                    Abilities: {mon.abilities[0]}
                    <br/>
                    Hidden Ability: {mon.abilities[1]}
                </div>
                {/*<div className="list-group-item">*/}
                {/*    mon Weight: {mon.weight}*/}
                {/*</div>*/}
                {/*<div className="list-group-item">*/}
                {/*    mon Height: {mon.height}*/}
                {/*</div>*/}
            </div>
    );
}

export default Details;