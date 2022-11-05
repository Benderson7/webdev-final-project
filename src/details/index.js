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

import pokemon from "../MockData/MockPokemonDetailsData.json";
import {Link, useParams} from "react-router-dom";

function Details() {
    const { id } = useParams();
    return (
        <div className="list-group">
                        <div className="list-group-item">
                            <img src={pokemon.sprites.front_default} />
                        </div>
                        <div className="list-group-item">
                            {pokemon.id}
                        </div>
                        <div className="list-group-item">
                            Type: {pokemon.types[0].type.name}
                        </div>
                        <div className="list-group-item">
                            Abilities: {pokemon.abilities[0].ability.name}
                            <br/>
                            Hidden Ability: {pokemon.abilities[1].ability.name}
                        </div>
                        <div className="list-group-item">
                            Pokemon Weight: {pokemon.weight}
                        </div>
                        <div className="list-group-item">
                            Pokemon Height: {pokemon.height}
                        </div>

                </div>
    );
}

export default Details;