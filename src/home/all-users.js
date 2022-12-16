import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteUserThunk, getAllUsersThunk} from "../services/users-thunks";
import {Link} from "react-router-dom";

const AllUsers = () => {
    const {allUsers, currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getAllUsersThunk())}, [])

    const handleDeleteBtn = (uid) => {
        dispatch(deleteUserThunk(uid))
    }

    return (
        <div className={'list-group'}>
            {allUsers.map((user) => {
                return (
                    <div className={'list-group-item'} key={user._id}>
                        <Link to={`/profile/${user._id}`} className={"text-primary"}>
                            {user.username}
                        </Link>
                        ({user.role})

                        {currentUser._id !== user._id &&
                            <button
                                    className={'float-end btn btn-danger'}
                                    onClick={() => handleDeleteBtn(user._id)}>
                                Delete
                            </button>
                        }
                    </div>
                )})
            }
        </div>
    )
}

export default AllUsers