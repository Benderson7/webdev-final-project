import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getTeamByUserIDThunk} from "../services/teams-thunks";
import Comments from "./comments";
import TeamStat from "./team-stat";

const Team = ({uid}) => {
    const {team} = useSelector((state) => state.team)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getTeamByUserIDThunk(uid))}, [uid])

    return (
        <>
            <h3>Team Composition(ids):</h3>
            {team.pokemons !== undefined && team.pokemons.map((pokemon) => (<li>{pokemon}</li>))}
            {team._id !== undefined && <Comments tid={team._id}/>}
            {team._id !== undefined && <TeamStat tid={team._id}/>}
        </>
    )
}

export default Team