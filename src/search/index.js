import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPokemonThunk} from "../services/pokemon-thunks";
import "./index.css";

function Search() {
    const {pokemon, loading} = useSelector(state => state.pokemon);
    const dispatch = useDispatch();
    useEffect(() => {dispatch(getPokemonThunk())}, [])
    return (
        <div className="list-group">
                {
                    loading ?
                        <li key={0} className="list-group-item">
                            Loading...
                        </li> :
                        pokemon.map(mon => {
                            return <div className="list-group-item" key={mon.id}>
                                <div className="row">
                                    <div className="col-10">
                                        <Link to={`/pokemon/${mon.name}`}>{mon.name}</Link>
                                    </div>
                                    <div className="col-2">
                                        <img src={mon.sprite} alt={mon.name}></img>
                                    </div>
                                </div>
                            </div>
                        })
                }
        </div>
    );
}

export default Search;