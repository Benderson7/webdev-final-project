import {logoutThunk} from "../services/users-thunks";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
    }
    const handleEditBtn = () => {
        navigate('/edit-profile');
    }

    return(
        <>
            <h1>Profile</h1>
            {
                currentUser &&
                <>
                    <h2>Welcome new user: {currentUser.username}</h2>
                    <button onClick={handleLogoutBtn}>
                        Logout
                    </button>
                    <button onClick={handleEditBtn}>
                        Edit Profile
                    </button>
                    <br/>
                    {currentUser.firstName}
                    <br/>
                    {currentUser.lastName}
                    <br/>
                    {currentUser.email}
                    <br/>
                    {currentUser.username}
                </>
            }

        </>
    )
}

export default Profile