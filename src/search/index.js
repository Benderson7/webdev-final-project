import pokemon from "../MockData/MockSearchData.json"
import {Link} from "react-router-dom";

function Search() {
    return (
        <div className="list-group">
                {
                    pokemon.results.map(mon => {
                        const path = mon.url.split("/");
                        const id = path[path.length - 2];
                        return <div className="list-group-item" key={id}>
                            <div className="row">
                                <div className="col-10">
                                    <Link to={`/details/${id}`}>{mon.name}</Link>
                                </div>
                                <div className="col-2">
                                    <img src={mon.sprites.front_default} alt={mon.name}></img>
                                </div>
                            </div>
                        </div>
                    })
                }
        </div>
    );
}

export default Search;