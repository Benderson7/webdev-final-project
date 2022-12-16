import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCommentsByUserThunk} from "../services/users-thunks";
import {Link} from "react-router-dom";
import "./index.css"

const UserComments = ({uid}) => {
    const {comments} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getCommentsByUserThunk(uid))}, [uid])

    return (
        <div className={"container wd-bg-white mb-3"}>
            <h2>User's comments</h2>
            <ul className={"list-group"}>
                {comments.map((comment) =>
                    <li className={"list-group-item"}>
                        On&nbsp;
                        <Link to={`/profile/${comment.team.user._id}`} className={"text-primary"}>
                            {comment.team.user.username}
                        </Link>
                        's team
                        <br/>
                        {comment.comment}
                    </li>)}
            </ul>
        </div>
    )
}

export default UserComments