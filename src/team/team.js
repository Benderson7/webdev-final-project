import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getTeamByUserIDThunk, removePokemonFromTeamThunk} from "../services/teams-thunks";
import Comments from "./comments";
import TeamStat from "./team-stat";

const Team = ({uid}) => {
    const {team} = useSelector((state) => state.team)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getTeamByUserIDThunk(uid))}, [uid])

    const handleRemoveBtn = (pid) => {
        dispatch(removePokemonFromTeamThunk({uid, pid}))
    }

    return (
        <>
            <h3>Team Composition(ids):</h3>
            {team && team.pokemons.map(
                (pokemon) => {
                    return (
                        <>
                            <li>
                                <img width={100} src={pokemon.sprite}/>
                                {pokemon.name}
                                {currentUser._id === uid ?
                                    <button onClick={() => handleRemoveBtn(pokemon)}>Remove</button>
                                    :
                                    ''
                                }
                            </li>
                        </>
                    )
                }
            )}
            {team && <Comments tid={team._id}/>}
            {team && <TeamStat tid={team._id}/>}
        </>
    )
}

export default Team