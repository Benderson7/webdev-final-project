import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getTeamByUserIDThunk, removePokemonFromTeamThunk} from "../services/teams-thunks";
import Comments from "./comments";
import TeamStat from "./team-stat";
import "./index.css"
import {Link} from "react-router-dom";

const Team = ({uid}) => {
    const {team} = useSelector((state) => state.team)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getTeamByUserIDThunk(uid))}, [uid])

    const handleRemoveBtn = (pid) => {
        dispatch(removePokemonFromTeamThunk({uid, pid}))
    }

    return (
        <div className={"wd-bg-white container"}>
            <h3>Team:</h3>
            <div className={"row"}>
                {team && team.pokemons.map(
                    (pokemon) => {
                        return (
                            <div className={"col-4 mb-3"}>
                                <div className={"text-center"}>
                                    <img width={100} src={pokemon.sprite}/>
                                    <br/>
                                    <Link to={`/details/${pokemon.id}`}>{pokemon.name}</Link>
                                    <br/>
                                    {currentUser._id === uid ?
                                        <button onClick={() => handleRemoveBtn(pokemon.id)} className={"btn btn-danger"}>
                                            Remove
                                        </button>
                                        :
                                        ''
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {team && <TeamStat tid={team._id}/>}
            {team && <Comments tid={team._id}/>}
        </div>
    )
}

export default Team