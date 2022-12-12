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
                            <li>{pokemon}</li>
                            {currentUser._id === uid ?
                                <button onClick={() => handleRemoveBtn(pokemon)}>Remove</button>
                                :
                                ''
                            }
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