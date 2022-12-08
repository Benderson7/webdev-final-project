import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCommentsByUserThunk} from "../services/users-thunks";
import {Link} from "react-router-dom";

const UserComments = ({uid}) => {
    const {comments} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getCommentsByUserThunk(uid))}, [uid])

    return (
        <>
            <h2>Your Comments</h2>
            {comments.map((comment) => <li>{comment.comment} on <Link to={comment.team.user._id}>{comment.team.user.username}'s team</Link></li>)}
        </>
    )
}

export default UserComments