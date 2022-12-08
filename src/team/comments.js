import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getTeamCommentsByTeamIDThunk} from "../services/teams-thunks";
import Comment from "./comment";

const Comments = ({tid}) => {
    const {comments} = useSelector((state) => state.team)
    const dispatch = useDispatch()
    // eslint-disable-next-line
    useEffect(() => {dispatch(getTeamCommentsByTeamIDThunk(tid))}, [tid])
    return (
        <>
            <h4>Comments on Team</h4>
            {comments.map((comment) => <Comment comment={comment}/>)}
        </>
    )
}

export default Comments