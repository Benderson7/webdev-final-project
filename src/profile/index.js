import {logoutThunk} from "../services/users-thunks";
import {useDispatch, useSelector} from "react-redux";

const Profile = () => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
    }

    return(
        <>
            <h1>Profile</h1>
            {
                currentUser &&
                <h2>Welcome new user: {currentUser.username}</h2>
            }
            <button onClick={handleLogoutBtn}>
                Logout
            </button>
        </>
    )
}

export default Profile