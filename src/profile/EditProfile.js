import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCurrentUserThunk, updateThunk} from "../services/users-thunks";
import {useNavigate} from "react-router-dom";

const EditProfile = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [updateUser, setUpdateUser] = useState({})
    useEffect(() => setUpdateUser(currentUser), [currentUser])

    const dispatch = useDispatch()
    const navigation = useNavigate()
    const handleUpdateBtn = () => {
        dispatch(updateThunk(updateUser))
        navigation("/profile")
    }
    const handleBackBtn = () => {
        navigation("/profile")
    }

    return(
        <>
            {updateUser.username !== undefined &&
            <div>

                <label htmlFor={"usernameInput"} >Username: </label>
                <input
                    id={"usernameInput"}
                    onChange={(e) => setUpdateUser({...updateUser, username: e.target.value})}
                    placeholder={"username"}
                    value={updateUser.username}/>
                <br/>
                <label htmlFor={"passwordInput"}>Password: </label>
                <input
                    id={"passwordInput"}
                    onChange={(e) => setUpdateUser({...updateUser, password: e.target.value})}
                    type={"password"}
                    placeholder={"password"}
                    value={updateUser.password}/>
                <br/>
                <label htmlFor={"emailInput"}>Email: </label>
                <input
                    id={"emailInput"}
                    onChange={(e) => setUpdateUser({...updateUser, email: e.target.value})}
                    type={"email"}
                    placeholder={"email"}
                    value={updateUser.email}/>
                <br/>
                <label htmlFor={"firstnameInput"}>First Name: </label>
                <input
                    id={"firstnameInput"}
                    onChange={(e) => setUpdateUser({...updateUser, firstName: e.target.value})}
                    placeholder={"First Name"}
                    value={updateUser.firstName}/>
                <br/>
                <label htmlFor={"lastnameInput"}>Password: </label>
                <input
                    id={"lastnameInput"}
                    onChange={(e) => setUpdateUser({...updateUser, lastName: e.target.value})}
                    placeholder={"Last Name"}
                    value={updateUser.lastName}/>
                <br/>
                <button onClick={handleUpdateBtn}>Save</button>
                <br/>
                <button onClick={handleBackBtn}>
                    Go Back to Profile
                </button>

            </div>
            }
        </>
    )
}

export default EditProfile;