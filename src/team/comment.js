import {Link, useParams} from "react-router-dom";

const Comment = ({comment}) => {
    return (
        <li>
            {comment.comment} by <Link to={`/profile/${comment.user._id}`}>{comment.user.username}</Link>
        </li>
    )
}

export default Comment