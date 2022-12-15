import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCommentsByUserThunk} from "../services/users-thunks";
import {Link} from "react-router-dom";
import "./index.css"

const UserComments = ({uid}) => {
    const {comments, currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getCommentsByUserThunk(uid))}, [uid])

    return (
        <div className={"container wd-bg-white mt-3"}>
            <h2>User's comments</h2>
            <ul className={"list-group"}>
                {comments.map((comment) =>
                    <li className={"list-group-item"}>

                        <span class="text-muted"> On </span> <Link to={`/profile/${comment.team.user._id}`}><span class="text-muted"> {comment.team.user.username}'s team </span>

                        <br/>
                        {comment.comment} </Link>
                    </li>)}
            </ul>
            <br/>
        </div>
    )
}

export default UserComments