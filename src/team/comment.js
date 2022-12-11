import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteCommentOnTeamThunk} from "../services/teams-thunks";

const Comment = ({comment}) => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()

    const handleDeleteBtn = (cid) => {
        dispatch(deleteCommentOnTeamThunk(cid))
    }
    return (
        <li>
            {comment.comment} by <Link to={`/profile/${comment.user._id}`}>{comment.user.username}</Link>
            <button onClick={() => handleDeleteBtn(comment._id)}>Delete Comment</button>
        </li>
    )
}

export default Comment