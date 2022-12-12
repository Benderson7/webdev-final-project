import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPokemonThunk} from "../services/pokemon-thunks";
import "./index.css";
import capitalize from "../util";

function Search() {
    const {pokemon, loading} = useSelector(state => state.pokemon);
    const dispatch = useDispatch();
    useEffect(() => {dispatch(getPokemonThunk())}, [])
    return (
        <div className="list-group list-group-horizontal justify-content-center">
                {
                    loading ?
                        <li key={0} className="list-group-item">
                            Loading...
                        </li> :
                        pokemon.map(mon => {
                            return <div className="list-group-item" key={mon.id}>
                                <div>
                                    <img className="search-results-sprite" src={mon.sprite} alt={mon.name}></img>
                                </div>
                                <div>
                                    <Link className="fw-bold" to={`/details/${mon.id}`}>
                                            {capitalize(mon.name)}
                                    </Link>
                                </div>
                            </div>
                        })
                }
        </div>
    );
}

export default Search;