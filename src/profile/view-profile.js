import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {getProfileThunk} from "../services/users-thunks";
import {getTeamByUserIDThunk} from "../services/teams-thunks";

const ViewProfile = () => {
    const {uid} = useParams();
    const {profile} = useSelector((state) => state.users)
    const {team} = useSelector((state) => state.team)
    const dispatch = useDispatch()
    // eslint-disable-next-line
    useEffect(() => {dispatch(getProfileThunk(uid))}, [])
    // eslint-disable-next-line
    useEffect(() => {dispatch(getTeamByUserIDThunk(uid))}, [])
    const pokemons = []
    if (team.pokemons) {
        for (let i = 0; i < team.pokemons.length; i++) {
            pokemons.push(<li>{team.pokemons[i]}</li>);
        }
    }
    return(
        <>
            <h1>You are currently viewing: {profile.username}</h1>
            <ul>
                <li>{profile.firstName}</li>
                <li>{profile.lastName}</li>
                <li>{profile.email}</li>
                <li>{profile.password}</li>
            </ul>
            <h2>This is your team(currently dummy pokemon id's as placeholders)</h2>
            {pokemons}
        </>
    )
}

export default ViewProfile;