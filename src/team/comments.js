import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getTeamCommentsByTeamIDThunk} from "../services/teams-thunks";
import Comment from "./comment";

const Comments = ({tid}) => {
    const {comments} = useSelector((state) => state.team)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getTeamCommentsByTeamIDThunk(tid))}, [tid])
    console.log(tid)
    return (
        <div>
            <h6>Comments on Team</h6>
            <ul className={"list-group"}>
                {comments.map((comment) => <li className={"list-group-item"}><Comment comment={comment}/></li>)}
            </ul>
        </div>
    )
}

export default Comments