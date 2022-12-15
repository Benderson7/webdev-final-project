import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getTeamByUserIDThunk, postTeamCommentThunk, removePokemonFromTeamThunk} from "../services/teams-thunks";
import Comments from "./comments";
import TeamStat from "./team-stat";
import "./index.css"
import {Link} from "react-router-dom";

const Team = ({uid}) => {
    const {team} = useSelector((state) => state.team)
    const {currentUser} = useSelector((state) => state.users)
    const [post, setPost] = useState("");
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getTeamByUserIDThunk(uid))}, [uid])

    const handleRemoveBtn = (pid) => {
        dispatch(removePokemonFromTeamThunk({uid, pid}))
    }
    const handlePostComment = (tid, comment) => {
        if (currentUser._id === undefined) {
            alert('Must login to post a comment.')
        }
        else {
            dispatch(postTeamCommentThunk({user: currentUser._id, team: tid, comment: comment}))
            setPost('')
        }
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
            <br/>
            <form className={"form-group"}>
                <div className={"row"}>
                    <div className={"col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-9 col-8"}>
                        <textarea className={"form-control width-"}
                                  onChange={(e) => setPost(e.target.value)}
                                  value={post}
                                  placeholder={"Post your comment"}
                        />
                    </div>
                    <div className={"col-1"}>
                        <button className={"btn btn-success pe-3"}
                                onClick={() => handlePostComment(team._id, post)}>
                            Post Comment
                        </button>
                    </div>
                </div>
            </form>
            <br/>
        </div>
    )
}

export default Team