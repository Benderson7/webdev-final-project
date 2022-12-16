import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPokemonThunk, searchMonThunk} from "../services/pokemon-thunks";
import "./index.css";
import capitalize from "../util";

function Search() {
    const {pokemon, loading} = useSelector(state => state.pokemon);
    const dispatch = useDispatch();
    useEffect(() => {dispatch(getPokemonThunk())}, []);
    const navigate = useNavigate();
    const searchHandler = async () => {
        const query = document.getElementById("search-input").value;
        await dispatch(getPokemonThunk(query));
        navigate(`/search/${query}`);
    }
    return (
        <div className="justify-content-center">
            <div className="input-group mb-3">
                <input id="search-input" type="text" className="form-control" placeholder="Search Pokemon"/>
                <button className="btn btn-light" type="button" onClick={searchHandler}>
                    Search
                </button>
            </div>
            {
                loading ?
                    <span> Loading... </span> :
                    <div>
                        <div className="list-group list-group-horizontal justify-content-center">
                            {
                                pokemon.slice(0, pokemon.length / 2).map(mon => {
                                    return <div className="list-group-item" key={mon.id}>
                                        <div>
                                            <img className="search-results-sprite" src={mon.sprite}
                                                 alt={mon.name}></img>
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
                        <div className="list-group list-group-horizontal justify-content-center">
                            {
                                pokemon.slice(-1 * pokemon.length / 2).map(mon => {
                                    if (mon) {
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
                                    }
                                })
                            }
                        </div>
                    </div>
            }
        </div>
    );
}

export default Search;