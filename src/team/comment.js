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
        <div className={"row"}>
            <div className={"col"}>
                <Link to={`/profile/${comment.user._id}`} className={"text-primary"}>
                    {comment.user.username}
                </Link>
                <br/>
                {comment.comment}
            </div>
            <div className={"col mt-1"}>
                {currentUser._id === comment.user._id ?
                    <button className={"btn btn-danger float-end"}
                            onClick={() => handleDeleteBtn(comment._id)}>
                        Delete Comment
                    </button>
                    :
                    ''}
            </div>
        </div>
    )
}

export default Comment